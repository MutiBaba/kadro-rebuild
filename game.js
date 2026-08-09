const SLOTS = ["gk", "rb", "cb1", "cb2", "lb", "dm1", "dm2", "rw", "cam", "lw", "st"];
const SLOT_LABELS = {
  gk: "Kaleci", rb: "Sağ Bek", cb1: "Stoper", cb2: "Stoper", lb: "Sol Bek",
  dm1: "Defansif Orta Saha", dm2: "Defansif Orta Saha", rw: "Sağ Kanat",
  cam: "Ofansif Orta Saha (10)", lw: "Sol Kanat", st: "Forvet"
};
const SLOT_SHORT = {
  gk: "KL", rb: "SĞB", cb1: "STP", cb2: "STP", lb: "SLB",
  dm1: "DOS", dm2: "DOS", rw: "SĞK", cam: "10", lw: "SLK", st: "FRV"
};
const SLOT_CATEGORY = {
  gk: "gk", rb: "rb", cb1: "cb", cb2: "cb", lb: "lb",
  dm1: "dm", dm2: "dm", rw: "rw", cam: "cam", lw: "lw", st: "st"
};
const PITCH_COORDS = {
  st:  { top: "8%",  left: "50%" },
  lw:  { top: "26%", left: "18%" },
  cam: { top: "28%", left: "50%" },
  rw:  { top: "26%", left: "82%" },
  dm1: { top: "48%", left: "34%" },
  dm2: { top: "48%", left: "66%" },
  lb:  { top: "70%", left: "14%" },
  cb1: { top: "70%", left: "38%" },
  cb2: { top: "70%", left: "62%" },
  rb:  { top: "70%", left: "86%" },
  gk:  { top: "90%", left: "50%" }
};
const START_BUDGET = 120_000_000;
const EMPTY_START_BUDGET = 250_000_000;
const BID_INCREMENT = 5_000_000;
// Botlara karşı modda Süper Lig'deki 18 takımın TAMAMI seçilebilir. Büyük 3'ten biri seçilirse
// 3 takımlı klasik format (bkz. pickOpponentsFor); diğer 15 takımdan biri seçilirse rakipler
// her zaman o üç büyük takım olur (4 takımlı format).
const ALL_CLUB_IDS = PLAYERS_DATA.clubs.map(c => c.id);
// Sıfırdan Kadro modunda kimse gerçek bir kulübü "devralmıyor" — herkes aynı şartlarda,
// isimsiz bir kadroyla başlıyor. Botlara bu havuzdan rastgele bir isim atanır.
const FANTASY_CLUB_NAMES = [
  "Anadolu Yıldız", "Kartallar SK", "Sahil Fırtınası", "Demir Kale SK", "Gökkuşağı SK",
  "Rüzgar Gücü", "Aslanlar Birliği", "Kızıl Şimşek", "Mavi Dalga SK", "Toprak Yıldızı",
  "Yeşil Vadi SK", "Gece Yıldızları", "Altın Boynuz SK", "Ateş Kartalı", "Kuzey Rüzgarı",
  "Efsane SK", "Zafer Yıldızı", "Bozkır Kartalları", "Deniz Feneri SK", "Ejderha Gücü"
];
function pickRandomFantasyName(takenNames) {
  const pool = FANTASY_CLUB_NAMES.filter(n => !takenNames.has(n));
  const name = pool.length > 0
    ? pool[Math.floor(Math.random() * pool.length)]
    : `Rastgele Takım #${Math.floor(100 + Math.random() * 900)}`;
  takenNames.add(name);
  return name;
}
const PARTICIPANT_DEFS = [
  { clubId: "fenerbahce", isBot: false },
  { clubId: "besiktas", isBot: true },
  { clubId: "galatasaray", isBot: true }
];
const BIG_CLUBS = [
  "Real Madrid", "Manchester City", "Bayern Münih", "Paris Saint-Germain", "Liverpool",
  "Barcelona", "Chelsea", "Juventus", "Arsenal", "Inter", "Manchester United", "Atletico Madrid"
];
let MAX_SEASONS = 5; // Botlara karşı modda 5'in katları halinde (max 30) seçilebilir.
const LEAGUE_PRIZES = [60_000_000, 40_000_000, 20_000_000];
const LEAGUE_CAREER_POINTS = [3, 2, 1];
const TOP_SCORER_PRIZE = 10_000_000;
const TOP_SCORER_CAREER_POINT = 1;
const POSITION_UPGRADE_CAREER_POINT = 1;

// Her sezon sonunda altyapıdan çıkan genç oyuncu için isim havuzu — bir isim bir kez kullanılır.
const ACADEMY_NAME_POOL = [
  "Burak Öztürk", "Şevki Kıvanç Özcan", "Furkan Mehmetcik",
  "Emirhan Kaya", "Berat Yavaş", "Doğukan Çetiner", "Yiğit Aslanoğlu", "Kerem Balcı",
  "Alperen Doğan", "Efe Karadeniz", "Baran Uçar", "Mert Solmaz", "Ege Tuncer",
  "Arda Kesici", "Utku Şener", "Poyraz İnan", "Tolga Bayrak", "Onur Kement",
  "Bartu Sezgin", "Çınar Akalın", "Görkem Tarhan", "Deniz Özkaya", "Umut Bilgiç",
  "Atakan Yörük", "Kaan Selvi", "Metehan Turgut", "Alp Eren Coşkun", "Barış Demirtaş",
  "Enes Karaman", "Yusuf Ziya Erden", "Taha Girgin", "Ozan Bektaş", "Emir Sağlam",
  "Rüzgar Aytaç", "Tuna Kayacan", "Batuhan Erol", "Bora Yücel", "Kağan Törenli",
  "Sarp Değirmenci", "Cem Kutluay", "İlkay Bostancı", "Rıdvan Şener", "Doruk Alkan",
  "Mira Han Aksu", "Kayra Baysal", "Berke Onaran", "Volkan Peker", "Sinan Ergüven",
  "Halil Kocabaş", "Recep Tuğrul", "Emrecan Uğurlu", "Serhat Batur", "Toprak Yalman",
  "Ozan Kaçar", "Alihan Tezcan", "Boran Şevik", "Erdem Kutay", "Timur Aygün"
];
let usedAcademyNames = new Set();

// ---- Draft Modu ----
const DRAFT_SLOT_COUNT = 3;
let draftModeActive = false;
let draftState = null;
// Guest'in draft ekranında uçuşta olan tek aksiyonu (havuz seçimi/pas ya da yerine imza) —
// bkz. guestDecisionInFlight; aynı yarış koşulunu draft ekranında da engeller.
let guestDraftInFlight = null;

let participants = [];
let isEmptyStartMode = false;
let human = null;
let slotIndex = 0;
let currentSeason = 1;
let usedWorldNames = new Set();
let carryLog = [];
let round = null;
let auction = null;
let careerPoints = {};
let seasonHistory = [];
let startingSquadRatings = {};
let positionBonusAwarded = false;
let positionBonusBreakdown = [];

// ---- Multiplayer hook points (no-ops in single-player mode) ----
// window.MP, when present, provides: isMultiplayer(), isHost(), controlledClubIds (Set),
// sendAction(type, payload), publishState(), onWaitingFor(clubIds) -> bool (renders a wait screen)
function mpActive() { return typeof MP !== "undefined" && MP.isMultiplayer(); }
function mpIsHost() { return mpActive() && MP.isHost(); }
function mpControlsClub(clubId) { return mpActive() ? MP.controlledClubIds.has(clubId) : clubId === human.clubId; }
function mpPublish() { if (mpActive() && MP.isHost()) MP.publishState(); }
function requiredHumanClubIds() { return mpActive() ? MP.humanClubIds : new Set([human.clubId]); }
let mpPhase = "decide";
// Guest henüz kendi tut/sat kararını (aday seçimiyle) tamamlamadan host başka bir oyuncunun
// kararıyla state yayınlarsa, guest'in yarım kalan aday seçim ekranı ezilmesin diye bekletiyoruz.
let localChoicePendingKey = null;
function currentRoundKey() { return round ? `${currentSeason}:${round.slot}` : null; }
// Guest transfer ekranında bir karar gönderdiğinde, host'un onu işleyip yayınlaması bir ağ
// gidiş-dönüşü alır. Bu süre içinde guest BAŞKA bir karta tıklayabilirse, host'un henüz o ikinci
// kararı görmeden yaptığı bir yayın guest'in local iyimser güncellemesini SİLER (bütün state
// bloğu halinde üzerine yazılıyor) — bir teklif hiç karara bağlanmamış gibi kalabiliyordu.
// Bu yüzden guest tarafında aynı anda sadece TEK bir karar "uçuşta" olabilir; sadece O KARARI
// onaylayan bir state gelene kadar diğer tüm kartlar kilitlenir. { type: "offer", idx } ya da
// { type: "academy" } şeklinde HANGİ karar bekleniyor onu tutar — 3+ gerçek oyunculu bir odada
// BAŞKA bir oyuncunun kararının tetiklediği alakasız bir yayın bu kilidi asla erken açmamalı.
let guestDecisionInFlight = null;

// Taze bir state geldiğinde (renderTransferScreen her çağrıldığında) kilidi SADECE kendi
// bekleyen kararımız gerçekten onaylanmışsa açar — başka bir oyuncunun kararının tetiklediği
// alakasız bir yayınla erken açılmasını önler.
function refreshGuestDecisionLock() {
  if (!guestDecisionInFlight) return;
  if (guestDecisionInFlight.type === "academy") {
    if (!human.academyOffer || human.academyOffer.decided) guestDecisionInFlight = null;
  } else if (guestDecisionInFlight.type === "offer") {
    const offer = human.pendingOffers[guestDecisionInFlight.idx];
    if (!offer || offer.decided) guestDecisionInFlight = null;
  }
}

const setupScreen = document.getElementById("setupScreen");
const rebuildScreen = document.getElementById("rebuildScreen");
const resultScreen = document.getElementById("resultScreen");
const transferScreen = document.getElementById("transferScreen");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const budgetPill = document.getElementById("budgetPill");
const progressLine = document.getElementById("progressLine");
const slotLabel = document.getElementById("slotLabel");
const currentPlayerCard = document.getElementById("currentPlayerCard");
const keepBtn = document.getElementById("keepBtn");
const sellBtn = document.getElementById("sellBtn");
const decideView = document.getElementById("decideView");
const chooseView = document.getElementById("chooseView");
const sellBanner = document.getElementById("sellBanner");
const candidateGrid = document.getElementById("candidateGrid");
const pitchEl = document.getElementById("pitch");
const botStatusList = document.getElementById("botStatusList");
const mobileRatingsStrip = document.getElementById("mobileRatingsStrip");
const roundLogEl = document.getElementById("roundLog");
const resultBody = document.getElementById("resultBody");
const resultTitle = document.getElementById("resultTitle");
const auctionView = document.getElementById("auctionView");
const auctionDesc = document.getElementById("auctionDesc");
const auctionCandidate = document.getElementById("auctionCandidate");
const auctionBidders = document.getElementById("auctionBidders");
const auctionCurrentBid = document.getElementById("auctionCurrentBid");
const raiseBidBtn = document.getElementById("raiseBidBtn");
const concedeBidBtn = document.getElementById("concedeBidBtn");
const transferSeasonNum = document.getElementById("transferSeasonNum");
const transferOffers = document.getElementById("transferOffers");
const botTransferLog = document.getElementById("botTransferLog");
const transferContinueRow = document.getElementById("transferContinueRow");
const continueSeasonBtn = document.getElementById("continueSeasonBtn");
const endCareerBtn = document.getElementById("endCareerBtn");
const seasonTableScreen = document.getElementById("seasonTableScreen");
const tableSeasonNum = document.getElementById("tableSeasonNum");
const leagueTableBody = document.getElementById("leagueTableBody");
const scorerList = document.getElementById("scorerList");
const seasonTableContinueBtn = document.getElementById("seasonTableContinueBtn");
const draftScreen = document.getElementById("draftScreen");
const draftSeasonNum = document.getElementById("draftSeasonNum");
const draftBudgetPill = document.getElementById("draftBudgetPill");
const draftSlotsRow = document.getElementById("draftSlotsRow");
const draftPickPanel = document.getElementById("draftPickPanel");
const draftStageTitle = document.getElementById("draftStageTitle");
const draftPoolGrid = document.getElementById("draftPoolGrid");
const draftTurnRow = document.getElementById("draftTurnRow");
const draftTurnHint = document.getElementById("draftTurnHint");
const draftPassBtn = document.getElementById("draftPassBtn");
const draftReplacePanel = document.getElementById("draftReplacePanel");
const draftReplaceTitle = document.getElementById("draftReplaceTitle");
const draftReplaceHint = document.getElementById("draftReplaceHint");
const draftReplaceGrid = document.getElementById("draftReplaceGrid");
const draftLog = document.getElementById("draftLog");

/* ---------------- BOT MODE SETUP SCREEN: takım + mod seçimi ---------------- */
const TRADITIONAL_BIG3 = new Set(["fenerbahce", "besiktas", "galatasaray"]);
let botSetupClubId = "fenerbahce";
let botSetupEmptyStart = false;
let botSetupSeasonCount = 5; // 5'in katları, max 30 (bkz. #botSeasonCountGroup)
let botSetupDraftMode = false;

// Fenerbahçe/Beşiktaş/Galatasaray dışında bir takım seçilirse format 4 takıma çıkar (sen + 3
// bot) — havuzda daha fazla takım rekabet ettiği için tek bir 3'lü ortak aday listesi sık sık
// çakışıp oyunun tıkanmasına yol açabiliyordu; 4. bir "Ucuz Transfer" segmenti bu yüzden devreye
// giriyor (bkz. buildSlotCandidates), böylece her turda katılımcı sayısı kadar seçenek olur.
function opponentCountFor(clubId) {
  return TRADITIONAL_BIG3.has(clubId) ? 2 : 3;
}

// Büyük 3'ten biri seçilirse klasik rekabet korunur (Fenerbahçe/Beşiktaş/Galatasaray hep
// birbirine karşı, 3 takımlı). Diğer 15 takımdan biri seçilirse rakip HER ZAMAN o üç büyük
// takımın kendisi olur (rastgele küçük takımlar değil) — 4 takımlı format, sen + üç büyükler.
function pickOpponentsFor(clubId) {
  if (TRADITIONAL_BIG3.has(clubId)) {
    return [...TRADITIONAL_BIG3].filter(id => id !== clubId);
  }
  return [...TRADITIONAL_BIG3];
}

