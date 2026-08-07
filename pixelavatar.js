// İsimden deterministik olarak üretilen 9x9 "piksel futbolcu" avatarı.
// Gerçek fotoğraf değildir — her oyuncu adı her zaman aynı ten/saç/forma
// kombinasyonuna denk gelir, böylece oyuncular görsel olarak tutarlı ve
// ayırt edilebilir olur.

const SKIN_TONES = ["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#4a2c17"];
const HAIR_COLORS = ["#1c1c1c", "#3b2417", "#6b4423", "#a56b34", "#d8c48a", "#b0b0b0", "#7a1f1f", "#222233"];
const JERSEY_COLORS = [
  "#d81e2c", "#1e56d8", "#1ea34a", "#f2b705", "#7a1fd8",
  "#111827", "#f4f4f4", "#e8720c", "#0ea5a5", "#c81a78"
];
const EYE_COLOR = "#1a1a1a";

function hashString(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = (h * 33) ^ str.charCodeAt(i);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

// name: oyuncu adı (seed olarak kullanılır) -> tam bir <svg>...</svg> string döner.
function pixelAvatarSVG(name) {
  const rng = mulberry32(hashString(name || "?"));
  const skin = pick(rng, SKIN_TONES);
  const hair = pick(rng, HAIR_COLORS);
  const jersey = pick(rng, JERSEY_COLORS);
  const trimRoll = rng();
  const trim = trimRoll < 0.5 ? "#ffffff" : "#111827";

  const styleRoll = rng();
  const bald = styleRoll < 0.12;
  const hairStyle = bald ? "bald" : styleRoll < 0.42 ? "short" : styleRoll < 0.75 ? "full" : "mohawk";

  const cols = 9, rows = 9;
  const cells = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dx = c - 4;
      let color = null;

      if (r <= 5) {
        // Kafa (oval)
        const ny = (r - 2.2) / 3.0;
        const nx = dx / 3.6;
        if (nx * nx + ny * ny <= 1) {
          let isHair = false;
          if (!bald) {
            if (hairStyle === "short" && r <= 1) isHair = true;
            if (hairStyle === "full" && r <= 2 && !(r === 2 && Math.abs(dx) > 2)) isHair = true;
            if (hairStyle === "mohawk" && r <= 2 && Math.abs(dx) <= 1) isHair = true;
          }
          color = isHair ? hair : skin;
          if (r === 3 && (dx === -2 || dx === 2)) color = EYE_COLOR;
        }
      } else {
        // Omuzlar / forma (aşağı doğru genişleyen trapez)
        const w = 2 + (r - 6) * 1.6;
        if (Math.abs(dx) <= w) {
          color = (r === 8 && dx === 0) ? trim : jersey;
        }
      }

      if (color) cells.push(`<rect x="${c}" y="${r}" width="1.03" height="1.03" fill="${color}"/>`);
    }
  }

  return `<svg viewBox="0 0 ${cols} ${rows}" width="100%" height="100%" shape-rendering="crispEdges" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${cells.join("")}</svg>`;
}
