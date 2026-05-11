const STORAGE_KEYS = {
  raids: "arc_companion_raids_v2",
  profile: "arc_companion_profile_v5",
  ollama: "arc_companion_ollama_v1",
  account: "arc_companion_account_v1",
  session: "arc_companion_session_v1"
};

const MAPS = [
  "Синие ворота",
  "Поле битвы у дамбы",
  "Погребенный город",
  "Стелла Монтис",
  "Космопорт"
];

const WEAPONS = [
  {
    name: "Чайник",
    type: "Полуавтоматическая штурмовая винтовка",
    tier: "обычный",
    description: "Быстрая и точная, но обладает низкой скоростью пули и долгой перезарядкой.",
    arcPen: "Очень низкая",
    ammoType: "Легкие",
    mag: 20,
    damage: 8.5,
    fireRate: 26,
    range: 42.8,
    stability: 69.8,
    mobility: 58.5,
    stealth: 26,
    headshot: "2.5х",
    bonuses: [
      "75% увеличение скорости полёта пули",
      "40% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Трещотка",
    type: "Штурмовая винтовка",
    tier: "обычный",
    description: "Дешёвый вариант для наступления, но перезаряжать её приходится по 2 патрона за раз.",
    arcPen: "Средняя",
    ammoType: "Средние",
    mag: 12,
    damage: 9,
    fireRate: 33.3,
    range: 56.2,
    stability: 72.2,
    mobility: 54.8,
    stealth: 14,
    headshot: "2.0х",
    bonuses: ["+12 к размеру магазина", "+30 к прочности"],
    source: ""
  },
  {
    name: "Заколка",
    type: "Пистолет",
    tier: "обычный",
    description: "Однозарядный пистолет со встроенным глушителем. Отлично подходит для скрытных действий, но не очень удобен в прямом бою.",
    arcPen: "Очень низкая",
    ammoType: "Легкие",
    mag: 8,
    damage: 20,
    fireRate: 9,
    range: 38.6,
    stability: 90.9,
    mobility: 78.3,
    stealth: 70,
    headshot: "2.5х",
    bonuses: [
      "30% увеличение скорострельности",
      "40% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Строчильщик",
    type: "Пистолет-пулемёт",
    tier: "обычный",
    description: "Пистолет-пулемёт с полностью автоматическим огнём. Наносит маленький урон, однако обладает довольно высокой скорострельностью и может быть сложен в управлении.",
    arcPen: "Очень низкая",
    ammoType: "Легкие",
    mag: 20,
    damage: 6.5,
    fireRate: 45.3,
    range: 42.1,
    stability: 45.3,
    mobility: 73.8,
    stealth: 19,
    headshot: "1.75х",
    bonuses: [
      "50% уменьшение горизонтальной отдачи",
      "40% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Ферро",
    type: "Однозарядная винтовка",
    tier: "обычный",
    description: "Тяжёлая винтовка с переломным механизмом. Бьёт очень мощно, но перезаряжается после каждого выстрела.",
    arcPen: "Высокая",
    ammoType: "Тяжёлые",
    mag: 1,
    damage: 40,
    fireRate: 6.6,
    range: 53.1,
    stability: 78.1,
    mobility: 32.1,
    stealth: 8,
    headshot: "2.5х",
    bonuses: ["39% сокращение времени перезарядки", "+30 к прочности"],
    source: ""
  },
  {
    name: "Бурлетта",
    type: "Пистолет",
    tier: "необычный",
    description: "Полуавтоматический пистолет с хорошим уроном и точностью.",
    arcPen: "Очень низкая",
    ammoType: "Легкие",
    mag: 12,
    damage: 10,
    fireRate: 28,
    range: 41.7,
    stability: 74.5,
    mobility: 84.4,
    stealth: 24,
    headshot: "2.5х",
    bonuses: ["50% сокращение скорости перезарядки", "+30 к прочности"],
    source: "Чертеж на Бурлетту выдают за выполнение квеста"
  },
  {
    name: "Эль-Торо",
    type: "Дробовик с помповым механизмом",
    tier: "необычный",
    description: "Обладает большим разбросом и высоким показателем урона вблизи.",
    arcPen: "Низкая",
    ammoType: "Патроны для дробовика",
    mag: 5,
    damage: 67.5,
    fireRate: 14.3,
    range: 20,
    stability: 80.6,
    mobility: 61.1,
    stealth: 18,
    headshot: "1х",
    bonuses: [
      "50% увеличение скорости стрельбы",
      "+3 к размеру магазина",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Арпеджио",
    type: "Штурмовая винтовка",
    tier: "необычный",
    description: "Штурмовая винтовка с очередями по 3 выстрела. Обладает хорошим уроном и высокой точностью.",
    arcPen: "Средняя",
    ammoType: "Средние",
    mag: 24,
    damage: 9.5,
    fireRate: 18.3,
    range: 55.9,
    stability: 84,
    mobility: 57.3,
    stealth: 14,
    headshot: "2.0х",
    bonuses: [
      "60% увеличение скорости стрельбы",
      "50% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Наковальня",
    type: "Пистолет",
    tier: "необычный",
    description: "Наносит высокий урон с повышенным уроном в голову, но обладает медленной скоростью обращения.",
    arcPen: "Высокая",
    ammoType: "Тяжёлые",
    mag: 6,
    damage: 40,
    fireRate: 16.3,
    range: 50.2,
    stability: 75.2,
    mobility: 69.1,
    stealth: 10,
    headshot: "2.5х",
    bonuses: [
      "18.75% сокращение времени восстановления разброса",
      "75% увеличение скорости стрельбы",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Охотник",
    type: "Пистолет",
    tier: "редкий",
    description: "Полуавтоматический пистолет. Стреляет двумя пулями одновременно.",
    arcPen: "Средняя",
    ammoType: "Средние",
    mag: 10,
    damage: 8,
    fireRate: 36.7,
    range: 48.4,
    stability: 61.3,
    mobility: 76.4,
    stealth: 12,
    headshot: "2х",
    bonuses: [
      "40% увеличение скорости стрельбы",
      "50% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Торренте",
    type: "Легкий пулемет",
    tier: "редкий",
    description: "Ручной пулемёт с полностью автоматическим огнём. Обладает большой ёмкостью магазина, но точная стрельба возможна только из положения сидя на корточках.",
    arcPen: "Средняя",
    ammoType: "Средние",
    mag: 60,
    damage: 8,
    fireRate: 58.3,
    range: 49.9,
    stability: 74.2,
    mobility: 37.7,
    stealth: 1,
    headshot: "2.0х",
    bonuses: [
      "+30 к размеру магазина",
      "45% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Ястреб",
    type: "Снайперская винтовка",
    tier: "редкий",
    description: "Снайперская винтовка с продольно-скользящим затвором и оптическим прицелом. Обладает стабильно высоким уроном и выдающейся точностью.",
    arcPen: "Средняя",
    ammoType: "Средние",
    mag: 8,
    damage: 45,
    fireRate: 17.7,
    range: 80.3,
    stability: 89.4,
    mobility: 49.5,
    stealth: 12,
    headshot: "2.0х",
    bonuses: [
      "60% сокращение задержки времени задержки скользящего затвора",
      "37.5% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Бунтарь",
    type: "Боевая Винтовка",
    tier: "редкий",
    description: "Винтовка с рычажным затвором. Обладает высоким уроном, исключительной точностью и повышенным уроном в голову.",
    arcPen: "Средняя",
    ammoType: "Средние",
    mag: 8,
    damage: 35,
    fireRate: 21,
    range: 68.8,
    stability: 85.7,
    mobility: 55.8,
    stealth: 16,
    headshot: "2.25х",
    bonuses: [
      "50% сокращение времени восстановления разброса",
      "75% увеличение скорости стрельбы",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Буря",
    type: "Штурмовая винтовка",
    tier: "эпический",
    description: "Полностью автоматическая штурмовая винтовка. Обладает средней скорострельностью и удовлетворительной точностью.",
    arcPen: "Средняя",
    ammoType: "Средние",
    mag: 33,
    damage: 10,
    fireRate: 36.7,
    range: 55.9,
    stability: 78.9,
    mobility: 46,
    stealth: 14,
    headshot: "1.5х",
    bonuses: [
      "50% уменьшение горизонтальной отдачи",
      "40% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: "Чертеж на Бурю можно найти во время «Ночного Рейда»"
  },
  {
    name: "Рысь",
    type: "Пистолет-пулемёт",
    tier: "эпический",
    description: "Пистолет-пулемёт с полной автоматической стрельбой. Обладает высокой скорострельностью, но низкой точностью.",
    arcPen: "Очень низкая",
    ammoType: "Легкие",
    mag: 30,
    damage: 6,
    fireRate: 66.7,
    range: 44,
    stability: 45.9,
    mobility: 73.1,
    stealth: 21,
    headshot: "2.0х",
    bonuses: [
      "45% уменьшение максимального разброса выстрела",
      "45% уменьшение горизонтальной отдачи",
      "40% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: "Чертеж на Рысь можно найти во время события «Запертые Ворота»"
  },
  {
    name: "Вулкан",
    type: "Полуавтоматический дробовик",
    tier: "эпический",
    description: "Полуавтоматический дробовик. Обладает хорошим разбросом дроби, но резким падением урона на дистанции.",
    arcPen: "Низкая",
    ammoType: "Патроны для дробовика",
    mag: 4,
    damage: 49.5,
    fireRate: 26.3,
    range: 26,
    stability: 68.6,
    mobility: 70.3,
    stealth: 15,
    headshot: "1х",
    bonuses: [
      "30% увеличение скорострельности",
      "40% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: "Чертеж на Вулкан можно найти во время события «Тайный бункер»"
  },
  {
    name: "Беттина",
    type: "Штурмовая винтовка",
    tier: "эпический",
    description: "Обладает низкой скорострельностью и наносит высокий урон.",
    arcPen: "Высокая",
    ammoType: "Тяжёлые",
    mag: 22,
    damage: 14,
    fireRate: 32,
    range: 51.3,
    stability: 76.4,
    mobility: 48.2,
    stealth: 14,
    headshot: "2.0х",
    bonuses: [
      "15% увеличение скорости стрельбы",
      "33.3% сокращение времени перезарядки",
      "+30 к прочности"
    ],
    source: ""
  },
  {
    name: "Взломщик Корпусов",
    type: "Специальное",
    tier: "эпический",
    description: "Выстреливает разрывными снарядами, которые детонируют только при попадании по ARCам.",
    arcPen: "Очень высокая",
    ammoType: "Боеприпасы для гранатомёта",
    mag: 5,
    damage: 100,
    fireRate: 20.3,
    range: 38.9,
    stability: 97.2,
    mobility: 67.9,
    stealth: 1,
    headshot: "—",
    bonuses: [
      "53% увеличение скорости стрельбы",
      "+30 к прочности"
    ],
    source: "Чертеж на Взломщик Корпусов выдают за прохождение квеста"
  },
  {
    name: "Юпитер",
    type: "Снайперская винтовка",
    tier: "легендарное",
    description: "Снайперская винтовка с продольно-скользящим затвором. Обладает исключительным уроном и высочайшей точностью, но отличается медленной скорострельностью.",
    arcPen: "Высокая",
    ammoType: "Энергетическая обойма",
    mag: 5,
    damage: 60,
    fireRate: 7.67,
    range: 71.7,
    stability: 73.5,
    mobility: 39.2,
    stealth: 5,
    headshot: "2.0х",
    bonuses: [],
    source: "Чертеж на Юпитер можно получить, выполнив пазл в сборщике"
  },
  {
    name: "Уравнитель",
    type: "Энергетическое оружие",
    tier: "легендарное",
    description: "Экспериментальная лучевая винтовка с большой ёмкостью.",
    arcPen: "Очень высокая",
    ammoType: "Энергетическая обойма",
    mag: 50,
    damage: 8,
    fireRate: 33.33,
    range: 68.6,
    stability: 84.6,
    mobility: 44.6,
    stealth: 20,
    headshot: "2.0х",
    bonuses: [],
    source: "Чертеж на Уравнитель можно получить, выполнив пазл в сборщике"
  },
  {
    name: "Афелий",
    type: "Боевая винтовка",
    tier: "легендарное",
    description: "Боевая винтовка, которая ведет огонь очередями по два выстрела.",
    arcPen: "Высокая",
    ammoType: "Энергетическая обойма",
    mag: 10,
    damage: 25,
    fireRate: 9,
    range: 76,
    stability: 88,
    mobility: 39,
    stealth: 16,
    headshot: "2.0х",
    bonuses: [],
    source: "Чертеж на Афелий можно найти на карте «Стелла Монтис»"
  }
];

const DEFAULT_PROFILE = {
  nickname: "ForRe4l",
  avatar: "A",
  avatarImage: "",
  email: "forreal@arc.local",
  baseMoney: 0
};

const DEFAULT_OLLAMA = {
  model: "gemma3:12b",
  url: "http://127.0.0.1:11434"
};

const DEFAULT_RAIDS = [
  {
    id: crypto.randomUUID(),
    result: "success",
    map: "Синие ворота",
    duration: 14,
    loot: 22000,
    lost: 4500,
    weapon: "Строчильщик",
    note: "Быстрый плюс-рейд, без лишней жадности.",
    createdAt: Date.now() - 500000
  },
  {
    id: crypto.randomUUID(),
    result: "fail",
    map: "Поле битвы у дамбы",
    duration: 9,
    loot: 4000,
    lost: 12500,
    weapon: "Эль-Торо",
    note: "Пуш на выходе оказался плохой идеей.",
    createdAt: Date.now() - 400000
  },
  {
    id: crypto.randomUUID(),
    result: "success",
    map: "Космопорт",
    duration: 21,
    loot: 56000,
    lost: 16000,
    weapon: "Арпеджио",
    note: "Хороший заход, повезло с лутом.",
    createdAt: Date.now() - 300000
  }
];

let profileState = loadProfile();
let ollamaState = loadOllama();
let raids = loadRaids();
let accountState = loadAccount();
let sessionState = loadSession();

let currentRaidFilter = "all";
let selectedRaidId = null;
let editingRaidId = null;
let currentWeaponFilter = "all";
let currentWeaponSort = "default";
let weaponSearchQuery = "";
let selectedWeaponName = WEAPONS[0]?.name || "";

let promptModalResolver = null;
let confirmModalResolver = null;

/* ---------- DOM ---------- */

const navButtons = document.querySelectorAll(".nav-btn");
const views = {
  stats: document.getElementById("statsView"),
  weapons: document.getElementById("weaponsView"),
  profile: document.getElementById("profileView"),
};

const pageTitles = {
  stats: "Статистика рейдов",
  weapons: "Пушки и сборки",
  profile: "Личный кабинет",
};

const pageTitle = document.getElementById("pageTitle");
const appShell = document.getElementById("appShell");
const authOverlay = document.getElementById("authOverlay");
const authSideText = document.getElementById("authSideText");

const showRegisterBtn = document.getElementById("showRegisterBtn");
const showLoginBtn = document.getElementById("showLoginBtn");

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

const registerNickname = document.getElementById("registerNickname");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerMoney = document.getElementById("registerMoney");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const toast = document.getElementById("toast");
const sessionStatusValue = document.getElementById("sessionStatusValue");

const totalRaidsValue = document.getElementById("totalRaidsValue");
const totalProfitValue = document.getElementById("totalProfitValue");
const totalLossValue = document.getElementById("totalLossValue");
const winrateValue = document.getElementById("winrateValue");
const avgLootValue = document.getElementById("avgLootValue");

const profileRaidsValue = document.getElementById("profileRaidsValue");
const profileProfitValue = document.getElementById("profileProfitValue");
const profileLossValue = document.getElementById("profileLossValue");
const favoriteWeaponValue = document.getElementById("favoriteWeaponValue");
const profileWinrateValue = document.getElementById("profileWinrateValue");
const profileAvgLootValue = document.getElementById("profileAvgLootValue");

const moneyValue = document.getElementById("moneyValue");

const analysisText = document.getElementById("analysisText");
const analysisList = document.getElementById("analysisList");
const quickAnalyzeBtn = document.getElementById("quickAnalyzeBtn");
const deepAnalyzeBtn = document.getElementById("deepAnalyzeBtn");

const raidHistory = document.getElementById("raidHistory");
const raidDetail = document.getElementById("raidDetail");
const toggleRaidFilterBtn = document.getElementById("toggleRaidFilterBtn");
const editRaidBtn = document.getElementById("editRaidBtn");
const deleteRaidBtn = document.getElementById("deleteRaidBtn");

const profileNickname = document.getElementById("profileNickname");
const profileAvatarFallback = document.getElementById("profileAvatarFallback");
const profileAvatarImage = document.getElementById("profileAvatarImage");
const profileEmail = document.getElementById("profileEmail");
const changeEmailBtn = document.getElementById("changeEmailBtn");

const profileMoneyInput = document.getElementById("profileMoneyInput");
const saveMoneyBtn = document.getElementById("saveMoneyBtn");
const resetMoneyBtn = document.getElementById("resetMoneyBtn");

const avatarFileInput = document.getElementById("avatarFileInput");

const weaponGrid = document.getElementById("weaponGrid");
const weaponSearchInput = document.getElementById("weaponSearchInput");
const weaponSortSelect = document.getElementById("weaponSortSelect");
const weaponPreview = document.getElementById("weaponPreview");
const weaponPreviewTitle = document.getElementById("weaponPreviewTitle");
const weaponPreviewSubtitle = document.getElementById("weaponPreviewSubtitle");
const weaponDescText = document.getElementById("weaponDescText");
const weaponMainStats = document.getElementById("weaponMainStats");
const weaponStats = document.getElementById("weaponStats");
const weaponBonuses = document.getElementById("weaponBonuses");
const weaponSourceText = document.getElementById("weaponSourceText");

const raidModalOverlay = document.getElementById("raidModalOverlay");
const raidForm = document.getElementById("raidForm");
const raidModalKicker = document.getElementById("raidModalKicker");
const raidModalTitle = document.getElementById("raidModalTitle");
const raidSubmitBtn = document.getElementById("raidSubmitBtn");

const raidResult = document.getElementById("raidResult");
const raidMap = document.getElementById("raidMap");
const raidDuration = document.getElementById("raidDuration");
const raidLoot = document.getElementById("raidLoot");
const raidLost = document.getElementById("raidLost");
const raidWeapon = document.getElementById("raidWeapon");
const raidNote = document.getElementById("raidNote");

const exportJsonBtn = document.getElementById("exportJsonBtn");
const importJsonBtn = document.getElementById("importJsonBtn");
const importJsonInput = document.getElementById("importJsonInput");

const ollamaModelInput = document.getElementById("ollamaModelInput");
const ollamaUrlInput = document.getElementById("ollamaUrlInput");
const saveOllamaSettingsBtn = document.getElementById("saveOllamaSettingsBtn");
const testOllamaBtn = document.getElementById("testOllamaBtn");

const profitChart = document.getElementById("profitChart");

const promptModalOverlay = document.getElementById("promptModalOverlay");
const promptModalKicker = document.getElementById("promptModalKicker");
const promptModalTitle = document.getElementById("promptModalTitle");
const promptModalLabel = document.getElementById("promptModalLabel");
const promptModalInput = document.getElementById("promptModalInput");
const closePromptModalBtn = document.getElementById("closePromptModalBtn");
const cancelPromptModalBtn = document.getElementById("cancelPromptModalBtn");
const submitPromptModalBtn = document.getElementById("submitPromptModalBtn");

const confirmModalOverlay = document.getElementById("confirmModalOverlay");
const confirmModalKicker = document.getElementById("confirmModalKicker");
const confirmModalTitle = document.getElementById("confirmModalTitle");
const confirmModalText = document.getElementById("confirmModalText");
const closeConfirmModalBtn = document.getElementById("closeConfirmModalBtn");
const cancelConfirmModalBtn = document.getElementById("cancelConfirmModalBtn");
const submitConfirmModalBtn = document.getElementById("submitConfirmModalBtn");

const minimizeWindowBtn = document.getElementById("minimizeWindowBtn");
const maximizeWindowBtn = document.getElementById("maximizeWindowBtn");
const closeWindowBtn = document.getElementById("closeWindowBtn");

function formatRaidDate(date) {
  if (!date) return "";
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}

// авто логика вынесено / потеряно
function syncRaidResultFields() {
  if (!raidResult) return;

  if (raidResult.value === "success") {
    raidLost.value = 0;
    raidLost.disabled = true;
    raidLoot.disabled = false;
  } else {
    raidLoot.value = 0;
    raidLoot.disabled = true;
    raidLost.disabled = false;
  }
}

raidResult.addEventListener("change", syncRaidResultFields);

/* ---------- HELPERS ---------- */

function safeBind(element, eventName, handler, name = "unknown") {
  if (!element) {
    console.error("safeBind: элемент не найден ->", name);
    return;
  }
  element.addEventListener(eventName, handler);
}

/* ---------- STORAGE ---------- */

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.profile);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      baseMoney: Number(parsed.baseMoney ?? DEFAULT_PROFILE.baseMoney),
      avatarImage: parsed.avatarImage || ""
    };
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}

function loadOllama() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ollama);
    return raw ? { ...DEFAULT_OLLAMA, ...JSON.parse(raw) } : { ...DEFAULT_OLLAMA };
  } catch {
    return { ...DEFAULT_OLLAMA };
  }
}

function loadRaids() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.raids);
    return raw ? JSON.parse(raw) : [...DEFAULT_RAIDS];
  } catch {
    return [...DEFAULT_RAIDS];
  }
}

function loadAccount() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.account);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function loadSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.session);
    return raw ? JSON.parse(raw) : { isLoggedIn: false };
  } catch {
    return { isLoggedIn: false };
  }
}

