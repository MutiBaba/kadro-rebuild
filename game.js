const SLOTS = ["gk", "rb", "cb1", "cb2", "lb", "dm1", "dm2", "rw", "cam", "lw", "st"];
// Slot anahtarları (gk, cb1, dm2 …) MANTIKSAL kimliklerdir ve asla çevrilmez; sadece
// EKRANDA GÖSTERİLEN etiketleri i18n'den gelir. SLOT_LABELS/SLOT_SHORT birer Proxy'dir:
// `SLOT_LABELS[slot]` her okunduğunda AKTİF dildeki etiketi döndürür, böylece dil
// değiştiğinde eski bir kopya ekranda kalmaz.
const SLOT_CATEGORY = {
  gk: "gk", rb: "rb", cb1: "cb", cb2: "cb", lb: "lb",
  dm1: "dm", dm2: "dm", rw: "rw", cam: "cam", lw: "lw", st: "st"
};
const SLOT_LABELS = new Proxy({}, {
  get: (_, slot) => (SLOT_CATEGORY[slot] ? t("slot." + SLOT_CATEGORY[slot]) : "")
});
const SLOT_SHORT = new Proxy({}, {
  get: (_, slot) => (SLOT_CATEGORY[slot] ? t("slotShort." + SLOT_CATEGORY[slot]) : "")
});
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

// ---- Lig kayıtları (sadece BOTLARA KARŞI modu için) ----
// Çok oyunculu (online) mod her zaman Süper Lig'dir; lig seçici MP akışında görünmez.
// Diğer liglerin oyuncu verileri şu an PLACEHOLDER'dır (bkz. data/players_*.js).
const LEAGUES = [
  { id: "superlig",      name: "Süper Lig",      flag: "🇹🇷", data: PLAYERS_DATA },
  { id: "premierleague", name: "Premier League", flag: "🏴", data: typeof PREMIER_LEAGUE_DATA !== "undefined" ? PREMIER_LEAGUE_DATA : null },
  { id: "laliga",        name: "La Liga",        flag: "🇪🇸", data: typeof LA_LIGA_DATA !== "undefined" ? LA_LIGA_DATA : null },
  { id: "bundesliga",    name: "Bundesliga",     flag: "🇩🇪", data: typeof BUNDESLIGA_DATA !== "undefined" ? BUNDESLIGA_DATA : null },
  { id: "ligue1",        name: "Ligue 1",        flag: "🇫🇷", data: typeof LIGUE1_DATA !== "undefined" ? LIGUE1_DATA : null }
].filter(l => l.data && Array.isArray(l.data.clubs) && l.data.clubs.length > 0);

let activeLeagueId = "superlig";
function activeLeague() {
  return LEAGUES.find(l => l.id === activeLeagueId) || LEAGUES[0];
}
function activeLeagueData() { return activeLeague().data; }
function leagueClubs() { return activeLeagueData().clubs; }
// Kulüp araması önce aktif ligde yapılır; bulunamazsa TÜM ligler taranır. Böylece
// çok oyunculu mod (her zaman Süper Lig kimlikleriyle çalışır) aktif lig ne olursa
// olsun kulübünü bulmaya devam eder.
function findClub(clubId) {
  let c = leagueClubs().find(x => x.id === clubId);
  if (c) return c;
  for (const l of LEAGUES) {
    c = l.data.clubs.find(x => x.id === clubId);
    if (c) return c;
  }
  return null;
}
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
    : t("player.randomTeam", { n: Math.floor(100 + Math.random() * 900) });
  takenNames.add(name);
  return name;
}
const PARTICIPANT_DEFS = [
  { clubId: "fenerbahce", isBot: false },
  { clubId: "besiktas", isBot: true },
  { clubId: "galatasaray", isBot: true }
];
const BIG_CLUBS = [
  "Real Madryd", "Manchestor City", "Bayern Munnih", "Paris Saint-Germaine", "Liverpul",
  "Barcelonna", "Chelseah", "Juventuss", "Arsenol", "Intter", "Manchestor United", "Atletiko Madrid"
];
let MAX_SEASONS = 5; // Botlara karşı modda 5'in katları halinde (max 30) seçilebilir.
const LEAGUE_PRIZES = [60_000_000, 40_000_000, 20_000_000];
const LEAGUE_CAREER_POINTS = [3, 2, 1];
const TOP_SCORER_PRIZE = 10_000_000;
const TOP_SCORER_CAREER_POINT = 1;
const POSITION_UPGRADE_CAREER_POINT = 1;

// Her sezon sonunda altyapıdan çıkan genç oyuncu için isim havuzu — bir isim bir kez kullanılır.
const ACADEMY_NAME_POOLS = {
  superlig: [
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
  ],
  premierleague: [
    "Jack Harrison", "Oliver Bennett", "Harry Whitfield", "George Sutton", "Charlie Mercer",
    "Thomas Bardsley", "James Holloway", "William Pryce", "Joseph Attwood", "Daniel Kestrel",
    "Alfie Nunn", "Freddie Colston", "Archie Fenwick", "Leo Sandford", "Oscar Whitlock",
    "Finley Rourke", "Theo Standish", "Ethan Marchant", "Noah Kellerman", "Jacob Trench",
    "Callum Ashworth", "Ryan Petit", "Dylan Ferriby", "Lewis Cartmell", "Connor Blakemore",
    "Bradley Fenn", "Kai Rutledge", "Elliot Sowerby", "Reece Alderton", "Jamie Corfield",
    "Owen Blackstock", "Toby Winstone", "Max Larrimore", "Sam Ecclestone", "Ben Withington",
    "Luke Farrant", "Adam Broxton", "Josh Kingsleigh", "Aaron Dunmore", "LiamOsgathorpe",
    "Tyler Rushworth", "Nathan Colefax", "Harvey Standen", "Ollie Braithewick", "Riley Cussen",
    "Mason Fairclough", "Jude Pemberton", "Cole Wetherby", "Blake Sowden", "Dean Halloway"
  ],
  laliga: [
    "Pablo Serra", "Álvaro Feijoo", "Iker Zubiaurre", "Nacho Perales", "Mateo Cifuentes",
    "Hugo Bermejo", "Diego Larraz", "Marcos Peláez", "Adrián Otxoa", "Rubén Cascales",
    "Guillermo Vidales", "Javier Montull", "Lucas Herranz", "Bruno Escoriaza", "Enzo Padrón",
    "Izan Trujillano", "Martín Ausejo", "Gonzalo Belástegui", "Darío Miralbes", "Samuel Orozco",
    "Leo Zurutuza", "Sergio Millares", "Rodrigo Escamilla", "Aitor Loinaz", "Óliver Segurola",
    "Christian Farelo", "Marc Iturbide", "Unai Belóstegui", "Eric Somoza", "Iván Pellicer",
    "Andrés Uranga", "Raúl Berastegi", "Fernando Ochandiano", "Yeray Solabarrieta", "Cristian Muinelo",
    "Alonso Errandonea", "Ismael Bilbatua", "Aaron Legarreta", "David Zubizarreta", "Pol Sarabia",
    "Manu Retolaza", "Kepa Undabeitia", "Jon Etxaniz", "Asier Larrañeta", "Iñigo Zorrozua",
    "Aimar Beskoetxea", "Ander Uriarte", "Mikel Astarloa", "Julen Barandiaran", "Gorka Intxausti"
  ],
  bundesliga: [
    "Jonas Vogtmann", "Lukas Beisenherz", "Finn Ottersbach", "Paul Kesselring", "Max Wienecke",
    "Elias Brachmann", "Felix Hallervorden", "Moritz Schallenberg", "Nico Trettenbach", "Tim Wackernagel",
    "Leon Bergsträsser", "Julian Rehkopf", "David Steglitz", "Fabian Osterhagen", "Simon Wachendorf",
    "Jannik Kranenburg", "Erik Dallmeier", "Tom Sassenberg", "Kevin Lindenmayer", "Marvin Achterberg",
    "Niklas Bruckmoser", "Robin Fassbender", "Alexander Storbeck", "Philipp Kranzler", "Sebastian Moosbrugger",
    "Benedikt Wispelaere", "Christoph Riedmayer", "Florian Enskat", "Matthias Grünewald", "Dominik Herrgesell",
    "Jan Uhlenbrock", "Timo Bickelhaupt", "Marius Kreutzberg", "Justus Rothacker", "Anton Wehmeyer",
    "Lorenz Kaltenegger", "Vincent Strassburger", "Adrian Rohleder", "Konstantin Meiwald", "Emil Buschbeck",
    "Frederik Steinkühler", "Henrik Ohlendorf", "Malte Vollbrecht", "Bastian Kienberger", "Hannes Falkenrath",
    "Lennard Grasmück", "Wilhelm Ebersbach", "Oskar Reifschneider", "Theodor Winklhofer", "Arthur Deichgräber"
  ],
  ligue1: [
    "Nathan Provost", "Théo Lambrecht", "Enzo Bellanger", "Hugo Chartrain", "Maxence Duvauchel",
    "Lucas Fresneau", "Antoine Vermande", "Louis Chastagner", "Gabriel Mourousi", "Baptiste Rocourt",
    "Mathis Delacourt", "Léo Pontonnier", "Noé Salembier", "Rayan Vantomme", "Timéo Grangier",
    "Ethan Bouscaren", "Sacha Ferrandou", "Adam Descelliers", "Yanis Brossois", "Malo Tercinier",
    "Axel Guilloux", "Romain Château", "Kylian Ostertag", "Valentin Merceron", "Clément Anfossi",
    "Julien Chavanon", "Quentin Delvincourt", "Bastien Rousserie", "Corentin Faverjon", "Victor Ledoyen",
    "Paul Grandcolas", "Arnaud Lechevalier", "Simon Boissenot", "Florian Delombre", "Mathéo Perruchon",
    "Alexandre Vannier", "Gaspard Rolando", "Tristan Cazenave", "Loris Berhault", "Dorian Bouziane",
    "Mickaël Fontanel", "Sébastien Aymonier", "Yohan Descharmes", "Gauthier Prunier", "Wesley Trannoy",
    "Benoît Charrance", "Killian Vasseleu", "Anthony Grosjean", "Damien Fauveau", "Guillaume Sartiaux"
  ]
};
let usedAcademyNames = new Set();

