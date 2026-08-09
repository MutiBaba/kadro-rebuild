// ==========================================================================
// ÇOK OYUNCULU LOBİ + HOST-YETKİLİ SENKRONİZASYON (Firebase Realtime Database)
// ==========================================================================
// Mimari: Lobiyi kuran kişi ("host") oyunun gerçek simülasyonunu kendi
// tarayıcısında çalıştırır (game.js'teki fonksiyonların TAMAMI aynen
// kullanılır). Diğer oyuncular sadece durumu (state) izler ve kendi
// kararlarını bir "aksiyon" olarak host'a gönderir; host bu aksiyonu
// işleyip güncel durumu herkese yayınlar (publish).

const firebaseConfig = {
  projectId: "rebuild11-mp",
  appId: "1:361891506286:web:fc9073083cf3160ebd5e7f",
  databaseURL: "https://rebuild11-mp-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyBrtKz5wJFM1FxRyO9epLx9SwHZMT0zMu4",
  authDomain: "rebuild11-mp.firebaseapp.com"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const MP_CLUBS = [
  { id: "fenerbahce", name: "Fenerbahçe", emoji: "🟡🔵" },
  { id: "besiktas", name: "Beşiktaş", emoji: "⚫⚪" },
  { id: "galatasaray", name: "Galatasaray", emoji: "🔴🟡" }
];

let myClientId = sessionStorage.getItem("rb11_clientId");
if (!myClientId) {
  myClientId = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  sessionStorage.setItem("rb11_clientId", myClientId);
}

let roomCode = null;
let isHostFlag = false;
let isPublicRoom = false;
// Açık lobi listesinden katılma isteği uçuştayken ikinci bir tıklamayı engeller.
let lobbyJoinInFlight = false;
let myTeamClubId = null;
let myName = "Oyuncu";
let lobbyPlayersRef = null;
let lobbyStatusListenerOff = null;
let gameStateListenerOff = null;
let actionsListenerOff = null;
let lastAppliedAt = 0;
let mpTransferSnapshot = null; // { messages, botsAccepted, botsTotal } — host yayınlar, uzak istemci okur

const MP = {
  isMultiplayer() { return !!roomCode; },
  isHost() { return isHostFlag; },
  humanClubIds: new Set(),
  controlledClubIds: new Set(),
  sendAction(type, payload) {
    if (!roomCode) return;
    db.ref(`rooms/${roomCode}/actions`).push({ type, payload, from: myClientId, ts: Date.now() });
  },
  publishState() {
    if (!roomCode) return;
    db.ref(`rooms/${roomCode}/game`).set(serializeGameState());
    db.ref(`rooms/${roomCode}/lastUpdate`).set(Date.now());
  }
};
window.MP = MP;

/* ---------------- SERIALIZE / DESERIALIZE ---------------- */

function serializeGameState() {
  const state = {
    phase: mpPhase,
    slotIndex,
    currentSeason,
    usedWorldNames: Array.from(usedWorldNames),
    careerPoints,
    // seasonHistory'deki table[].p canlı bir participant REFERANSI (kopya değil) — sonradan o
    // katılımcı üzerinde yapılan mutasyonlar (ör. henüz karar verilmemiş bir altyapı teklifi)
    // eski sezon kayıtlarına da yansır. JSON round-trip ile gerçek bir anlık görüntüye çeviriyoruz;
    // bu ayrıca undefined değerleri de temizler (Firebase .set() undefined'ı kabul etmiyor).
    seasonHistory: JSON.parse(JSON.stringify(seasonHistory)),
    positionBonusBreakdown,
    participants: participants.map(p => JSON.parse(JSON.stringify(p)))
  };
  state.round = round
    ? { slot: round.slot, category: round.category, sharedCandidates: round.sharedCandidates, decisions: round.decisions }
    : null;
  state.auction = auction
    ? {
        candidate: auction.candidate,
        currentBid: auction.currentBid,
        bidders: auction.bidders.map(b => ({ clubId: b.participant.clubId, maxWillingness: b.maxWillingness })),
        groupParticipantClubIds: auction.groupParticipants.map(p => p.clubId)
      }
    : null;
  state.transferSnapshot = mpTransferSnapshot;
  state.draftModeActive = draftModeActive;
  state.draftState = draftState ? JSON.parse(JSON.stringify(draftState)) : null;
  return state;
}

function applyRemoteState(data) {
  if (!data) return;
  participants = data.participants;
  // Firebase boş dizileri sessizce düşürüyor: draft modunda ayrı bir transfer penceresi
  // açılmadığı için pendingOffers her katılımcıda boş kalır ve misafirde undefined gelirdi.
  for (const p of participants) p.pendingOffers = p.pendingOffers || [];
  human = participants.find(p => p.clubId === myTeamClubId) || participants[0];
  const draftTitleTeamsEl = document.getElementById("draftTitleTeams");
  if (draftTitleTeamsEl) {
    const opponentLabel = participants.filter(p => p !== human).map(p => p.name).join(" & ");
    draftTitleTeamsEl.textContent = `${human.name} vs ${opponentLabel}`;
  }
  slotIndex = data.slotIndex;
  currentSeason = data.currentSeason;
  usedWorldNames = new Set(data.usedWorldNames || []);
  careerPoints = data.careerPoints || {};
  seasonHistory = data.seasonHistory || [];
  positionBonusBreakdown = data.positionBonusBreakdown || [];
  mpPhase = data.phase;
  // Firebase Realtime Database boş dizileri ([]) yazma/okuma sırasında sessizce düşürüyor —
  // hiç bot olmayan (tamamı gerçek oyunculardan oluşan) bir lobide transferLogMessages boş
  // kalabiliyor, bu da messages alanının guest tarafında undefined gelip .map() çağrısında
  // çökmesine yol açıyordu. Her alt alanı ayrı ayrı varsayılan değere sabitliyoruz.
  mpTransferSnapshot = data.transferSnapshot
    ? {
        messages: data.transferSnapshot.messages || [],
        botsAccepted: data.transferSnapshot.botsAccepted || 0,
        botsTotal: data.transferSnapshot.botsTotal || 0
      }
    : null;

  round = data.round
    ? { slot: data.round.slot, category: data.round.category, sharedCandidates: data.round.sharedCandidates, decisions: data.round.decisions || {} }
    : null;

  auction = data.auction
    ? {
        candidate: data.auction.candidate,
        currentBid: data.auction.currentBid,
        bidders: data.auction.bidders.map(b => ({
          participant: participants.find(p => p.clubId === b.clubId),
          maxWillingness: b.maxWillingness
        })),
        groupParticipants: data.auction.groupParticipantClubIds.map(id => participants.find(p => p.clubId === id))
      }
    : null;

  // Draft state'inde de boş dizi/nesne alanları (log, pool, sellDone, replaceCandidates…) ve
  // 0 / "" değerleri Firebase tarafından sessizce düşürülebilir — hepsini tek tek varsayılana
  // sabitliyoruz, yoksa guest tarafında undefined okunup ekran çökebiliyor.
  draftModeActive = !!data.draftModeActive;
  const ds = data.draftState;
  draftState = ds
    ? {
        slots: ds.slots || [],
        slotIdx: ds.slotIdx || 0,
        stage: ds.stage,
        order: ds.order || [],
        turnIdx: ds.turnIdx || 0,
        turnCounter: ds.turnCounter || 0,
        pool: (ds.pool || []).map(e => ({
          slot: e.slot,
          ownerClubId: e.ownerClubId,
          player: e.player,
          status: e.status || "open",
          takenByClubId: e.takenByClubId || ""
        })),
        sellDone: ds.sellDone || {},
        sellChoice: ds.sellChoice || {},
        replaceRound: ds.replaceRound || 0,
        replaceTargets: ds.replaceTargets || [],
        replaceCandidates: ds.replaceCandidates || {},
        replacePicks: ds.replacePicks || {},
        reservedNames: ds.reservedNames || [],
        log: ds.log || [],
        seq: ds.seq || 0
      }
    : null;

  const onDraftScreen = mpPhase === "draft" || mpPhase === "draftSell" || mpPhase === "draftReplace";
  rebuildScreen.classList.toggle("hidden", !(mpPhase === "decide" || mpPhase === "auction"));
  draftScreen.classList.toggle("hidden", !onDraftScreen);

  if (onDraftScreen) {
    if (draftState) renderDraftScreen();
  } else if (mpPhase === "auction" && auction) {
    renderAuctionView();
  } else if (mpPhase === "decide" && round) {
    renderPitch();
    renderBotStatus();
    renderCurrentClientView();
  } else if (mpPhase === "seasonTable") {
    const last = seasonHistory[seasonHistory.length - 1];
    if (last) renderSeasonTableScreen(last.table, last.scorers);
  } else if (mpPhase === "transfer" && mpTransferSnapshot) {
    renderTransferScreen(mpTransferSnapshot.messages, mpTransferSnapshot.botsAccepted, mpTransferSnapshot.botsTotal);
  } else if (mpPhase === "result") {
    showResults();
  }
}

/* ---------------- HOST: ACTION QUEUE PROCESSING ---------------- */

function startHostActionListener() {
  actionsListenerOff = db.ref(`rooms/${roomCode}/actions`);
  actionsListenerOff.on("child_added", (snap) => {
    const action = snap.val();
    const key = snap.key;
    db.ref(`rooms/${roomCode}/actions/${key}`).remove();
    if (!action || !action.payload || !action.payload.clubId) return;
    const participant = participants.find(p => p.clubId === action.payload.clubId);
    if (!participant) return;
    if (action.type === "decision") {
      submitDecision(participant, action.payload.decision);
    } else if (action.type === "raise") {
      if (auction) raiseBid(participant);
    } else if (action.type === "concede") {
      if (auction) concedeBid(participant);
    } else if (action.type === "offerDecision") {
      resolveOfferDecision(participant, action.payload.idx, action.payload.accept);
      // resolveOfferDecision sadece state'i günceller/yayınlar — host'un KENDİ ekranındaki
      // "Sonraki Sezona Geç" satırı, bu misafirin kararı setin TAMAMLAYAN son karar olsa bile
      // host bizzat bir şeye tıklamadığı sürece hiç yenilenmiyordu. Burada elle tetikliyoruz.
      if (mpPhase === "transfer") updateTransferContinueVisibility();
    } else if (action.type === "draftPick") {
      if (draftState && draftState.stage === "pick") {
        applyDraftPick(participant, action.payload.target === "-" ? "" : action.payload.target);
        draftStep();
      }
    } else if (action.type === "draftSell") {
      if (draftState && draftState.stage === "sell") {
        // "Satmıyorum" kararı Firebase'de boş metin olarak kaybolmasın diye "-" ile taşınıyor.
        applyDraftSellDecision(participant, action.payload.slot === "-" ? "" : action.payload.slot);
        renderDraftScreen();
        mpPublish();
        maybeFinishDraftSellStage();
      }
    } else if (action.type === "draftReplace") {
      if (draftState && draftState.stage === "replace") {
        applyDraftReplacement(participant, action.payload.slot, action.payload.idx);
        renderDraftScreen();
        mpPublish();
        maybeFinishDraftReplaceStage();
      }
    } else if (action.type === "academyDecision") {
      resolveAcademyOfferDecision(participant, action.payload.accept);
      if (mpPhase === "transfer") updateTransferContinueVisibility();
    }
  });
}

/* ---------------- REMOTE: GAME STATE LISTENER ---------------- */

function startRemoteGameListener() {
  gameStateListenerOff = db.ref(`rooms/${roomCode}/game`);
  gameStateListenerOff.on("value", (snap) => {
    if (isHostFlag) return; // host kendi state'ini zaten yerelde render ediyor
    const data = snap.val();
    if (data) applyRemoteState(data);
  });
}

/* ---------------- LOBBY ---------------- */

const lobbyContent = document.getElementById("lobbyContent");
const modeBotBtn = document.getElementById("modeBotBtn");
const modeLobbyBtn = document.getElementById("modeLobbyBtn");
const landingScreenEl = document.getElementById("landingScreen");
const lobbyScreenEl = document.getElementById("lobbyScreen");

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

document.querySelectorAll(".back-link").forEach(btn => {
  btn.addEventListener("click", () => {
    leaveLobbyCleanup();
    showScreen(btn.dataset.backTo);
  });
});

modeBotBtn.addEventListener("click", () => showScreen("setupScreen"));
modeLobbyBtn.addEventListener("click", () => {
  showScreen("lobbyScreen");
  renderLobbyChoice();
});

function leaveLobbyCleanup() {
  if (lobbyStatusListenerOff) { lobbyStatusListenerOff.off(); lobbyStatusListenerOff = null; }
  if (roomCode && !isHostFlag) {
    db.ref(`rooms/${roomCode}/players/${myClientId}`).remove();
  }
  // Host lobiden çıkarsa oda da açık lobi listesinden düşer, yoksa kimsenin katılamayacağı
  // ölü bir kayıt listede kalırdı.
  if (roomCode && isHostFlag && isPublicRoom) {
    publicRoomIndexRef(roomCode).remove();
  }
  roomCode = null;
  isHostFlag = false;
  isPublicRoom = false;
  lobbyJoinInFlight = false;
  myTeamClubId = null;
}

function randomRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function renderLobbyChoice() {
  lobbyContent.innerHTML = `
    <h1>Arkadaşlarla <span class="accent">Oyna</span></h1>
    <p class="subtitle">Herkese açık bir lobi kur ve listeden gelenleri bekle, özel bir lobi kurup kodunu sadece arkadaşlarına gönder, ya da açık lobi listesinden birine katıl.</p>
    <div class="setup-row">
      <label>Adın</label>
      <input type="text" id="lobbyNameInput" class="lobby-input" placeholder="Adını yaz" maxlength="16" value="${myName}">
    </div>
    <button id="lobbyPublicCreateBtn" class="primary-btn">🌍 Lobi Kur</button>
    <button id="lobbyCreateBtn" class="primary-btn secondary-btn-style">🔒 Özel Lobi Kur</button>
    <button id="lobbyBrowseBtn" class="primary-btn secondary-btn-style">📋 Lobiye Katıl</button>
    <div class="setup-row">
      <label>Kod ile katıl (özel lobi)</label>
      <input type="text" id="lobbyCodeInput" class="lobby-input" placeholder="ör. AB3XZ" maxlength="5" style="text-transform:uppercase">
    </div>
    <button id="lobbyJoinBtn" class="primary-btn secondary-btn-style">🔑 Kodla Katıl</button>
    <p class="hint" id="lobbyErrorHint"></p>
  `;
  document.getElementById("lobbyPublicCreateBtn").addEventListener("click", () => renderLobbyCreateConfig(true));
  document.getElementById("lobbyCreateBtn").addEventListener("click", () => renderLobbyCreateConfig(false));
  document.getElementById("lobbyBrowseBtn").addEventListener("click", renderPublicLobbyList);
  document.getElementById("lobbyJoinBtn").addEventListener("click", () => {
    myName = document.getElementById("lobbyNameInput").value.trim() || "Oyuncu";
    const code = document.getElementById("lobbyCodeInput").value.trim().toUpperCase();
    if (!code) return;
    joinRoom(code);
  });
}

// Açık lobi listesi: /publicRooms hafif bir dizindir (oda verisinin kendisi rooms/ altında
// kalır). Sadece açık, başlamamış ve dolmamış odalar listelenir; özel lobiler bu dizine hiç
// yazılmadığı için burada asla görünmez.
function renderPublicLobbyList() {
  myName = document.getElementById("lobbyNameInput")?.value.trim() || myName || "Oyuncu";
  lobbyContent.innerHTML = `
    <h1>Açık <span class="accent">Lobiler</span></h1>
    <p class="subtitle">Listeden bir lobiye kodsuz katılabilirsin.</p>
    <div class="lobby-player-list" id="publicRoomList"><p class="hint">Yükleniyor…</p></div>
    <button id="publicRefreshBtn" class="primary-btn secondary-btn-style">🔄 Yenile</button>
    <div class="setup-row">
      <label>Kod ile katıl (özel lobi)</label>
      <input type="text" id="lobbyCodeInput" class="lobby-input" placeholder="ör. AB3XZ" maxlength="5" style="text-transform:uppercase">
    </div>
    <button id="lobbyJoinBtn" class="primary-btn secondary-btn-style">🔑 Kodla Katıl</button>
    <p class="hint" id="lobbyErrorHint"></p>
  `;
  document.getElementById("publicRefreshBtn").addEventListener("click", loadPublicRooms);
  document.getElementById("lobbyJoinBtn").addEventListener("click", () => {
    const code = document.getElementById("lobbyCodeInput").value.trim().toUpperCase();
    if (!code) return;
    joinRoom(code);
  });
  loadPublicRooms();
}

function loadPublicRooms() {
  const listEl = document.getElementById("publicRoomList");
  db.ref("publicRooms").get().then(snap => {
    if (!document.getElementById("publicRoomList")) return;
    const rooms = Object.entries(snap.val() || {})
      .map(([code, r]) => ({ code, ...r }))
      .filter(r => (r.status || "lobby") === "lobby" && (r.players || 1) < (r.maxPlayers || 2))
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    if (rooms.length === 0) {
      listEl.innerHTML = `<p class="hint">Şu anda açık lobi yok. Kendin bir tane kurabilirsin.</p>`;
      return;
    }
    listEl.innerHTML = rooms.map(r => `<div class="lobby-player-row public-room-row">
      <span>👑 ${r.hostName} — <b>${r.players || 1}/${r.maxPlayers}</b> kişi${r.takenTeams ? ` · ${r.takenTeams}` : ""}</span>
      <button class="option-btn public-room-join" data-code="${r.code}">Katıl</button>
    </div>`).join("");
    listEl.querySelectorAll(".public-room-join").forEach(btn => {
      btn.addEventListener("click", () => {
        // Katılma isteği uçuştayken ikinci bir tıklama iki ayrı odaya yazmasın.
        if (lobbyJoinInFlight) return;
        lobbyJoinInFlight = true;
        listEl.querySelectorAll(".public-room-join").forEach(b => (b.disabled = true));
        joinRoom(btn.dataset.code);
      });
    });
  });
}

function publicRoomIndexRef(code) {
  return db.ref(`publicRooms/${code}`);
}

function renderLobbyCreateConfig(isPublic) {
  myName = document.getElementById("lobbyNameInput")?.value.trim() || myName || "Oyuncu";
  lobbyContent.innerHTML = `
    <h1>${isPublic ? "Açık" : "Özel"} Lobi <span class="accent">Kur</span></h1>
    <p class="subtitle">${isPublic ? "Bu lobi herkese açık listede görünür, isteyen kodsuz katılabilir." : "Bu lobi listede görünmez; sadece kodunu verdiğin kişiler katılabilir."}</p>
    <div class="setup-row">
      <label>Kaç kişi oynayacak?</label>
      <div class="option-group" id="lobbySizeGroup">
        <button class="option-btn active" data-size="2">2 Kişi</button>
        <button class="option-btn" data-size="3">3 Kişi</button>
      </div>
      <p class="hint">2 kişilikte seçilmeyen 3. takımı bot yönetir. 3 kişilikte tüm takımlar gerçek oyunculara ait olmalı.</p>
    </div>
    <div class="setup-row">
      <label>Oyun Modu</label>
      <div class="option-group" id="lobbyModeGroup">
        <button class="option-btn active" data-mode="rebuild">🔁 Kadro Rebuild (€120M)</button>
        <button class="option-btn" data-mode="empty">🌱 Sıfırdan Kadro (€250M)</button>
      </div>
    </div>
    <div class="setup-row">
      <label>Draft Modu</label>
      <div class="option-group" id="lobbyDraftGroup">
        <button class="option-btn active" data-draft="off">Kapalı</button>
        <button class="option-btn" data-draft="on">🎯 Draft Modu Açık</button>
      </div>
      <p class="hint">Her sezon sonunda 3 mevki draft'a çıkar; herkesin o mevkideki oyuncusu ortak havuza girer ve ters lig sırasıyla herkes bedelsiz bir rakip oyuncusu seçer. Ardından boşalan her mevkiye 5 adaydan birini imzalar, kadrondan istediğin bir oyuncuyu satıp yerine yine 5 adaydan birini alırsın.</p>
    </div>
    <button id="lobbyCreateConfirmBtn" class="primary-btn">Lobiyi Oluştur</button>
  `;
  let size = 2;
  let emptyStart = false;
  let draftMode = false;
  document.getElementById("lobbyDraftGroup").addEventListener("click", (e) => {
    const btn = e.target.closest(".option-btn");
    if (!btn) return;
    document.querySelectorAll("#lobbyDraftGroup .option-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    draftMode = btn.dataset.draft === "on";
  });
  document.getElementById("lobbySizeGroup").addEventListener("click", (e) => {
    const btn = e.target.closest(".option-btn");
    if (!btn) return;
    document.querySelectorAll("#lobbySizeGroup .option-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    size = parseInt(btn.dataset.size, 10);
  });
  document.getElementById("lobbyModeGroup").addEventListener("click", (e) => {
    const btn = e.target.closest(".option-btn");
    if (!btn) return;
    document.querySelectorAll("#lobbyModeGroup .option-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    emptyStart = btn.dataset.mode === "empty";
  });
  document.getElementById("lobbyCreateConfirmBtn").addEventListener("click", () => createRoom(size, emptyStart, draftMode, isPublic));
}

function createRoom(maxPlayers, emptyStart, draftMode, isPublic) {
  const code = randomRoomCode();
  roomCode = code;
  isHostFlag = true;
  isPublicRoom = !!isPublic;
  const roomRef = db.ref(`rooms/${code}`);
  roomRef.set({
    createdAt: Date.now(),
    maxPlayers,
    emptyStart: !!emptyStart,
    draftMode: !!draftMode,
    public: !!isPublic,
    hostId: myClientId,
    status: "lobby",
    players: {
      [myClientId]: { name: myName, team: null, joinedAt: Date.now() }
    }
  }).then(() => {
    if (isPublicRoom) {
      publicRoomIndexRef(code).set({
        hostName: myName,
        maxPlayers,
        players: 1,
        status: "lobby",
        emptyStart: !!emptyStart,
        draftMode: !!draftMode,
        takenTeams: "",
        createdAt: Date.now()
      });
      // Host sekmesi kapanırsa dizin kaydı ortada kalmasın.
      publicRoomIndexRef(code).onDisconnect().remove();
    }
    listenToLobby();
  });
}

function joinRoom(code) {
  const roomRef = db.ref(`rooms/${code}`);
  roomRef.get().then(snap => {
    const data = snap.val();
    const errEl = document.getElementById("lobbyErrorHint");
    const fail = (msg) => {
      lobbyJoinInFlight = false;
      if (errEl) errEl.textContent = msg;
      // Listeden gelen katılım başarısızsa liste yeniden yüklenip güncel hale gelsin.
      if (document.getElementById("publicRoomList")) loadPublicRooms();
    };
    if (!data) { fail("Bu kodda bir lobi bulunamadı."); return; }
    if (data.status !== "lobby") { fail("Bu lobi zaten başlamış."); return; }
    const playerCount = Object.keys(data.players || {}).length;
    if (playerCount >= data.maxPlayers) { fail("Lobi dolu."); return; }
    roomCode = code;
    isHostFlag = data.hostId === myClientId;
    isPublicRoom = !!data.public;
    lobbyJoinInFlight = false;
    db.ref(`rooms/${code}/players/${myClientId}`).set({ name: myName, team: null, joinedAt: Date.now() }).then(() => {
      listenToLobby();
    });
  });
}

function listenToLobby() {
  lobbyStatusListenerOff = db.ref(`rooms/${roomCode}`);
  lobbyStatusListenerOff.on("value", (snap) => {
    const data = snap.val();
    if (!data) return;
    if (data.status === "lobby") {
      renderLobbyRoom(data);
    } else if (data.status === "playing") {
      launchMultiplayerGame(data);
    }
  });
}

function renderLobbyRoom(data) {
  const players = Object.entries(data.players || {}).map(([clientId, p]) => ({ clientId, ...p }));
  const takenTeams = new Set(players.map(p => p.team).filter(Boolean));
  const me = players.find(p => p.clientId === myClientId);

  const teamButtons = MP_CLUBS.map(club => {
    const takenBy = players.find(p => p.team === club.id);
    const disabled = takenBy && takenBy.clientId !== myClientId;
    const mine = takenBy && takenBy.clientId === myClientId;
    return `<button class="option-btn team-pick-btn${mine ? " active" : ""}" data-club="${club.id}" ${disabled ? "disabled" : ""}>
      ${club.emoji} ${club.name}${takenBy ? ` — ${takenBy.name}${mine ? " (sen)" : ""}` : ""}
    </button>`;
  }).join("");

  const playerRows = players.map(p => {
    const club = MP_CLUBS.find(c => c.id === p.team);
    return `<div class="lobby-player-row">
      <span>${p.clientId === data.hostId ? "👑 " : ""}${p.name}${p.clientId === myClientId ? " (sen)" : ""}</span>
      <span class="lobby-player-team">${club ? club.emoji + " " + club.name : "Takım seçmedi…"}</span>
    </div>`;
  }).join("");

  const readyCount = players.filter(p => p.team).length;
  const allDistinct = new Set(players.map(p => p.team).filter(Boolean)).size === players.length;
  const canStart = isHostFlag && players.length === data.maxPlayers && readyCount === players.length && allDistinct;

  lobbyContent.innerHTML = `
    <h1>Lobi <span class="accent">${roomCode}</span></h1>
    <p class="subtitle">Bu kodu arkadaşlarına gönder: <b>${roomCode}</b> — (${players.length}/${data.maxPlayers} kişi) · ${data.emptyStart ? "🌱 Sıfırdan Kadro (€250M)" : "🔁 Kadro Rebuild (€120M)"}${data.draftMode ? " · 🎯 Draft Modu" : ""} · ${data.public ? "🌍 Açık Lobi" : "🔒 Özel Lobi"}</p>
    <div class="setup-row">
      <label>Takımını Seç</label>
      <div class="option-group lobby-team-group">${teamButtons}</div>
    </div>
    <div class="setup-row">
      <label>Oyuncular</label>
      <div class="lobby-player-list">${playerRows}</div>
    </div>
    ${isHostFlag
      ? `<button id="lobbyStartBtn" class="primary-btn" ${canStart ? "" : "disabled"}>${canStart ? "Oyunu Başlat" : "Herkes takım seçsin…"}</button>`
      : `<p class="hint">Host'un oyunu başlatması bekleniyor…</p>`}
  `;

  lobbyContent.querySelectorAll(".team-pick-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      myTeamClubId = btn.dataset.club;
      db.ref(`rooms/${roomCode}/players/${myClientId}/team`).set(myTeamClubId);
    });
  });

  // Açık lobi dizinini oda değiştikçe güncel tut — dolan lobi listeden kendiliğinden düşer.
  if (isHostFlag && isPublicRoom) {
    publicRoomIndexRef(roomCode).update({
      players: players.length,
      takenTeams: MP_CLUBS.filter(c => takenTeams.has(c.id)).map(c => c.name).join(", ")
    });
  }

  if (isHostFlag) {
    const startBtnEl = document.getElementById("lobbyStartBtn");
    if (startBtnEl) startBtnEl.addEventListener("click", () => startMultiplayerGame(data));
  }
}

function startMultiplayerGame(data) {
  // Oyun başlayınca oda artık katılıma kapalıdır; açık lobi listesinden düşer.
  if (isPublicRoom) publicRoomIndexRef(roomCode).remove();
  const players = Object.entries(data.players || {}).map(([clientId, p]) => ({ clientId, ...p }));
  const takenTeams = new Set(players.map(p => p.team));
  const defs = MP_CLUBS.map(club => ({ clubId: club.id, isBot: !takenTeams.has(club.id) }));
  const humanClubIds = players.map(p => p.team);
  db.ref(`rooms/${roomCode}`).update({
    status: "playing",
    defs,
    humanClubIds,
    emptyStart: !!data.emptyStart,
    draftMode: !!data.draftMode
  });
}

function launchMultiplayerGame(data) {
  if (lobbyStatusListenerOff) { lobbyStatusListenerOff.off(); lobbyStatusListenerOff = null; }

  MP.humanClubIds = new Set(data.humanClubIds || []);
  MP.controlledClubIds = new Set([myTeamClubId]);

  setupScreen.classList.add("hidden");
  lobbyScreenEl.classList.add("hidden");
  landingScreenEl.classList.add("hidden");

  if (isHostFlag) {
    startHostActionListener();
    startRebuild(data.defs, myTeamClubId, !!data.emptyStart, null, null, !!data.draftMode);
  } else {
    startRemoteGameListener();
    // İlk state gelene kadar basit bir bekleme ekranı göster
    rebuildScreen.classList.remove("hidden");
    progressLine.textContent = "Oyun başlıyor…";
  }
}