function saveAccount() {
  if (!accountState) return;
  localStorage.setItem(STORAGE_KEYS.account, JSON.stringify(accountState));
}

function saveSession() {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(sessionState));
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profileState));
}

function saveOllama() {
  localStorage.setItem(STORAGE_KEYS.ollama, JSON.stringify(ollamaState));
}

function saveRaids() {
  localStorage.setItem(STORAGE_KEYS.raids, JSON.stringify(raids));
}

function syncProfileToAccount() {
  if (!accountState) return;

  accountState.nickname = profileState.nickname;
  accountState.avatar = profileState.avatar;
  accountState.avatarImage = profileState.avatarImage || "";
  accountState.email = profileState.email;
  accountState.baseMoney = Number(profileState.baseMoney || 0);
  saveAccount();
}

/* ---------- AUTH ---------- */

function showAuth(mode = "register") {
  authOverlay.classList.remove("hidden");
  appShell.classList.add("app-locked");

  const isFirstLaunch = !accountState;
  if (showLoginBtn) {
    showLoginBtn.disabled = isFirstLaunch;
  }

  if (isFirstLaunch) {
    authSideText.textContent = "Первый запуск. Создай локальный аккаунт, чтобы сохранить профиль, баланс и статистику рейдов.";
    setAuthMode("register");
  } else {
    authSideText.textContent = "Войди в локальный аккаунт рейдера, чтобы продолжить работу со своим профилем и статистикой.";
    setAuthMode(mode);
  }
}