function activeAcademyNamePool() {
  return ACADEMY_NAME_POOLS[activeLeagueId] || ACADEMY_NAME_POOLS.superlig;
}

// ---- Draft Modu ----
const DRAFT_SLOT_COUNT = 3;
let draftModeActive = false;
let draftState = null;
// Guest'in draft ekranında uçuşta olan tek aksiyonu (teklif/pas, gönüllü satış kararı ya da
// yerine imza) — bkz. guestDecisionInFlight; aynı yarış koşulunu draft ekranında da engeller.
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
const transferOffers = document.getElementById("transferOffers");
const botTransferLog = document.getElementById("botTransferLog");
const transferContinueRow = document.getElementById("transferContinueRow");
const continueSeasonBtn = document.getElementById("continueSeasonBtn");
const endCareerBtn = document.getElementById("endCareerBtn");
const seasonTableScreen = document.getElementById("seasonTableScreen");
const seasonTableTitle = document.getElementById("seasonTableTitle");
const transferScreenTitle = document.getElementById("transferScreenTitle");
const transferIntro = document.getElementById("transferIntro");
const draftScreenTitle = document.getElementById("draftScreenTitle");
const leagueTableBody = document.getElementById("leagueTableBody");
const scorerList = document.getElementById("scorerList");
const seasonTableContinueBtn = document.getElementById("seasonTableContinueBtn");
const draftScreen = document.getElementById("draftScreen");
const draftBudgetPill = document.getElementById("draftBudgetPill");
const draftSlotsRow = document.getElementById("draftSlotsRow");
const draftPickPanel = document.getElementById("draftPickPanel");
const draftStageTitle = document.getElementById("draftStageTitle");
const draftPoolGrid = document.getElementById("draftPoolGrid");
const draftTurnRow = document.getElementById("draftTurnRow");
const draftTurnHint = document.getElementById("draftTurnHint");
const draftPassBtn = document.getElementById("draftPassBtn");
const draftSellPanel = document.getElementById("draftSellPanel");
const draftSellTitle = document.getElementById("draftSellTitle");
const draftSellHint = document.getElementById("draftSellHint");
const draftSellGrid = document.getElementById("draftSellGrid");
const draftSellConfirmBtn = document.getElementById("draftSellConfirmBtn");
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
let botSetupBudgetMultiplier = 1; // bkz. #botBudgetGroup — START_BUDGET/EMPTY_START_BUDGET'a uygulanır

// Fenerbahçe/Beşiktaş/Galatasaray dışında bir takım seçilirse format 4 takıma çıkar (sen + 3
// bot) — havuzda daha fazla takım rekabet ettiği için tek bir 3'lü ortak aday listesi sık sık
// çakışıp oyunun tıkanmasına yol açabiliyordu; 4. bir "Ucuz Transfer" segmenti bu yüzden devreye
// giriyor (bkz. buildSlotCandidates), böylece her turda katılımcı sayısı kadar seçenek olur.
// Süper Lig dışındaki liglerde "üç büyükler" gibi kültürel bir karşılık yok. Bu yüzden
// oralarda format HER ZAMAN 4 takımlıdır (sen + 3 bot) ve varsayılan rakipler o ligin
// başlangıç 11'i ortalamasına göre EN GÜÇLÜ 3 kulübüdür (kullanıcı ızgaradan değiştirebilir).
function isSuperLig() { return activeLeagueId === "superlig"; }

function opponentCountFor(clubId) {
  if (!isSuperLig()) return 3;
  return TRADITIONAL_BIG3.has(clubId) ? 2 : 3;
}

// Aktif ligin başlangıç 11'i ortalamasına göre en güçlü N kulübü (id listesi).
function topClubIdsByRating(n, excludeId) {
  return leagueClubs()
    .filter(c => c.id !== excludeId)
    .map(c => ({ id: c.id, avg: parseFloat(clubAvgRating(c.id)) }))
    .sort((a, b) => b.avg - a.avg || a.id.localeCompare(b.id))
    .slice(0, n)
    .map(c => c.id);
}

// Büyük 3'ten biri seçilirse klasik rekabet korunur (Fenerbahçe/Beşiktaş/Galatasaray hep
// birbirine karşı, 3 takımlı). Diğer 15 takımdan biri seçilirse rakip HER ZAMAN o üç büyük
// takımın kendisi olur (rastgele küçük takımlar değil) — 4 takımlı format, sen + üç büyükler.
function pickOpponentsFor(clubId) {
  if (!isSuperLig()) return topClubIdsByRating(3, clubId);
  if (TRADITIONAL_BIG3.has(clubId)) {
    return [...TRADITIONAL_BIG3].filter(id => id !== clubId);
  }
  return [...TRADITIONAL_BIG3];
}

let botSetupOpponentIds = pickOpponentsFor(botSetupClubId);

function clubAvgRating(clubId) {
  const club = findClub(clubId);
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
// Gerçek kulüp armaları marka/telif riski taşıdığı için KULLANILMIYOR. Bunun yerine
// tamamen soyut, "arma havasında" bir SVG rozet üretiyoruz: kalkan ya da madalyon
// silueti + heraldik esintili basit bir desen (şerit/pale/chevron/bölünmüş alan) +
// jenerik bir sembol (yıldız, top, elmas) + kulübün baş harfleri. Tüm varyasyonlar
// clubId hash'inden deterministik ama keyfi biçimde seçilir; hiçbir gerçek kulübün
// arma şekli/sembolü/renk düzeni taklit edilmez. Dış istek yok, ikon kütüphanesi yok.
function clubBadgeHTML(clubId, name, sizeClass) {
  const h = hashStr(clubId);
  const hue = h % 360;
  const initials = name.replace(/[^\p{L}\s]/gu, "").split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();

  const dark = `hsl(${hue}, 52%, 24%)`;
  const mid = `hsl(${hue}, 48%, 38%)`;
  const rim = `hsl(${hue}, 60%, 86%)`;
  const motifCol = `hsl(${(hue + 40) % 360}, 75%, 70%)`;

  // Aynı kulüp sayfada birden fazla kez çizilebildiği için clip id'si hash tabanlı;
  // tekrar eden id'ler aynı şekli gösterdiğinden görsel olarak sorun çıkarmaz.
  const cid = `cb${h.toString(36)}`;
  const isRound = ((h >> 3) & 1) === 1;
  const shape = isRound
    ? `<circle cx="20" cy="22" r="18.5"/>`
    : `<path d="M20 3 L36.5 8.5 V22 C36.5 31.5 28.8 38.6 20 41.5 C11.2 38.6 3.5 31.5 3.5 22 V8.5 Z"/>`;

  // --- Desen (kalkanın içine kırpılır) ---
  const pat = (h >> 7) % 4;
  let pattern = "";
  if (pat === 0) pattern = `<rect x="0" y="0" width="40" height="13" fill="${mid}"/>`;
  else if (pat === 1) pattern = `<rect x="7" y="0" width="5.5" height="44" fill="${mid}"/><rect x="27.5" y="0" width="5.5" height="44" fill="${mid}"/>`;
  else if (pat === 2) pattern = `<path d="M0 32 L20 19 L40 32 V44 H0 Z" fill="${mid}"/>`;
  else pattern = `<path d="M20 0 L40 0 V44 H20 Z" fill="${mid}"/>`;

  // --- Sembol (jenerik heraldik set: yıldız / top / elmas / yok) ---
  const mot = (h >> 13) % 4;
  let motif = "";
  if (mot === 0) motif = `<path d="M20 5.5 L21.7 9.4 L25.9 9.8 L22.7 12.6 L23.7 16.7 L20 14.5 L16.3 16.7 L17.3 12.6 L14.1 9.8 L18.3 9.4 Z" fill="${motifCol}"/>`;
  else if (mot === 1) motif = `<circle cx="20" cy="10.5" r="4.6" fill="${motifCol}"/><circle cx="20" cy="10.5" r="1.7" fill="${dark}"/>`;
  else if (mot === 2) motif = `<path d="M20 5.4 L24.6 10.5 L20 15.6 L15.4 10.5 Z" fill="${motifCol}"/>`;

  const size = isRound ? `0 0 40 44` : `0 0 40 44`;
  return `<span class="club-badge ${sizeClass}" role="img" aria-label="${name}">` +
    `<svg class="club-crest" viewBox="${size}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">` +
    `<defs><clipPath id="${cid}">${shape}</clipPath></defs>` +
    `<g clip-path="url(#${cid})"><rect x="0" y="0" width="40" height="44" fill="${dark}"/>${pattern}${motif}</g>` +
    `<g fill="none" stroke="${rim}" stroke-width="2.4">${shape}</g>` +
    `<text x="20" y="${mot === 3 ? 28 : 32}" text-anchor="middle" font-size="${mot === 3 ? 17 : 14}" font-weight="800" fill="${rim}" font-family="Segoe UI, system-ui, sans-serif">${initials}</text>` +
    `</svg></span>`;
}

// Lig seçici — sadece botlara karşı kurulum ekranında. Kulüp logolarımız olmadığı için
// kulüp rozetleriyle aynı görsel dili kullanıp bayrak emojisi gösteriyoruz.
function renderLeaguePickGrid() {
  const grid = document.getElementById("leaguePickGroup");
  if (!grid) return;
  grid.innerHTML = LEAGUES.map(l => `
    <button class="team-grid-btn league-grid-btn${l.id === activeLeagueId ? " active" : ""}" data-league="${l.id}">
      <span class="league-grid-flag">${l.flag}</span>
      <span>${l.name}</span>
      <span class="team-grid-rating">${t("common.teamsCount", { n: l.data.clubs.length })}</span>
    </button>
  `).join("");
  grid.querySelectorAll(".league-grid-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.league === activeLeagueId) return;
      activeLeagueId = btn.dataset.league;
      // Yeni ligde eski kulüp id'leri geçersiz — varsayılanlara sıfırlıyoruz.
      botSetupClubId = isSuperLig()
        ? "fenerbahce"
        : (topClubIdsByRating(1, null)[0] || leagueClubs()[0].id);
      botSetupOpponentIds = pickOpponentsFor(botSetupClubId);
      renderLeaguePickGrid();
      renderTeamPickGrid();
      renderOpponentPickGrid();
      renderBotSetupText();
    });
  });
  const hint = document.getElementById("leaguePickHint");
  if (hint) {
    hint.textContent = isSuperLig()
      ? t("setup.leagueHintSuperlig")
      : t("setup.leagueHintOther", { league: activeLeague().name });
  }
  const teamLabel = document.getElementById("teamPickLabelHint");
  if (teamLabel) teamLabel.textContent = t("setup.teamLabelHint", { league: activeLeague().name, n: leagueClubs().length });
}