let botSetupOpponentIds = pickOpponentsFor(botSetupClubId);

function clubAvgRating(clubId) {
  const club = PLAYERS_DATA.clubs.find(c => c.id === clubId);
  const ratings = Object.values(club.xi).map(p => p.rating);
  return (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
}

// Wikipedia'dan hotlink edilen kulüp logolarının çoğu (18 kulübün 14'ü) gerçekte var olmayan
// dosya yollarına işaret ediyor ve kırık çıkıyor. Ağa bağımlı olmayan, HER ZAMAN çalışan basit
// bir renkli rozet üretiyoruz — güvenilirlik, gerçek logo peşinde koşmaktan daha değerli.
function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
function clubBadgeHTML(clubId, name, sizeClass) {
  const hue = hashStr(clubId) % 360;
  const initials = name.replace(/[^\p{L}\s]/gu, "").split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return `<span class="club-badge ${sizeClass}" style="background: hsl(${hue}, 55%, 32%); color: hsl(${hue}, 70%, 88%);">${initials}</span>`;
}

function renderTeamPickGrid() {
  const grid = document.getElementById("botTeamPickGroup");
  if (!grid) return;
  grid.innerHTML = PLAYERS_DATA.clubs.map(c => `
    <button class="team-grid-btn${c.id === botSetupClubId ? " active" : ""}" data-club="${c.id}">
      ${clubBadgeHTML(c.id, c.name, "team-grid-logo")}
      <span>${c.name}</span>
      <span class="team-grid-rating">${clubAvgRating(c.id)}</span>
    </button>
  `).join("");
  grid.querySelectorAll(".team-grid-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.club === botSetupClubId) return;
      botSetupClubId = btn.dataset.club;
      // Rakip sayısı değişebilir (büyük 3 <-> diğerleri) ve eski rakiplerden biri yeni
      // takımın kendisi olabilir — bu yüzden varsayılan bir öneriyle sıfırdan başlıyoruz,
      // kullanıcı aşağıdaki rakip ızgarasından istediği gibi değiştirebilir.
      botSetupOpponentIds = pickOpponentsFor(botSetupClubId);
      grid.querySelectorAll(".team-grid-btn").forEach(b => b.classList.toggle("active", b.dataset.club === botSetupClubId));
      renderOpponentPickGrid();
      renderBotSetupText();
    });
  });
}

function renderOpponentPickGrid() {
  const grid = document.getElementById("opponentPickGrid");
  if (!grid) return;
  const maxCount = opponentCountFor(botSetupClubId);
  grid.innerHTML = PLAYERS_DATA.clubs.filter(c => c.id !== botSetupClubId).map(c => `
    <button class="team-grid-btn${botSetupOpponentIds.includes(c.id) ? " active opponent-pick" : ""}" data-club="${c.id}">
      ${clubBadgeHTML(c.id, c.name, "team-grid-logo")}
      <span>${c.name}</span>
      <span class="team-grid-rating">${clubAvgRating(c.id)}</span>
    </button>
  `).join("");
  grid.querySelectorAll(".team-grid-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.club;
      if (botSetupOpponentIds.includes(id)) {
        botSetupOpponentIds = botSetupOpponentIds.filter(x => x !== id);
      } else if (botSetupOpponentIds.length < maxCount) {
        botSetupOpponentIds.push(id);
      } else {
        return; // zaten dolu — önce birini kaldırmalı
      }
      renderOpponentPickGrid();
      renderBotSetupText();
    });
  });
  const label = document.getElementById("opponentPickLabel");
  if (label) label.textContent = `Rakiplerini Seç (${botSetupOpponentIds.length}/${maxCount})`;
  const hint = document.getElementById("opponentPickHint");
  if (hint) {
    hint.textContent = botSetupOpponentIds.length < maxCount
      ? `${maxCount - botSetupOpponentIds.length} rakip daha seç.`
      : "Rakiplerin hazır — istersen birini kaldırıp başkasını seçebilirsin.";
  }
}

function renderBotSetupText() {
  const club = PLAYERS_DATA.clubs.find(c => c.id === botSetupClubId);
  const teamNameEl = document.getElementById("setupTeamName");
  if (teamNameEl) teamNameEl.textContent = club.name;
  const maxCount = opponentCountFor(botSetupClubId);
  const isFourTeam = maxCount === 3;
  const complete = botSetupOpponentIds.length === maxCount;
  const subtitleEl = document.getElementById("setupSubtitle");
  if (subtitleEl) {
    const otherNames = botSetupOpponentIds.map(id => PLAYERS_DATA.clubs.find(c => c.id === id).name);
    const opponentText = complete
      ? (isFourTeam
          ? `karşında <b>${otherNames[0]}</b>, <b>${otherNames[1]}</b> ve <b>${otherNames[2]}</b> botları var (4 takımlı format)`
          : `karşında <b>${otherNames[0]}</b> ve <b>${otherNames[1]}</b> botları var`)
      : `henüz ${maxCount - botSetupOpponentIds.length} rakip daha seçmen gerekiyor`;
    subtitleEl.innerHTML = `
      Sen ${club.name}'i yönetiyorsun, ${opponentText}.
      Herkesin ${botSetupEmptyStart ? "250M€" : "120M€"} bütçesi var${botSetupEmptyStart ? " ve kadronu sıfırdan kuruyorsun" : " ve kendi gerçek 11'i var"}.
      Mevki mevki oyuncunu <b>tut</b> ya da <b>sat</b> (satış kesindir, vazgeçemezsin) — sana ve botlara her turda
      <b>${isFourTeam ? "aynı 4 alternatif" : "aynı 3 alternatif"}</b> sunulur. Aynı oyuncuyu birden fazla taraf isterse
      <b>açık artırma</b> başlar; kaybedersen kalan adaylardan birini almak zorundasın. Amaç: EA FC ratingine göre
      en güçlü 11'i kurmak. Her sezon sonunda büyük Avrupa kulüpleri her takımdan <b>3 oyuncuya</b>, yaşına ve
      potansiyeline göre teklif gönderir. Kariyer <b>${botSetupSeasonCount} sezon</b> sürer.
    `;
  }
  const budgetEl = document.getElementById("setupBudgetAmount");
  if (budgetEl) budgetEl.textContent = formatValue(botSetupEmptyStart ? EMPTY_START_BUDGET : START_BUDGET);
  const opponentsRow = document.getElementById("setupOpponentsRow");
  if (opponentsRow) {
    opponentsRow.innerHTML = botSetupOpponentIds.map(id => {
      const c = PLAYERS_DATA.clubs.find(cc => cc.id === id);
      return `<div class="opponent-chip">${clubBadgeHTML(c.id, c.name, "opponent-chip-logo")}${c.name} 🤖</div>`;
    }).join("");
  }
  const modeHintEl = document.getElementById("botModeHint");
  if (modeHintEl) {
    modeHintEl.textContent = botSetupEmptyStart
      ? "Herkes boş bir kadroyla başlar, sezon 1'de tüm 11 mevkiyi sıfırdan doldurursun. Botlar da rastgele bir isimle aynı şartlarda yarışır."
      : "Mevcut kadronla başlarsın, mevki mevki tut/sat kararı verirsin.";
  }
  document.getElementById("teamNameRow")?.classList.toggle("hidden", !botSetupEmptyStart);
  startBtn.disabled = !complete;
  startBtn.textContent = complete ? "Rebuild'e Başla" : `Önce ${maxCount - botSetupOpponentIds.length} rakip seç`;
}

document.getElementById("botModePickGroup")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".option-btn");
  if (!btn) return;
  document.querySelectorAll("#botModePickGroup .option-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  botSetupEmptyStart = btn.dataset.mode === "empty";
  renderBotSetupText();
});

document.getElementById("botDraftModeGroup")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".option-btn");
  if (!btn) return;
  document.querySelectorAll("#botDraftModeGroup .option-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  botSetupDraftMode = btn.dataset.draft === "on";
});

document.getElementById("botSeasonCountGroup")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".option-btn");
  if (!btn) return;
  document.querySelectorAll("#botSeasonCountGroup .option-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  botSetupSeasonCount = parseInt(btn.dataset.seasons, 10);
  renderBotSetupText();
});

// Mobilde takım ismi kutusuna dokununca klavye kart içini aşağı kaydırıyor; klavye
// kapandığında (blur) kartı başa sarıyoruz ki bütçe/Başlat gibi üstteki içerik kaybolmasın.
document.getElementById("teamNameInput")?.addEventListener("blur", () => {
  document.querySelector("#setupScreen .setup-card")?.scrollTo({ top: 0, behavior: "smooth" });
});

startBtn.addEventListener("click", () => {
  if (botSetupOpponentIds.length !== opponentCountFor(botSetupClubId)) return;
  const defs = [
    { clubId: botSetupClubId, isBot: false },
    ...botSetupOpponentIds.map(id => ({ clubId: id, isBot: true }))
  ];
  const teamNameInput = document.getElementById("teamNameInput");
  const customTeamName = botSetupEmptyStart ? (teamNameInput?.value.trim() || null) : null;
  startRebuild(defs, botSetupClubId, botSetupEmptyStart, customTeamName, botSetupSeasonCount, botSetupDraftMode);
});
renderTeamPickGrid();
renderOpponentPickGrid();
renderBotSetupText();
restartBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  renderBotSetupText();
});
keepBtn.addEventListener("click", onKeep);
sellBtn.addEventListener("click", onSell);
raiseBidBtn.addEventListener("click", humanRaiseBid);
concedeBidBtn.addEventListener("click", humanConcede);
// Çok oyunculuda oyunu ilerletme yetkisi sadece host'ta — misafirler bu ekranları
// senkronize state üzerinden salt-okunur izler.
function hostOnlyGuard(fn) {
  return () => {
    if (mpActive() && !mpIsHost()) return;
    fn();
  };
}
continueSeasonBtn.addEventListener("click", hostOnlyGuard(onContinueSeason));
endCareerBtn.addEventListener("click", hostOnlyGuard(() => showResults(false)));
seasonTableContinueBtn.addEventListener("click", hostOnlyGuard(() => {
  seasonTableScreen.classList.add("hidden");
  if (draftModeActive) startDraftPhase();
  else runTransferWindow();
}));
draftPassBtn.addEventListener("click", () => submitDraftPick(""));
function formatValue(v) {
  return "€" + (v / 1_000_000).toFixed(1).replace(".", ",") + "M";
}

// Gerçek transfer piyasasına (Transfermarkt tarzı) yakın bir eğri: 73 reytingde ~€3M,
// 90 reytingde ~€170M (Mbappé/Haaland tayfı) civarına oturacak şekilde kalibre edilmiştir.
// Oyun içinde her yerde (dünya piyasası, bedava transfer, altyapı) TEK bu fonksiyon kullanılır.
function ratingToMarketValue(rating, age) {
  let base = 3_000_000 * Math.pow(1.268, rating - 73);
  const ageFactor =
    age === undefined || age === null ? 1 :
    age <= 20 ? 1.25 :
    age <= 23 ? 1.1 :
    age <= 29 ? 1.0 :
    age <= 32 ? 0.65 :
    age <= 35 ? 0.4 : 0.25;
  base *= ageFactor;
  return Math.max(300_000, Math.min(220_000_000, Math.round(base / 250000) * 250000));
}

function prospectiveBudget(participant, slot) {
  const current = participant.squad[slot];
  return participant.budget + (current.vacant ? 0 : current.value);
}

function logMessage(msg) {
  carryLog.push(msg);
}

/* ---------------- SETUP ---------------- */

function makeVacantSlot() {
  return { name: "Boş Mevki", value: 0, rating: 0, age: 0, nationality: "—", club: "", origin: "vacant", vacant: true };
}

function startRebuild(customDefs, myClubId, emptyStart, customTeamName, seasonCount, draftMode) {
  const defs = customDefs || PARTICIPANT_DEFS;
  isEmptyStartMode = !!emptyStart;
  MAX_SEASONS = seasonCount || 5;
  draftModeActive = !!draftMode;
  draftState = null;
  guestDraftInFlight = null;
  // Sıfırdan Kadro modunda kimse gerçek kulüp kimliğini taşımaz — herkes aynı şartlarda
  // yarışır. İnsan oyuncu kendi takımına isim verebilir, botlara rastgele bir isim atanır.
  const takenFantasyNames = new Set();
  if (isEmptyStartMode && customTeamName) takenFantasyNames.add(customTeamName);
  participants = defs.map(def => {
    const club = PLAYERS_DATA.clubs.find(c => c.id === def.clubId);
    const squad = {};
    for (const slot of SLOTS) {
      if (isEmptyStartMode) {
        squad[slot] = makeVacantSlot();
      } else {
        const p = club.xi[slot];
        squad[slot] = { name: p.name, value: p.value, rating: p.rating, age: p.age, nationality: p.nationality, club: club.name, origin: "kept" };
      }
    }
    let displayName = club.name;
    if (isEmptyStartMode) {
      displayName = (def.clubId === myClubId && customTeamName)
        ? customTeamName
        : pickRandomFantasyName(takenFantasyNames);
    }
    return { clubId: def.clubId, name: displayName, logo: club.logo, isBot: def.isBot, budget: isEmptyStartMode ? EMPTY_START_BUDGET : START_BUDGET, squad };
  });
  human = participants.find(p => p.clubId === (myClubId || defs[0].clubId)) || participants[0];
  slotIndex = 0;
  currentSeason = 1;
  // Dünya piyasası / bedava transfer havuzlarının, herhangi bir takımın başlangıç kadrosundaki
  // gerçek bir oyuncuyla aynı isimde birini "yeni" diye teklif etmesini önlemek için, kariyer
  // başında TÜM başlangıç kadrolarının isimlerini kullanılmış say.
  usedWorldNames = new Set();
  for (const p of participants) {
    for (const slot of SLOTS) {
      if (!p.squad[slot].vacant) usedWorldNames.add(p.squad[slot].name);
    }
  }
  usedAcademyNames = new Set();
  carryLog = [];
  careerPoints = {};
  for (const p of participants) careerPoints[p.clubId] = 0;
  seasonHistory = [];
  startingSquadRatings = {};
  for (const p of participants) {
    startingSquadRatings[p.clubId] = {};
    for (const slot of SLOTS) startingSquadRatings[p.clubId][slot] = p.squad[slot].rating;
  }
  positionBonusAwarded = false;

  setupScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  transferScreen.classList.add("hidden");
  seasonTableScreen.classList.add("hidden");
  draftScreen.classList.add("hidden");
  rebuildScreen.classList.remove("hidden");

  const draftTitleTeamsEl = document.getElementById("draftTitleTeams");
  if (draftTitleTeamsEl) {
    const opponentLabel = participants.filter(p => p !== human).map(p => p.name).join(" & ");
    draftTitleTeamsEl.textContent = `${human.name} vs ${opponentLabel}`;
  }

  renderPitch();
  renderBotStatus();
  startSlotRound();
}