function hideAuth() {
  authOverlay.classList.add("hidden");
  appShell.classList.remove("app-locked");
}

function setAuthMode(mode) {
  const registerActive = mode === "register";

  showRegisterBtn?.classList.toggle("active", registerActive);
  showLoginBtn?.classList.toggle("active", !registerActive);

  registerForm?.classList.toggle("active", registerActive);
  loginForm?.classList.toggle("active", !registerActive);
}

function createLocalAccount({ nickname, email, password, baseMoney }) {
  const trimmedNickname = nickname.trim() || "Raider";
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim();

  if (!trimmedEmail) {
    throw new Error("Email не может быть пустым");
  }

  if (trimmedPassword.length < 4) {
    throw new Error("Пароль слишком короткий");
  }

  accountState = {
    nickname: trimmedNickname,
    email: trimmedEmail,
    password: trimmedPassword,
    avatar: trimmedNickname.charAt(0).toUpperCase() || "A",
    avatarImage: "",
    baseMoney: Number(baseMoney || 0)
  };

  profileState = {
    nickname: accountState.nickname,
    avatar: accountState.avatar,
    avatarImage: "",
    email: accountState.email,
    baseMoney: accountState.baseMoney
  };

  sessionState = { isLoggedIn: true };

  saveAccount();
  saveProfile();
  saveSession();
}

