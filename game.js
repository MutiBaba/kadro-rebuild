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
const BID_INCREMENT = 5_000_000;
const PARTICIPANT_DEFS = [
  { clubId: "fenerbahce", isBot: false },
  { clubId: "besiktas", isBot: true },
  { clubId: "galatasaray", isBot: true }
];
const BIG_CLUBS = [
  "Real Madrid", "Manchester City", "Bayern Münih", "Paris Saint-Germain", "Liverpool",
  "Barcelona", "Chelsea", "Juventus", "Arsenal", "Inter", "Manchester United", "Atletico Madrid"
];
const MAX_SEASONS = 5;
const LEAGUE_PRIZES = [60_000_000, 40_000_000, 20_000_000];
const LEAGUE_CAREER_POINTS = [3, 1, 0];
const TOP_SCORER_PRIZE = 10_000_000;

let participants = [];
let human = null;
let slotIndex = 0;
let currentSeason = 1;
let usedWorldNames = new Set();
let carryLog = [];
let round = null;
let auction = null;
let careerPoints = {};
let seasonHistory = [];

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
const squadToggleBtn = document.getElementById("squadToggleBtn");
const squadPanelBody = document.getElementById("squadPanelBody");
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

startBtn.addEventListener("click", startRebuild);
restartBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
});
keepBtn.addEventListener("click", onKeep);
sellBtn.addEventListener("click", onSell);
raiseBidBtn.addEventListener("click", humanRaiseBid);
concedeBidBtn.addEventListener("click", humanConcede);
continueSeasonBtn.addEventListener("click", onContinueSeason);
endCareerBtn.addEventListener("click", () => showResults(false));
seasonTableContinueBtn.addEventListener("click", () => {
  seasonTableScreen.classList.add("hidden");
  runTransferWindow();
});
squadToggleBtn.addEventListener("click", () => {
  const expanded = squadPanelBody.classList.toggle("expanded");
  squadToggleBtn.textContent = expanded ? "Kadroyu Gizle ▴" : "Kadroyu Göster ▾";
});

function formatValue(v) {
  return "€" + (v / 1_000_000).toFixed(1).replace(".", ",") + "M";
}

function prospectiveBudget(participant, slot) {
  const current = participant.squad[slot];
  return participant.budget + (current.vacant ? 0 : current.value);
}

function logMessage(msg) {
  carryLog.push(msg);
}

/* ---------------- SETUP ---------------- */