/* ---------------- ROUND FLOW ---------------- */

function startSlotRound() {
  if (slotIndex >= SLOTS.length) {
    simulateSeasonAndShowTable();
    return;
  }
  const slot = SLOTS[slotIndex];
  const category = SLOT_CATEGORY[slot];
  // Bu tur için herkese (sana ve botlara) gösterilecek ORTAK 3 aday — kimse başka havuzdan seçmiyor.
  round = { slot, category, sharedCandidates: buildSlotCandidates(category), decisions: {} };
  mpPhase = "decide";
  mpPublish();
  renderCurrentClientView();
}

// Bu istemcinin ne göstermesi gerektiğine karar verir: kendi mevkisi boşsa zorunlu transfer,
// kendi kararını zaten verdiyse "bekleniyor" ekranı, aksi halde normal tut/sat ekranı.
function renderCurrentClientView() {
  const slot = round.slot;
  if (localChoicePendingKey !== null && localChoicePendingKey !== currentRoundKey()) {
    localChoicePendingKey = null; // yeni tur başladı, eski bekleyen seçim artık geçersiz
  }
  if (localChoicePendingKey === currentRoundKey()) {
    return; // guest hâlâ kendi aday seçim ekranında — ezme
  }
  if (round.decisions && (human.clubId in round.decisions)) {
    renderWaitingForOthers();
  } else if (human.squad[slot].vacant) {
    renderForcedFill();
  } else {
    renderDecideView();
  }
}

function renderWaitingForOthers() {
  decideView.classList.remove("hidden");
  chooseView.classList.add("hidden");
  auctionView.classList.add("hidden");
  renderRoundLog();
  progressLine.textContent = `Sezon ${currentSeason} · Mevki ${slotIndex + 1} / ${SLOTS.length}`;
  slotLabel.textContent = "Diğer oyuncular bekleniyor…";
  currentPlayerCard.innerHTML = `
    <div class="cp-name">⏳ Kararını verdin</div>
    <div class="cp-meta">Diğer oyuncuların ve botların bu mevki için kararını vermesi bekleniyor…</div>
  `;
  document.querySelector("#decideView .decision-buttons")?.classList.add("hidden");
  updateBudgetPill();
  renderPitch();
  renderBotStatus();
}

function updateBudgetPill() {
  budgetPill.textContent = "Bütçe: " + formatValue(human.budget);
}

function renderRoundLog() {
  if (carryLog.length === 0) {
    roundLogEl.classList.add("hidden");
    roundLogEl.innerHTML = "";
    return;
  }
  roundLogEl.classList.remove("hidden");
  roundLogEl.innerHTML = carryLog.map(m => `<div>${m}</div>`).join("");
  carryLog = [];
}

function renderDecideView() {
  decideView.classList.remove("hidden");
  chooseView.classList.add("hidden");
  auctionView.classList.add("hidden");
  document.querySelector("#decideView .decision-buttons")?.classList.remove("hidden");

  renderRoundLog();

  const slot = round.slot;
  const player = human.squad[slot];
  progressLine.textContent = `Sezon ${currentSeason} · Mevki ${slotIndex + 1} / ${SLOTS.length}`;
  slotLabel.textContent = SLOT_LABELS[slot];
  currentPlayerCard.innerHTML = `
    <div class="rating-badge">${player.rating}</div>
    <div class="player-photo big">${pixelAvatarSVG(player.name)}</div>
    <div class="cp-name">${player.name}</div>
    <div class="cp-meta">${player.age} yaş · ${player.nationality} · ${player.club}</div>
    <div class="cp-value">${formatValue(player.value)}</div>
  `;
  updateBudgetPill();
  renderPitch();
  renderBotStatus();
}

// Bu istemcinin ("human") kararını gönderir: çok oyunculuysa ve host değilse ağa yollar
// ve bekleme ekranını gösterir; aksi halde (tek oyunculu ya da host'un kendi kararı) direkt işler.
function submitLocalDecision(decision) {
  localChoicePendingKey = null;
  if (mpActive() && !mpIsHost()) {
    MP.sendAction("decision", { clubId: human.clubId, decision });
    renderWaitingForOthers();
    return;
  }
  submitDecision(human, decision);
}

function submitDecision(participant, decision) {
  round.decisions[participant.clubId] = decision;
  tryResolveRound();
}

function tryResolveRound() {
  for (const clubId of requiredHumanClubIds()) {
    if (!(clubId in round.decisions)) {
      mpPublish();
      if (!mpActive() || mpIsHost()) renderCurrentClientView();
      return; // hâlâ birilerini bekliyoruz
    }
  }
  resolveRoundNow();
}

function onKeep() {
  submitLocalDecision({ sold: false });
}

function onSell() {
  const slot = round.slot;
  const player = human.squad[slot];
  const budget = prospectiveBudget(human, slot);
  const banner = `${player.name} satılırsa (+${formatValue(player.value)}) bütçen ${formatValue(budget)} olur. Kimi hedefleyeceksin? (Satış kesindir, vazgeçemezsin)`;
  localChoicePendingKey = currentRoundKey();
  renderCandidateSelection(slot, budget, banner, round.sharedCandidates, (cand) => {
    submitLocalDecision({ sold: true, target: cand });
  });
}

function renderForcedFill() {
  const slot = round.slot;
  const budget = prospectiveBudget(human, slot);
  const banner = isEmptyStartMode && currentSeason === 1
    ? `${SLOT_LABELS[slot]} mevkisi için kadronu sıfırdan kuruyorsun — birini transfer etmen gerekiyor. Bütçen: ${formatValue(budget)}`
    : `${SLOT_LABELS[slot]} mevkin sezon başında boş kaldı (oyuncu transfer oldu) — birini transfer etmen gerekiyor. Bütçen: ${formatValue(budget)}`;
  progressLine.textContent = `Sezon ${currentSeason} · Mevki ${slotIndex + 1} / ${SLOTS.length}`;
  updateBudgetPill();
  localChoicePendingKey = currentRoundKey();
  renderCandidateSelection(slot, budget, banner, round.sharedCandidates, (cand) => {
    submitLocalDecision({ sold: true, target: cand });
  });
}