function loginLocalAccount(email, password) {
  if (!accountState) {
    throw new Error("Аккаунт не найден");
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  if (normalizedEmail !== accountState.email || normalizedPassword !== accountState.password) {
    throw new Error("Неверный email или пароль");
  }

  profileState = {
    nickname: accountState.nickname,
    avatar: accountState.avatar,
    avatarImage: accountState.avatarImage || "",
    email: accountState.email,
    baseMoney: Number(accountState.baseMoney || 0)
  };

  sessionState = { isLoggedIn: true };

  saveProfile();
  saveSession();
}

function logoutLocalAccount() {
  sessionState = { isLoggedIn: false };
  saveSession();
  showAuth("login");
}

/* ---------- UTILS ---------- */

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function formatNumber(value) {
  return new Intl.NumberFormat("ru-RU").format(Number(value || 0));
}

function formatSigned(value) {
  const abs = formatNumber(Math.abs(Number(value || 0)));
  return Number(value || 0) >= 0 ? `+${abs}` : `-${abs}`;
}

function percent(part, total) {
  if (!total) return 0;
  return Math.round((part / total) * 100);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFavoriteWeapon(raidList) {
  if (!raidList.length) return "—";

  const counts = {};
  for (const raid of raidList) {
    counts[raid.weapon] = (counts[raid.weapon] || 0) + 1;
  }

  let favorite = "—";
  let max = 0;

  for (const [weapon, count] of Object.entries(counts)) {
    if (count > max) {
      max = count;
      favorite = weapon;
    }
  }

  return favorite;
}

function getTierClass(tier) {
  switch (tier) {
    case "обычный":
      return "rarity-common";
    case "необычный":
      return "rarity-uncommon";
    case "редкий":
      return "rarity-rare";
    case "эпический":
      return "rarity-epic";
    case "легендарное":
      return "rarity-legendary";
    default:
      return "rarity-common";
  }
}

function getShortType(type) {
  const lower = String(type).toLowerCase();

  if (lower.includes("штурм")) return "AR";
  if (lower.includes("пистолет-пулем")) return "SMG";
  if (lower.includes("пистолет")) return "PST";
  if (lower.includes("снайпер")) return "SNP";
  if (lower.includes("боев")) return "BR";
  if (lower.includes("пулем")) return "LMG";
  if (lower.includes("дробов")) return "SG";
  if (lower.includes("энерг")) return "ENG";
  if (lower.includes("специаль")) return "SPC";
  if (lower.includes("однозаряд")) return "RFL";
  return "WPN";
}

function getWeaponByName(name) {
  return WEAPONS.find((w) => w.name === name);
}

function getTierRank(tier) {
  switch (tier) {
    case "обычный":
      return 1;
    case "необычный":
      return 2;
    case "редкий":
      return 3;
    case "эпический":
      return 4;
    case "легендарное":
      return 5;
    default:
      return 0;
  }
}

function getCurrentMoney() {
  const raidNet = raids.reduce((sum, raid) => sum + (Number(raid.loot || 0) - Number(raid.lost || 0)), 0);
  return Number(profileState.baseMoney || 0) + raidNet;
}

/* ---------- CUSTOM MODALS ---------- */

function openPromptModal({
  title = "Введите значение",
  kicker = "ДЕЙСТВИЕ",
  label = "Значение",
  placeholder = "",
  value = "",
  isPassword = false
} = {}) {
  return new Promise((resolve) => {
    promptModalResolver = resolve;

    promptModalKicker.textContent = kicker;
    promptModalTitle.textContent = title;
    promptModalLabel.textContent = label;
    promptModalInput.type = isPassword ? "password" : "text";
    promptModalInput.placeholder = placeholder;
    promptModalInput.value = value ?? "";

    promptModalOverlay.classList.remove("hidden");

    setTimeout(() => {
      promptModalInput.focus();
      promptModalInput.select();
    }, 10);
  });
}

function closePromptModal(result = null) {
  promptModalOverlay.classList.add("hidden");

  if (promptModalResolver) {
    promptModalResolver(result);
    promptModalResolver = null;
  }
}

function openConfirmModal({
  title = "Подтвердить действие",
  kicker = "ПОДТВЕРЖДЕНИЕ",
  text = "Ты уверен?"
} = {}) {
  return new Promise((resolve) => {
    confirmModalResolver = resolve;

    confirmModalKicker.textContent = kicker;
    confirmModalTitle.textContent = title;
    confirmModalText.textContent = text;
    confirmModalOverlay.classList.remove("hidden");
  });
}

function closeConfirmModal(result = false) {
  confirmModalOverlay.classList.add("hidden");

  if (confirmModalResolver) {
    confirmModalResolver(result);
    confirmModalResolver = null;
  }
}

/* ---------- STATS ---------- */

function calculateStats() {
  const total = raids.length;
  const wins = raids.filter((raid) => raid.result === "success").length;
  const totalLoot = raids.reduce((sum, raid) => sum + Number(raid.loot || 0), 0);
  const totalLost = raids.reduce((sum, raid) => sum + Number(raid.lost || 0), 0);
  const avgLoot = total ? Math.round(totalLoot / total) : 0;
  const balance = totalLoot - totalLost;

  return {
    total,
    wins,
    totalLoot,
    totalLost,
    avgLoot,
    balance,
    winrate: percent(wins, total),
    favoriteWeapon: getFavoriteWeapon(raids)
  };
}

function renderStats() {
  const stats = calculateStats();

  totalRaidsValue.textContent = formatNumber(stats.total);
  totalProfitValue.textContent = `+${formatNumber(stats.totalLoot)}`;
  totalLossValue.textContent = `-${formatNumber(stats.totalLost)}`;
  winrateValue.textContent = `${stats.winrate}%`;
  avgLootValue.textContent = formatNumber(stats.avgLoot);

  profileRaidsValue.textContent = formatNumber(stats.total);
  profileProfitValue.textContent = `+${formatNumber(stats.totalLoot)}`;
  profileLossValue.textContent = `-${formatNumber(stats.totalLost)}`;
  favoriteWeaponValue.textContent = stats.favoriteWeapon;
  profileWinrateValue.textContent = `${stats.winrate}%`;
  profileAvgLootValue.textContent = formatNumber(stats.avgLoot);

  moneyValue.textContent = `₣ ${formatNumber(getCurrentMoney())}`;
  sessionStatusValue.textContent = sessionState?.isLoggedIn ? "ONLINE" : "OFFLINE";
  sessionStatusValue.classList.toggle("online", Boolean(sessionState?.isLoggedIn));
}

/* ---------- LOCAL ANALYSIS ---------- */

function buildLocalAnalysis() {
  if (!raids.length) {
    return {
      summary: "Пока нет данных для анализа.",
      tips: ["Добавь хотя бы один рейд."]
    };
  }

  const stats = calculateStats();
  const balances = raids.map((raid) => raid.loot - raid.lost);
  const avgNet = Math.round(balances.reduce((a, b) => a + b, 0) / balances.length);

  const shortRaids = raids.filter((raid) => raid.duration <= 12);
  const longRaids = raids.filter((raid) => raid.duration > 12);

  const shortAvg = shortRaids.length
    ? Math.round(shortRaids.reduce((sum, raid) => sum + (raid.loot - raid.lost), 0) / shortRaids.length)
    : 0;

  const longAvg = longRaids.length
    ? Math.round(longRaids.reduce((sum, raid) => sum + (raid.loot - raid.lost), 0) / longRaids.length)
    : 0;

  const expensiveFails = raids.filter((raid) => raid.result === "fail" && raid.lost >= 10000).length;

  let summary = "";

  if (stats.winrate >= 60 && avgNet > 0) {
    summary = `Сейчас статистика выглядит уверенно: winrate ${stats.winrate}% и средний чистый результат ${formatSigned(avgNet)} за рейд. Экономика живая, главное не сливать её дорогими ошибками.`;
  } else if (stats.winrate >= 45) {
    summary = `Ты играешь неровно: winrate ${stats.winrate}%, но даже при этом можно оставаться в плюсе, если контролировать стоимость билда и не затягивать неудачные забеги.`;
  } else {
    summary = `Сейчас статистика проседает: winrate всего ${stats.winrate}%. Главная задача — сократить убытки и перейти на более сейфовый стиль, пока экономика не стабилизируется.`;
  }

  const tips = [];

  if (shortRaids.length && longRaids.length) {
    if (shortAvg > longAvg) {
      tips.push("Короткие рейды у тебя сейчас выгоднее длинных — не жадничай с выходом.");
    } else if (longAvg > shortAvg) {
      tips.push("Длинные рейды у тебя окупаются лучше — возможно, тебе подходит более терпеливый маршрут.");
    }
  }

  if (expensiveFails >= 2) {
    tips.push("Часть минуса идёт от дорогих смертей — попробуй несколько рейдов на более бюджетном снаряжении.");
  }

  if (stats.favoriteWeapon !== "—") {
    tips.push(`По текущим данным самое частое оружие — ${stats.favoriteWeapon}.`);
  }

  if (stats.avgLoot < 10000) {
    tips.push("Средний вынос пока низкий — возможно, ты слишком рано идёшь в рискованные файты.");
  } else {
    tips.push("Средний вынос уже нормальный — теперь важно просто держать дисциплину и не отдавать лишний лут.");
  }

  if (stats.balance < 0) {
    tips.push("Ты пока в минусе по экономике — лучше переждать агрессию и сделать несколько безопасных рейдов подряд.");
  } else {
    tips.push("Экономика в плюсе — можно аккуратно тестировать более дорогие билды, но без лишней жадности.");
  }

  return { summary, tips: tips.slice(0, 6) };
}

function renderAnalysis(summary, tips) {
  analysisText.textContent = summary;
  analysisList.innerHTML = tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("");
}

function runQuickAnalysis() {
  const local = buildLocalAnalysis();
  renderAnalysis(local.summary, local.tips);
  showToast("Быстрый анализ выполнен.");
}

/* ---------- OLLAMA ---------- */

async function testOllamaConnection() {
  try {
    const response = await fetch(`${ollamaState.url}/api/tags`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return true;
  } catch {
    return false;
  }
}

async function runDeepAnalysis() {
  if (!raids.length) {
    renderAnalysis("Пока нет данных для анализа.", ["Добавь хотя бы один рейд."]);
    return;
  }

  deepAnalyzeBtn.disabled = true;
  deepAnalyzeBtn.textContent = "Анализ...";

  const local = buildLocalAnalysis();

  try {
    const stats = calculateStats();
    const latestRaids = [...raids]
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 12);

    const payload = {
      stats: {
        total: stats.total,
        wins: stats.wins,
        totalLoot: stats.totalLoot,
        totalLost: stats.totalLost,
        avgLoot: stats.avgLoot,
        balance: stats.balance,
        currentMoney: getCurrentMoney(),
        winrate: stats.winrate,
        favoriteWeapon: stats.favoriteWeapon
      },
      latestRaids
    };

    const prompt = `
Ты игровой аналитик по ARC Raiders.
Сделай внятный анализ статистики игрока.
Ответ дай ТОЛЬКО на русском.
Без вступлений вроде "конечно" и без воды.

Формат ответа:
Краткий вывод:
2-4 предложения.

Советы:
- пункт
- пункт
- пункт
- пункт

Данные игрока:
${JSON.stringify(payload, null, 2)}
`;

    const response = await fetch(`${ollamaState.url}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: ollamaState.model,
        prompt,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const text = (data.response || "").trim();

    if (!text) {
      throw new Error("Пустой ответ от Ollama");
    }

    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    let summary = "";
    let tips = [];

    let summaryStart = lines.findIndex((line) => /^краткий вывод:?/i.test(line));
    let tipsStart = lines.findIndex((line) => /^советы:?/i.test(line));

    if (summaryStart === -1) summaryStart = 0;

    if (tipsStart > -1) {
      summary = lines
        .slice(summaryStart, tipsStart)
        .map((line) => line.replace(/^краткий вывод:?/i, "").trim())
        .filter(Boolean)
        .join(" ");

      tips = lines
        .slice(tipsStart + 1)
        .map((line) => line.replace(/^[-•\d.)\s]+/, "").trim())
        .filter(Boolean);
    } else {
      summary = lines.slice(0, 3).join(" ");
      tips = lines
        .slice(3)
        .map((line) => line.replace(/^[-•\d.)\s]+/, "").trim())
        .filter(Boolean);
    }

    if (!summary) {
      summary = local.summary;
    }

    if (!tips.length) {
      tips = local.tips;
    }

    renderAnalysis(summary, tips.slice(0, 6));
    showToast("Углублённый анализ выполнен через Ollama.");
  } catch {
    renderAnalysis(local.summary, local.tips);
    showToast("Ollama недоступен, показан быстрый анализ.");
  } finally {
    deepAnalyzeBtn.disabled = false;
    deepAnalyzeBtn.textContent = "Углублённый анализ";
  }
}

/* ---------- RAID HISTORY ---------- */

function getFilteredRaids() {
  const sorted = [...raids].sort((a, b) => b.createdAt - a.createdAt);
  if (currentRaidFilter === "all") return sorted;
  return sorted.filter((raid) => raid.result === currentRaidFilter);
}

function createRaidCard(raid) {
  const net = raid.loot - raid.lost;
  const statusText = raid.result === "success" ? "БЛАГОПОЛУЧНО ВЕРНУЛСЯ" : "В НОКАУТЕ";
  const resultClass = raid.result === "success" ? "success" : "fail";

  return `
    <article class="raid-card hover-glow ${resultClass} ${selectedRaidId === raid.id ? "selected" : ""}" data-id="${raid.id}">
      <div class="raid-date">${formatRaidDate(raid.createdAt)}</div>
      <div class="raid-status">${statusText}</div>
      <div class="raid-map">${escapeHtml(raid.map)} · ${escapeHtml(raid.weapon)}</div>
      <div class="raid-meta">
        <span>⏳ ${formatNumber(raid.duration)} мин</span>
        <span>📦 ${formatSigned(net)}</span>
        <span>💰 ${formatNumber(raid.loot)}</span>
        <span>🧰 ${formatNumber(raid.lost)}</span>
      </div>
      ${raid.note ? `<div class="raid-note">${escapeHtml(raid.note)}</div>` : ""}
    </article>
  `;
}

function renderRaidHistory() {
  const filtered = getFilteredRaids();

  if (!filtered.length) {
    raidHistory.innerHTML = `<div class="empty-state">Здесь пока пусто. Добавь рейд или смени фильтр.</div>`;
    return;
  }

  raidHistory.innerHTML = filtered.map(createRaidCard).join("");

  raidHistory.querySelectorAll(".raid-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedRaidId = card.dataset.id;
      renderRaidHistory();
      renderRaidDetail();
    });
  });
}

function renderRaidDetail() {
  const raid = raids.find((item) => item.id === selectedRaidId);

  editRaidBtn.disabled = !raid;
  deleteRaidBtn.disabled = !raid;

  if (!raid) {
    raidDetail.innerHTML = `<div class="empty-state">Выбери рейд справа, чтобы увидеть подробности.</div>`;
    return;
  }

  const net = raid.loot - raid.lost;
  const statusText = raid.result === "success" ? "Благополучно вернулся" : "В нокауте";

  raidDetail.innerHTML = `
    <div class="detail-grid">
      <div class="detail-chip">
        <div class="detail-chip-title">Результат</div>
        <div class="detail-chip-value">${escapeHtml(statusText)}</div>
      </div>

      <div class="detail-chip">
        <div class="detail-chip-title">Карта</div>
        <div class="detail-chip-value">${escapeHtml(raid.map)}</div>
      </div>

      <div class="detail-chip">
        <div class="detail-chip-title">Оружие</div>
        <div class="detail-chip-value">${escapeHtml(raid.weapon)}</div>
      </div>

      <div class="detail-chip">
        <div class="detail-chip-title">Длительность</div>
        <div class="detail-chip-value">${formatNumber(raid.duration)} мин</div>
      </div>

      <div class="detail-chip">
        <div class="detail-chip-title">Вынесено</div>
        <div class="detail-chip-value">+${formatNumber(raid.loot)}</div>
      </div>

      <div class="detail-chip">
        <div class="detail-chip-title">Потеряно</div>
        <div class="detail-chip-value">-${formatNumber(raid.lost)}</div>
      </div>

      <div class="detail-chip">
        <div class="detail-chip-title">Чистый итог</div>
        <div class="detail-chip-value">${formatSigned(net)}</div>
      </div>

      <div class="detail-chip">
        <div class="detail-chip-title">Дата записи</div>
        <div class="detail-chip-value">${new Date(raid.createdAt).toLocaleString("ru-RU")}</div>
      </div>
    </div>

    <div class="detail-note-box">
      <div class="detail-chip-title">Заметка</div>
      <div>${raid.note ? escapeHtml(raid.note) : "Без заметки."}</div>
    </div>
  `;
}

/* ---------- CHART ---------- */

function drawProfitChart() {
  const canvas = profitChart;
  const ctx = canvas.getContext("2d");

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(300, Math.floor(rect.width));
  const height = Math.max(200, Math.floor(rect.height));

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.clearRect(0, 0, width, height);

  const padding = { top: 20, right: 18, bottom: 34, left: 52 };
  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (plotH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
  }

  if (!raids.length) {
    ctx.fillStyle = "rgba(168,175,186,0.8)";
    ctx.font = "14px Inter, Arial";
    ctx.fillText("Нет данных для графика", padding.left, padding.top + 20);
    return;
  }

  const sorted = [...raids].sort((a, b) => a.createdAt - b.createdAt);
  const cumulative = [];
  let running = 0;

  for (const raid of sorted) {
    running += raid.loot - raid.lost;
    cumulative.push(running);
  }

  const minVal = Math.min(0, ...cumulative);
  const maxVal = Math.max(0, ...cumulative);
  const range = Math.max(1, maxVal - minVal);

  const getX = (index) =>
    padding.left + (sorted.length === 1 ? plotW / 2 : (plotW / (sorted.length - 1)) * index);

  const getY = (value) =>
    padding.top + plotH - ((value - minVal) / range) * plotH;

  const zeroY = getY(0);

  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.beginPath();
  ctx.moveTo(padding.left, zeroY);
  ctx.lineTo(width - padding.right, zeroY);
  ctx.stroke();

  ctx.beginPath();
  cumulative.forEach((value, index) => {
    const x = getX(index);
    const y = getY(value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(getX(cumulative.length - 1), zeroY);
  ctx.lineTo(getX(0), zeroY);
  ctx.closePath();

  const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
  gradient.addColorStop(0, "rgba(126, 231, 242, 0.22)");
  gradient.addColorStop(0.5, "rgba(255, 79, 201, 0.12)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0.02)");
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  cumulative.forEach((value, index) => {
    const x = getX(index);
    const y = getY(value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  const lineGradient = ctx.createLinearGradient(padding.left, 0, width - padding.right, 0);
  lineGradient.addColorStop(0, "rgba(255,255,255,0.92)");
  lineGradient.addColorStop(0.35, "rgba(255,79,201,0.95)");
  lineGradient.addColorStop(0.7, "rgba(126,231,242,0.95)");
  lineGradient.addColorStop(1, "rgba(255,255,255,0.9)");

  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = 3;
  ctx.stroke();

  cumulative.forEach((value, index) => {
    const x = getX(index);
    const y = getY(value);

    ctx.beginPath();
    ctx.fillStyle = "rgba(5,6,8,1)";
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = value >= 0 ? "rgba(51,232,129,1)" : "rgba(255,61,77,1)";
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "rgba(168,175,186,0.85)";
  ctx.font = "12px Inter, Arial";

  ctx.fillText(formatNumber(Math.round(maxVal)), 8, padding.top + 6);
  ctx.fillText(formatNumber(Math.round(minVal)), 8, padding.top + plotH);
  ctx.fillText("0", 24, zeroY + 4);

  if (sorted.length > 1) {
    ctx.fillText("1", getX(0) - 3, height - 10);
    ctx.fillText(String(sorted.length), getX(sorted.length - 1) - 8, height - 10);
  } else {
    ctx.fillText("1", getX(0) - 3, height - 10);
  }
}

/* ---------- WEAPONS ---------- */

function createWeaponStatItem(label, value) {
  return `
    <div class="weapon-stat-item">
      <div class="weapon-stat-name">${escapeHtml(label)}</div>
      <div class="weapon-stat-value">${escapeHtml(String(value))}</div>
    </div>
  `;
}

function getFilteredWeapons() {
  let list = WEAPONS.filter((weapon) => {
    const filterMatch = currentWeaponFilter === "all" || weapon.type === currentWeaponFilter;
    const searchMatch =
      !weaponSearchQuery ||
      weapon.name.toLowerCase().includes(weaponSearchQuery) ||
      weapon.type.toLowerCase().includes(weaponSearchQuery) ||
      weapon.tier.toLowerCase().includes(weaponSearchQuery);

    return filterMatch && searchMatch;
  });

  switch (currentWeaponSort) {
    case "rarity-desc":
      list.sort((a, b) => getTierRank(b.tier) - getTierRank(a.tier) || a.name.localeCompare(b.name, "ru"));
      break;
    case "rarity-asc":
      list.sort((a, b) => getTierRank(a.tier) - getTierRank(b.tier) || a.name.localeCompare(b.name, "ru"));
      break;
    case "type-asc":
      list.sort((a, b) => a.type.localeCompare(b.type, "ru") || a.name.localeCompare(b.name, "ru"));
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
      break;
    case "name-desc":
      list.sort((a, b) => b.name.localeCompare(a.name, "ru"));
      break;
    default:
      break;
  }

  return list;
}

function renderWeapons() {
  const filtered = getFilteredWeapons();

  if (!filtered.length) {
    weaponGrid.innerHTML = `<div class="empty-state">По запросу ничего не найдено.</div>`;
    return;
  }

  if (!filtered.some((weapon) => weapon.name === selectedWeaponName)) {
    selectedWeaponName = filtered[0].name;
  }

  weaponGrid.innerHTML = filtered.map((weapon) => {
    const tierClass = getTierClass(weapon.tier);
    const activeClass = selectedWeaponName === weapon.name ? "active" : "";
    return `
      <article class="weapon-card hover-glow ${tierClass} ${activeClass}" data-weapon="${escapeHtml(weapon.name)}">
        <div class="weapon-thumb">${getShortType(weapon.type)}</div>
        <div class="weapon-name">${escapeHtml(weapon.name)}</div>
        <div class="weapon-tags">
          <span class="tag">${escapeHtml(weapon.tier)}</span>
          <span class="tag">${escapeHtml(weapon.type)}</span>
        </div>
      </article>
    `;
  }).join("");

  weaponGrid.querySelectorAll(".weapon-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedWeaponName = card.dataset.weapon;
      renderWeapons();
      renderWeaponDetail();
    });
  });
}

function renderWeaponDetail() {
  const weapon = getWeaponByName(selectedWeaponName) || WEAPONS[0];
  if (!weapon) return;

  const tierClass = getTierClass(weapon.tier);
  weaponPreview.className = `weapon-preview ${tierClass}`;
  weaponPreviewTitle.textContent = weapon.name;
  weaponPreviewSubtitle.textContent = `${weapon.type} / ${weapon.tier}`;
  weaponDescText.textContent = weapon.description || "Нет описания.";

  weaponMainStats.innerHTML = [
    createWeaponStatItem("Тип", weapon.type),
    createWeaponStatItem("Редкость", weapon.tier),
    createWeaponStatItem("Бронепробиваемость ARC", weapon.arcPen),
    createWeaponStatItem("Тип патронов", weapon.ammoType),
    createWeaponStatItem("Магазин", weapon.mag),
    createWeaponStatItem("Множитель в голову", weapon.headshot)
  ].join("");

  weaponStats.innerHTML = [
    createWeaponStatItem("Урон", weapon.damage),
    createWeaponStatItem("Скорострельность", weapon.fireRate),
    createWeaponStatItem("Дальность", weapon.range),
    createWeaponStatItem("Стабильность", weapon.stability),
    createWeaponStatItem("Маневренность", weapon.mobility),
    createWeaponStatItem("Скрытность", weapon.stealth)
  ].join("");

  weaponBonuses.innerHTML = weapon.bonuses.length
    ? weapon.bonuses.map((bonus) => `<li>${escapeHtml(bonus)}</li>`).join("")
    : "<li>Нет отдельной пометки о бонусах.</li>";

  weaponSourceText.textContent = weapon.source || "Нет отдельной пометки.";
}

/* ---------- PROFILE ---------- */

function renderProfile() {
  profileNickname.textContent = profileState.nickname;
  profileEmail.textContent = profileState.email || "Без email";
  profileMoneyInput.value = Number(profileState.baseMoney || 0);
  ollamaModelInput.value = ollamaState.model;
  ollamaUrlInput.value = ollamaState.url;

  if (profileState.avatarImage) {
    profileAvatarImage.src = profileState.avatarImage;
    profileAvatarImage.classList.remove("hidden");
    profileAvatarFallback.classList.add("hidden");
  } else {
    profileAvatarImage.src = "";
    profileAvatarImage.classList.add("hidden");
    profileAvatarFallback.classList.remove("hidden");
    profileAvatarFallback.textContent = profileState.avatar || "A";
  }
}

/* ---------- MODAL ---------- */

function fillSelect(selectElement, values) {
  selectElement.innerHTML = values
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("");
}

function openRaidModal(mode = "add", raid = null) {
  editingRaidId = mode === "edit" && raid ? raid.id : null;

  raidModalKicker.textContent = mode === "edit" ? "РЕДАКТИРОВАНИЕ" : "НОВЫЙ РЕЙД";
  raidModalTitle.textContent = mode === "edit" ? "Редактировать рейд" : "Добавить рейд";
  raidSubmitBtn.textContent = mode === "edit" ? "Сохранить изменения" : "Сохранить рейд";

  if (raid) {
    raidResult.value = raid.result;
    raidMap.value = raid.map;
    raidDuration.value = raid.duration;
    raidLoot.value = raid.loot;
    raidLost.value = raid.lost;
    raidWeapon.value = raid.weapon;
    raidNote.value = raid.note || "";
  } else {
    raidForm.reset();
    raidResult.value = "success";
    raidMap.value = MAPS[0];
    raidWeapon.value = WEAPONS[0].name;
  }

  raidModalOverlay.classList.remove("hidden");
  syncRaidResultFields();
}

function closeRaidModal() {
  raidModalOverlay.classList.add("hidden");
  editingRaidId = null;
}

function fillDemoRaid() {
  const randomMap = MAPS[Math.floor(Math.random() * MAPS.length)];
  const randomWeapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];

  raidResult.value = Math.random() > 0.45 ? "success" : "fail";
  raidMap.value = randomMap;
  raidDuration.value = 6 + Math.floor(Math.random() * 24);
  raidLoot.value = 3000 + Math.floor(Math.random() * 70000);
  raidLost.value = 1000 + Math.floor(Math.random() * 25000);
  raidWeapon.value = randomWeapon.name;
  raidNote.value = "Демо-рейд для теста формы.";
  showToast("Поля заполнены демо-данными.");
}

/* ---------- IMPORT / EXPORT ---------- */

function exportToJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    profile: profileState,
    ollama: ollamaState,
    raids
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `arc-companion-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  showToast("JSON-бэкап экспортирован.");
}

async function importFromJson(file) {
  const text = await file.text();
  const data = JSON.parse(text);

  if (!data || !Array.isArray(data.raids)) {
    throw new Error("Неверный формат JSON");
  }

  raids = data.raids.map((raid) => ({
    id: raid.id || crypto.randomUUID(),
    result: raid.result || "success",
    map: raid.map || MAPS[0],
    duration: Number(raid.duration || 0),
    loot: Number(raid.loot || 0),
    lost: Number(raid.lost || 0),
    weapon: raid.weapon || WEAPONS[0].name,
    note: raid.note || "",
    createdAt: Number(raid.createdAt || Date.now())
  }));

  if (data.profile) {
    profileState = {
      ...DEFAULT_PROFILE,
      ...data.profile,
      baseMoney: Number(data.profile.baseMoney ?? DEFAULT_PROFILE.baseMoney),
      avatarImage: data.profile.avatarImage || ""
    };
    saveProfile();
    syncProfileToAccount();
  }

  if (data.ollama) {
    ollamaState = { ...DEFAULT_OLLAMA, ...data.ollama };
    saveOllama();
  }

  saveRaids();
  selectedRaidId = raids.length ? [...raids].sort((a, b) => b.createdAt - a.createdAt)[0].id : null;
  fullRender();
  showToast("JSON-бэкап импортирован.");
}

/* ---------- AVATAR ---------- */

async function handleAvatarFile(file) {
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Выбери файл изображения.");
    return;
  }

  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  profileState.avatarImage = String(dataUrl);
  profileState.avatar = profileState.nickname?.charAt(0)?.toUpperCase() || "A";

  saveProfile();
  syncProfileToAccount();
  renderProfile();
  showToast("Аватар обновлён.");
}

/* ---------- WINDOW CONTROLS ---------- */

function bindWindowControls() {
  if (!window.electronWindow) return;

  safeBind(minimizeWindowBtn, "click", () => {
    window.electronWindow.minimize();
  }, "minimizeWindowBtn");

  safeBind(maximizeWindowBtn, "click", async () => {
    const result = await window.electronWindow.toggleMaximize();
    maximizeWindowBtn.textContent = result?.isMaximized ? "❐" : "□";
  }, "maximizeWindowBtn");

  safeBind(closeWindowBtn, "click", () => {
    window.electronWindow.close();
  }, "closeWindowBtn");

  window.electronWindow.onMaximizedChange((isMaximized) => {
    maximizeWindowBtn.textContent = isMaximized ? "❐" : "□";
  });
}

/* ---------- EVENTS ---------- */

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.view;
    navButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    Object.values(views).forEach((view) => view.classList.remove("active"));
    views[target].classList.add("active");
    pageTitle.textContent = pageTitles[target];

    if (target === "stats") {
      setTimeout(drawProfitChart, 30);
    }
  });
});