function startRebuild() {
  participants = PARTICIPANT_DEFS.map(def => {
    const club = PLAYERS_DATA.clubs.find(c => c.id === def.clubId);
    const squad = {};
    for (const slot of SLOTS) {
      const p = club.xi[slot];
      squad[slot] = { name: p.name, value: p.value, rating: p.rating, age: p.age, nationality: p.nationality, club: club.name, origin: "kept" };
    }
    return { clubId: def.clubId, name: club.name, logo: club.logo, isBot: def.isBot, budget: START_BUDGET, squad };
  });
  human = participants[0];
  slotIndex = 0;
  currentSeason = 1;
  usedWorldNames = new Set();
  carryLog = [];
  careerPoints = {};
  for (const p of participants) careerPoints[p.clubId] = 0;
  seasonHistory = [];

  setupScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  transferScreen.classList.add("hidden");
  seasonTableScreen.classList.add("hidden");
  rebuildScreen.classList.remove("hidden");

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
  round = { slot, category, sharedCandidates: pickTieredCandidates(categoryPool(category), 3) };
  if (human.squad[slot].vacant) {
    renderForcedFill();
  } else {
    renderDecideView();
  }
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

function onKeep() {
  round.humanDecision = { sold: false };
  proceedAfterHuman();
}

function onSell() {
  const slot = round.slot;
  const player = human.squad[slot];
  const budget = prospectiveBudget(human, slot);
  const banner = `${player.name} satılırsa (+${formatValue(player.value)}) bütçen ${formatValue(budget)} olur. Kimi hedefleyeceksin? (Satış kesindir, vazgeçemezsin)`;
  renderCandidateSelection(slot, budget, banner, round.sharedCandidates, (cand) => {
    round.humanDecision = { sold: true, target: cand };
    proceedAfterHuman();
  });
}

function renderForcedFill() {
  const slot = round.slot;
  const budget = prospectiveBudget(human, slot);
  const banner = `${SLOT_LABELS[slot]} mevkin sezon başında boş kaldı (oyuncu transfer oldu) — birini transfer etmen gerekiyor. Bütçen: ${formatValue(budget)}`;
  progressLine.textContent = `Sezon ${currentSeason} · Mevki ${slotIndex + 1} / ${SLOTS.length}`;
  renderCandidateSelection(slot, budget, banner, round.sharedCandidates, (cand) => {
    round.humanDecision = { sold: true, target: cand };
    proceedAfterHuman();
  });
}

// Havuzdan ucuz / orta / pahalı adaylar seçer (mümkün olduğunca farklı, varsayılan 3 aday).
function pickTieredCandidates(pool, count = 3) {
  const sorted = [...pool].sort((a, b) => a.value - b.value);
  if (sorted.length <= count) return sorted;
  if (count === 1) return [sorted[0]];
  if (count === 2) return [sorted[0], sorted[sorted.length - 1]];
  const cheap = sorted[0];
  const expensive = sorted[sorted.length - 1];
  let midIdx = Math.floor(sorted.length / 2);
  if (midIdx === 0) midIdx = 1;
  if (midIdx === sorted.length - 1) midIdx = sorted.length - 2;
  const mid = sorted[midIdx];
  return [cheap, mid, expensive];
}

function renderCandidateSelection(slot, budget, bannerText, candidates, onPick) {
  renderRoundLog();
  sellBanner.innerHTML = bannerText;

  const sorted = [...candidates].sort((a, b) => a.value - b.value);
  // En ucuz seçenek bütçeyi aşsa bile her zaman alınabilir olsun ki oyun asla tıkanmasın.
  const cheapestValue = sorted.length ? sorted[0].value : 0;

  candidateGrid.innerHTML = "";
  sorted.forEach((cand, idx) => {
    const isGuaranteed = cand.value === cheapestValue;
    const canAfford = cand.value <= budget || isGuaranteed;
    const card = document.createElement("div");
    card.className = "candidate-card" + (canAfford ? "" : " disabled");
    let tierLabel = "";
    if (sorted.length === 3) tierLabel = idx === 0 ? "Ucuz" : idx === 2 ? "Pahalı" : "Orta";
    else if (sorted.length === 2) tierLabel = idx === 0 ? "Ucuz" : "Pahalı";
    card.innerHTML = `
      ${tierLabel ? `<div class="tier-tag">${tierLabel}</div>` : ""}
      <div class="rating-badge small">${cand.rating}</div>
      <div class="player-photo">${pixelAvatarSVG(cand.name)}</div>
      <div class="candidate-club">${cand.club}</div>
      <div class="candidate-name">${cand.name}</div>
      <div class="candidate-meta">${cand.age} yaş · ${cand.nationality}</div>
      <div class="candidate-value">${formatValue(cand.value)}${cand.value > budget ? " ⚠️" : ""}</div>
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

function makeFreeAgent(category) {
  return {
    name: `Serbest Oyuncu #${Math.floor(1000 + Math.random() * 9000)}`,
    club: "Serbest",
    nationality: "—",
    value: 1_500_000,
    rating: 64 + Math.floor(Math.random() * 8),
    age: 22 + Math.floor(Math.random() * 12)
  };
}

function categoryPool(category) {
  const pool = WORLD_MARKET[category].filter(p => !usedWorldNames.has(p.name));
  return pool.length > 0 ? pool : [makeFreeAgent(category)];
}

/* ---------------- BOT AI ---------------- */

// Bu turda henüz kimseye verilmemiş, ekranda gösterilen ortak 3 aday.
function remainingSharedCandidates() {
  return round.sharedCandidates.filter(c => !usedWorldNames.has(c.name));
}

function botDecide(participant, slot) {
  const current = participant.squad[slot];
  const budget = prospectiveBudget(participant, slot);
  let pool = remainingSharedCandidates();
  let affordable = pool.filter(p => p.value <= budget);

  if (current.vacant) {
    if (affordable.length === 0) {
      const fallbackPool = pool.length > 0 ? pool : categoryPool(SLOT_CATEGORY[slot]);
      affordable = [...fallbackPool].sort((a, b) => a.value - b.value).slice(0, 1);
    }
    const best = affordable.reduce((a, b) => (b.rating > a.rating ? b : a));
    return { sold: true, target: best };
  }

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
  const affordable = pool.filter(p => p.value <= budget);
  if (affordable.length > 0) return affordable.reduce((a, b) => (b.rating > a.rating ? b : a));
  return [...pool].sort((a, b) => a.value - b.value)[0];
}

/* ---------------- CONFLICT RESOLUTION ---------------- */

function proceedAfterHuman() {
  const slot = round.slot;
  const sellers = [];
  if (round.humanDecision.sold) sellers.push({ participant: human, target: round.humanDecision.target });
  for (const p of participants.filter(x => x.isBot)) {
    const decision = botDecide(p, slot);
    if (decision.sold) sellers.push({ participant: p, target: decision.target });
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

  const botLosers = allGroupParticipants.filter(p => p !== winnerParticipant && p.isBot);
  for (const p of botLosers) {
    const fallback = pickFallback(p, round.slot);
    if (fallback) commitBuy(p, round.slot, fallback, fallback.value);
    else commitKeep(p, round.slot);
  }

  auction = null;

  const humanLostHere = allGroupParticipants.includes(human) && winnerParticipant !== human;
  if (humanLostHere) {
    renderAuctionLossPicker();
  } else {
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
  const humanEntry = group.find(g => g.participant === human);

  if (!humanEntry) {
    const bidders = groupParticipants.map(p => ({
      participant: p,
      maxWillingness: Math.min(prospectiveBudget(p, round.slot), Math.round(candidate.value * 1.5))
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
    maxWillingness: g.participant === human
      ? prospectiveBudget(human, round.slot)
      : Math.min(prospectiveBudget(g.participant, round.slot), Math.round(candidate.value * 1.5))
  }));

  auction = {
    candidate,
    bidders,
    currentBid: candidate.value,
    groupParticipants
  };
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

  const canRaise = (auction.currentBid + BID_INCREMENT) <= prospectiveBudget(human, round.slot);
  raiseBidBtn.disabled = !canRaise;
  raiseBidBtn.textContent = canRaise ? `💰 Teklif Ver (+${formatValue(BID_INCREMENT)})` : "💸 Bütçen Yetmiyor";
}

function humanRaiseBid() {
  const newBid = auction.currentBid + BID_INCREMENT;
  if (newBid > prospectiveBudget(human, round.slot)) return;
  auction.currentBid = newBid;
  auction.bidders = auction.bidders.filter(b => b.participant === human || b.maxWillingness >= newBid);

  if (auction.bidders.length === 1) {
    logMessage(`🏆 Sen <b>${auction.candidate.name}</b> için açık artırmayı ${formatValue(auction.currentBid)} teklifle kazandın!`);
    finishGroup(human, auction.currentBid, auction.candidate, auction.groupParticipants);
    return;
  }
  updateAuctionUI();
}

function humanConcede() {
  const candidate = auction.candidate;
  const remainingBots = auction.bidders.filter(b => b.participant !== human);
  const groupParticipants = auction.groupParticipants;

  if (remainingBots.length === 1) {
    logMessage(`Açık artırmada pes ettin — <b>${remainingBots[0].participant.name}</b>, ${candidate.name}'i ${formatValue(auction.currentBid)} karşılığında aldı.`);
    finishGroup(remainingBots[0].participant, auction.currentBid, candidate, groupParticipants);
  } else {
    const sorted = [...remainingBots].sort((a, b) => b.maxWillingness - a.maxWillingness);
    const winner = sorted[0];
    const runnerUp = sorted[1];
    const finalPrice = Math.max(auction.currentBid, Math.min(winner.maxWillingness, runnerUp.maxWillingness + BID_INCREMENT));
    logMessage(`Açık artırmada pes ettin — <b>${winner.participant.name}</b>, ${candidate.name}'i ${formatValue(finalPrice)} karşılığında aldı.`);
    finishGroup(winner.participant, finalPrice, candidate, groupParticipants);
  }
}

/* ---------------- COMMIT ---------------- */

function commitBuy(participant, slot, candidate, price) {
  const oldPlayer = participant.squad[slot];
  if (!oldPlayer.vacant) participant.budget += oldPlayer.value;
  participant.budget -= price;
  usedWorldNames.add(candidate.name);
  participant.squad[slot] = {
    name: candidate.name,
    value: candidate.value,
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

function teamAttack(p) {
  return (p.squad.st.rating + p.squad.cam.rating + p.squad.rw.rating + p.squad.lw.rating) / 4;
}

function teamDefense(p) {
  return (p.squad.gk.rating + p.squad.cb1.rating + p.squad.cb2.rating + p.squad.rb.rating + p.squad.lb.rating) / 5;
}

function simulateGoals(attack, defense) {
  const base = 1.3 + (attack - defense) / 14;
  const goals = Math.round(base + (Math.random() * 3 - 1.2));
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
    const goalsHome = simulateGoals(teamAttack(home), teamDefense(away));
    const goalsAway = simulateGoals(teamAttack(away), teamDefense(home));
    const sh = stats[home.clubId];
    const sa = stats[away.clubId];
    sh.played++; sa.played++;
    sh.gf += goalsHome; sh.ga += goalsAway;
    sa.gf += goalsAway; sa.ga += goalsHome;
    if (goalsHome > goalsAway) { sh.w++; sh.pts += 3; sa.l++; }
    else if (goalsHome < goalsAway) { sa.w++; sa.pts += 3; sh.l++; }
    else { sh.d++; sa.d++; sh.pts += 1; sa.pts += 1; }
  }

  const table = Object.values(stats).sort((a, b) => {
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

  seasonHistory.push({ season: currentSeason, table, topScorer: scorers[0] });

  renderSeasonTableScreen(table, scorers);
}

function renderSeasonTableScreen(table, scorers) {
  rebuildScreen.classList.add("hidden");
  seasonTableScreen.classList.remove("hidden");
  tableSeasonNum.textContent = `${currentSeason} / ${MAX_SEASONS}`;

  leagueTableBody.innerHTML = table.map(row => {
    const gd = row.gf - row.ga;
    return `<tr class="${row.rank === 1 ? "champion" : ""}">
      <td>${row.rank === 1 ? "🥇" : row.rank}</td>
      <td class="team-cell">${row.p.name}${row.p.isBot ? " 🤖" : " (Sen)"}</td>
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

  renderBotStatus();
}

/* ---------------- TRANSFER WINDOW ---------------- */

function sampleSlots(n) {
  const arr = [...SLOTS];
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
  let offer = player.value * ageFactor * hypeFactor * randomFactor;
  offer = Math.max(offer, player.value * (isVeteran ? 0.25 : 0.5));
  return Math.round(offer / 500000) * 500000;
}

function runTransferWindow() {
  const transferLogMessages = [];

  for (const p of participants) {
    const slots = sampleSlots(3);
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

  for (const p of participants.filter(x => x.isBot)) {
    for (const offer of p.pendingOffers) {
      const accept = offer.offerValue > offer.player.value * 1.15;
      if (accept) {
        p.budget += offer.offerValue;
        p.squad[offer.slot].vacant = true;
        transferLogMessages.push(`📤 <b>${p.name}</b>: ${offer.player.name} (${offer.player.age} yaş), ${offer.buyerClub}'a ${formatValue(offer.offerValue)} karşılığında transfer oldu.`);
      } else {
        transferLogMessages.push(`🚫 <b>${p.name}</b>: ${offer.buyerClub}'ın ${offer.player.name} için ${formatValue(offer.offerValue)} teklifini reddetti.`);
      }
      offer.decided = true;
    }
  }

  renderTransferScreen(transferLogMessages);
}

function renderTransferScreen(transferLogMessages) {
  rebuildScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  seasonTableScreen.classList.add("hidden");
  transferScreen.classList.remove("hidden");

  transferSeasonNum.textContent = currentSeason;
  botTransferLog.innerHTML = transferLogMessages.map(m => `<div>${m}</div>`).join("");
  transferContinueRow.classList.add("hidden");

  transferOffers.innerHTML = "";
  human.pendingOffers.forEach((offer, idx) => {
    const card = document.createElement("div");
    card.className = "offer-card";
    card.innerHTML = `
      <div class="rating-badge small">${offer.player.rating}</div>
      <div class="player-photo">${pixelAvatarSVG(offer.player.name)}</div>
      <div class="offer-pos">${SLOT_LABELS[offer.slot]} · ${offer.player.age} yaş</div>
      <div class="offer-name">${offer.player.name}</div>
      <div class="offer-current-value">Güncel Değeri: ${formatValue(offer.player.value)}</div>
      <div class="offer-buyer">${offer.buyerClub} teklif veriyor</div>
      <div class="offer-value">${formatValue(offer.offerValue)}</div>
      <div class="offer-buttons">
        <button class="accept-btn">✅ Kabul Et</button>
        <button class="reject-btn">❌ Reddet</button>
      </div>
      <div class="offer-status"></div>
    `;
    card.querySelector(".accept-btn").addEventListener("click", () => handleOfferDecision(idx, true, card));
    card.querySelector(".reject-btn").addEventListener("click", () => handleOfferDecision(idx, false, card));
    transferOffers.appendChild(card);
  });
}

function handleOfferDecision(idx, accept, card) {
  const offer = human.pendingOffers[idx];
  if (offer.decided) return;
  offer.decided = true;

  if (accept) {
    human.budget += offer.offerValue;
    human.squad[offer.slot].vacant = true;
    card.querySelector(".offer-status").textContent = `✅ Satıldı (+${formatValue(offer.offerValue)})`;
  } else {
    card.querySelector(".offer-status").textContent = "❌ Reddedildi, oyuncu kadroda kaldı";
  }
  card.querySelectorAll("button").forEach(b => (b.disabled = true));
  card.classList.add("decided");

  if (human.pendingOffers.every(o => o.decided)) {
    transferContinueRow.classList.remove("hidden");
    const isLastSeason = currentSeason >= MAX_SEASONS;
    continueSeasonBtn.classList.toggle("hidden", isLastSeason);
    endCareerBtn.textContent = isLastSeason ? "🏆 Kariyer Özetini Gör" : "Kariyeri Burada Bitir";
  }
}

function onContinueSeason() {
  currentSeason++;
  slotIndex = 0;
  transferScreen.classList.add("hidden");
  rebuildScreen.classList.remove("hidden");
  renderPitch();
  renderBotStatus();
  startSlotRound();
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

function averageRating(p) {
  const total = SLOTS.reduce((s, slot) => s + p.squad[slot].rating, 0);
  return (total / SLOTS.length).toFixed(1);
}

function renderBotStatus() {
  const myAvgEl = document.getElementById("myAvgRating");
  if (myAvgEl) myAvgEl.textContent = `Ortalama Rating: ${averageRating(human)}`;

  botStatusList.innerHTML = "";
  for (const p of participants.filter(x => x.isBot)) {
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
        <span class="bot-card-name">${p.name} 🤖</span>
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
      <span class="career-name">${r.p.name}${r.p.isBot ? " 🤖" : " (Sen)"}</span>
      <span class="career-points">${r.points} kariyer puanı</span>
    </div>
  `).join("");

  const historyRows = seasonHistory.map(h => {
    const winner = h.table[0];
    return `<div class="history-row">
      <b>Sezon ${h.season}:</b> Lig şampiyonu ${winner.p.name} (${winner.pts} puan, +${formatValue(winner.prize)}) ·
      Gol Kralı: ${h.topScorer.player.name} (${h.topScorer.p.name}, ${h.topScorer.goals} gol)
    </div>`;
  }).join("");

  careerSummaryEl.innerHTML = `
    <h3 class="career-title">🏆 ${seasonHistory.length} Sezonluk Kariyer Şampiyonu: ${champion.p.name}</h3>
    <div class="career-points-table">${pointsRows}</div>
    <div class="career-history">${historyRows}</div>
  `;
}

function showResults() {
  rebuildScreen.classList.add("hidden");
  transferScreen.classList.add("hidden");
  seasonTableScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const seasonsPlayed = seasonHistory.length;
  const isFullCareer = seasonsPlayed >= MAX_SEASONS;
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
  for (const { p, totalRating, totalValue } of summaries) {
    const isWinner = totalRating === maxRating;
    const div = document.createElement("div");
    div.className = "result-team" + (isWinner ? " winner" : "");
    const rows = SLOTS.map(slot => {
      const x = p.squad[slot];
      return `<div class="result-slot">
        <span class="rs-avatar">${pixelAvatarSVG(x.name)}</span>
        <span class="pos-tag">${SLOT_SHORT[slot]}</span>
        <span class="result-rating">${x.rating}</span>
        <span>${x.name} <span class="age-tag">${x.age}y</span> <span class="origin-tag ${x.origin}">${x.origin === "bought" ? "Yeni" : "Kadroda"}</span></span>
        <span class="rv">${formatValue(x.value)}</span>
      </div>`;
    }).join("");
    div.innerHTML = `
      <h3><span>${p.name}${p.isBot ? " 🤖" : " (Sen)"}${isWinner ? " 👑" : ""}</span></h3>
      <div class="result-totals">
        <span>Ortalama Rating: <b>${(totalRating / SLOTS.length).toFixed(1)}</b></span>
        <span>Kadro Değeri: <b>${formatValue(totalValue)}</b></span>
        <span>Kalan Bütçe: <b>${formatValue(p.budget)}</b></span>
      </div>
      ${rows}
    `;
    resultBody.appendChild(div);
  }
}
