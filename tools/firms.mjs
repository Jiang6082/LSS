// Known-firm allowlist (inputs/known_firms.json) + ATS seeds (inputs/ats_seeds.json merged with
// the sister project PTS's verified seeds, fetched at run time).
import fs from "node:fs/promises";
import { fetchJson } from "./common.mjs";
import { SUPPORTED_SEED_KEYS } from "./collectors.mjs";

const SUFFIXES = new Set(["inc", "incorporated", "llc", "l", "corp", "corporation", "co", "company", "ltd", "limited", "plc", "lp", "llp", "holdings", "holding", "group", "the", "and", "technologies", "technology", "usa", "us", "na", "international", "global", "sa", "ag", "nv", "se"]);

export function normalizeCompany(name = "") {
  let words = String(name)
    .toLowerCase()
    .normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/['’`]/g, "")
    .replace(/\(.*?\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words[0] === "the" && words.length > 1) words = words.slice(1);
  while (words.length > 1 && SUFFIXES.has(words[words.length - 1])) words.pop();
  return words.join(" ");
}

export async function loadKnownFirms(path = "inputs/known_firms.json") {
  const raw = JSON.parse(await fs.readFile(path, "utf8"));
  const exact = new Set((raw.exact || []).map(normalizeCompany));
  const firms = [];
  const byAlias = new Map();
  const categoryOrder = raw.categoryOrder || Object.keys(raw.categories);
  for (const category of categoryOrder) {
    for (const entry of raw.categories[category] || []) {
      const [canonical, ...aliases] = entry.split("|").map((s) => s.trim()).filter(Boolean);
      const key = normalizeCompany(canonical);
      if (byAlias.has(key)) continue; // first category wins
      const firm = { name: canonical, category, tier: categoryOrder.indexOf(category), aliases };
      firms.push(firm);
      for (const a of [canonical, ...aliases]) {
        const n = normalizeCompany(a);
        if (n && !byAlias.has(n)) byAlias.set(n, firm);
      }
    }
  }
  const prefixList = [...byAlias.keys()].filter((k) => !exact.has(k) && k.length >= 3).sort((a, b) => b.length - a.length);
  const cache = new Map();
  function match(company = "") {
    const n = normalizeCompany(company);
    if (!n) return null;
    if (cache.has(n)) return cache.get(n);
    let firm = byAlias.get(n) || null;
    if (!firm) {
      const hit = prefixList.find((k) => n.startsWith(`${k} `));
      firm = hit ? byAlias.get(hit) : null;
    }
    cache.set(n, firm);
    return firm;
  }
  return { firms, match, categoryOrder };
}

const PTS_SEEDS_URL = "https://raw.githubusercontent.com/Jiang6082/PTS/main/inputs/ats_seeds.json";

// Local seeds win per firm; PTS seeds fill in the rest. Seed firm names are mapped onto the
// allowlist's canonical names, and seeds for firms outside the allowlist are dropped.
export async function loadSeeds(known, { path = "inputs/ats_seeds.json", remote = true } = {}) {
  let local = {};
  try { local = JSON.parse(await fs.readFile(path, "utf8")).firms || {}; } catch { local = {}; }
  let pts = {};
  let ptsStatus = "skipped";
  if (remote) {
    const json = await fetchJson(PTS_SEEDS_URL, { timeoutMs: 20000 });
    pts = json?.firms || {};
    ptsStatus = json ? `loaded ${Object.keys(pts).length} firms` : "unavailable";
  }
  const out = {};
  const put = (name, seeds, origin) => {
    const firm = known.match(name);
    if (!firm) return;
    if (out[firm.name] && origin === "pts") return;
    const clean = {};
    for (const key of SUPPORTED_SEED_KEYS) if (Array.isArray(seeds[key]) && seeds[key].length) clean[key] = seeds[key];
    if (Object.keys(clean).length) out[firm.name] = { ...clean, _origin: origin };
  };
  for (const [name, seeds] of Object.entries(local)) put(name, seeds, "local");
  for (const [name, seeds] of Object.entries(pts)) put(name, seeds, "pts");
  return { seeds: out, ptsStatus };
}

const GENERIC = new Set([
  "the", "and", "of", "group", "associates", "consulting", "consultants", "economic", "economics",
  "research", "partners", "advisors", "advisory", "analytics", "international", "global", "llc", "inc",
  "company", "solutions", "services", "management", "capital", "energy", "health", "policy", "market",
  "markets", "analysis", "strategy", "planning", "institute", "center", "centre", "financial", "data", "science",
  "labs", "lab", "ai", "technologies", "technology", "software", "systems", "ventures", "venture", "fund", "investments",
  "trading", "securities", "bank", "university", "foundation", "network", "media", "insurance", "careers", "block", "square",
  "box", "ramp", "notion", "linear", "mercury", "hex", "exa", "sierra", "modal", "harvey", "chime", "toast", "gemini",
  "kraken", "ripple", "circle", "glean", "scale", "target", "snap", "shell", "magic", "writer", "unit", "color", "plus",
]);

// Conservative Greenhouse / Lever / Ashby slug guesses (from PTS tools/firms.mjs).
export function generatedTokens(name) {
  const base = name.replace(/\(.*?\)/g, " ").toLowerCase().replace(/&/g, "and").replace(/\+/g, " ");
  const words = base.replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const noThe = words[0] === "the" ? words.slice(1) : words;
  const variants = new Set([noThe.join(""), noThe.join("-"), noThe.filter((w) => !["llc", "inc", "the"].includes(w)).join("")]);
  const stripped = noThe.join("").replace(/(capitalmanagement|assetmanagement|venturepartners|technologies|consulting|group|associates|partners|advisors|capital|ventures|labs|ai|inc)$/, "");
  if (stripped.length >= 5 && !GENERIC.has(stripped)) variants.add(stripped);
  return [...variants].filter((v) => v && v.length >= 4 && !GENERIC.has(v));
}