safeBind(document.getElementById("addRaidBtn"), "click", () => openRaidModal("add"), "addRaidBtn");
safeBind(document.getElementById("closeRaidModalBtn"), "click", closeRaidModal, "closeRaidModalBtn");
safeBind(document.getElementById("cancelRaidBtn"), "click", closeRaidModal, "cancelRaidBtn");
safeBind(document.getElementById("fillDemoRaidBtn"), "click", fillDemoRaid, "fillDemoRaidBtn");

safeBind(quickAnalyzeBtn, "click", runQuickAnalysis, "quickAnalyzeBtn");
safeBind(deepAnalyzeBtn, "click", runDeepAnalysis, "deepAnalyzeBtn");

safeBind(raidModalOverlay, "click", (event) => {
  if (event.target === raidModalOverlay) {
    closeRaidModal();
  }
}, "raidModalOverlay");

safeBind(raidForm, "submit", (event) => {
  event.preventDefault();

  if (raidResult.value === "success") {
    raidLost.value = 0;
  } else {
    raidLoot.value = 0;
  }

  const payload = {
    id: editingRaidId || crypto.randomUUID(),
    result: raidResult.value,
    map: raidMap.value,
    duration: Number(raidDuration.value),
    loot: Number(raidLoot.value),
    lost: Number(raidLost.value),
    weapon: raidWeapon.value,
    note: raidNote.value.trim(),
    createdAt: editingRaidId
      ? (raids.find((raid) => raid.id === editingRaidId)?.createdAt || Date.now())
      : Date.now()
  };

  if (editingRaidId) {
    raids = raids.map((raid) => (raid.id === editingRaidId ? payload : raid));
    selectedRaidId = payload.id;
    showToast("Рейд обновлён.");
  } else {
    raids.push(payload);
    selectedRaidId = payload.id;
    showToast("Рейд сохранён.");
  }

  saveRaids();
  closeRaidModal();
  fullRender();
}, "raidForm");