function renderTeamPickGrid() {
  const grid = document.getElementById("botTeamPickGroup");
  if (!grid) return;
  grid.innerHTML = leagueClubs().map(c => `
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
  grid.innerHTML = leagueClubs().filter(c => c.id !== botSetupClubId).map(c => `
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
  if (label) label.textContent = t("setup.opponentsLabelCount", { sel: botSetupOpponentIds.length, max: maxCount });
  const hint = document.getElementById("opponentPickHint");
  if (hint) {
    hint.textContent = botSetupOpponentIds.length < maxCount
      ? t("setup.opponentsHintMore", { n: maxCount - botSetupOpponentIds.length })
      : t("setup.opponentsHintReady");
  }
}

function renderBotSetupText() {
  const club = findClub(botSetupClubId);
  const teamNameEl = document.getElementById("setupTeamName");
  if (teamNameEl) teamNameEl.textContent = club.name;
  const maxCount = opponentCountFor(botSetupClubId);
  const isFourTeam = maxCount === 3;
  const complete = botSetupOpponentIds.length === maxCount;
  const subtitleEl = document.getElementById("setupSubtitle");
  if (subtitleEl) {
    const otherNames = botSetupOpponentIds.map(id => findClub(id).name);
    const opponentText = complete
      ? (isFourTeam
          ? t("setup.subtitleOpp3", { a: otherNames[0], b: otherNames[1], c: otherNames[2] })
          : t("setup.subtitleOpp2", { a: otherNames[0], b: otherNames[1] }))
      : t("setup.subtitleOppIncomplete", { n: maxCount - botSetupOpponentIds.length });
    subtitleEl.innerHTML = t("setup.subtitle", {
      club: club.name,
      opponents: opponentText,
      budget: formatValue((botSetupEmptyStart ? EMPTY_START_BUDGET : START_BUDGET) * botSetupBudgetMultiplier),
      squadNote: botSetupEmptyStart ? t("setup.subtitleSquadEmpty") : t("setup.subtitleSquadReal"),
      candidateCount: isFourTeam ? t("setup.candidates4") : t("setup.candidates3"),
      seasons: botSetupSeasonCount
    });
  }
  const budgetEl = document.getElementById("setupBudgetAmount");
  if (budgetEl) budgetEl.textContent = formatValue((botSetupEmptyStart ? EMPTY_START_BUDGET : START_BUDGET) * botSetupBudgetMultiplier);
  const opponentsRow = document.getElementById("setupOpponentsRow");
  if (opponentsRow) {
    opponentsRow.innerHTML = botSetupOpponentIds.map(id => {
      const c = findClub(id);
      return `<div class="opponent-chip">${clubBadgeHTML(c.id, c.name, "opponent-chip-logo")}${c.name} 🤖</div>`;
    }).join("");
  }
  const modeHintEl = document.getElementById("botModeHint");
  if (modeHintEl) {
    modeHintEl.textContent = botSetupEmptyStart ? t("setup.modeHintEmpty") : t("setup.modeHintRebuild");
  }
  document.querySelectorAll("#botSeasonCountGroup .option-btn").forEach(b => {
    b.textContent = t("setup.seasons", { n: b.dataset.seasons });
  });
  document.getElementById("teamNameRow")?.classList.toggle("hidden", !botSetupEmptyStart);
  startBtn.disabled = !complete;
  startBtn.textContent = complete
    ? t("setup.start")
    : t("setup.startNeedMore", { n: maxCount - botSetupOpponentIds.length });
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

document.getElementById("botBudgetGroup")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".option-btn");
  if (!btn) return;
  document.querySelectorAll("#botBudgetGroup .option-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  botSetupBudgetMultiplier = parseFloat(btn.dataset.budget);
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
  startRebuild(defs, botSetupClubId, botSetupEmptyStart, customTeamName, botSetupSeasonCount, botSetupDraftMode, botSetupBudgetMultiplier);
});
renderLeaguePickGrid();
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
draftSellConfirmBtn.addEventListener("click", () => {
  const card = draftSellGrid.querySelector(".draft-sell-card.selected");
  submitDraftSellDecision(card ? card.dataset.slot : "");
});
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

// Günlük (log) satırları HAZIR METİN olarak değil, { k: anahtar, v: değişkenler } olarak
// saklanır. Böylece dil değiştiğinde geçmiş satırlar da yeni dilde görünür ve çok oyunculuda
// host'un yayınladığı log, her istemcide O İSTEMCİNİN dilinde render edilir.
function logMessage(key, vars) {
  carryLog.push({ k: key, v: vars || {} });
}
function renderLogEntry(e) {
  if (typeof e === "string") return e; // eski/serbest metin satırları
  const vars = { ...(e.v || {}) };
  // Mevki etiketi log'a HAZIR METİN olarak değil, slot anahtarı (posSlot) olarak yazılır;
  // böylece dil değiştiğinde geçmiş satırlardaki mevki adı da doğru dilde görünür.
  if (vars.posSlot) vars.pos = SLOT_LABELS[vars.posSlot];
  if (vars.slotKeys) vars.slots = String(vars.slotKeys).split(",").map(s => SLOT_LABELS[s]).join(", ");
  return t(e.k, vars);
}

/* ---------------- SETUP ---------------- */

function makeVacantSlot() {
  return { name: t("player.vacant"), value: 0, rating: 0, age: 0, nationality: "—", club: "", origin: "vacant", vacant: true };
}