// Her turda gösterilen 3 aday sabit bir formülle seçilir: 1 pahalı (82+ reyting),
// 1 orta segment (74-82 reyting) dünya piyasasından, ve 1 bedava transfer — yurtdışının
// düşük profilli kulüplerinden (73 reyting altı, ücretsiz). Süper Lig'deki TÜM takımlar
// artık tek oyunculuda seçilebildiği için bedava transfer havuzu artık Süper Lig'den değil,
// yabancı alt/orta seviye kulüplerden geliyor. Kimseyi alamayan oyuncu bedava transferi
// almak zorunda kalır çünkü değeri her zaman 0'dır.
function pickRandomFromPool(pool) {
  if (!pool || pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function freeTransferPool(category) {
  return WORLD_MARKET[category]
    .filter(p => p.rating < 73 && !usedWorldNames.has(p.name))
    .map(p => ({ name: p.name, club: p.club, nationality: p.nationality, value: 0, rating: p.rating, age: p.age }));
}

// Üç sabit segment: Yıldız Transfer (82+), Orta Segment (74-82) dünya piyasasından, ve
// Bedava Transfer (73 altı, diğer Süper Lig takımlarından, €0). Her tur bu 3 aday gösterilir.
// 3 katılımcılı (geleneksel Fenerbahçe/Beşiktaş/Galatasaray) formatta 3 sabit segment:
// Yıldız Transfer (82+), Orta Segment (74-82), Bedava Transfer (73 altı, yurtdışı, €0).
// 4 katılımcılı formatta (büyük 3 dışında bir takım seçildiğinde) araya bir "Ucuz Transfer"
// (73-77) segmenti daha girer — yoksa 3 aday üzerinde 4 taraf sık sık çakışıp oyunun
// tıkanmasına (sürekli açık artırma / aday tükenmesi) yol açabiliyordu.
function buildSlotCandidates(category) {
  const fourTeamFormat = participants.length >= 4;
  const available = WORLD_MARKET[category].filter(p => !usedWorldNames.has(p.name));
  const freePool = freeTransferPool(category);
  const picked = [];
  const notPicked = (p) => !picked.some(c => c.name === p.name);

  const expensivePool = available.filter(p => p.rating >= 82);
  const expensive = pickRandomFromPool(expensivePool.filter(notPicked)) || pickRandomFromPool(available.filter(notPicked)) || makeFreeAgent(category);
  if (expensive) picked.push(expensive);

  if (fourTeamFormat) {
    const midPool = available.filter(p => p.rating >= 78 && p.rating < 82);
    const mid = pickRandomFromPool(midPool.filter(notPicked)) || pickRandomFromPool(available.filter(notPicked)) || makeFreeAgent(category);
    if (mid) picked.push(mid);

    const cheapPool = available.filter(p => p.rating >= 73 && p.rating < 78);
    const cheap = pickRandomFromPool(cheapPool.filter(notPicked)) || pickRandomFromPool(available.filter(notPicked)) || makeFreeAgent(category);
    if (cheap) picked.push(cheap);

    const free = pickRandomFromPool(freePool) || makeFreeAgent(category, 0);
    return [expensive, mid, cheap, free].filter(Boolean);
  }

  const midPool = available.filter(p => p.rating >= 74 && p.rating < 82);
  const mid = pickRandomFromPool(midPool.filter(notPicked)) || pickRandomFromPool(available.filter(notPicked)) || makeFreeAgent(category);
  if (mid) picked.push(mid);
  const free = pickRandomFromPool(freePool) || makeFreeAgent(category, 0);
  return [expensive, mid, free].filter(Boolean);
}

function renderCandidateSelection(slot, budget, bannerText, candidates, onPick) {
  renderRoundLog();
  sellBanner.innerHTML = bannerText;

  let sorted = [...candidates].sort((a, b) => a.value - b.value);
  // Bütçe hiçbir zaman eksiye düşmesin: sunulan adayların HİÇBİRİ bütçeye sığmıyorsa,
  // bütçeye göre fiyatlandırılmış (her zaman alınabilir) bir serbest oyuncu ekleriz —
  // gerçek adaylardan hiçbiri zorla, bütçe üstü fiyatla satın aldırılmaz.
  const anyAffordable = sorted.some(c => c.value <= budget);
  let freeAgentFallback = null;
  if (!anyAffordable) {
    freeAgentFallback = makeFreeAgent(round ? round.category : undefined, budget);
    sorted = [freeAgentFallback, ...sorted];
  }

  candidateGrid.innerHTML = "";
  sorted.forEach((cand, idx) => {
    const canAfford = cand.value <= budget;
    const card = document.createElement("div");
    card.className = "candidate-card" + (canAfford ? "" : " disabled");
    let tierLabel = "";
    if (cand === freeAgentFallback) tierLabel = "Bütçene Uygun";
    else if (cand.value === 0) tierLabel = "Bedava Transfer";
    else if (cand.rating >= 82) tierLabel = "Yıldız Transfer";
    else if (participants.length >= 4 && cand.rating < 78) tierLabel = "Ucuz Transfer";
    else tierLabel = "Orta Segment";
    card.innerHTML = `
      ${tierLabel ? `<div class="tier-tag">${tierLabel}</div>` : ""}
      <div class="rating-badge small">${cand.rating}</div>
      <div class="player-photo">${pixelAvatarSVG(cand.name)}</div>
      <div class="candidate-club">${cand.club}</div>
      <div class="candidate-name">${cand.name}</div>
      <div class="candidate-meta">${cand.age} yaş · ${cand.nationality}</div>
      <div class="candidate-value">${cand.value === 0 ? "Bedava" : formatValue(cand.value)}${cand.value > budget ? " ⚠️" : ""}</div>
    `;
    if (canAfford) {
      card.addEventListener("click", () => onPick(cand));
    }
    candidateGrid.appendChild(card);
  });

  decideView.classList.add("hidden");
  auctionView.classList.add("hidden");
  chooseView.classList.remove("hidden");
}

/* ---------------- FREE AGENT FALLBACK (never leaves a slot unfillable) ---------------- */

function makeFreeAgent(category, maxValue) {
  const value = maxValue !== undefined ? Math.max(0, Math.min(1_500_000, maxValue)) : 1_500_000;
  return {
    name: `Serbest Oyuncu #${Math.floor(1000 + Math.random() * 9000)}`,
    club: "Serbest",
    nationality: "—",
    value,
    rating: 64 + Math.floor(Math.random() * 8),
    age: 22 + Math.floor(Math.random() * 12)
  };
}

function categoryPool(category) {
  const pool = WORLD_MARKET[category].filter(p => !usedWorldNames.has(p.name));
  const withFree = [...pool, ...freeTransferPool(category)];
  return withFree.length > 0 ? withFree : [makeFreeAgent(category)];
}

// Havuzdan bütçeye SIĞAN en iyi oyuncuyu döndürür; hiçbiri sığmıyorsa bütçeye göre
// fiyatlandırılmış bir serbest oyuncu üretir — bütçe asla eksiye düşmesin diye.
function affordableOrFreeAgent(pool, budget, category) {
  const affordable = pool.filter(p => p.value <= budget);
  if (affordable.length > 0) return affordable.reduce((a, b) => (b.rating > a.rating ? b : a));
  return makeFreeAgent(category, budget);
}

/* ---------------- BOT AI ---------------- */

// Bu turda henüz kimseye verilmemiş, ekranda gösterilen ortak 3 aday.
function remainingSharedCandidates() {
  return round.sharedCandidates.filter(c => !usedWorldNames.has(c.name));
}

// Bot, kadronun TAMAMINI kurduğunun farkında: elindeki parayı ilk sıradaki mevkilere
// harcayıp sonraki mevkileri (ör. forvet) parasız bırakmasın diye, hâlâ gelecek olan her
// mevki için makul bir pay ayırır ve harcanabilir bütçesini buna göre kısar. Mevki zaten
// boşsa (zorunlu doldurma) bu kısıtlama uygulanmaz — o an elindeki tüm bütçeyi kullanabilir.
const BOT_RESERVE_PER_REMAINING_SLOT = 4_000_000;

function botPlanningBudget(participant, slot) {
  const budget = prospectiveBudget(participant, slot);
  const slotPos = SLOTS.indexOf(slot);
  const remainingSlotsAfter = SLOTS.length - slotPos - 1;
  const reserve = remainingSlotsAfter * BOT_RESERVE_PER_REMAINING_SLOT;
  return Math.max(0, budget - reserve);
}

function botDecide(participant, slot) {
  const current = participant.squad[slot];
  const budget = prospectiveBudget(participant, slot);
  let pool = remainingSharedCandidates();

  if (current.vacant) {
    const affordable = pool.filter(p => p.value <= budget);
    const fallbackPool = pool.length > 0 ? pool : categoryPool(SLOT_CATEGORY[slot]);
    const best = affordable.length > 0
      ? affordable.reduce((a, b) => (b.rating > a.rating ? b : a))
      : affordableOrFreeAgent(fallbackPool, budget, SLOT_CATEGORY[slot]);
    return { sold: true, target: best };
  }

  const planningBudget = botPlanningBudget(participant, slot);
  const affordable = pool.filter(p => p.value <= planningBudget);
  if (affordable.length === 0) return { sold: false };
  const best = affordable.reduce((a, b) => (b.rating > a.rating ? b : a));
  if (best.rating > current.rating) return { sold: true, target: best };
  return { sold: false };
}

// Açık artırmayı kaybeden botlar için: önce ekrandaki ortak 3'ün kalanından, yoksa taze havuzdan.
function pickFallback(participant, slot) {
  const budget = prospectiveBudget(participant, slot);
  let pool = remainingSharedCandidates();
  if (pool.length === 0) pool = categoryPool(SLOT_CATEGORY[slot]);
  return affordableOrFreeAgent(pool, budget, SLOT_CATEGORY[slot]);
}

/* ---------------- CONFLICT RESOLUTION ---------------- */

function resolveRoundNow() {
  const slot = round.slot;
  const sellers = [];
  const requiredIds = requiredHumanClubIds();
  for (const p of participants) {
    if (requiredIds.has(p.clubId)) {
      const d = round.decisions[p.clubId];
      if (d && d.sold) sellers.push({ participant: p, target: d.target });
    } else if (p.isBot) {
      const decision = botDecide(p, slot);
      if (decision.sold) sellers.push({ participant: p, target: decision.target });
    }
  }

  const groups = {};
  for (const s of sellers) {
    (groups[s.target.name] ||= []).push(s);
  }
  round.pendingGroups = Object.values(groups);
  round.keepers = participants.filter(p => !sellers.find(s => s.participant === p));

  // Bu tur içindeki TÜM hedeflenen oyuncuları hemen rezerve et. Böylece bir grup insan
  // onayı beklerken (açık artırma) kuyrukta bekleyen başka bir grubun hedefi, kaybedenin
  // yedek seçimi tarafından "boşta" sanılıp çalınamaz (iki takımın aynı oyuncuyu almasını önler).
  for (const g of round.pendingGroups) {
    usedWorldNames.add(g[0].target.name);
  }

  processNextGroup();
}

function processNextGroup() {
  if (round.pendingGroups.length === 0) {
    for (const p of round.keepers) commitKeep(p, round.slot);
    mpPublish();
    finishSlot();
    return;
  }
  const group = round.pendingGroups.shift();
  if (group.length === 1) {
    commitBuy(group[0].participant, round.slot, group[0].target, group[0].target.value);
    processNextGroup();
  } else {
    resolveConflict(group);
  }
}

function finishGroup(winnerParticipant, finalPrice, candidate, allGroupParticipants) {
  commitBuy(winnerParticipant, round.slot, candidate, finalPrice);

  const requiredIds = requiredHumanClubIds();
  // Tek oyunculuda "sen" kaybedersen ilk 3'ten kalanlardan seçersin (zengin UX).
  // Çok oyunculuda (basitlik için) kaybeden herkese -bot ya da gerçek oyuncu farketmeksizin-
  // otomatik en iyi alternatif atanır; sadece TEK GERÇEK KAYBEDEN varsa ve o "sensen" (yani
  // host'un kendi ekranıysa) interaktif seçim gösterilir.
  const soloHumanLoss = !mpActive() && allGroupParticipants.includes(human) && winnerParticipant !== human;

  const autoLosers = allGroupParticipants.filter(p => {
    if (p === winnerParticipant) return false;
    if (soloHumanLoss && p === human) return false;
    return true;
  });
  for (const p of autoLosers) {
    const fallback = pickFallback(p, round.slot);
    if (fallback) commitBuy(p, round.slot, fallback, fallback.value);
    else commitKeep(p, round.slot);
  }

  auction = null;

  if (soloHumanLoss) {
    renderAuctionLossPicker();
  } else {
    mpPublish();
    processNextGroup();
  }
}

// Açık artırmayı kaybettiğinde/vazgeçtiğinde: SANA İLK SUNULAN 3 adaydan kalanlar arasından
// seçmek ZORUNLUSUN — asla o ilk 3'te olmayan başka bir oyuncu teklif edilmez.
function renderAuctionLossPicker() {
  const slot = round.slot;
  const budget = prospectiveBudget(human, slot);
  let candidates = remainingSharedCandidates();
  let banner;

  if (candidates.length === 0) {
    // Aşırı nadir durum: ilk sunulan 3 adayın hepsi diğerlerine gitti. Sana özel tek bir alternatif bulunur.
    const fallback = pickFallback(human, slot);
    candidates = fallback ? [fallback] : [];
    banner = "Açık artırmayı kaybettin ve ilk sunulan adayların hepsi elden gitti — sana özel bulunan alternatifi transfer etmen gerekiyor:";
  } else {
    banner = `Açık artırmayı kaybettin! Sana ilk sunulan 3 adaydan kalan ${candidates.length === 1 ? "tek adayı" : "2 adaydan birini"} transfer etmen gerekiyor:`;
  }

  renderCandidateSelection(slot, budget, banner, candidates, (cand) => {
    commitBuy(human, slot, cand, cand.value);
    processNextGroup();
  });
}

function resolveConflict(group) {
  const candidate = group[0].target;
  const groupParticipants = group.map(g => g.participant);
  const requiredIds = requiredHumanClubIds();
  const hasHumanEntry = group.some(g => requiredIds.has(g.participant.clubId));

  if (!hasHumanEntry) {
    const bidders = groupParticipants.map(p => ({
      participant: p,
      maxWillingness: Math.min(botPlanningBudget(p, round.slot), Math.round(candidate.value * 1.5))
    })).sort((a, b) => b.maxWillingness - a.maxWillingness);
    const winner = bidders[0];
    const runnerUp = bidders[1];
    const finalPrice = Math.max(candidate.value, Math.min(winner.maxWillingness, runnerUp.maxWillingness + BID_INCREMENT));
    logMessage(`🔨 ${bidders.map(b => b.participant.name).join(" ile ")} arasında <b>${candidate.name}</b> için açık artırma oldu — <b>${winner.participant.name}</b> ${formatValue(finalPrice)} teklifle kazandı.`);
    finishGroup(winner.participant, finalPrice, candidate, groupParticipants);
    return;
  }

  const bidders = group.map(g => ({
    participant: g.participant,
    maxWillingness: requiredIds.has(g.participant.clubId)
      ? prospectiveBudget(g.participant, round.slot)
      : Math.min(botPlanningBudget(g.participant, round.slot), Math.round(candidate.value * 1.5))
  }));

  auction = {
    candidate,
    bidders,
    currentBid: candidate.value,
    groupParticipants
  };
  mpPhase = "auction";
  mpPublish();
  renderAuctionView();
}

/* ---------------- AUCTION UI ---------------- */

function renderAuctionView() {
  decideView.classList.add("hidden");
  chooseView.classList.add("hidden");
  auctionView.classList.remove("hidden");

  const opponents = auction.bidders.filter(b => b.participant !== human).map(b => b.participant.name).join(" ve ");
  auctionDesc.textContent = `${opponents} da ${auction.candidate.name}'i istiyor! Kazanmak için teklifini yükselt.`;
  auctionCandidate.innerHTML = `
    <div class="rating-badge small">${auction.candidate.rating}</div>
    <div class="player-photo">${pixelAvatarSVG(auction.candidate.name)}</div>
    <div class="candidate-club">${auction.candidate.club}</div>
    <div class="candidate-name">${auction.candidate.name}</div>
    <div class="candidate-meta">${auction.candidate.age} yaş · ${auction.candidate.nationality}</div>
  `;
  updateAuctionUI();
}

function updateAuctionUI() {
  auctionCurrentBid.textContent = formatValue(auction.currentBid);
  auctionBidders.innerHTML = auction.bidders.map(b => {
    const isHuman = b.participant === human;
    return `<div class="bidder-chip${isHuman ? " you" : ""}">${b.participant.name}${isHuman ? " (Sen)" : ""}</div>`;
  }).join("");

  const iAmBidding = auction.bidders.some(b => b.participant === human);
  const budgetHintEl = document.getElementById("auctionBudgetHint");
  if (!iAmBidding) {
    raiseBidBtn.disabled = true;
    concedeBidBtn.disabled = true;
    raiseBidBtn.textContent = "👀 İzliyorsun…";
    if (budgetHintEl) budgetHintEl.textContent = "";
    return;
  }
  concedeBidBtn.disabled = false;
  const availableBudget = prospectiveBudget(human, round.slot);
  const canRaise = (auction.currentBid + BID_INCREMENT) <= availableBudget;
  raiseBidBtn.disabled = !canRaise;
  raiseBidBtn.textContent = canRaise ? `💰 Teklif Ver (+${formatValue(BID_INCREMENT)})` : "💸 Bütçen Yetmiyor";
  if (budgetHintEl) {
    const current = human.squad[round.slot];
    const includesSale = !current.vacant;
    budgetHintEl.textContent = includesSale
      ? `Kullanılabilir bütçen: ${formatValue(availableBudget)} (${current.name} satılırsa kasana giren ${formatValue(current.value)} dahil)`
      : `Kullanılabilir bütçen: ${formatValue(availableBudget)}`;
  }
}

// participant: teklifi veren asıl katılımcı (host'un kendisi ya da ağdan gelen bir isteğin sahibi)
function raiseBid(participant) {
  const newBid = auction.currentBid + BID_INCREMENT;
  if (newBid > prospectiveBudget(participant, round.slot)) return;
  auction.currentBid = newBid;
  auction.bidders = auction.bidders.filter(b => b.participant === participant || b.maxWillingness >= newBid);

  if (auction.bidders.length === 1) {
    const isMe = participant === human;
    logMessage(`🏆 ${isMe ? "Sen" : participant.name} <b>${auction.candidate.name}</b> için açık artırmayı ${formatValue(auction.currentBid)} teklifle kazand${isMe ? "ın" : "ı"}!`);
    finishGroup(participant, auction.currentBid, auction.candidate, auction.groupParticipants);
    return;
  }
  mpPublish();
  updateAuctionUI();
}

function concedeBid(participant) {
  const candidate = auction.candidate;
  const remaining = auction.bidders.filter(b => b.participant !== participant);
  const groupParticipants = auction.groupParticipants;
  const isMe = participant === human;

  if (remaining.length === 1) {
    logMessage(`${isMe ? "Açık artırmada pes ettin" : participant.name + " açık artırmada pes etti"} — <b>${remaining[0].participant.name}</b>, ${candidate.name}'i ${formatValue(auction.currentBid)} karşılığında aldı.`);
    finishGroup(remaining[0].participant, auction.currentBid, candidate, groupParticipants);
  } else {
    const sorted = [...remaining].sort((a, b) => b.maxWillingness - a.maxWillingness);
    const winner = sorted[0];
    const runnerUp = sorted[1];
    const finalPrice = Math.max(auction.currentBid, Math.min(winner.maxWillingness, runnerUp.maxWillingness + BID_INCREMENT));
    logMessage(`${isMe ? "Açık artırmada pes ettin" : participant.name + " açık artırmada pes etti"} — <b>${winner.participant.name}</b>, ${candidate.name}'i ${formatValue(finalPrice)} karşılığında aldı.`);
    finishGroup(winner.participant, finalPrice, candidate, groupParticipants);
  }
}

function humanRaiseBid() {
  if (mpActive() && !mpIsHost()) {
    // Host'un yayınına kadar geçen ağ gecikmesinde butonlar aynı şekilde tıklanabilir
    // kalırsa sabırsız art arda tıklamalar niyet edilenden fazla teklif göndertebilir —
    // yanıt gelene kadar iyimser (optimistic) olarak kilitliyoruz.
    MP.sendAction("raise", { clubId: human.clubId });
    raiseBidBtn.disabled = true;
    concedeBidBtn.disabled = true;
    return;
  }
  raiseBid(human);
}

function humanConcede() {
  if (mpActive() && !mpIsHost()) {
    MP.sendAction("concede", { clubId: human.clubId });
    raiseBidBtn.disabled = true;
    concedeBidBtn.disabled = true;
    return;
  }
  concedeBid(human);
}

/* ---------------- COMMIT ---------------- */

// Bedava transferle (€0 bonservis) gelen bir oyuncu, kadroya katıldıktan sonra hâlâ "değersiz"
// görünmesin diye reytingine göre gerçekçi bir piyasa değeri kazanır — sadece transfer BEDELİ
// (price, bütçeden düşülen tutar) sıfır kalır, oyuncunun kendi değeri sıfır kalmaz.
function computeFreeTransferValue(rating, age) {
  return ratingToMarketValue(rating, age);
}

function commitBuy(participant, slot, candidate, price) {
  const oldPlayer = participant.squad[slot];
  if (!oldPlayer.vacant) participant.budget += oldPlayer.value;
  participant.budget -= price;
  usedWorldNames.add(candidate.name);
  const marketValue = candidate.value === 0 ? computeFreeTransferValue(candidate.rating, candidate.age) : candidate.value;
  participant.squad[slot] = {
    name: candidate.name,
    value: marketValue,
    rating: candidate.rating,
    age: candidate.age,
    nationality: candidate.nationality,
    club: candidate.club,
    origin: "bought"
  };
}

function commitKeep(participant, slot) {
  participant.squad[slot].origin = "kept";
}

function finishSlot() {
  slotIndex++;
  startSlotRound();
}

/* ---------------- SEASON SIMULATION (LEAGUE TABLE + TOP SCORER) ---------------- */

function avgSquadRating(p) {
  return SLOTS.reduce((s, slot) => s + p.squad[slot].rating, 0) / SLOTS.length;
}

function teamAttack(p) {
  return (p.squad.st.rating + p.squad.cam.rating + p.squad.rw.rating + p.squad.lw.rating) / 4;
}

function teamDefense(p) {
  return (p.squad.gk.rating + p.squad.cb1.rating + p.squad.cb2.rating + p.squad.rb.rating + p.squad.lb.rating) / 5;
}

// overallEdge: kendi kadro reytingi - rakibinki. Sıralama kadro reytingine göre yapıldığı için
// maç sonuçlarının da bununla genel olarak tutarlı olması gerekir — yoksa tabloda en düşük
// reytingli takım tüm maçları kazanmış gibi görünüp sıralamayla çelişebiliyordu.
function simulateGoals(attack, defense, overallEdge) {
  const base = 1.3 + (attack - defense) / 16 + overallEdge / 9;
  const goals = Math.round(base + (Math.random() * 2.4 - 1.1));
  return Math.max(0, Math.min(6, goals));
}

function simulateSeasonAndShowTable() {
  const stats = {};
  for (const p of participants) {
    stats[p.clubId] = { p, played: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
  }

  // Her takım diğer ikisiyle karşılıklı (iç-dış) oynar -> 6 maç, herkes 4 maç oynar.
  const pairs = [];
  for (let i = 0; i < participants.length; i++) {
    for (let j = 0; j < participants.length; j++) {
      if (i !== j) pairs.push([participants[i], participants[j]]);
    }
  }

  for (const [home, away] of pairs) {
    const overallEdge = avgSquadRating(home) - avgSquadRating(away);
    const goalsHome = simulateGoals(teamAttack(home), teamDefense(away), overallEdge);
    const goalsAway = simulateGoals(teamAttack(away), teamDefense(home), -overallEdge);
    const sh = stats[home.clubId];
    const sa = stats[away.clubId];
    sh.played++; sa.played++;
    sh.gf += goalsHome; sh.ga += goalsAway;
    sa.gf += goalsAway; sa.ga += goalsHome;
    if (goalsHome > goalsAway) { sh.w++; sh.pts += 3; sa.l++; }
    else if (goalsHome < goalsAway) { sa.w++; sa.pts += 3; sh.l++; }
    else { sh.d++; sa.d++; sh.pts += 1; sa.pts += 1; }
  }

  // Sıralama kadro reytingine göre yapılır (maç puanları sadece görsel/eşitlik bozucu olarak kalır).
  for (const row of Object.values(stats)) row.avgRating = avgSquadRating(row.p);

  const table = Object.values(stats).sort((a, b) => {
    if (b.avgRating !== a.avgRating) return b.avgRating - a.avgRating;
    if (b.pts !== a.pts) return b.pts - a.pts;
    const gdA = a.gf - a.ga, gdB = b.gf - b.ga;
    if (gdB !== gdA) return gdB - gdA;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return Math.random() - 0.5;
  });

  table.forEach((row, idx) => {
    row.rank = idx + 1;
    row.prize = LEAGUE_PRIZES[idx] || 0;
    row.p.budget += row.prize;
    careerPoints[row.p.clubId] += LEAGUE_CAREER_POINTS[idx] || 0;
  });

  // Gol krallığı: forvetlerin ratingi şansı artırır ama garanti etmez.
  const scorers = participants.map(p => {
    const st = p.squad.st;
    const base = 9 + Math.random() * 15;
    const ratingBonus = (st.rating - 75) * 0.45;
    const goals = Math.max(2, Math.round(base + ratingBonus + (Math.random() * 4 - 2)));
    return { p, player: st, goals };
  }).sort((a, b) => b.goals - a.goals);
  scorers[0].p.budget += TOP_SCORER_PRIZE;
  careerPoints[scorers[0].p.clubId] += TOP_SCORER_CAREER_POINT;

  seasonHistory.push({ season: currentSeason, table, topScorer: scorers[0], scorers });

  renderSeasonTableScreen(table, scorers);
}

function renderSeasonTableScreen(table, scorers) {
  mpPhase = "seasonTable";
  mpPublish();
  rebuildScreen.classList.add("hidden");
  draftScreen.classList.add("hidden");
  seasonTableScreen.classList.remove("hidden");
  tableSeasonNum.textContent = `${currentSeason} / ${MAX_SEASONS}`;
  seasonTableContinueBtn.textContent = draftModeActive ? "🎯 Draft'a Geç" : "Transfer Tekliflerine Geç";

  leagueTableBody.innerHTML = table.map(row => {
    const gd = row.gf - row.ga;
    return `<tr class="${row.rank === 1 ? "champion" : ""}">
      <td>${row.rank === 1 ? "🥇" : row.rank}</td>
      <td class="team-cell">${row.p.name}${whoLabel(row.p)}</td>
      <td class="rating-cell">${row.avgRating.toFixed(1)}</td>
      <td>${row.played}</td><td>${row.w}</td><td>${row.d}</td><td>${row.l}</td>
      <td>${row.gf}</td><td>${row.ga}</td><td>${gd >= 0 ? "+" : ""}${gd}</td>
      <td class="points-cell">${row.pts}</td>
      <td class="prize-tag">${row.prize ? "+" + formatValue(row.prize) : "—"}</td>
    </tr>`;
  }).join("");

  scorerList.innerHTML = scorers.map((s, idx) => `
    <div class="scorer-row${idx === 0 ? " champion" : ""}">
      <span class="scorer-rank">${idx === 0 ? "🥇" : idx + 1}</span>
      <span class="scorer-avatar">${pixelAvatarSVG(s.player.name)}</span>
      <span class="scorer-name">${s.player.name}</span>
      <span class="scorer-club">${s.p.name}${idx === 0 ? " · +€10,0M" : ""}</span>
      <span class="scorer-goals">${s.goals} gol</span>
    </div>
  `).join("");

  // Çok oyunculuda ekranı ilerletme yetkisi sadece host'ta — misafirlere tıklanamaz bir
  // buton bırakmak yerine (host'un devam etmesini bekle) net bir ipucu gösteriyoruz.
  const isGuest = mpActive() && !mpIsHost();
  seasonTableContinueBtn.classList.toggle("hidden", isGuest);
  const tableBodyEl = document.querySelector(".table-body");
  let waitHint = document.getElementById("mpSeasonTableWaitHint");
  if (isGuest) {
    if (!waitHint) {
      waitHint = document.createElement("p");
      waitHint.id = "mpSeasonTableWaitHint";
      waitHint.className = "hint";
      tableBodyEl?.appendChild(waitHint);
    }
    waitHint.textContent = "Devam etmek için host'u bekle…";
  } else {
    waitHint?.remove();
  }

  renderBotStatus();
}

/* ---------------- TRANSFER WINDOW ---------------- */

function sampleSlots(n, excludeSlots) {
  const excluded = excludeSlots ? new Set(excludeSlots) : null;
  const arr = excluded ? SLOTS.filter(s => !excluded.has(s)) : [...SLOTS];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}

function computeOffer(player) {
  const ageFactor =
    player.age <= 20 ? 2.1 :
    player.age <= 23 ? 1.7 :
    player.age <= 26 ? 1.3 :
    player.age <= 29 ? 1.0 :
    player.age <= 32 ? 0.7 :
    player.age <= 35 ? 0.5 : 0.35;

  // Genç + yüksek ratingli "potansiyelli yıldız" oyuncular ekstra hype teklifi çeker.
  const isWonderkid = player.age <= 23 && player.rating >= 78;
  const hypeFactor = isWonderkid ? 1.4 + Math.random() * 0.8 : 1;

  // Yaşlanmış oyuncular (rating ne olursa olsun) daha da düşük teklif alır.
  const isVeteran = player.age >= 33;

  const randomFactor = 0.85 + Math.random() * 0.5;
  // Faktörler ayrı ayrı makul olsa da hepsi aynı anda tepe noktasına gelirse (genç + potansiyelli
  // + şanslı rastgelelik) çarpım kontrolsüz büyüyüp gerçekçi olmayan tekliflere yol açabiliyordu.
  // Teklif, oyuncunun güncel piyasa değerinin en fazla 2 katıyla sınırlanır.
  let offer = player.value * ageFactor * hypeFactor * randomFactor;
  offer = Math.max(offer, player.value * (isVeteran ? 0.25 : 0.5));
  offer = Math.min(offer, player.value * 2);
  return Math.round(offer / 500000) * 500000;
}

// Reytinge göre piyasa değeri — altyapıdan çıkan, henüz kanıtlanmamış bir genç olduğu için
// aynı reytingdeki hazır bir profesyonelden belirgin ucuz (%40 iskonto), ama tavanı da var.
function computeAcademyValue(rating, age) {
  const value = ratingToMarketValue(rating, age) * 0.6;
  return Math.min(80_000_000, Math.max(500_000, Math.round(value / 250000) * 250000));
}

function pickUnusedAcademyName() {
  const pool = ACADEMY_NAME_POOL.filter(n => !usedAcademyNames.has(n));
  if (pool.length === 0) return null; // isim havuzu tükendi (çok uzun kariyer) — bu sezon oluşturulmaz
  const name = pool[Math.floor(Math.random() * pool.length)];
  usedAcademyNames.add(name);
  return name;
}

// Teklif anında sadece bir reyting ARALIĞI gösterilir (ör. 78-85) — gerçek reyting ancak
// kabul edilirse ortaya çıkar. Çoğunlukla mütevazı bir yetenek, nadiren gerçek bir yıldız adayı.
function generateAcademyOffer(p, excludeSlots) {
  const name = pickUnusedAcademyName();
  if (!name) return null;
  const pool = excludeSlots ? SLOTS.filter(s => !excludeSlots.includes(s)) : SLOTS;
  const slot = pool[Math.floor(Math.random() * pool.length)];
  const roll = Math.random();
  let low;
  if (roll < 0.6) low = 65 + Math.floor(Math.random() * 10);       // %60: mütevazı yetenek
  else if (roll < 0.9) low = 76 + Math.floor(Math.random() * 6);  // %30: umut vaat eden
  else low = 83 + Math.floor(Math.random() * 5);                   // %10: istisnai yıldız adayı
  const high = low + 7;
  return {
    slot,
    name,
    rangeLow: low,
    rangeHigh: high,
    decided: false,
    // undefined DEĞİL null: Firebase Realtime Database .set() çağrısı, değer ağacında
    // herhangi bir yerde undefined bulursa TÜM yazmayı sessizce reddediyor (multiplayer'da
    // bu, karar verilmemiş bir altyapı teklifi varken state yayınının hiç çalışmaması
    // anlamına geliyordu — "transfer sezonuna geç" butonunun misafirlerde etkisiz kalması).
    accepted: null,
    actualRating: null,
    value: null
  };
}

function runTransferWindow() {
  const transferLogMessages = [];

  for (const p of participants) {
    // Altyapı teklifinin mevkisiyle giden teklif tekliflerinden biri AYNI mevki olursa,
    // ikisini de kabul ettiğinde hangisinin kadroda kalacağı çakışıyordu (biri diğerini
    // sessizce eziyordu, mevki boş görünüyordu). Önce altyapı mevkisini belirleyip giden
    // teklifleri o mevki HARİÇ seçerek bu çakışmayı kökten engelliyoruz.
    p.academyOffer = generateAcademyOffer(p);
    const excludeSlot = p.academyOffer ? [p.academyOffer.slot] : [];
    const slots = sampleSlots(3, excludeSlot);
    p.pendingOffers = slots.map(slot => {
      const player = p.squad[slot];
      return {
        slot,
        player,
        offerValue: computeOffer(player),
        buyerClub: BIG_CLUBS[Math.floor(Math.random() * BIG_CLUBS.length)],
        decided: false
      };
    });
  }

  let botsAccepted = 0;
  let botsTotal = 0;
  // Sadece GERÇEK botlar otomatik karar verir. Çok oyunculuda diğer gerçek oyuncular
  // (host olsun olmasın) kendi tekliflerini kendi ekranlarında interaktif karara bağlar —
  // host'un onlar adına otomatik "bot gibi" karar vermesi doğru değil.
  for (const p of participants.filter(x => x.isBot)) {
    for (const offer of p.pendingOffers) {
      botsTotal++;
      const accept = offer.offerValue > offer.player.value * 1.15;
      if (accept) {
        botsAccepted++;
        p.budget += offer.offerValue;
        p.squad[offer.slot].vacant = true;
        transferLogMessages.push(`📤 <b>${p.name}</b>: ${offer.player.name} (${offer.player.age} yaş), ${offer.buyerClub}'a ${formatValue(offer.offerValue)} karşılığında transfer oldu.`);
      } else {
        transferLogMessages.push(`🚫 <b>${p.name}</b>: ${offer.buyerClub}'ın ${offer.player.name} için ${formatValue(offer.offerValue)} teklifini reddetti.`);
      }
      offer.decided = true;
      offer.accepted = accept;
    }
    if (p.academyOffer) {
      resolveAcademyOffer(p, p.academyOffer, transferLogMessages);
    }
  }

  renderTransferScreen(transferLogMessages, botsAccepted, botsTotal);
}

// Bot, gerçek reytingi bilmez (henüz kanıtlanmamış bir genç) — sadece gösterilen aralığın
// ortalamasına göre kendi mevkisindeki oyuncuyla kıyaslar, biraz risk iştahıyla karar verir.
function resolveAcademyOffer(p, offer, transferLogMessages) {
  const current = p.squad[offer.slot];
  const midRating = (offer.rangeLow + offer.rangeHigh) / 2;
  const riskAppetite = 0.9 + Math.random() * 0.3;
  const accept = midRating * riskAppetite > current.rating;
  offer.decided = true;
  offer.accepted = accept;
  if (accept) {
    applyAcademySigning(p, offer);
    transferLogMessages.push(`🌱 <b>${p.name}</b>: Altyapıdan ${offer.name} (${SLOT_LABELS[offer.slot]}) kadroya katıldı, gerçek reytingi ${offer.actualRating} çıktı.`);
  } else {
    transferLogMessages.push(`🚫 <b>${p.name}</b>: Altyapıdan gelen ${offer.name} teklifini reddetti, ${current.name} kadroda kaldı.`);
  }
}

function applyAcademySigning(p, offer) {
  const actualRating = offer.rangeLow + Math.floor(Math.random() * (offer.rangeHigh - offer.rangeLow + 1));
  const age = 17 + Math.floor(Math.random() * 3);
  const value = computeAcademyValue(actualRating, age);
  offer.actualRating = actualRating;
  offer.value = value;
  usedWorldNames.add(offer.name);
  p.squad[offer.slot] = {
    name: offer.name,
    value,
    rating: actualRating,
    age,
    nationality: "Türkiye",
    club: p.name,
    origin: "academy"
  };
}

function renderTransferScreen(transferLogMessages, botsAccepted, botsTotal) {
  mpPhase = "transfer";
  // Her taze render (ilk giriş ya da host'tan gelen yeni bir yayın), guest'in "uçuştaki karar"
  // kilidini SADECE o karar gerçekten onaylanmışsa serbest bırakır — bkz. refreshGuestDecisionLock.
  refreshGuestDecisionLock();
  // Çok oyunculuda misafirlerin bu ekranı senkron görebilmesi için host, bot teklif özetini
  // (mesajlar + kabul sayısı) yayınlanan state'e ekler — yoksa guest ekranı hiç güncellenmez.
  if (mpActive() && mpIsHost()) {
    mpTransferSnapshot = { messages: transferLogMessages, botsAccepted, botsTotal };
  }
  mpPublish();
  rebuildScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  seasonTableScreen.classList.add("hidden");
  draftScreen.classList.add("hidden");
  transferScreen.classList.remove("hidden");

  transferSeasonNum.textContent = currentSeason;
  botTransferLog.innerHTML = transferLogMessages.map(m => `<div>${m}</div>`).join("");
  transferContinueRow.classList.add("hidden");

  const botSummaryEl = document.getElementById("botTransferSummary");
  if (botSummaryEl) {
    botSummaryEl.textContent = draftModeActive
      ? `🤖 Botlar: ${botsAccepted}/${botsTotal} altyapı teklifini kabul etti`
      : `🤖 Botlar: ${botsAccepted}/${botsTotal} teklifi kabul etti`;
  }
  const transferIntroEl = document.querySelector(".transfer-intro");
  if (transferIntroEl && draftModeActive) {
    transferIntroEl.textContent = "Draft tamamlandı. Bu sezon ayrıca bir transfer penceresi açılmıyor — aşağıdaki özeti inceleyip yeni sezona geçebilirsin.";
  }

  renderAcademyCard();

  transferOffers.innerHTML = "";
  human.pendingOffers.forEach((offer, idx) => {
    const card = document.createElement("div");
    card.className = "offer-card";
    card.innerHTML = `
      <div class="offer-left">
        <div class="rating-badge small">${offer.player.rating}</div>
        <div class="player-photo">${pixelAvatarSVG(offer.player.name)}</div>
      </div>
      <div class="offer-text">
        <div class="offer-pos">${SLOT_LABELS[offer.slot]} · ${offer.player.age} yaş</div>
        <div class="offer-name">${offer.player.name}</div>
        <div class="offer-current-value">Güncel Değeri: ${formatValue(offer.player.value)}</div>
        <div class="offer-buyer">${offer.buyerClub} teklif veriyor</div>
      </div>
      <div class="offer-actions">
        <div class="offer-value">${formatValue(offer.offerValue)}</div>
        <div class="offer-buttons">
          <button class="accept-btn">✅ Kabul Et</button>
          <button class="reject-btn">❌ Reddet</button>
        </div>
        <div class="offer-status"></div>
      </div>
    `;
    if (offer.decided) {
      card.classList.add("decided");
      card.querySelectorAll("button").forEach(b => (b.disabled = true));
      card.querySelector(".offer-status").textContent = offer.accepted ? "✅ Karar verildi (kabul)" : "❌ Karar verildi (ret)";
    } else if (guestDecisionInFlight) {
      // Başka bir teklifim/altyapı kararım hâlâ host onayı bekliyor — bu kart geçici olarak kilitli.
      card.querySelectorAll("button").forEach(b => (b.disabled = true));
    } else {
      card.querySelector(".accept-btn").addEventListener("click", () => handleOfferDecision(idx, true, card));
      card.querySelector(".reject-btn").addEventListener("click", () => handleOfferDecision(idx, false, card));
    }
    transferOffers.appendChild(card);
  });

  updateTransferContinueVisibility();
}

const academyOfferWrap = document.getElementById("academyOfferWrap");

function renderAcademyCard() {
  const offer = human.academyOffer;
  academyOfferWrap.innerHTML = "";
  if (!offer) return;

  const current = human.squad[offer.slot];
  const card = document.createElement("div");
  card.className = "academy-card";
  card.innerHTML = `
    <div class="academy-tag">🌱 Altyapıdan Bir Yetenek Çıktı</div>
    <div class="academy-name">${offer.name}</div>
    <div class="academy-pos">${SLOT_LABELS[offer.slot]} · Şu an kadroda: ${current.name} (${current.rating})</div>
    <div class="academy-range">Tahmini Reyting: ${offer.rangeLow}-${offer.rangeHigh}</div>
    <div class="academy-desc">Kabul edersen ${current.name} ile yer değiştirir ve gerçek reytingi ortaya çıkar. Reddedersen ${current.name} kadroda kalır.</div>
    <div class="academy-buttons">
      <button class="keep-btn academy-accept-btn">✅ Kabul Et (Takas)</button>
      <button class="sell-btn academy-reject-btn">❌ Reddet</button>
    </div>
    <div class="academy-status"></div>
  `;
  if (offer.decided) {
    card.classList.add("decided");
    card.querySelectorAll("button").forEach(b => (b.disabled = true));
    card.querySelector(".academy-status").textContent = offer.accepted
      ? `✅ Kadroya katıldı — gerçek reytingi ${offer.actualRating}, değeri ${formatValue(offer.value)}`
      : "❌ Reddedildi, oyuncu kadroda kaldı";
  } else if (guestDecisionInFlight) {
    card.querySelectorAll("button").forEach(b => (b.disabled = true));
  } else {
    card.querySelector(".academy-accept-btn").addEventListener("click", () => handleAcademyOfferDecision(true, card));
    card.querySelector(".academy-reject-btn").addEventListener("click", () => handleAcademyOfferDecision(false, card));
  }
  academyOfferWrap.appendChild(card);
}

// Herhangi bir katılımcı için altyapı/teklif kararını UYGULAR (host'un kendi kararı ya da
// bir misafirden gelen aksiyon aynı yoldan geçer) — sadece host bu fonksiyonları çağırır,
// state'i o yayınlar. Guest'ler kendi kararlarını MP.sendAction ile host'a gönderir.
function resolveAcademyOfferDecision(participant, accept) {
  const offer = participant.academyOffer;
  if (!offer || offer.decided) return;
  offer.decided = true;
  offer.accepted = accept;
  if (accept) applyAcademySigning(participant, offer);
  mpPublish();
}

function resolveOfferDecision(participant, idx, accept) {
  const offer = participant.pendingOffers[idx];
  if (!offer || offer.decided) return;
  offer.decided = true;
  offer.accepted = accept;
  if (accept) {
    participant.budget += offer.offerValue;
    participant.squad[offer.slot].vacant = true;
  }
  mpPublish();
}

function lockOfferCard(card, statusText) {
  card.querySelector(".academy-status, .offer-status").textContent = statusText;
  card.querySelectorAll("button").forEach(b => (b.disabled = true));
  card.classList.add("decided");
}

// Transfer ekranındaki DİĞER (henüz karar verilmemiş) tüm kartların butonlarını da kilitler —
// guestDecisionInFlight ile birlikte, guest'in aynı anda sadece TEK bir kararı "uçuşa"
// çıkarabilmesini garanti eder (bkz. guestDecisionInFlight tanımı).
function freezeOtherTransferCards() {
  document.querySelectorAll("#academyOfferWrap button, #transferOffers button").forEach(b => (b.disabled = true));
}

function handleAcademyOfferDecision(accept, card) {
  const offer = human.academyOffer;
  if (!offer || offer.decided) return;
  if (mpActive() && !mpIsHost()) {
    if (guestDecisionInFlight) return;
    guestDecisionInFlight = { type: "academy" };
    MP.sendAction("academyDecision", { clubId: human.clubId, accept });
    offer.decided = true;
    offer.accepted = accept;
    lockOfferCard(card, accept ? "✅ Kabul edildi — host onaylayınca gerçek reyting görünecek" : "❌ Reddedildi, oyuncu kadroda kaldı");
    freezeOtherTransferCards();
    updateTransferContinueVisibility();
    return;
  }
  resolveAcademyOfferDecision(human, accept);
  lockOfferCard(card, offer.accepted
    ? `✅ Kadroya katıldı — gerçek reytingi ${offer.actualRating}, değeri ${formatValue(offer.value)}`
    : "❌ Reddedildi, oyuncu kadroda kaldı");
  updateTransferContinueVisibility();
}

function handleOfferDecision(idx, accept, card) {
  const offer = human.pendingOffers[idx];
  if (!offer || offer.decided) return;
  if (mpActive() && !mpIsHost()) {
    if (guestDecisionInFlight) return;
    guestDecisionInFlight = { type: "offer", idx };
    MP.sendAction("offerDecision", { clubId: human.clubId, idx, accept });
    offer.decided = true;
    offer.accepted = accept;
    lockOfferCard(card, accept ? `✅ Satıldı (+${formatValue(offer.offerValue)})` : "❌ Reddedildi, oyuncu kadroda kaldı");
    freezeOtherTransferCards();
    updateTransferContinueVisibility();
    return;
  }
  resolveOfferDecision(human, idx, accept);
  lockOfferCard(card, offer.accepted
    ? `✅ Satıldı (+${formatValue(offer.offerValue)})`
    : "❌ Reddedildi, oyuncu kadroda kaldı");
  updateTransferContinueVisibility();
}

function updateTransferContinueVisibility() {
  // Çok oyunculuda sadece "benim" tekliflerim değil, TÜM gerçek oyuncuların kendi
  // tekliflerine karar vermiş olması gerekir — yoksa host, diğer oyuncular henüz karar
  // vermeden sezonu ilerletip onları yarım kalmış bir teklif ekranında bırakabilir.
  const requiredIds = requiredHumanClubIds();
  const allDecided = participants
    .filter(p => requiredIds.has(p.clubId))
    .every(p => (!p.academyOffer || p.academyOffer.decided) && p.pendingOffers.every(o => o.decided));

  if (!allDecided) {
    transferContinueRow.classList.add("hidden");
    return;
  }

  transferContinueRow.classList.remove("hidden");
  const isLastSeason = currentSeason >= MAX_SEASONS;
  const showBoth = !mpActive() || mpIsHost();
  continueSeasonBtn.classList.toggle("hidden", isLastSeason || !showBoth);
  endCareerBtn.classList.toggle("hidden", !showBoth);
  endCareerBtn.textContent = isLastSeason ? "🏆 Kariyer Özetini Gör" : "Kariyeri Burada Bitir";
  if (!showBoth && !document.getElementById("mpHostWaitHint")) {
    transferContinueRow.insertAdjacentHTML("beforeend", '<p class="hint" id="mpHostWaitHint">Devam etmek için host\'u bekle…</p>');
  }
  if (showBoth) document.getElementById("mpHostWaitHint")?.remove();
}

function onContinueSeason() {
  currentSeason++;
  slotIndex = 0;
  transferScreen.classList.add("hidden");
  if (draftModeActive) {
    simulateSeasonAndShowTable();
    return;
  }
  rebuildScreen.classList.remove("hidden");
  renderPitch();
  renderBotStatus();
  startSlotRound();
}

/* ---------------- DRAFT MODU ---------------- */
// Her sezon tablosundan SONRA, transfer ekranından ÖNCE çalışır. 3 rastgele mevki seçilir ve
// mevkiler TEK TEK, sırayla işlenir. Aktif mevkide havuz = her katılımcının o mevkideki oyuncusu.
// Sıralama NBA usulü ters lig sıralamasıdır (sezonu SON bitiren ilk seçer). Sırası gelen
// katılımcı havuzdan KENDİSİNE ait olmayan bir oyuncuyu bedelsiz seçer; seçilen oyuncu havuzdan
// çıkar ve seçen kişinin eski oyuncusu kadrodan ayrılır (havuzdan da çekilir). Oyuncusu alınıp
// yerine kimseyi seçememiş katılımcılar, boşalan mevki için 4 adaylı imza ekranına düşer.

function cloneSquadPlayer(player) {
  return JSON.parse(JSON.stringify(player));
}

function isDraftHumanControlled(participant) {
  return requiredHumanClubIds().has(participant.clubId);
}

function draftParticipant(clubId) {
  return participants.find(p => p.clubId === clubId);
}

function draftCurrentSlot() {
  return draftState.slots[draftState.slotIdx];
}

// Ters lig sıralaması: son sezonu en kötü bitiren ilk seçer. Henüz tablo yoksa (teorik olarak
// draft her zaman bir sezon tablosundan sonra açılır) katılımcı dizisinin sırası kullanılır.
function draftPickOrder() {
  const last = seasonHistory[seasonHistory.length - 1];
  const ids = last && last.table
    ? [...last.table].sort((a, b) => b.rank - a.rank).map(r => r.p.clubId).filter(id => participants.some(p => p.clubId === id))
    : [];
  for (const p of participants) if (!ids.includes(p.clubId)) ids.push(p.clubId);
  return ids;
}

function startDraftPhase() {
  const slots = sampleSlots(DRAFT_SLOT_COUNT);
  draftState = {
    slots,
    slotIdx: 0,
    stage: "pick",
    order: [],
    turnIdx: 0,
    pool: [],
    picks: {},
    replaceCandidates: {},
    replacePicks: {},
    reservedNames: [],
    log: [`🎯 Bu sezonun draft mevkileri: ${slots.map(s => SLOT_LABELS[s]).join(", ")}`],
    seq: 0
  };
  guestDraftInFlight = null;
  startDraftSlotRound();
}

function startDraftSlotRound() {
  const ds = draftState;
  while (ds.slotIdx < ds.slots.length) {
    const slot = ds.slots[ds.slotIdx];
    const pool = participants
      .filter(p => !p.squad[slot].vacant)
      .map(p => ({ ownerClubId: p.clubId, player: cloneSquadPlayer(p.squad[slot]), status: "open", takenByClubId: "" }));
    if (pool.length === 0) {
      ds.log.push(`— ${SLOT_LABELS[slot]} mevkisinde havuza girecek oyuncu yok, atlanıyor.`);
      ds.slotIdx++;
      continue;
    }
    ds.stage = "pick";
    ds.pool = pool;
    ds.order = draftPickOrder();
    ds.turnIdx = 0;
    ds.picks = {};
    ds.seq++;
    ds.log.push(`🎯 ${SLOT_LABELS[slot]} draftı başladı — havuzda ${pool.length} oyuncu. Seçim sırası: ${ds.order.map(id => draftParticipant(id).name).join(" → ")}`);
    draftStep();
    return;
  }
  finishDraftPhase();
}

function draftEligiblePool(participant) {
  return draftState.pool.filter(e => e.status === "open" && e.ownerClubId !== participant.clubId);
}

// Bot: kendi mevkisindeki oyuncudan daha iyi olan en yüksek reytingli oyuncuyu seçer.
function botDraftPickTarget(participant) {
  const slot = draftCurrentSlot();
  const current = participant.squad[slot];
  let best = null;
  for (const entry of draftEligiblePool(participant)) {
    if (!current.vacant && entry.player.rating <= current.rating) continue;
    if (!best || entry.player.rating > best.player.rating) best = entry;
  }
  return best ? best.ownerClubId : "";
}

function applyDraftPick(participant, targetOwnerClubId) {
  const ds = draftState;
  if (!ds || ds.stage !== "pick" || ds.order[ds.turnIdx] !== participant.clubId) return;
  const slot = draftCurrentSlot();
  const entry = ds.pool.find(e => e.ownerClubId === targetOwnerClubId && e.status === "open" && e.ownerClubId !== participant.clubId);
  ds.seq++;
  if (entry) {
    const owner = draftParticipant(entry.ownerClubId);
    owner.squad[slot].vacant = true;
    entry.status = "taken";
    entry.takenByClubId = participant.clubId;
    // Seçim yapan katılımcının kendi oyuncusu artık yerini kaybetti: havuzdan da çekilir,
    // böylece bir oyuncu asla iki kadroda görünmez ve havuz muhasebesi tek kurala iner.
    const own = ds.pool.find(e => e.ownerClubId === participant.clubId && e.status === "open");
    if (own) own.status = "withdrawn";
    participant.squad[slot] = { ...cloneSquadPlayer(entry.player), origin: "draft", vacant: false };
    ds.picks[participant.clubId] = entry.ownerClubId;
    ds.log.push(`🎯 <b>${participant.name}</b>, ${owner.name} takımından <b>${entry.player.name}</b> (${entry.player.rating}) oyuncusunu draftla seçti.`);
  } else {
    ds.picks[participant.clubId] = "-";
    ds.log.push(`🏳️ <b>${participant.name}</b> bu mevkide seçim yapmadı.`);
  }
  ds.turnIdx++;
}

// Bot sıralarını senkron işler; sıra gerçek bir oyuncuya gelince ekranı çizip durur.
function draftStep() {
  const ds = draftState;
  for (let guard = 0; guard < 200; guard++) {
    if (!draftState || ds.stage !== "pick") return;
    if (ds.turnIdx >= ds.order.length) { finishDraftSlotRound(); return; }
    const participant = draftParticipant(ds.order[ds.turnIdx]);
    if (isDraftHumanControlled(participant) && draftEligiblePool(participant).length > 0) {
      renderDraftScreen();
      mpPublish();
      return;
    }
    applyDraftPick(participant, isDraftHumanControlled(participant) ? "" : botDraftPickTarget(participant));
  }
}

function submitDraftPick(targetOwnerClubId) {
  const ds = draftState;
  if (!ds || ds.stage !== "pick" || ds.order[ds.turnIdx] !== human.clubId) return;
  if (mpActive() && !mpIsHost()) {
    if (guestDraftInFlight) return;
    guestDraftInFlight = { type: "pick", seq: ds.seq };
    MP.sendAction("draftPick", { clubId: human.clubId, target: targetOwnerClubId || "-" });
    renderDraftScreen();
    return;
  }
  applyDraftPick(human, targetOwnerClubId);
  draftStep();
}

function finishDraftSlotRound() {
  const ds = draftState;
  const slot = draftCurrentSlot();
  for (const entry of ds.pool) {
    if (entry.status === "open") {
      ds.log.push(`— <b>${entry.player.name}</b> seçilmedi, ${draftParticipant(entry.ownerClubId).name} kadrosunda kaldı.`);
    }
  }
  // Oyuncusu alınmış ama kendisi bir seçim yapamamış (ya da pas geçmiş) katılımcılar mevkisi
  // boş kaldığı için 4 adaylı imza ekranına düşer.
  startDraftReplaceStage(participants.filter(p => p.squad[slot].vacant).map(p => p.clubId));
}

/* ---- Boşalan mevki için 4 adaylı imza ---- */

// Adaylar mevcut aday üretimiyle (buildSlotCandidates) üretilir; 4'e tamamlanana kadar tekrar
// çağrılır. Üretilen isimler geçici olarak usedWorldNames'e yazılır ki aynı oyuncu iki katılımcıya
// birden çıkmasın — imzalanmayanlar aşama sonunda havuza geri bırakılır.
function buildDraftReplacementCandidates(participant, slot) {
  const category = SLOT_CATEGORY[slot];
  const cands = [];
  const reserve = (cand) => {
    cands.push(cand);
    draftState.reservedNames.push(cand.name);
    usedWorldNames.add(cand.name);
  };
  while (cands.length < 4) {
    const batch = buildSlotCandidates(category).filter(c => !cands.some(x => x.name === c.name));
    if (batch.length === 0) { reserve(makeFreeAgent(category)); continue; }
    for (const c of batch) {
      if (cands.length >= 4) break;
      reserve(c);
    }
  }
  if (!cands.some(c => c.value <= participant.budget)) {
    cands[cands.length - 1] = makeFreeAgent(category, participant.budget);
  }
  return cands;
}

function botDraftReplacementIdx(participant, cands) {
  let bestIdx = 0;
  cands.forEach((c, i) => {
    if (c.value > participant.budget) return;
    if (cands[bestIdx].value > participant.budget || c.rating > cands[bestIdx].rating) bestIdx = i;
  });
  return bestIdx;
}

function startDraftReplaceStage(displacedClubIds) {
  const ds = draftState;
  const slot = draftCurrentSlot();
  ds.stage = "replace";
  ds.replaceCandidates = {};
  ds.replacePicks = {};
  ds.reservedNames = [];
  ds.seq++;
  for (const clubId of displacedClubIds) {
    ds.replaceCandidates[clubId] = buildDraftReplacementCandidates(draftParticipant(clubId), slot);
  }
  for (const clubId of displacedClubIds) {
    const p = draftParticipant(clubId);
    if (!isDraftHumanControlled(p)) applyDraftReplacement(p, botDraftReplacementIdx(p, ds.replaceCandidates[clubId]));
  }
  renderDraftScreen();
  mpPublish();
  maybeFinishDraftReplaceStage();
}

function applyDraftReplacement(participant, idx) {
  const ds = draftState;
  if (!ds || ds.stage !== "replace") return;
  const cands = ds.replaceCandidates[participant.clubId];
  if (!cands || ds.replacePicks[participant.clubId] !== undefined) return;
  const cand = cands[idx];
  if (!cand || cand.value > participant.budget) return;
  const slot = draftCurrentSlot();
  commitBuy(participant, slot, cand, cand.value);
  ds.replacePicks[participant.clubId] = idx;
  ds.reservedNames = ds.reservedNames.filter(n => n !== cand.name);
  ds.seq++;
  ds.log.push(`✍️ <b>${participant.name}</b>, boşalan ${SLOT_LABELS[slot]} mevkisine <b>${cand.name}</b> (${cand.rating}) oyuncusunu ${cand.value === 0 ? "bedava" : formatValue(cand.value)} transfer etti.`);
}

function submitDraftReplacement(idx) {
  const ds = draftState;
  if (!ds || ds.stage !== "replace" || ds.replacePicks[human.clubId] !== undefined) return;
  if (mpActive() && !mpIsHost()) {
    if (guestDraftInFlight) return;
    guestDraftInFlight = { type: "replace" };
    MP.sendAction("draftReplace", { clubId: human.clubId, idx });
    renderDraftScreen();
    return;
  }
  applyDraftReplacement(human, idx);
  renderDraftScreen();
  mpPublish();
  maybeFinishDraftReplaceStage();
}

function maybeFinishDraftReplaceStage() {
  const ds = draftState;
  if (!ds || ds.stage !== "replace") return;
  if (Object.keys(ds.replaceCandidates).some(id => ds.replacePicks[id] === undefined)) return;
  for (const name of ds.reservedNames) usedWorldNames.delete(name);
  ds.reservedNames = [];
  ds.replaceCandidates = {};
  ds.replacePicks = {};
  ds.slotIdx++;
  startDraftSlotRound();
}

// Draft bittiğinde ayrı bir transfer penceresi AÇILMAZ — draft seçimleri transferin yerine geçer.
// Transfer ekranı sadece draft özeti, altyapı teklifi ve sezon ilerletme kontrolleri için kullanılır.
function finishDraftPhase() {
  const transferLogMessages = [...draftState.log];
  draftState = null;
  guestDraftInFlight = null;

  for (const p of participants) {
    p.academyOffer = generateAcademyOffer(p);
    p.pendingOffers = [];
  }
  let botsAccepted = 0;
  let botsTotal = 0;
  for (const p of participants.filter(x => x.isBot)) {
    botsTotal++;
    if (p.academyOffer) {
      resolveAcademyOffer(p, p.academyOffer, transferLogMessages);
      if (p.academyOffer.accepted) botsAccepted++;
    }
  }
  renderTransferScreen(transferLogMessages, botsAccepted, botsTotal);
}

/* ---- Draft ekranı ---- */

// Guest'in uçuştaki draft aksiyonunu SADECE gerçekten işlendiğinde serbest bırakır — başka
// bir oyuncunun aksiyonunun tetiklediği yayınlarla erken açılmasını önler.
function refreshGuestDraftLock() {
  if (!guestDraftInFlight || !draftState) return;
  if (guestDraftInFlight.type === "replace") {
    if (draftState.stage !== "replace" || draftState.replacePicks[human.clubId] !== undefined) guestDraftInFlight = null;
    return;
  }
  if (draftState.stage !== "pick" || draftState.seq !== guestDraftInFlight.seq) guestDraftInFlight = null;
}

function renderDraftScreen() {
  if (!draftState) return;
  mpPhase = draftState.stage === "replace" ? "draftReplace" : "draft";
  refreshGuestDraftLock();

  rebuildScreen.classList.add("hidden");
  seasonTableScreen.classList.add("hidden");
  transferScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  draftScreen.classList.remove("hidden");

  draftSeasonNum.textContent = currentSeason;
  draftBudgetPill.textContent = "Bütçe: " + formatValue(human.budget);
  draftSlotsRow.innerHTML = draftState.slots.map((slot, i) => {
    const cls = i === draftState.slotIdx ? " active" : (i < draftState.slotIdx ? " done" : "");
    return `<span class="draft-slot-chip${cls}">${SLOT_LABELS[slot]}</span>`;
  }).join("");
  draftLog.innerHTML = draftState.log.slice(-14).map(m => `<div>${m}</div>`).join("");

  if (draftState.stage === "replace") renderDraftReplacePanel();
  else renderDraftPickPanel();
}

function renderDraftPickPanel() {
  draftReplacePanel.classList.add("hidden");
  draftPickPanel.classList.remove("hidden");

  const ds = draftState;
  const slot = draftCurrentSlot();
  const turnClubId = ds.order[ds.turnIdx];
  const myTurn = turnClubId === human.clubId && mpControlsClub(human.clubId);
  const locked = !!guestDraftInFlight;

  draftStageTitle.textContent = `${SLOT_LABELS[slot]} · Mevki ${ds.slotIdx + 1}/${ds.slots.length} — havuzdan bir oyuncu seç`;

  draftPoolGrid.innerHTML = ds.pool.map(entry => {
    const owner = draftParticipant(entry.ownerClubId);
    const mine = entry.ownerClubId === human.clubId;
    const pickable = myTurn && !locked && entry.status === "open" && !mine;
    const status = entry.status === "taken"
      ? `<div class="draft-pool-status taken">✅ ${draftParticipant(entry.takenByClubId).name} seçti</div>`
      : entry.status === "withdrawn"
        ? `<div class="draft-pool-status">— havuzdan çıktı</div>`
        : `<div class="draft-pool-status open">Havuzda</div>`;
    return `<div class="draft-pool-card${entry.status !== "open" ? " gone" : ""}${mine ? " mine" : ""}">
      <div class="draft-pool-owner">${owner.name}${mine ? " (Sen)" : ""}</div>
      <div class="rating-badge small">${entry.player.rating}</div>
      <div class="player-photo">${pixelAvatarSVG(entry.player.name)}</div>
      <div class="candidate-name">${entry.player.name}</div>
      <div class="candidate-meta">${entry.player.age} yaş · ${entry.player.nationality}</div>
      <div class="candidate-value">${formatValue(entry.player.value)}</div>
      ${status}
      <button class="keep-btn draft-pick-btn" data-owner="${entry.ownerClubId}"${pickable ? "" : " disabled"}>${mine ? "Kendi Oyuncun" : "🎯 Seç"}</button>
    </div>`;
  }).join("");

  draftPoolGrid.querySelectorAll(".draft-pick-btn").forEach(btn => {
    btn.addEventListener("click", () => submitDraftPick(btn.dataset.owner));
  });

  draftTurnRow.innerHTML = ds.order.map((id, i) => {
    const p = draftParticipant(id);
    const cls = i === ds.turnIdx ? " turn" : (i < ds.turnIdx ? " done" : "");
    return `<span class="bidder-chip${cls}${p === human ? " you" : ""}">${i + 1}. ${p.name}${p === human ? " (Sen)" : ""}</span>`;
  }).join("");

  draftPassBtn.disabled = !myTurn || locked;
  if (myTurn) {
    draftTurnHint.textContent = locked
      ? "Seçimin gönderildi, host'un onayı bekleniyor…"
      : "Sıra sende: havuzdan bir oyuncu seç (bedelsiz) ya da pas geç. Seçersen bu mevkideki kendi oyuncun kadrondan ayrılır.";
  } else {
    draftTurnHint.textContent = `${draftParticipant(turnClubId).name} bekleniyor…`;
  }
}

function renderDraftReplacePanel() {
  draftPickPanel.classList.add("hidden");
  draftReplacePanel.classList.remove("hidden");

  const ds = draftState;
  const slot = draftCurrentSlot();
  const cands = ds.replaceCandidates[human.clubId];
  const myPick = ds.replacePicks[human.clubId];
  const waiting = Object.keys(ds.replaceCandidates)
    .filter(id => ds.replacePicks[id] === undefined && id !== human.clubId)
    .map(id => draftParticipant(id).name);

  draftReplaceTitle.textContent = `${SLOT_LABELS[slot]} · Boşalan mevkiye imza`;
  draftReplaceGrid.innerHTML = "";

  if (!cands) {
    draftReplaceHint.textContent = waiting.length > 0
      ? `Bu mevkide yerine imza atman gerekmiyor — bekleniyor: ${waiting.join(", ")}`
      : "Sonraki mevkiye geçiliyor…";
    return;
  }

  draftReplaceHint.textContent = myPick !== undefined
    ? (waiting.length > 0 ? `İmzanı attın — bekleniyor: ${waiting.join(", ")}` : "İmzanı attın, sonraki mevkiye geçiliyor…")
    : "Oyuncun draftta başka bir kulübe gitti ve yerine kimseyi seçemedin. Gelen 4 adaydan birini imzala.";

  cands.forEach((cand, idx) => {
    const affordable = cand.value <= human.budget;
    const card = document.createElement("div");
    card.className = "offer-card";
    card.innerHTML = `
      <div class="offer-left">
        <div class="rating-badge small">${cand.rating}</div>
        <div class="player-photo">${pixelAvatarSVG(cand.name)}</div>
      </div>
      <div class="offer-text">
        <div class="offer-pos">${SLOT_LABELS[slot]} · ${cand.age} yaş · ${cand.nationality}</div>
        <div class="offer-name">${cand.name}</div>
        <div class="offer-current-value">${cand.club}</div>
        <div class="offer-buyer">${affordable ? "Bütçen yeterli" : "Bütçen yetmiyor"}</div>
      </div>
      <div class="offer-actions">
        <div class="offer-value">${cand.value === 0 ? "Bedava" : formatValue(cand.value)}</div>
        <div class="offer-buttons"><button class="accept-btn draft-sign-btn">✍️ İmzala</button></div>
        <div class="offer-status"></div>
      </div>
    `;
    if (myPick !== undefined) {
      card.classList.add("decided");
      card.querySelectorAll("button").forEach(b => (b.disabled = true));
      if (myPick === idx) card.querySelector(".offer-status").textContent = "✅ İmzalandı";
    } else if (!affordable || guestDraftInFlight) {
      card.querySelectorAll("button").forEach(b => (b.disabled = true));
    } else {
      card.querySelector(".draft-sign-btn").addEventListener("click", () => submitDraftReplacement(idx));
    }
    draftReplaceGrid.appendChild(card);
  });
}

/* ---------------- RENDER: PITCH & BOT STATUS ---------------- */

function renderPitch() {
  pitchEl.innerHTML = '<div class="pitch-field"></div>';
  for (let i = 0; i < SLOTS.length; i++) {
    const slot = SLOTS[i];
    const player = human.squad[slot];
    const coords = PITCH_COORDS[slot];

    let stateClass = "pending";
    if (i < slotIndex) stateClass = player.origin === "bought" ? "bought" : "kept";
    else if (i === slotIndex) stateClass = "active";

    const spot = document.createElement("div");
    spot.className = "pitch-spot " + stateClass;
    spot.style.top = coords.top;
    spot.style.left = coords.left;
    spot.title = `${player.name}, ${player.age} yaş (${player.rating})`;

    const shortName = player.name.split(" ").pop();
    const tag = i < slotIndex ? (player.origin === "bought" ? "🆕" : "") : "";

    spot.innerHTML = `
      <div class="ps-avatar">${pixelAvatarSVG(player.name)}</div>
      <div class="ps-rating">${player.rating}</div>
      <div class="ps-pos">${SLOT_SHORT[slot]}</div>
      <div class="ps-name">${shortName}</div>
      <div class="ps-tag">${tag}</div>
    `;
    pitchEl.appendChild(spot);
  }
}

// "Sen" sadece BU istemcinin kendi katılımcısı için, bot için 🤖, başka gerçek oyuncu için 👤.
function whoLabel(p) {
  return p === human ? " (Sen)" : p.isBot ? " 🤖" : " 👤";
}

function averageRating(p) {
  const total = SLOTS.reduce((s, slot) => s + p.squad[slot].rating, 0);
  return (total / SLOTS.length).toFixed(1);
}

function renderBotStatus() {
  const myAvgEl = document.getElementById("myAvgRating");
  if (myAvgEl) myAvgEl.textContent = `Ortalama Rating: ${averageRating(human)}`;

  if (mobileRatingsStrip) {
    mobileRatingsStrip.innerHTML = participants.map(p => {
      const cls = p === human ? "me" : "";
      const icon = p === human ? "⭐" : p.isBot ? "🤖" : "👤";
      return `<span class="mrs-item ${cls}">${icon} ${p.name}: <b>${averageRating(p)}</b></span>`;
    }).join("");
  }

  botStatusList.innerHTML = "";
  for (const p of participants.filter(x => x !== human)) {
    const avgRating = averageRating(p);
    const processed = Math.min(slotIndex, SLOTS.length);
    const chips = SLOTS.map((slot, i) => {
      const player = p.squad[slot];
      let cls = "pending";
      if (i < slotIndex) cls = player.origin === "bought" ? "bought" : "kept";
      else if (i === slotIndex) cls = "active";
      return `<span class="bot-chip ${cls}" title="${SLOT_LABELS[slot]}: ${player.name}, ${player.age} yaş (${player.rating})">${SLOT_SHORT[slot]}</span>`;
    }).join("");

    const card = document.createElement("div");
    card.className = "bot-card";
    card.innerHTML = `
      <div class="bot-card-head">
        <span class="bot-card-name">${p.name}${p.isBot ? " 🤖" : " 👤"}</span>
        <span class="bot-card-budget">${formatValue(p.budget)}</span>
      </div>
      <div class="bot-card-meta">Sezon ${currentSeason} · İşlenen: ${processed}/${SLOTS.length} · Ortalama Rating: <b>${avgRating}</b></div>
      <div class="bot-chip-row">${chips}</div>
    `;
    botStatusList.appendChild(card);
  }
}

/* ---------------- RESULTS ---------------- */

const careerSummaryEl = document.getElementById("careerSummary");

function renderCareerSummary() {
  if (seasonHistory.length === 0) {
    careerSummaryEl.innerHTML = "";
    return;
  }

  const ranked = participants.map(p => {
    const totalRating = SLOTS.reduce((s, slot) => s + p.squad[slot].rating, 0);
    return { p, points: careerPoints[p.clubId] || 0, totalRating };
  }).sort((a, b) => b.points - a.points || b.totalRating - a.totalRating);

  const champion = ranked[0];

  const pointsRows = ranked.map((r, idx) => `
    <div class="career-row${idx === 0 ? " champion" : ""}">
      <span class="career-rank">${idx === 0 ? "👑" : idx + 1}</span>
      <span class="career-name">${r.p.name}${whoLabel(r.p)}</span>
      <span class="career-points">${r.points} kariyer puanı</span>
    </div>
  `).join("");

  const historyRows = seasonHistory.map(h => {
    const winner = h.table[0];
    return `<div class="history-row">
      <b>Sezon ${h.season}:</b> Lig şampiyonu ${winner.p.name} (Kadro Reytingi ${winner.avgRating.toFixed(1)}, +${formatValue(winner.prize)}) ·
      Gol Kralı: ${h.topScorer.player.name} (${h.topScorer.p.name}, ${h.topScorer.goals} gol)
    </div>`;
  }).join("");

  const bonusRows = positionBonusBreakdown.length > 0 ? `
    <h4 class="career-subtitle">⭐ Mevki Bazlı En Büyük Yükseltme Bonusları (+1 puan)</h4>
    <div class="career-history">
      ${positionBonusBreakdown.map(b => `<div class="history-row">
        <b>${SLOT_LABELS[b.slot]}:</b> ${b.clubName} (başlangıca göre +${b.upgrade} rating)
      </div>`).join("")}
    </div>
  ` : "";

  careerSummaryEl.innerHTML = `
    <h3 class="career-title">🏆 ${seasonHistory.length} Sezonluk Kariyer Şampiyonu: ${champion.p.name}</h3>
    <div class="career-points-table">${pointsRows}</div>
    ${bonusRows}
    <div class="career-history">${historyRows}</div>
  `;
}

// 5 sezonun sonunda, HER mevkide başlangıç kadrosuna göre en büyük rating yükseltmesini
// yapan takıma o mevki için 1 kariyer puanı verir (eşitlikte kimseye verilmez). Bir kez uygulanır.
function awardPositionUpgradeBonus() {
  if (positionBonusAwarded) return;
  positionBonusAwarded = true;
  positionBonusBreakdown = [];
  for (const slot of SLOTS) {
    let bestClubId = null;
    let bestUpgrade = -Infinity;
    let tie = false;
    for (const p of participants) {
      const startRating = startingSquadRatings[p.clubId]?.[slot] ?? p.squad[slot].rating;
      const upgrade = p.squad[slot].rating - startRating;
      if (upgrade > bestUpgrade) { bestUpgrade = upgrade; bestClubId = p.clubId; tie = false; }
      else if (upgrade === bestUpgrade) { tie = true; }
    }
    if (bestClubId && !tie) {
      careerPoints[bestClubId] += POSITION_UPGRADE_CAREER_POINT;
      const winnerP = participants.find(p => p.clubId === bestClubId);
      positionBonusBreakdown.push({ slot, clubName: winnerP.name, upgrade: bestUpgrade });
    }
  }
}

function showResults() {
  mpPhase = "result";
  const seasonsPlayed = seasonHistory.length;
  const isFullCareer = seasonsPlayed >= MAX_SEASONS;
  if (isFullCareer && (!mpActive() || mpIsHost())) awardPositionUpgradeBonus();
  mpPublish();
  rebuildScreen.classList.add("hidden");
  transferScreen.classList.add("hidden");
  seasonTableScreen.classList.add("hidden");
  draftScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  resultTitle.textContent = isFullCareer
    ? `🏆 Kariyer Bitti — ${seasonsPlayed} Sezon Tamamlandı`
    : `Kariyer Özeti — ${seasonsPlayed} Sezon Sonunda`;

  renderCareerSummary();

  const summaries = participants.map(p => {
    const totalRating = SLOTS.reduce((s, slot) => s + p.squad[slot].rating, 0);
    const totalValue = SLOTS.reduce((s, slot) => s + p.squad[slot].value, 0);
    return { p, totalRating, totalValue };
  });
  const maxRating = Math.max(...summaries.map(s => s.totalRating));

  resultBody.innerHTML = "";
  summaries.forEach(({ p, totalRating, totalValue }, idx) => {
    const isWinner = totalRating === maxRating;
    const div = document.createElement("div");
    div.className = "result-team" + (isWinner ? " winner" : "") + (idx === 0 ? " tab-active" : "");
    div.dataset.tabIdx = idx;
    const rows = SLOTS.map(slot => {
      const x = p.squad[slot];
      return `<div class="result-slot">
        <span class="rs-avatar">${pixelAvatarSVG(x.name)}</span>
        <span class="pos-tag">${SLOT_SHORT[slot]}</span>
        <span class="result-rating">${x.rating}</span>
        <span>${x.name} <span class="age-tag">${x.age}y</span> <span class="origin-tag ${x.origin}">${x.origin === "bought" ? "Yeni" : x.origin === "academy" ? "🌱 Altyapı" : "Kadroda"}</span></span>
        <span class="rv">${formatValue(x.value)}</span>
      </div>`;
    }).join("");
    div.innerHTML = `
      <h3><span>${p.name}${whoLabel(p)}${isWinner ? " 👑" : ""}</span></h3>
      <div class="result-totals">
        <span>Ortalama Rating: <b>${(totalRating / SLOTS.length).toFixed(1)}</b></span>
        <span>Kadro Değeri: <b>${formatValue(totalValue)}</b></span>
        <span>Kalan Bütçe: <b>${formatValue(p.budget)}</b></span>
      </div>
      ${rows}
    `;
    resultBody.appendChild(div);
  });

  const resultTabs = document.getElementById("resultTabs");
  if (resultTabs) {
    resultTabs.innerHTML = summaries.map(({ p }, idx) => `
      <button class="result-tab-btn${idx === 0 ? " active" : ""}" data-tab-idx="${idx}" type="button">
        ${p === human ? "⭐" : p.isBot ? "🤖" : "👤"} ${p.name}
      </button>
    `).join("");
    resultTabs.querySelectorAll(".result-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = btn.dataset.tabIdx;
        resultTabs.querySelectorAll(".result-tab-btn").forEach(b => b.classList.toggle("active", b === btn));
        resultBody.querySelectorAll(".result-team").forEach(el => el.classList.toggle("tab-active", el.dataset.tabIdx === idx));
      });
    });
  }
}