const raidFilterStates = ["all", "success", "fail"];
const raidFilterLabels = {
  all: "Все",
  success: "Успешные",
  fail: "Неудачные"
};

safeBind(toggleRaidFilterBtn, "click", () => {
  const currentIndex = raidFilterStates.indexOf(currentRaidFilter);
  const nextIndex = (currentIndex + 1) % raidFilterStates.length;
  currentRaidFilter = raidFilterStates[nextIndex];
  toggleRaidFilterBtn.textContent = raidFilterLabels[currentRaidFilter];
  renderRaidHistory();
  renderRaidDetail();
  showToast(`Фильтр рейдов: ${raidFilterLabels[currentRaidFilter]}`);
}, "toggleRaidFilterBtn");

safeBind(editRaidBtn, "click", () => {
  const raid = raids.find((item) => item.id === selectedRaidId);
  if (!raid) return;
  openRaidModal("edit", raid);
}, "editRaidBtn");

safeBind(deleteRaidBtn, "click", async () => {
  const raid = raids.find((item) => item.id === selectedRaidId);
  if (!raid) return;

  const confirmed = await openConfirmModal({
    title: "Удалить рейд",
    kicker: "ОПАСНОЕ ДЕЙСТВИЕ",
    text: `Удалить рейд на карте "${raid.map}" с оружием "${raid.weapon}"?`
  });

  if (!confirmed) return;

  raids = raids.filter((item) => item.id !== selectedRaidId);
  selectedRaidId = null;
  saveRaids();
  fullRender();
  showToast("Рейд удалён.");
}, "deleteRaidBtn");

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentWeaponFilter = button.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderWeapons();
    renderWeaponDetail();
    showToast(`Фильтр оружия: ${button.textContent}`);
  });
});