function startRebuild(customDefs, myClubId, emptyStart, customTeamName, seasonCount, draftMode, budgetMultiplier) {
  const defs = customDefs || PARTICIPANT_DEFS;
  // Çok oyunculu mod her zaman Süper Lig — kullanıcı daha önce kurulum ekranında başka bir
  // lig seçmiş olsa bile MP başlarken aktif ligi Süper Lig'e sabitliyoruz.
  if (mpActive()) activeLeagueId = "superlig";
  isEmptyStartMode = !!emptyStart;
  MAX_SEASONS = seasonCount || 5;
  // Çok oyunculuda herkes aynı şartlarda yarışmalı — bütçe çarpanı sadece offline (bot) modda.
  const budgetMult = mpActive() ? 1 : (budgetMultiplier || 1);
  draftModeActive = !!draftMode;
  draftState = null;
  guestDraftInFlight = null;
  // Sıfırdan Kadro modunda kimse gerçek kulüp kimliğini taşımaz — herkes aynı şartlarda
  // yarışır. İnsan oyuncu kendi takımına isim verebilir, botlara rastgele bir isim atanır.
  const takenFantasyNames = new Set();
  if (isEmptyStartMode && customTeamName) takenFantasyNames.add(customTeamName);
  participants = defs.map(def => {
    const club = findClub(def.clubId);
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
    const baseBudget = isEmptyStartMode ? EMPTY_START_BUDGET : START_BUDGET;
    const budget = Math.round((baseBudget * budgetMult) / 250000) * 250000;
    return { clubId: def.clubId, name: displayName, logo: club.logo, isBot: def.isBot, budget, squad };
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

  renderMatchupTitle();

  renderPitch();
  renderBotStatus();
  startSlotRound();
}

// Üst başlıktaki "Sen vs Rakipler" etiketi (hem tek hem çok oyunculu akışta kullanılır).
function renderMatchupTitle() {
  const el = document.getElementById("draftTitleTeams");
  if (!el || !human) return;
  const opponentLabel = participants.filter(p => p !== human).map(p => p.name).join(" & ");
  el.textContent = `${human.name} vs ${opponentLabel}`;
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
  progressLine.textContent = t("squad.progress", { season: currentSeason, i: slotIndex + 1, total: SLOTS.length });
  slotLabel.textContent = t("decide.waitTitle");
  currentPlayerCard.innerHTML = `
    <div class="cp-name">${t("decide.waitCardTitle")}</div>
    <div class="cp-meta">${t("decide.waitCardBody")}</div>
  `;
  document.querySelector("#decideView .decision-buttons")?.classList.add("hidden");
  updateBudgetPill();
  renderPitch();
  renderBotStatus();
}

function updateBudgetPill() {
  budgetPill.textContent = t("common.budget", { v: formatValue(human.budget) });
}

function renderRoundLog() {
  if (carryLog.length === 0) {
    roundLogEl.classList.add("hidden");
    roundLogEl.innerHTML = "";
    return;
  }
  roundLogEl.classList.remove("hidden");
  roundLogEl.innerHTML = carryLog.map(m => `<div>${renderLogEntry(m)}</div>`).join("");
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
  progressLine.textContent = t("squad.progress", { season: currentSeason, i: slotIndex + 1, total: SLOTS.length });
  slotLabel.textContent = SLOT_LABELS[slot];
  currentPlayerCard.innerHTML = `
    <div class="rating-badge">${player.rating}</div>
    <div class="player-photo big">${pixelAvatarSVG(player.name)}</div>
    <div class="cp-name">${player.name}</div>
    <div class="cp-meta">${t("common.age", { n: player.age })} · ${player.nationality} · ${player.club}</div>
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
  const banner = t("decide.sellBanner", { name: player.name, gain: formatValue(player.value), budget: formatValue(budget) });
  localChoicePendingKey = currentRoundKey();
  renderCandidateSelection(slot, budget, banner, round.sharedCandidates, (cand) => {
    submitLocalDecision({ sold: true, target: cand });
  });
}

function renderForcedFill() {
  const slot = round.slot;
  const budget = prospectiveBudget(human, slot);
  const banner = isEmptyStartMode && currentSeason === 1
    ? t("decide.forcedEmpty", { pos: SLOT_LABELS[slot], budget: formatValue(budget) })
    : t("decide.forcedVacant", { pos: SLOT_LABELS[slot], budget: formatValue(budget) });
  progressLine.textContent = t("squad.progress", { season: currentSeason, i: slotIndex + 1, total: SLOTS.length });
  updateBudgetPill();
  localChoicePendingKey = currentRoundKey();
  renderCandidateSelection(slot, budget, banner, round.sharedCandidates, (cand) => {
    submitLocalDecision({ sold: true, target: cand });
  });
}

// Her turda gösterilen 3 aday sabit bir formülle seçilir: 1 pahalı (82+ reyting),
// 1 orta segment (74-82 reyting), ve 1 bedava transfer (73 reyting altı, ücretsiz).
// ADAY KAYNAĞI: artık kurgusal WORLD_MARKET değil, DİĞER 4 LİGİN GERÇEK oyuncuları
// (bkz. crossLeaguePlayerPool). Oynanan ligin kulüpleri "hikâyenin içinde" (rakip/rakip
// adayı) olduğu için o ligden asla oyuncu satılmaz. Kimseyi alamayan oyuncu bedava
// transferi almak zorunda kalır çünkü değeri her zaman 0'dır.
function pickRandomFromPool(pool) {
  if (!pool || pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

// Aktif lig DIŞINDAKİ tüm liglerin tüm kulüplerinden, istenen mevki kategorisine düşen
// gerçek oyuncular. Her lig dosyası aynı slot anahtarlarını kullandığı için SLOT_CATEGORY
// doğrudan uygulanabilir. Sonuç kopya (clone) döner — orijinal lig verisi asla mutasyona
// uğramasın diye. Havuzun kendisi lig+kategori bazında cache'lenir.
const crossLeaguePoolCache = {};
function crossLeaguePlayerPool(category) {
  const key = `${activeLeagueId}|${category}`;
  let pool = crossLeaguePoolCache[key];
  if (!pool) {
    pool = [];
    // Lig verilerinde aynı isim birden fazla ligde geçebiliyor (aynı oyuncunun farklı
    // liglerdeki kaydı). Aktif ligin kadrolarında geçen HİÇBİR isim havuza girmez —
    // yoksa "kendi liginden transfer" sızıntısı olur.
    const seen = new Set();
    for (const club of leagueClubs()) {
      for (const slot of SLOTS) {
        const p = club.xi && club.xi[slot];
        if (p && p.name) seen.add(p.name);
      }
    }
    for (const league of LEAGUES) {
      if (league.id === activeLeagueId) continue;
      for (const club of league.data.clubs) {
        for (const slot of SLOTS) {
          if (SLOT_CATEGORY[slot] !== category) continue;
          const p = club.xi && club.xi[slot];
          if (!p || !p.name || seen.has(p.name)) continue;
          seen.add(p.name);
          pool.push({
            name: p.name,
            club: club.name,
            nationality: p.nationality || "—",
            value: p.value,
            rating: p.rating,
            age: p.age,
            leagueId: league.id
          });
        }
      }
    }
    crossLeaguePoolCache[key] = pool;
  }
  return pool.map(p => ({ ...p }));
}

function freeTransferPool(category) {
  return crossLeaguePlayerPool(category)
    .filter(p => p.rating < 73 && !usedWorldNames.has(p.name))
    .map(p => ({ name: p.name, club: p.club, nationality: p.nationality, value: 0, rating: p.rating, age: p.age }));
}

// Üç sabit segment: Yıldız Transfer (82+), Orta Segment (74-82) ve Bedava Transfer
// (73 altı, €0) — hepsi oynanan lig DIŞINDAKİ 4 ligin gerçek oyuncularından seçilir.
// 3 katılımcılı (geleneksel Fenerbahçe/Beşiktaş/Galatasaray) formatta 3 sabit segment:
// Yıldız Transfer (82+), Orta Segment (74-82), Bedava Transfer (73 altı, yurtdışı, €0).
// 4 katılımcılı formatta (büyük 3 dışında bir takım seçildiğinde) araya bir "Ucuz Transfer"
// (73-77) segmenti daha girer — yoksa 3 aday üzerinde 4 taraf sık sık çakışıp oyunun
// tıkanmasına (sürekli açık artırma / aday tükenmesi) yol açabiliyordu.
function buildSlotCandidates(category) {
  const available = crossLeaguePlayerPool(category).filter(p => !usedWorldNames.has(p.name));
  const freePool = freeTransferPool(category);
  const picked = [];
  const notPicked = (p) => !picked.some(c => c.name === p.name);

  // Gerçek 5 lig havuzunda 82+ oyuncu bek/kanat gibi mevkilerde çok az olduğundan (kategori
  // başına tek haneli sayılara düşebiliyor), yıldız eşiği 80'e çekildi — daha geniş bir havuzdan
  // besleniyor ve uzun kariyerlerde tükenme riski büyük ölçüde azalıyor.
  const expensivePool = available.filter(p => p.rating >= 80);
  const expensive = pickRandomFromPool(expensivePool.filter(notPicked))
    || pickRandomFromPool(available.filter(notPicked)) || makeFreeAgent(category);
  if (expensive) picked.push(expensive);

  // Kaç katılımcı olursa olsun (3'lü büyük takım formatı dahil) her zaman 4 aday: yıldız,
  // orta segment, ucuz transfer, bedava transfer — tüm formatlarda aynı deneyim.
  const midPool = available.filter(p => p.rating >= 76 && p.rating < 80);
  const mid = pickRandomFromPool(midPool.filter(notPicked)) || pickRandomFromPool(available.filter(notPicked)) || makeFreeAgent(category);
  if (mid) picked.push(mid);

  const cheapPool = available.filter(p => p.rating >= 73 && p.rating < 76);
  const cheap = pickRandomFromPool(cheapPool.filter(notPicked)) || pickRandomFromPool(available.filter(notPicked)) || makeFreeAgent(category);
  if (cheap) picked.push(cheap);

  const free = pickRandomFromPool(freePool) || makeFreeAgent(category, 0);
  return [expensive, mid, cheap, free].filter(Boolean);
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
    // tier KİMLİĞİ (free/star/cheap/mid) mantıksaldır; sadece etiketi çevrilir.
    let tierKey = "mid";
    if (cand === freeAgentFallback) tierKey = "budgetFit";
    else if (cand.value === 0) tierKey = "free";
    else if (cand.rating >= 80) tierKey = "star";
    else if (cand.rating < 76) tierKey = "cheap";
    const tierLabel = t("tier." + tierKey);
    card.innerHTML = `
      <div class="tier-tag">${tierLabel}</div>
      <div class="rating-badge small">${cand.rating}</div>
      <div class="player-photo">${pixelAvatarSVG(cand.name)}</div>
      <div class="candidate-club">${cand.club}</div>
      <div class="candidate-name">${cand.name}</div>
      <div class="candidate-meta">${t("common.age", { n: cand.age })} · ${cand.nationality}</div>
      <div class="candidate-value">${cand.value === 0 ? t("common.free") : formatValue(cand.value)}${cand.value > budget ? " ⚠️" : ""}</div>
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
    name: t("player.freeAgentName", { n: Math.floor(1000 + Math.random() * 9000) }),
    club: t("player.freeAgentClub"),
    nationality: "—",
    value,
    rating: 64 + Math.floor(Math.random() * 8),
    age: 22 + Math.floor(Math.random() * 12)
  };
}

function categoryPool(category) {
  const pool = crossLeaguePlayerPool(category).filter(p => !usedWorldNames.has(p.name));
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
    banner = t("auction.lostPickAll");
  } else {
    banner = candidates.length === 1
      ? t("auction.lostPickOne")
      : t("auction.lostPickMany", { n: candidates.length });
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
    logMessage("log.auctionBots", {
      bidders: bidders.map(b => b.participant.name).join(" – "),
      name: candidate.name,
      winner: winner.participant.name,
      price: formatValue(finalPrice)
    });
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

  const opponents = auction.bidders.filter(b => b.participant !== human).map(b => b.participant.name).join(" · ");
  auctionDesc.textContent = t("auction.desc", { opponents, name: auction.candidate.name });
  auctionCandidate.innerHTML = `
    <div class="rating-badge small">${auction.candidate.rating}</div>
    <div class="player-photo">${pixelAvatarSVG(auction.candidate.name)}</div>
    <div class="candidate-club">${auction.candidate.club}</div>
    <div class="candidate-name">${auction.candidate.name}</div>
    <div class="candidate-meta">${t("common.age", { n: auction.candidate.age })} · ${auction.candidate.nationality}</div>
  `;
  updateAuctionUI();
}

function updateAuctionUI() {
  auctionCurrentBid.textContent = formatValue(auction.currentBid);
  auctionBidders.innerHTML = auction.bidders.map(b => {
    const isHuman = b.participant === human;
    return `<div class="bidder-chip${isHuman ? " you" : ""}">${b.participant.name}${isHuman ? t("common.you") : ""}</div>`;
  }).join("");

  const iAmBidding = auction.bidders.some(b => b.participant === human);
  const budgetHintEl = document.getElementById("auctionBudgetHint");
  if (!iAmBidding) {
    raiseBidBtn.disabled = true;
    concedeBidBtn.disabled = true;
    raiseBidBtn.textContent = t("auction.watching");
    if (budgetHintEl) budgetHintEl.textContent = "";
    return;
  }
  concedeBidBtn.disabled = false;
  const availableBudget = prospectiveBudget(human, round.slot);
  const canRaise = (auction.currentBid + BID_INCREMENT) <= availableBudget;
  raiseBidBtn.disabled = !canRaise;
  raiseBidBtn.textContent = canRaise
    ? t("auction.raise", { v: formatValue(BID_INCREMENT) })
    : t("auction.noBudget");
  if (budgetHintEl) {
    const current = human.squad[round.slot];
    budgetHintEl.textContent = !current.vacant
      ? t("auction.budgetHintWithSale", { budget: formatValue(availableBudget), name: current.name, value: formatValue(current.value) })
      : t("auction.budgetHint", { budget: formatValue(availableBudget) });
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
    logMessage(isMe ? "log.auctionWonYou" : "log.auctionWonOther", {
      club: participant.name,
      name: auction.candidate.name,
      price: formatValue(auction.currentBid)
    });
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

  const concedeKey = isMe ? "log.concedeYou" : "log.concedeOther";
  if (remaining.length === 1) {
    logMessage(concedeKey, {
      club: participant.name,
      winner: remaining[0].participant.name,
      name: candidate.name,
      price: formatValue(auction.currentBid)
    });
    finishGroup(remaining[0].participant, auction.currentBid, candidate, groupParticipants);
  } else {
    const sorted = [...remaining].sort((a, b) => b.maxWillingness - a.maxWillingness);
    const winner = sorted[0];
    const runnerUp = sorted[1];
    const finalPrice = Math.max(auction.currentBid, Math.min(winner.maxWillingness, runnerUp.maxWillingness + BID_INCREMENT));
    logMessage(concedeKey, {
      club: participant.name,
      winner: winner.participant.name,
      name: candidate.name,
      price: formatValue(finalPrice)
    });
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
  if (seasonTableTitle) {
    seasonTableTitle.textContent = t("table.title", { n: t("table.season", { cur: currentSeason, max: MAX_SEASONS }) });
  }
  seasonTableContinueBtn.textContent = draftModeActive ? t("table.continueDraft") : t("table.continueTransfer");

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
      <span class="scorer-club">${s.p.name}${idx === 0 ? " · +" + formatValue(TOP_SCORER_PRIZE) : ""}</span>
      <span class="scorer-goals">${t("common.goals", { n: s.goals })}</span>
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
    waitHint.textContent = t("common.waitHost");
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
  const pool = activeAcademyNamePool().filter(n => !usedAcademyNames.has(n));
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
        transferLogMessages.push({ k: "log.transferOut", v: {
          club: p.name, name: offer.player.name, age: t("common.age", { n: offer.player.age }),
          buyer: offer.buyerClub, price: formatValue(offer.offerValue)
        } });
      } else {
        transferLogMessages.push({ k: "log.transferRejected", v: {
          club: p.name, buyer: offer.buyerClub, name: offer.player.name, price: formatValue(offer.offerValue)
        } });
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
    transferLogMessages.push({ k: "log.academyJoined", v: {
      club: p.name, name: offer.name, posSlot: offer.slot, rating: offer.actualRating
    } });
  } else {
    transferLogMessages.push({ k: "log.academyRejected", v: {
      club: p.name, name: offer.name, current: current.name
    } });
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

let lastTransferRender = null; // dil değişince transfer ekranını yeniden çizebilmek için

function renderTransferScreen(transferLogMessages, botsAccepted, botsTotal) {
  mpPhase = "transfer";
  lastTransferRender = { messages: transferLogMessages, botsAccepted, botsTotal };
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

  if (transferScreenTitle) transferScreenTitle.textContent = t("transfer.title", { n: currentSeason });
  botTransferLog.innerHTML = transferLogMessages.map(m => `<div>${renderLogEntry(m)}</div>`).join("");
  transferContinueRow.classList.add("hidden");

  const botSummaryEl = document.getElementById("botTransferSummary");
  if (botSummaryEl) {
    botSummaryEl.textContent = t(draftModeActive ? "transfer.botSummaryDraft" : "transfer.botSummary",
      { n: botsAccepted, total: botsTotal });
  }
  if (transferIntro) {
    transferIntro.textContent = t(draftModeActive ? "transfer.introDraft" : "transfer.intro");
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
        <div class="offer-pos">${SLOT_LABELS[offer.slot]} · ${t("common.age", { n: offer.player.age })}</div>
        <div class="offer-name">${offer.player.name}</div>
        <div class="offer-current-value">${t("transfer.currentValue", { v: formatValue(offer.player.value) })}</div>
        <div class="offer-buyer">${t("transfer.buyer", { club: offer.buyerClub })}</div>
      </div>
      <div class="offer-actions">
        <div class="offer-value">${formatValue(offer.offerValue)}</div>
        <div class="offer-buttons">
          <button class="accept-btn">${t("transfer.accept")}</button>
          <button class="reject-btn">${t("transfer.reject")}</button>
        </div>
        <div class="offer-status"></div>
      </div>
    `;
    if (offer.decided) {
      card.classList.add("decided");
      card.querySelectorAll("button").forEach(b => (b.disabled = true));
      card.querySelector(".offer-status").textContent = offer.accepted ? t("transfer.decidedAccepted") : t("transfer.decidedRejected");
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
    <div class="academy-tag">${t("academy.tag")}</div>
    <div class="academy-name">${offer.name}</div>
    <div class="academy-pos">${t("academy.pos", { pos: SLOT_LABELS[offer.slot], name: current.name, rating: current.rating })}</div>
    <div class="academy-range">${t("academy.range", { low: offer.rangeLow, high: offer.rangeHigh })}</div>
    <div class="academy-desc">${t("academy.desc", { name: current.name })}</div>
    <div class="academy-buttons">
      <button class="keep-btn academy-accept-btn">${t("academy.accept")}</button>
      <button class="sell-btn academy-reject-btn">${t("academy.reject")}</button>
    </div>
    <div class="academy-status"></div>
  `;
  if (offer.decided) {
    card.classList.add("decided");
    card.querySelectorAll("button").forEach(b => (b.disabled = true));
    card.querySelector(".academy-status").textContent = offer.accepted
      ? t("academy.joined", { rating: offer.actualRating, value: formatValue(offer.value) })
      : t("transfer.rejectedKept");
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
    lockOfferCard(card, accept ? t("academy.pendingHost") : t("transfer.rejectedKept"));
    freezeOtherTransferCards();
    updateTransferContinueVisibility();
    return;
  }
  resolveAcademyOfferDecision(human, accept);
  lockOfferCard(card, offer.accepted
    ? t("academy.joined", { rating: offer.actualRating, value: formatValue(offer.value) })
    : t("transfer.rejectedKept"));
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
    lockOfferCard(card, accept ? t("transfer.sold", { v: formatValue(offer.offerValue) }) : t("transfer.rejectedKept"));
    freezeOtherTransferCards();
    updateTransferContinueVisibility();
    return;
  }
  resolveOfferDecision(human, idx, accept);
  lockOfferCard(card, offer.accepted
    ? t("transfer.sold", { v: formatValue(offer.offerValue) })
    : t("transfer.rejectedKept"));
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
  endCareerBtn.textContent = isLastSeason ? t("transfer.seeSummary") : t("transfer.endCareer");
  if (!showBoth && !document.getElementById("mpHostWaitHint")) {
    transferContinueRow.insertAdjacentHTML("beforeend", `<p class="hint" id="mpHostWaitHint">${t("common.waitHost")}</p>`);
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

/* ---------------- DRAFT MODU (v4) ---------------- */
// Her sezon tablosundan SONRA, transfer ekranından ÖNCE çalışır ve iki bölümden oluşur:
//
//  A) DRAFT (NBA usulü, bedelsiz) — 3 rastgele mevki seçilir ve mevkiler TEK TEK, sırayla
//     işlenir. Aktif mevkide havuz = her katılımcının o mevkideki oyuncusu (kulüp başı 1,
//     toplam 3 mevkide 3 oyuncu). Sıralama ters lig sıralamasıdır (sezonu SON bitiren ilk
//     seçer). Sırası gelen katılımcı havuzdan KENDİSİNE ait olmayan bir oyuncuyu BEDAVA seçer
//     ya da pas geçer; para hiç el değiştirmez. Seçilen oyuncu havuzdan çıkar, eski kulübünün
//     mevkisi boşalır; seçeni yapan katılımcının o mevkideki eski oyuncusu kadrodan tamamen
//     çıkar (havuzdan da çekilir). Herkes bir kez seçtikten sonra sıradaki mevkiye geçilir.
//
//  B) TRANSFER — 3 mevkinin tamamı bittikten sonra, draftta ne olduğundan BAĞIMSIZ olarak
//     herkes için çalışır. Önce draftta boşalan her mevki için 5 adaylı imza ekranı gelir
//     (zorunlu), sonra herkes kadrosundaki HERHANGİ bir oyuncuyu (11 mevkiden biri) kendi
//     isteğiyle satar ve boşalan o mevkiye yine 5 adaydan birini imzalar.
//     Adaylar: 1 Bedava Transfer, 1 Ucuz Transfer, 1 Orta Segment, 2 Yıldız Transfer.
//
// Draft modunda AYRI bir transfer penceresi açılmaz — bu akış onun yerine geçer.

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
    turnCounter: 0,
    pool: [],
    sellDone: {},
    sellChoice: {},
    replaceRound: 0,
    replaceTargets: [],
    replaceCandidates: {},
    replacePicks: {},
    reservedNames: [],
    log: [{ k: "log.draftSlots", v: { slotKeys: slots.join(",") } }],
    seq: 0
  };
  guestDraftInFlight = null;
  startDraftSlotRound();
}

/* ---- A) Bedelsiz draft seçimi (mevki mevki) ---- */

function startDraftSlotRound() {
  const ds = draftState;
  while (ds.slotIdx < ds.slots.length) {
    const slot = ds.slots[ds.slotIdx];
    const pool = participants
      .filter(p => !p.squad[slot].vacant)
      .map(p => ({ slot, ownerClubId: p.clubId, player: cloneSquadPlayer(p.squad[slot]), status: "open", takenByClubId: "" }));
    if (pool.length === 0) {
      ds.log.push({ k: "log.draftSlotEmpty", v: { posSlot: slot } });
      ds.slotIdx++;
      continue;
    }
    ds.stage = "pick";
    ds.pool = pool;
    ds.order = draftPickOrder();
    ds.turnIdx = 0;
    ds.seq++;
    ds.log.push({ k: "log.draftSlotStart", v: {
      posSlot: slot, n: pool.length, order: ds.order.map(id => draftParticipant(id).name).join(" → ")
    } });
    draftStep();
    return;
  }
  startDraftReplaceStage(1);
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
  ds.turnCounter++;
  if (entry) {
    const owner = draftParticipant(entry.ownerClubId);
    // Havuzdaki oyuncu artık "sahipsiz" (asıl sahibi başka birini seçmiş) olabilir — o zaman
    // asıl sahibin mevkisi ZATEN başka bir oyuncuyla dolu demektir, onu boşaltmamalıyız.
    if (!owner.squad[slot].vacant && owner.squad[slot].name === entry.player.name) {
      owner.squad[slot] = makeVacantSlot();
    }
    entry.status = "taken";
    entry.takenByClubId = participant.clubId;
    // Seçim yapan katılımcının eski oyuncusu havuzdan ÇEKİLMEZ — kendisi hariç herkes için
    // seçilebilir kalır. Önceki davranış (kendi eski oyuncusunu havuzdan hemen düşürmek) havuzu
    // gereksiz hızlı tüketip sıradaki katılımcıların bazen hiç seçenek bulamamasına yol açıyordu.
    participant.squad[slot] = { ...cloneSquadPlayer(entry.player), origin: "draft", vacant: false };
    ds.log.push({ k: "log.draftPicked", v: {
      club: participant.name, from: owner.name, name: entry.player.name, rating: entry.player.rating
    } });
  } else {
    ds.log.push({ k: "log.draftPassed", v: { club: participant.name } });
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
    // Seçebileceği hiçbir oyuncu kalmamış katılımcı otomatik pas geçilir — gerçek oyuncu boş
    // bir ekranda kilitlenmesin.
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
    guestDraftInFlight = { type: "pick", turnCounter: ds.turnCounter };
    MP.sendAction("draftPick", { clubId: human.clubId, target: targetOwnerClubId || "-" });
    renderDraftScreen();
    return;
  }
  applyDraftPick(human, targetOwnerClubId);
  draftStep();
}

function finishDraftSlotRound() {
  const ds = draftState;
  for (const entry of ds.pool) {
    if (entry.status === "open") {
      ds.log.push({ k: "log.draftUnpicked", v: { name: entry.player.name, club: draftParticipant(entry.ownerClubId).name } });
    }
  }
  ds.slotIdx++;
  startDraftSlotRound();
}

/* ---- B) 5 adaylı imza altyapısı ---- */

function draftVacancyKey(clubId, slot) {
  return `${clubId}|${slot}`;
}

// Tam olarak 5 aday: 1 Bedava, 1 Ucuz, 1 Orta Segment, 2 Yıldız. Üretilen isimler geçici olarak
// usedWorldNames'e yazılır ki aynı oyuncu aynı turda iki katılımcıya birden çıkmasın —
// imzalanmayanlar aşama sonunda havuza geri bırakılır (bkz. reservedNames).
// tier değerleri MANTIKSAL kimliklerdir (görsel/logic ayrımı); ekran etiketi t("tier."+tier).
const DRAFT_REPLACEMENT_TIERS = [
  { tier: "free" }, { tier: "cheap" }, { tier: "mid" }, { tier: "star" }, { tier: "star" }
];

function buildDraftReplacementCandidates(participant, slot) {
  const category = SLOT_CATEGORY[slot];
  const cands = [];
  const fresh = (pool) => pool.filter(p => !usedWorldNames.has(p.name));
  const reserve = (cand, tier) => {
    const entry = { ...cand, tier };
    usedWorldNames.add(entry.name);
    draftState.reservedNames.push(entry.name);
    cands.push(entry);
    return entry;
  };

  for (const spec of DRAFT_REPLACEMENT_TIERS) {
    const market = crossLeaguePlayerPool(category);
    let pick = null;
    if (spec.tier === "free") {
      pick = pickRandomFromPool(fresh(freeTransferPool(category)));
      if (pick) pick = { ...pick, value: 0 };
      if (!pick) pick = makeFreeAgent(category, 0);
    } else {
      // bkz. buildSlotCandidates'teki aynı eşikler (73/76/80) — gerçek 5 lig havuzunda
      // tükenme riskini azaltmak için yıldız bandı 80'den başlıyor.
      const range = spec.tier === "cheap" ? [73, 76] : spec.tier === "mid" ? [76, 80] : [80, 200];
      pick = pickRandomFromPool(fresh(market.filter(p => p.rating >= range[0] && p.rating < range[1])))
        || pickRandomFromPool(fresh(market))
        || makeFreeAgent(category);
    }
    // makeFreeAgent rastgele isim üretir; teorik bir çakışmada bile aday listeleri ayrık kalsın.
    while (usedWorldNames.has(pick.name)) pick = makeFreeAgent(category, spec.tier === "free" ? 0 : undefined);
    reserve(pick, spec.tier);
  }
  return cands;
}

// Bot: bütçesine sığan adaylar arasından en yüksek reytinglisini, eşitlikte en ucuzunu imzalar.
function botDraftReplacementIdx(participant, cands) {
  let bestIdx = -1;
  cands.forEach((c, i) => {
    if (c.value > participant.budget) return;
    if (bestIdx < 0) { bestIdx = i; return; }
    const best = cands[bestIdx];
    if (c.rating > best.rating || (c.rating === best.rating && c.value < best.value)) bestIdx = i;
  });
  // Bedava aday her zaman €0 olduğu için buraya normalde hiç düşülmez; yine de güvenli varsayılan.
  return bestIdx >= 0 ? bestIdx : cands.findIndex(c => c.value === 0);
}

function draftPendingVacancies() {
  const ds = draftState;
  if (!ds || ds.stage !== "replace") return [];
  return ds.replaceTargets
    .filter(key => ds.replacePicks[key] === undefined)
    .map(key => {
      const [clubId, slot] = key.split("|");
      return { clubId, slot, key };
    });
}

// round 1: draftta boşalan mevkiler (zorunlu). round 2: gönüllü satıştan boşalan mevki.
// Adaylar TÜM katılımcılar için tek seferde, ortak bir isim rezervasyonu üzerinden üretilir —
// böylece hiçbir oyuncu aynı turda iki katılımcıya birden teklif edilmez.
function startDraftReplaceStage(round) {
  const ds = draftState;
  ds.stage = "replace";
  ds.replaceRound = round;
  ds.replaceCandidates = {};
  ds.replacePicks = {};
  ds.replaceTargets = [];
  ds.reservedNames = [];
  ds.seq++;

  const vacancies = [];
  for (const p of participants) {
    for (const slot of SLOTS) {
      if (p.squad[slot].vacant) vacancies.push({ p, slot });
    }
  }
  if (vacancies.length === 0) {
    if (round === 1) startDraftSellStage();
    else finishDraftPhase();
    return;
  }

  for (const v of vacancies) {
    const key = draftVacancyKey(v.p.clubId, v.slot);
    ds.replaceTargets.push(key);
    ds.replaceCandidates[key] = buildDraftReplacementCandidates(v.p, v.slot);
  }
  for (const v of vacancies) {
    if (isDraftHumanControlled(v.p)) continue;
    const key = draftVacancyKey(v.p.clubId, v.slot);
    applyDraftReplacement(v.p, v.slot, botDraftReplacementIdx(v.p, ds.replaceCandidates[key]));
  }
  renderDraftScreen();
  mpPublish();
  maybeFinishDraftReplaceStage();
}

function applyDraftReplacement(participant, slot, idx) {
  const ds = draftState;
  if (!ds || ds.stage !== "replace") return;
  const key = draftVacancyKey(participant.clubId, slot);
  const cands = ds.replaceCandidates[key];
  if (!cands || ds.replacePicks[key] !== undefined) return;
  const cand = cands[idx];
  if (!cand || cand.value > participant.budget) return;
  commitBuy(participant, slot, cand, cand.value);
  ds.replacePicks[key] = idx;
  ds.reservedNames = ds.reservedNames.filter(n => n !== cand.name);
  ds.seq++;
  ds.log.push({ k: "log.draftSigned", v: {
    club: participant.name, posSlot: slot, name: cand.name, rating: cand.rating,
    price: cand.value === 0 ? t("common.free") : formatValue(cand.value)
  } });
}

function submitDraftReplacement(slot, idx) {
  const ds = draftState;
  if (!ds || ds.stage !== "replace") return;
  const key = draftVacancyKey(human.clubId, slot);
  if (ds.replacePicks[key] !== undefined) return;
  if (mpActive() && !mpIsHost()) {
    if (guestDraftInFlight) return;
    guestDraftInFlight = { type: "replace", key };
    MP.sendAction("draftReplace", { clubId: human.clubId, slot, idx });
    renderDraftScreen();
    return;
  }
  applyDraftReplacement(human, slot, idx);
  renderDraftScreen();
  mpPublish();
  maybeFinishDraftReplaceStage();
}

function maybeFinishDraftReplaceStage() {
  const ds = draftState;
  if (!ds || ds.stage !== "replace") return;
  if (draftPendingVacancies().length > 0) return;
  for (const name of ds.reservedNames) usedWorldNames.delete(name);
  ds.reservedNames = [];
  if (ds.replaceRound === 1) startDraftSellStage();
  else finishDraftPhase();
}

/* ---- B2) Gönüllü satış: kadrodan İSTEDİĞİN bir oyuncuyu sat ---- */

function draftSellableSlots(participant) {
  return SLOTS.filter(slot => !participant.squad[slot].vacant);
}

// Bot: kadrosundaki en düşük reytingli oyuncuyu satar — yerine gelen 5 adaydan en iyisini
// imzalayacağı için bu her zaman yükseltme yönünde bir hamledir (bkz. botDecide).
function botDraftSellSlot(participant) {
  const slots = draftSellableSlots(participant);
  if (slots.length === 0) return "";
  return slots.reduce((a, b) => (participant.squad[b].rating < participant.squad[a].rating ? b : a));
}

function applyDraftSellDecision(participant, slot) {
  const ds = draftState;
  if (!ds || ds.stage !== "sell" || ds.sellDone[participant.clubId]) return;
  if (slot && draftSellableSlots(participant).includes(slot)) {
    const player = participant.squad[slot];
    participant.budget += player.value;
    participant.squad[slot] = makeVacantSlot();
    ds.sellChoice[participant.clubId] = slot;
    ds.log.push({ k: "log.draftSold", v: {
      club: participant.name, posSlot: slot, name: player.name, rating: player.rating, price: formatValue(player.value)
    } });
  } else {
    ds.sellChoice[participant.clubId] = "-";
    ds.log.push({ k: "log.draftNoSale", v: { club: participant.name } });
  }
  ds.sellDone[participant.clubId] = true;
  ds.seq++;
}

function submitDraftSellDecision(slot) {
  const ds = draftState;
  if (!ds || ds.stage !== "sell" || ds.sellDone[human.clubId]) return;
  if (mpActive() && !mpIsHost()) {
    if (guestDraftInFlight) return;
    guestDraftInFlight = { type: "sell" };
    // Firebase boş metni de düşürebildiği için "satmıyorum" kararı "-" olarak taşınır.
    MP.sendAction("draftSell", { clubId: human.clubId, slot: slot || "-" });
    renderDraftScreen();
    return;
  }
  applyDraftSellDecision(human, slot);
  renderDraftScreen();
  mpPublish();
  maybeFinishDraftSellStage();
}

function startDraftSellStage() {
  const ds = draftState;
  ds.stage = "sell";
  ds.sellDone = {};
  ds.sellChoice = {};
  ds.seq++;
  for (const p of participants) {
    if (!isDraftHumanControlled(p)) applyDraftSellDecision(p, botDraftSellSlot(p));
    else if (draftSellableSlots(p).length === 0) ds.sellDone[p.clubId] = true;
  }
  renderDraftScreen();
  mpPublish();
  maybeFinishDraftSellStage();
}

function maybeFinishDraftSellStage() {
  const ds = draftState;
  if (!ds || ds.stage !== "sell") return;
  if (!participants.every(p => ds.sellDone[p.clubId])) return;
  startDraftReplaceStage(2);
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

// Guest'in uçuştaki draft aksiyonunu SADECE gerçekten işlendiğinde serbest bırakır — BAŞKA bir
// oyuncunun aksiyonunun tetiklediği alakasız bir yayın bu kilidi asla erken açmamalı.
function refreshGuestDraftLock() {
  if (!guestDraftInFlight || !draftState) return;
  const ds = draftState;
  if (guestDraftInFlight.type === "pick") {
    // Sıra bendeyken başka hiç kimse seçim yapamaz, dolayısıyla turnCounter'ın artması SADECE
    // benim seçimimin/pasımın işlendiği anlamına gelir.
    if (ds.stage !== "pick" || ds.turnCounter !== guestDraftInFlight.turnCounter) guestDraftInFlight = null;
  } else if (guestDraftInFlight.type === "sell") {
    if (ds.stage !== "sell" || ds.sellDone[human.clubId]) guestDraftInFlight = null;
  } else if (guestDraftInFlight.type === "replace") {
    if (ds.stage !== "replace" || ds.replacePicks[guestDraftInFlight.key] !== undefined) guestDraftInFlight = null;
  }
}

function renderDraftScreen() {
  if (!draftState) return;
  mpPhase = draftState.stage === "replace" ? "draftReplace" : draftState.stage === "sell" ? "draftSell" : "draft";
  refreshGuestDraftLock();

  rebuildScreen.classList.add("hidden");
  seasonTableScreen.classList.add("hidden");
  transferScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  draftScreen.classList.remove("hidden");

  if (draftScreenTitle) draftScreenTitle.textContent = t("draft.title", { n: currentSeason });
  draftBudgetPill.textContent = t("common.budget", { v: formatValue(human.budget) });
  draftSlotsRow.innerHTML = draftState.slots.map((slot, i) => {
    const cls = draftState.stage !== "pick" ? " done" : i === draftState.slotIdx ? " active" : i < draftState.slotIdx ? " done" : "";
    return `<span class="draft-slot-chip${cls}">${SLOT_LABELS[slot]}</span>`;
  }).join("");
  draftLog.innerHTML = draftState.log.slice(-14).map(m => `<div>${renderLogEntry(m)}</div>`).join("");

  if (draftState.stage === "replace") renderDraftReplacePanel();
  else if (draftState.stage === "sell") renderDraftSellPanel();
  else renderDraftPickPanel();
}

function draftShowPanel(which) {
  draftPickPanel.classList.toggle("hidden", which !== "pick");
  draftSellPanel.classList.toggle("hidden", which !== "sell");
  draftReplacePanel.classList.toggle("hidden", which !== "replace");
}

function renderDraftPickPanel() {
  draftShowPanel("pick");

  const ds = draftState;
  const slot = draftCurrentSlot();
  const turnClubId = ds.order[ds.turnIdx];
  const myTurn = turnClubId === human.clubId && mpControlsClub(human.clubId);
  const locked = !!guestDraftInFlight;

  draftStageTitle.textContent = t("draft.stageTitle", { pos: SLOT_LABELS[slot], i: ds.slotIdx + 1, total: ds.slots.length });

  draftPoolGrid.innerHTML = ds.pool.map(entry => {
    const owner = draftParticipant(entry.ownerClubId);
    const mine = entry.ownerClubId === human.clubId;
    const gone = entry.status !== "open";
    const canPick = myTurn && !locked && !mine && !gone;
    const status = entry.status === "taken"
      ? `<div class="draft-pool-status taken">${t("draft.poolTakenBy", { club: draftParticipant(entry.takenByClubId).name })}</div>`
      : entry.status === "withdrawn"
        ? `<div class="draft-pool-status taken">${t("draft.poolWithdrawn")}</div>`
        : `<div class="draft-pool-status open">${t("draft.poolOpen")}</div>`;
    const label = mine ? t("draft.btnMine") : gone ? t("draft.btnGone") : t("draft.btnPick");
    return `<div class="draft-pool-card${mine ? " mine" : ""}${gone ? " gone" : ""}">
      <div class="draft-pool-owner">${SLOT_SHORT[entry.slot]} · ${owner.name}${mine ? t("common.you") : ""}</div>
      <div class="rating-badge small">${entry.player.rating}</div>
      <div class="player-photo">${pixelAvatarSVG(entry.player.name)}</div>
      <div class="candidate-name">${entry.player.name}</div>
      <div class="candidate-meta">${t("common.age", { n: entry.player.age })} · ${entry.player.nationality}</div>
      <div class="candidate-value">${formatValue(entry.player.value)}</div>
      ${status}
      <button class="keep-btn draft-pick-btn" data-owner="${entry.ownerClubId}"${canPick ? "" : " disabled"}>${label}</button>
    </div>`;
  }).join("");

  draftPoolGrid.querySelectorAll(".draft-pick-btn").forEach(btn => {
    btn.addEventListener("click", () => submitDraftPick(btn.dataset.owner));
  });

  draftTurnRow.innerHTML = ds.order.map((id, i) => {
    const p = draftParticipant(id);
    return `<span class="bidder-chip${i === ds.turnIdx ? " turn" : ""}${p === human ? " you" : ""}">${p.name}${p === human ? t("common.you") : ""}</span>`;
  }).join("");

  draftPassBtn.disabled = !myTurn || locked;
  if (myTurn) {
    draftTurnHint.textContent = locked ? t("draft.turnHintLocked") : t("draft.turnHintMine");
  } else {
    draftTurnHint.textContent = t("draft.turnHintOther", { club: draftParticipant(turnClubId).name });
  }
}

function renderDraftSellPanel() {
  draftShowPanel("sell");

  const ds = draftState;
  const done = !!ds.sellDone[human.clubId];
  const sellable = draftSellableSlots(human);
  const waiting = participants.filter(p => !ds.sellDone[p.clubId] && p !== human).map(p => p.name);

  draftSellTitle.textContent = t("draft.sellTitle");
  draftSellHint.textContent = done
    ? (waiting.length > 0 ? t("draft.sellHintDoneWaiting", { names: waiting.join(", ") }) : t("draft.sellHintDone"))
    : t("draft.sellHint");

  draftSellGrid.innerHTML = sellable.map(slot => {
    const player = human.squad[slot];
    return `<div class="draft-sell-card" data-slot="${slot}">
      <div class="draft-pool-owner">${SLOT_LABELS[slot]}</div>
      <div class="rating-badge small">${player.rating}</div>
      <div class="player-photo">${pixelAvatarSVG(player.name)}</div>
      <div class="candidate-name">${player.name}</div>
      <div class="candidate-meta">${t("common.age", { n: player.age })} · ${player.nationality}</div>
      <div class="candidate-value">${formatValue(player.value)}</div>
      <button class="sell-btn draft-sell-toggle"${done ? " disabled" : ""}>${t("draft.sellBtn")}</button>
    </div>`;
  }).join("");

  if (!done) {
    draftSellGrid.querySelectorAll(".draft-sell-card").forEach(card => {
      card.querySelector(".draft-sell-toggle").addEventListener("click", () => {
        const already = card.classList.contains("selected");
        draftSellGrid.querySelectorAll(".draft-sell-card").forEach(c => {
          c.classList.remove("selected");
          c.querySelector(".draft-sell-toggle").textContent = t("draft.sellBtn");
        });
        if (!already) {
          card.classList.add("selected");
          card.querySelector(".draft-sell-toggle").textContent = t("draft.sellBtnSelected");
        }
      });
    });
  }

  draftSellConfirmBtn.classList.toggle("hidden", sellable.length === 0);
  draftSellConfirmBtn.disabled = done || !!guestDraftInFlight;
  draftSellConfirmBtn.textContent = done ? t("draft.confirmed") : t("draft.confirm");
}

function renderDraftReplacePanel() {
  draftShowPanel("replace");

  const ds = draftState;
  const pending = draftPendingVacancies();
  const mine = pending.filter(v => v.clubId === human.clubId);
  const waiting = pending.filter(v => v.clubId !== human.clubId).map(v => draftParticipant(v.clubId).name);
  draftReplaceGrid.innerHTML = "";

  if (mine.length === 0) {
    draftReplaceTitle.textContent = t("draft.replaceTitleNone");
    draftReplaceHint.textContent = waiting.length > 0
      ? t("draft.replaceHintWaiting", { names: [...new Set(waiting)].join(", ") })
      : t("draft.replaceHintFinishing");
    return;
  }

  const { slot, key } = mine[0];
  const cands = ds.replaceCandidates[key] || [];
  draftReplaceTitle.textContent = t("draft.replaceTitle", { pos: SLOT_LABELS[slot], n: mine.length });
  draftReplaceHint.textContent = ds.replaceRound === 1 ? t("draft.replaceHint1") : t("draft.replaceHint2");

  cands.forEach((cand, idx) => {
    const affordable = cand.value <= human.budget;
    const card = document.createElement("div");
    card.className = "offer-card draft-replace-card";
    card.dataset.tier = cand.tier;
    card.innerHTML = `
      <div class="offer-left">
        <div class="tier-tag">${t("tier." + cand.tier)}</div>
        <div class="rating-badge small">${cand.rating}</div>
        <div class="player-photo">${pixelAvatarSVG(cand.name)}</div>
      </div>
      <div class="offer-text">
        <div class="offer-pos">${SLOT_LABELS[slot]} · ${t("common.age", { n: cand.age })} · ${cand.nationality}</div>
        <div class="offer-name">${cand.name}</div>
        <div class="offer-current-value">${cand.club}</div>
        <div class="offer-buyer">${affordable ? t("draft.affordable") : t("draft.notAffordable")}</div>
      </div>
      <div class="offer-actions">
        <div class="offer-value">${cand.value === 0 ? t("common.free") : formatValue(cand.value)}</div>
        <div class="offer-buttons"><button class="accept-btn draft-sign-btn">${t("draft.sign")}</button></div>
        <div class="offer-status"></div>
      </div>
    `;
    if (!affordable || guestDraftInFlight) {
      card.querySelectorAll("button").forEach(b => (b.disabled = true));
    } else {
      card.querySelector(".draft-sign-btn").addEventListener("click", () => submitDraftReplacement(slot, idx));
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
    spot.title = t("squad.tooltip", { name: player.name, age: t("common.age", { n: player.age }), rating: player.rating });

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
  return p === human ? t("common.you") : p.isBot ? " 🤖" : " 👤";
}

function averageRating(p) {
  const total = SLOTS.reduce((s, slot) => s + p.squad[slot].rating, 0);
  return (total / SLOTS.length).toFixed(1);
}

function renderBotStatus() {
  const myAvgEl = document.getElementById("myAvgRating");
  if (myAvgEl) myAvgEl.textContent = t("squad.avgRating", { v: averageRating(human) });

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
      const tip = t("squad.chipTooltip", { pos: SLOT_LABELS[slot], name: player.name, age: t("common.age", { n: player.age }), rating: player.rating });
      return `<span class="bot-chip ${cls}" title="${tip}">${SLOT_SHORT[slot]}</span>`;
    }).join("");

    const card = document.createElement("div");
    card.className = "bot-card";
    card.innerHTML = `
      <div class="bot-card-head">
        <span class="bot-card-name">${p.name}${p.isBot ? " 🤖" : " 👤"}</span>
        <span class="bot-card-budget">${formatValue(p.budget)}</span>
      </div>
      <div class="bot-card-meta">${t("squad.botMeta", { season: currentSeason, done: processed, total: SLOTS.length, avg: avgRating })}</div>
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
      <span class="career-points">${t("career.points", { n: r.points })}</span>
    </div>
  `).join("");

  const historyRows = seasonHistory.map(h => {
    const winner = h.table[0];
    return `<div class="history-row">${t("career.historyRow", {
      season: h.season,
      club: winner.p.name,
      rating: winner.avgRating.toFixed(1),
      prize: formatValue(winner.prize),
      scorer: h.topScorer.player.name,
      scorerClub: h.topScorer.p.name,
      goals: t("common.goals", { n: h.topScorer.goals })
    })}</div>`;
  }).join("");

  const bonusRows = positionBonusBreakdown.length > 0 ? `
    <h4 class="career-subtitle">${t("career.bonusTitle")}</h4>
    <div class="career-history">
      ${positionBonusBreakdown.map(b => `<div class="history-row">${t("career.bonusRow", {
        pos: SLOT_LABELS[b.slot], club: b.clubName, n: b.upgrade
      })}</div>`).join("")}
    </div>
  ` : "";

  careerSummaryEl.innerHTML = `
    <h3 class="career-title">${t("career.champion", { n: seasonHistory.length, name: champion.p.name })}</h3>
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
    ? t("result.titleFull", { n: seasonsPlayed })
    : t("result.titlePartial", { n: seasonsPlayed });

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
        <span>${x.name} <span class="age-tag">${t("result.ageTag", { n: x.age })}</span> <span class="origin-tag ${x.origin}">${x.origin === "bought" ? t("result.originNew") : x.origin === "academy" ? t("result.originAcademy") : t("result.originKept")}</span></span>
        <span class="rv">${formatValue(x.value)}</span>
      </div>`;
    }).join("");
    div.innerHTML = `
      <h3><span>${p.name}${whoLabel(p)}${isWinner ? " 👑" : ""}</span></h3>
      <div class="result-totals">
        <span>${t("result.avgRating", { v: (totalRating / SLOTS.length).toFixed(1) })}</span>
        <span>${t("result.squadValue", { v: formatValue(totalValue) })}</span>
        <span>${t("result.budgetLeft", { v: formatValue(p.budget) })}</span>
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

/* ---------------- I18N: dil değişince görünen ekranı yeniden çiz ---------------- */
// data/i18n.js statik ([data-i18n]) düğümleri kendisi tazeler; burada JS ile üretilen
// dinamik içeriği yeniden çiziyoruz. Yarım kalmış bir kullanıcı etkileşimi (aday seçim
// ekranı, açık artırma turu) ASLA ezilmez — o durumda ilgili panel olduğu gibi bırakılır.
function rerenderForLanguage() {
  // Kurulum ekranı her zaman güvenle yeniden çizilebilir (henüz oyun başlamamış olabilir).
  renderLeaguePickGrid();
  renderTeamPickGrid();
  renderOpponentPickGrid();
  renderBotSetupText();

  if (!human || participants.length === 0) return;

  renderMatchupTitle();
  updateBudgetPill();
  renderPitch();
  renderBotStatus();

  if (draftState && !draftScreen.classList.contains("hidden")) {
    renderDraftScreen();
  } else if (!seasonTableScreen.classList.contains("hidden")) {
    const last = seasonHistory[seasonHistory.length - 1];
    if (last) renderSeasonTableScreen(last.table, last.scorers);
  } else if (!transferScreen.classList.contains("hidden") && lastTransferRender) {
    renderTransferScreen(lastTransferRender.messages, lastTransferRender.botsAccepted, lastTransferRender.botsTotal);
  } else if (!resultScreen.classList.contains("hidden")) {
    showResults();
  } else if (!rebuildScreen.classList.contains("hidden")) {
    if (auction && !auctionView.classList.contains("hidden")) renderAuctionView();
    else if (chooseView.classList.contains("hidden") && round) renderCurrentClientView();
  }
}
onLangChange(rerenderForLanguage);