safeBind(weaponSearchInput, "input", () => {
  weaponSearchQuery = weaponSearchInput.value.trim().toLowerCase();
  renderWeapons();
  renderWeaponDetail();
}, "weaponSearchInput");

safeBind(weaponSortSelect, "change", () => {
  currentWeaponSort = weaponSortSelect.value;
  renderWeapons();
  renderWeaponDetail();
  showToast("Сортировка оружия обновлена.");
}, "weaponSortSelect");

safeBind(saveMoneyBtn, "click", () => {
  const value = Number(profileMoneyInput.value);
  profileState.baseMoney = Number.isFinite(value) && value >= 0 ? value : 0;
  saveProfile();
  syncProfileToAccount();
  renderProfile();
  renderStats();
  showToast("Баланс профиля сохранён.");
}, "saveMoneyBtn");

safeBind(resetMoneyBtn, "click", () => {
  profileState.baseMoney = 0;
  saveProfile();
  syncProfileToAccount();
  renderProfile();
  renderStats();
  showToast("Стартовый баланс сброшен к 0.");
}, "resetMoneyBtn");

safeBind(document.getElementById("changeAvatarBtn"), "click", async () => {
  const confirmed = await openConfirmModal({
    title: "Сменить аватар",
    kicker: "ПРОФИЛЬ",
    text: "Выбрать изображение с компьютера для аватарки?"
  });

  if (!confirmed) return;
  avatarFileInput.click();
}, "changeAvatarBtn");

safeBind(avatarFileInput, "change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    await handleAvatarFile(file);
  } catch {
    showToast("Не удалось загрузить аватар.");
  } finally {
    avatarFileInput.value = "";
  }
}, "avatarFileInput");

safeBind(document.getElementById("changeNicknameBtn"), "click", async () => {
  const next = await openPromptModal({
    title: "Сменить никнейм",
    kicker: "ПРОФИЛЬ",
    label: "Новый никнейм",
    placeholder: "Введите никнейм",
    value: profileState.nickname
  });

  if (next === null) return;

  profileState.nickname = next.trim() || "Raider";

  if (!profileState.avatarImage && (!profileState.avatar || profileState.avatar.length !== 1)) {
    profileState.avatar = profileState.nickname.charAt(0).toUpperCase() || "A";
  }

  saveProfile();
  syncProfileToAccount();
  renderProfile();
  renderStats();
  showToast("Никнейм обновлён.");
}, "changeNicknameBtn");

async function handleChangeEmail() {
  const next = await openPromptModal({
    title: "Сменить email",
    kicker: "ПРОФИЛЬ",
    label: "Новый email",
    placeholder: "you@arc.local",
    value: profileState.email
  });

  if (next === null) return;

  const normalized = next.trim().toLowerCase();
  if (!normalized) {
    showToast("Email не может быть пустым.");
    return;
  }

  profileState.email = normalized;
  saveProfile();
  syncProfileToAccount();
  renderProfile();
  showToast("Email обновлён.");
}

safeBind(profileEmail, "click", handleChangeEmail, "profileEmail");
safeBind(changeEmailBtn, "click", handleChangeEmail, "changeEmailBtn");

safeBind(document.getElementById("changePasswordBtn"), "click", async () => {
  if (!accountState) {
    showToast("Аккаунт не найден.");
    return;
  }

  const currentPassword = await openPromptModal({
    title: "Подтвердить текущий пароль",
    kicker: "БЕЗОПАСНОСТЬ",
    label: "Текущий пароль",
    placeholder: "Введите текущий пароль",
    value: "",
    isPassword: true
  });

  if (currentPassword === null) return;

  if (currentPassword !== accountState.password) {
    showToast("Текущий пароль неверный.");
    return;
  }

  const newPassword = await openPromptModal({
    title: "Новый пароль",
    kicker: "БЕЗОПАСНОСТЬ",
    label: "Новый пароль",
    placeholder: "Минимум 4 символа",
    value: "",
    isPassword: true
  });

  if (newPassword === null) return;

  const trimmed = newPassword.trim();
  if (trimmed.length < 4) {
    showToast("Пароль должен быть не короче 4 символов.");
    return;
  }

  accountState.password = trimmed;
  saveAccount();
  showToast("Пароль обновлён.");
}, "changePasswordBtn");

safeBind(document.getElementById("logoutBtn"), "click", () => {
  logoutLocalAccount();
  showToast("Вы вышли из аккаунта.");
}, "logoutBtn");

safeBind(exportJsonBtn, "click", exportToJson, "exportJsonBtn");
safeBind(importJsonBtn, "click", () => importJsonInput.click(), "importJsonBtn");

safeBind(importJsonInput, "change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    await importFromJson(file);
  } catch {
    showToast("Не удалось импортировать JSON.");
  } finally {
    importJsonInput.value = "";
  }
}, "importJsonInput");

safeBind(saveOllamaSettingsBtn, "click", () => {
  ollamaState.model = ollamaModelInput.value.trim() || DEFAULT_OLLAMA.model;
  ollamaState.url = ollamaUrlInput.value.trim() || DEFAULT_OLLAMA.url;
  saveOllama();
  showToast("Настройки Ollama сохранены.");
}, "saveOllamaSettingsBtn");

safeBind(testOllamaBtn, "click", async () => {
  ollamaState.model = ollamaModelInput.value.trim() || DEFAULT_OLLAMA.model;
  ollamaState.url = ollamaUrlInput.value.trim() || DEFAULT_OLLAMA.url;
  saveOllama();

  const ok = await testOllamaConnection();
  showToast(ok ? "Ollama доступен." : "Не удалось подключиться к Ollama.");
}, "testOllamaBtn");

safeBind(showRegisterBtn, "click", () => {
  if (!accountState) return;
  setAuthMode("register");
}, "showRegisterBtn");

safeBind(showLoginBtn, "click", () => {
  if (!accountState) return;
  setAuthMode("login");
}, "showLoginBtn");

safeBind(registerForm, "submit", (event) => {
  event.preventDefault();

  try {
    createLocalAccount({
      nickname: registerNickname.value,
      email: registerEmail.value,
      password: registerPassword.value,
      baseMoney: Number(registerMoney.value || 0)
    });

    hideAuth();
    fullRender();
    showToast("Аккаунт создан.");
  } catch (error) {
    showToast(error.message || "Не удалось создать аккаунт.");
  }
}, "registerForm");

safeBind(loginForm, "submit", (event) => {
  event.preventDefault();

  try {
    loginLocalAccount(loginEmail.value, loginPassword.value);
    hideAuth();
    fullRender();
    showToast("Вход выполнен.");
  } catch (error) {
    showToast(error.message || "Не удалось войти.");
  }
}, "loginForm");

safeBind(closePromptModalBtn, "click", () => closePromptModal(null), "closePromptModalBtn");
safeBind(cancelPromptModalBtn, "click", () => closePromptModal(null), "cancelPromptModalBtn");
safeBind(submitPromptModalBtn, "click", () => closePromptModal(promptModalInput.value), "submitPromptModalBtn");

safeBind(promptModalOverlay, "click", (event) => {
  if (event.target === promptModalOverlay) {
    closePromptModal(null);
  }
}, "promptModalOverlay");

safeBind(promptModalInput, "keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    closePromptModal(promptModalInput.value);
  }
  if (event.key === "Escape") {
    event.preventDefault();
    closePromptModal(null);
  }
}, "promptModalInput");

safeBind(closeConfirmModalBtn, "click", () => closeConfirmModal(false), "closeConfirmModalBtn");
safeBind(cancelConfirmModalBtn, "click", () => closeConfirmModal(false), "cancelConfirmModalBtn");
safeBind(submitConfirmModalBtn, "click", () => closeConfirmModal(true), "submitConfirmModalBtn");

safeBind(confirmModalOverlay, "click", (event) => {
  if (event.target === confirmModalOverlay) {
    closeConfirmModal(false);
  }
}, "confirmModalOverlay");

window.addEventListener("resize", () => {
  drawProfitChart();
});

/* ---------- INIT HELPERS ---------- */

function fullRender() {
  renderStats();
  renderRaidHistory();
  renderRaidDetail();
  const local = buildLocalAnalysis();
  renderAnalysis(local.summary, local.tips);
  renderWeapons();
  renderWeaponDetail();
  renderProfile();
  drawProfitChart();
  pageTitle.textContent = pageTitles[
    document.querySelector(".nav-btn.active")?.dataset.view || "stats"
  ];
}

/* ---------- INITIAL ---------- */

fillSelect(raidMap, MAPS);
fillSelect(raidWeapon, WEAPONS.map((weapon) => weapon.name));

if (raids.length) {
  selectedRaidId = [...raids].sort((a, b) => b.createdAt - a.createdAt)[0].id;
}

bindWindowControls();
fullRender();

if (accountState && sessionState?.isLoggedIn) {
  hideAuth();
} else {
  showAuth(accountState ? "login" : "register");
}