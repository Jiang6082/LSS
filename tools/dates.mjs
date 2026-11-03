// Date-window classifier: does a posting fit "start mid/late July 2027, end by Sep 30 2027"?
//
// Buckets:
//   fit     - posted dates (or start + duration) fall inside the window
//   flex    - flexible / multiple / off-cycle start dates, a start inside the window with no end
//             stated, or a near miss (a few days early, or ending a little after Sep 30)
//   ask     - Summer 2027 role with no dates in the posting: ask the recruiter about a late start
//   exclude - posted dates conflict with the window (e.g. "June 8 - August 14"), fall/spring-only
//             term, 6-month co-op, or a term in another year
import { normalizeSpace } from "./common.mjs";

export const DEFAULT_WINDOW = {
  year: 2027,
  earliestStart: "2027-07-13",
  latestEnd: "2027-09-30",
  minWeeks: 4,
  earlyStartGraceDays: 10,
  lateEndGraceDays: 14,
  endSlackDays: 3,
};

const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
const MONTH_LABEL = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const QUAL_DAY = { early: 5, beginning: 1, start: 1, mid: 15, middle: 15, late: 25, end: 28 };
const WORD_NUM = { four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, three: 3, two: 2 };
const DAY = 86400000;

const utc = (y, m, d) => Date.UTC(y, m - 1, d);
const lastDay = (y, m) => new Date(Date.UTC(y, m, 0)).getUTCDate();
const parseIso = (s) => { const [y, m, d] = s.split("-").map(Number); return utc(y, m, d); };
export const fmtDate = (t) => { const d = new Date(t); return `${MONTH_LABEL[d.getUTCMonth() + 1]} ${d.getUTCDate()}`; };

const TOKEN_RE = new RegExp(
  String.raw`(?:\b(early|mid|middle|late)[\s-]+|\b(?:the\s+)?(beginning|start|end|middle)\s+of\s+)?` +
  String.raw`\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)(?![a-z])\.?` +
  String.raw`(?:\s+(\d{1,2})(?:st|nd|rd|th)?(?!\d))?(?:,?\s+(20\d{2})(?!\d))?` +
  String.raw`|\b(\d{1,2})\/(\d{1,2})\/(20\d{2}|\d{2})\b` +
  String.raw`|\b(20\d{2})-(\d{2})-(\d{2})\b`,
  "gi",
);

// Sentences about graduation, deadlines, etc. carry dates that are not the internship dates.
const SKIP_RE = /graduat|degree|diploma|deadline|apply by|applications? (?:are |will be |must be )?(?:due|close|open|accepted|reviewed|submitted)|submit|posted|posting date|interview|offer (?:deadline|date|letter|decision)|enrol|class of|eligib|visa|birth|cut-?off|priority (?:deadline|date)|review(?:ed)? on a rolling|founded|since \d{4}|established|q[1-4]\b|fiscal|return(?:ing)? to (?:school|campus)|academic year|school year|rolling basis|finali[sz]e|hear back|notif|decisions?\b|shutdown|holiday|office closure|closed for|recruiting (?:season|timeline)|career fair|info(?:rmation)? session/i;
const OVERRIDE_RE = /intern(?:ship)?s?\s+(?:will\s+|is\s+|are\s+)?(?:run|runs|start|starts|begin|begins|take place|takes place|last|lasts|dates|period|program|session)|program (?:runs|dates|will run|begins|starts|takes place)|start date|end date|internship dates|dates?:/i;
const INTERNISH_RE = /intern|program|start|begin|commenc|\bruns?\b|duration|dates?\b|summer|fall|autumn|term|session|cohort|week|month|employment|assignment|position|role|from|through|until|join|onboard|conclud|\bend/i;
const START_WORD_RE = /\b(start|starting|starts|begin|beginning|begins|commenc\w*|kick[- ]?off|onboard\w*|joining|join us|available to start|availability)\b/gi;
const END_WORD_RE = /\b(end|ending|ends|conclud\w*|finish\w*|wrap\w*|until|through|thru|last day|last until)\b/gi;
const lastWordIndex = (text, re, maxDistance) => {
  let idx = -1;
  for (const m of text.matchAll(re)) idx = m.index + m[0].length;
  return idx >= 0 && text.length - idx <= maxDistance && !/[.;]/.test(text.slice(idx)) ? idx : -1;
};
const START_WINDOW_RE = /start dates|start dates? (?:are |is )?(?:available|offered|range|between|from|throughout)|(?:start|begin)(?:ing)? (?:any ?time|between)|flexible start|choose (?:your|a|their) (?:own )?start/i;
const CONNECTOR_RE = /^\s*(?:-|–|—|~|to|through|thru|until|till|into)\s*$/i;
const AND_CONNECTOR_RE = /^\s*and\s*$/i;

export const FLEX_RE = new RegExp(`\\b(?:${[
  String.raw`flexible (?:start|starting|internship (?:start|dates)|dates|summer (?:dates|start))`,
  String.raw`start(?:ing)? dates? (?:is |are |can be |will be )?(?:flexible|negotiable|discussed|determined|tbd|to be (?:discussed|determined))`,
  String.raw`flexib(?:le|ility) (?:in|on|with|around|regarding|for) (?:your |the |our )?(?:start|dates|timing|internship dates)`,
  String.raw`rolling start`, String.raw`multiple start dates`, String.raw`various start dates`, String.raw`staggered start`,
  String.raw`start dates? (?:throughout|across) the (?:year|summer)`, String.raw`start (?:any ?time|year[- ]round)`,
  String.raw`off[- ]?cycle`, String.raw`choose (?:your|a|their) (?:own )?start date`,
  String.raw`(?:start|dates?) (?:can|may) vary`,
  String.raw`length (?:and|&) (?:start|timing) (?:are |is )?flexible`, String.raw`(?:duration|length) (?:is |are )?flexible`,
].join("|")})`, "i");
// Weak signals (a Summer/Fall option exists) do not override dates the posting states.
export const WEAK_FLEX_RE = /\b(?:summer\s*(?:\/|or|&|and)\s*fall|late[- ]summer)\b/i;

const DURATION_RE = /\b(\d{1,2}|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen)(?:\s*(?:-|–|to|or)\s*(\d{1,2}|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen))?[\s-]*(weeks?|wks?|months?)(?![a-z])/gi;
const DURATION_CONTEXT_RE = /intern|program|internship|duration|long|summer|term|session|assignment|placement|co-?op|rotation|full[- ]time for/i;

const numOf = (v) => (v == null ? null : /^\d+$/.test(v) ? Number(v) : WORD_NUM[String(v).toLowerCase()] ?? null);

export function splitSentences(text = "") {
  return String(text)
    .split(/(?<=[!?;])\s+|(?<=[a-z0-9)\]"'][.])\s+(?=[A-Z])|\s+\.\s+|\n+|\s\|\s|\s•\s/)
    .map(normalizeSpace)
    .filter(Boolean)
    .flatMap((s) => (s.length > 500 ? s.match(/.{1,500}(?:\s|$)/g) || [s] : [s]));
}

function tokensIn(sentence) {
  const out = [];
  for (const m of sentence.matchAll(TOKEN_RE)) {
    let month; let day = null; let year = null; let qual = null;
    if (m[3]) {
      if (/^may$/i.test(m[3]) && m[3] !== "May") continue; // "you may ..." is not a month
      month = MONTHS[m[3].slice(0, 3).toLowerCase()];
      day = m[4] ? Number(m[4]) : null;
      year = m[5] ? Number(m[5]) : null;
      qual = (m[1] || m[2] || "").toLowerCase() || null;
    } else if (m[6]) {
      month = Number(m[6]); day = Number(m[7]); year = Number(m[8].length === 2 ? `20${m[8]}` : m[8]);
    } else if (m[9]) {
      year = Number(m[9]); month = Number(m[10]); day = Number(m[11]);
    }
    if (!month || month > 12 || (day != null && (day < 1 || day > 31))) continue;
    out.push({ index: m.index, end: m.index + m[0].length, month, day, year, qual, text: m[0] });
  }
  return out;
}

function tokenTime(tok, role, year) {
  const y = tok.year || year;
  if (tok.day) return { t: utc(y, tok.month, Math.min(tok.day, lastDay(y, tok.month))), monthOnly: false };
  if (tok.qual) return { t: utc(y, tok.month, Math.min(QUAL_DAY[tok.qual] ?? 15, lastDay(y, tok.month))), monthOnly: false, approx: true };
  return { t: role === "end" ? utc(y, tok.month, lastDay(y, tok.month)) : utc(y, tok.month, 1), monthOnly: true };
}

// Extracts date ranges, start dates, end dates, durations and flexibility signals.
export function extractDateFacts(text = "", { year = 2027 } = {}) {
  const facts = { ranges: [], starts: [], ends: [], startWindows: [], weeks: [], flexible: false, flexEvidence: "", evidence: [] };
  for (const sentence of splitSentences(text)) {
    const skip = SKIP_RE.test(sentence) && !OVERRIDE_RE.test(sentence);
    if (!skip && !facts.flexible) {
      const m = sentence.match(FLEX_RE);
      if (m) { facts.flexible = true; facts.flexEvidence = m[0]; facts.flexSentence = sentence; }
    }
    if (!skip && !facts.weakFlexible) {
      const m = sentence.match(WEAK_FLEX_RE);
      if (m) { facts.weakFlexible = true; facts.weakFlexEvidence = m[0]; facts.weakFlexSentence = sentence; }
    }
    if (DURATION_CONTEXT_RE.test(sentence) && !/vacation|pto|paid time off|holiday|notice|parental|leave|per year|within/i.test(sentence)) {
      for (const d of sentence.matchAll(DURATION_RE)) {
        const a = numOf(d[1]); const b = numOf(d[2]);
        if (a == null) continue;
        const mult = /^m/i.test(d[3]) ? 4.33 : 1;
        const lo = Math.round(Math.min(a, b ?? a) * mult);
        const hi = Math.round(Math.max(a, b ?? a) * mult);
        if (lo >= 4 && hi <= 40) facts.weeks.push({ lo, hi, text: d[0] });
      }
    }
    if (skip) continue;
    const toks = tokensIn(sentence).filter((t) => !t.year || t.year === year);
    if (!toks.length) continue;
    const used = new Set();
    const isStartWindow = START_WINDOW_RE.test(sentence);
    for (let i = 0; i < toks.length - 1; i += 1) {
      const a = toks[i]; const b = toks[i + 1];
      const between = sentence.slice(a.end, b.index);
      const before = sentence.slice(Math.max(0, a.index - 12), a.index);
      if (!(CONNECTOR_RE.test(between) || (AND_CONNECTOR_RE.test(between) && /between\s*$/i.test(before)))) continue;
      if (!INTERNISH_RE.test(sentence)) continue;
      const y = b.year || a.year || year;
      const s = tokenTime(a, "start", y); const e = tokenTime(b, "end", y);
      if (e.t < s.t || e.t - s.t < 21 * 86400000) continue;
      const item = { start: s.t, end: e.t, startMonthOnly: s.monthOnly, endMonthOnly: e.monthOnly, text: `${a.text}${between}${b.text}`, sentence };
      (isStartWindow ? facts.startWindows : facts.ranges).push(item);
      used.add(i); used.add(i + 1);
      i += 1;
    }
    toks.forEach((tok, i) => {
      if (used.has(i)) return;
      const before = sentence.slice(0, tok.index);
      const startAt = lastWordIndex(before, START_WORD_RE, 55);
      const endAt = lastWordIndex(before, END_WORD_RE, 40);
      const startAfter = /^[\s\/a-z,]{0,12}\bstart(?:s|ing|\s+dates?)?\b/i.test(sentence.slice(tok.end, tok.end + 30)); // "June start", "May/June start dates"
      if ((startAt >= 0 && startAt > endAt) || (startAt < 0 && endAt < 0 && startAfter)) {
        const s = tokenTime(tok, "start", tok.year || year);
        facts.starts.push({ start: s.t, monthOnly: s.monthOnly, text: tok.text, sentence });
      } else if (endAt >= 0) {
        const e = tokenTime(tok, "end", tok.year || year);
        facts.ends.push({ end: e.t, monthOnly: e.monthOnly, text: tok.text, sentence });
      }
    });
  }
  return facts;
}

// Seasons and years named in the terms / title (e.g. ["Summer 2027"], "Fall 2026", "Summer").
export function parseTerms(terms = [], title = "") {
  const list = (Array.isArray(terms) ? terms : [terms]).filter(Boolean).map(String);
  const text = `${list.join(" ; ")} ; ${title}`;
  const seasons = new Set();
  for (const m of text.matchAll(/\b(summer|fall|autumn|winter|spring)\b/gi)) seasons.add(m[1].toLowerCase() === "autumn" ? "fall" : m[1].toLowerCase());
  const years = new Set([...text.matchAll(/\b(20\d{2})\b/g)].map((m) => Number(m[1])));
  for (const m of text.matchAll(/\b'(\d{2})\b/g)) years.add(2000 + Number(m[1]));
  const coop = /\bco-?op\b/i.test(text);
  const offCycle = /off[- ]?cycle/i.test(text);
  return { seasons, years, coop, offCycle, text };
}

function judgeRange(start, end, w, { startMonthOnly = false } = {}) {
  const E = parseIso(w.earliestStart);
  const L = parseIso(w.latestEnd);
  const latestStart = L - w.minWeeks * 7 * DAY;
  const endOk = end <= L + w.endSlackDays * DAY;
  const endNear = end <= L + w.lateEndGraceDays * DAY;
  if (startMonthOnly) {
    const monthEnd = utc(new Date(start).getUTCFullYear(), new Date(start).getUTCMonth() + 1, lastDay(new Date(start).getUTCFullYear(), new Date(start).getUTCMonth() + 1));
    if (start >= E && start <= latestStart && endOk) return { verdict: "fit" };
    if (monthEnd >= E && start <= latestStart && endOk) return { verdict: "flex", note: "start day not stated - confirm it is mid/late month" };
    if (monthEnd >= E && start <= latestStart && endNear) return { verdict: "flex", note: "ends a little after Sep 30 - ask to end early" };
    return { verdict: "conflict" };
  }
  if (start >= E && start <= latestStart && endOk) return { verdict: "fit" };
  if (start >= E - w.earlyStartGraceDays * DAY && start < E && endOk) return { verdict: "flex", note: `starts ${fmtDate(start)}, slightly before your window` };
  if (start >= E && start <= latestStart && endNear) return { verdict: "flex", note: `ends ${fmtDate(end)} - ask to finish by Sep 30` };
  return { verdict: "conflict" };
}

const label = (s, e, { startMonthOnly, endMonthOnly } = {}) => {
  const sd = new Date(s); const ed = e != null ? new Date(e) : null;
  const sl = startMonthOnly ? MONTH_LABEL[sd.getUTCMonth() + 1] : fmtDate(s);
  if (!ed) return sl;
  const el = endMonthOnly ? MONTH_LABEL[ed.getUTCMonth() + 1] : fmtDate(e);
  return `${sl} - ${el}`;
};

// Main entry: classify one posting. `job` needs Title, Terms (array|string), Content.
export function classifyDates(job, window = DEFAULT_WINDOW) {
  const w = { ...DEFAULT_WINDOW, ...window };
  const terms = parseTerms(job.Terms, job.Title);
  const text = `${job.Title || ""} . ${(Array.isArray(job.Terms) ? job.Terms : [job.Terms || ""]).join(", ")} . ${job.Content || ""}`;
  const facts = extractDateFacts(text, { year: w.year });
  const result = (bucket, reason, extra = {}) => ({ bucket, reason, flexible: facts.flexible, weeks: facts.weeks[0] ? `${facts.weeks[0].lo}${facts.weeks[0].hi !== facts.weeks[0].lo ? `-${facts.weeks[0].hi}` : ""} wks` : "", ...extra });

  // 1. Term / year screens.
  const otherYearsOnly = terms.years.size && !terms.years.has(w.year);
  if (otherYearsOnly) return result("exclude", `term year ${[...terms.years].join("/")}`);
  const seasons = terms.seasons;
  const onlyOffSeason = seasons.size && !seasons.has("summer") && !seasons.has("fall") && !terms.offCycle;
  if (onlyOffSeason) return result("exclude", `${[...seasons].join("/")} term`);
  const fallOnly = seasons.has("fall") && !seasons.has("summer");

  // 2. Evaluate every dated fact; keep the best verdict.
  const verdicts = [];
  const maxWeeks = facts.weeks.length ? Math.max(...facts.weeks.map((x) => x.hi)) : null;
  const minWeeksStated = facts.weeks.length ? Math.min(...facts.weeks.map((x) => x.lo)) : null;
  for (const r of facts.ranges) {
    const spanStart = r.startMonthOnly ? r.start + 14 * DAY : r.start;
    const spanEnd = r.endMonthOnly ? r.end - 15 * DAY : r.end;
    const spanWeeks = (spanEnd - spanStart) / (7 * DAY);
    if (maxWeeks && spanWeeks > maxWeeks + 3) {
      // e.g. "10-12 weeks between May and September": a window the internship falls inside.
      const E = parseIso(w.earliestStart);
      const lateStartEnd = Math.max(E, r.start) + (minWeeksStated * 7 - 3) * DAY;
      const ok = lateStartEnd <= Math.min(r.end, parseIso(w.latestEnd)) + w.endSlackDays * DAY;
      verdicts.push({ verdict: ok ? "flex" : "conflict", note: ok ? `${minWeeksStated === maxWeeks ? minWeeksStated : `${minWeeksStated}-${maxWeeks}`} wks anywhere in ${label(r.start, r.end, r)}; ask for a late-July start` : "", dates: label(r.start, r.end, r), evidence: r.sentence });
      continue;
    }
    const v = judgeRange(r.start, r.end, w, { startMonthOnly: r.startMonthOnly });
    verdicts.push({ ...v, dates: label(r.start, r.end, r), evidence: r.sentence });
  }
  for (const sw of facts.startWindows) {
    // A range of offered start dates: fits if any start inside it works.
    const E = parseIso(w.earliestStart);
    const latestStart = parseIso(w.latestEnd) - w.minWeeks * 7 * DAY;
    const ok = sw.end >= E && sw.start <= latestStart;
    verdicts.push({ verdict: ok ? "flex" : "conflict", note: ok ? "multiple start dates offered" : "", dates: `starts ${label(sw.start, sw.end, sw)}`, evidence: sw.sentence });
  }
  const weeks = facts.weeks.length ? Math.min(...facts.weeks.map((x) => x.lo)) : null;
  for (const s of facts.starts) {
    // Only pair a start with an end stated in the same sentence ("begin June 8 and end August 14").
    const endFact = facts.ends.find((e) => e.sentence === s.sentence && e.end - s.start >= 21 * DAY);
    if (endFact) {
      const v = judgeRange(s.start, endFact.end, w, { startMonthOnly: s.monthOnly });
      verdicts.push({ ...v, dates: label(s.start, endFact.end, { startMonthOnly: s.monthOnly, endMonthOnly: endFact.monthOnly }), evidence: `${s.sentence} ${endFact.sentence}` });
    } else if (weeks) {
      const end = s.start + (weeks * 7 - 3) * DAY;
      const v = judgeRange(s.start, end, w, { startMonthOnly: s.monthOnly });
      verdicts.push({ ...v, dates: `${label(s.start, null, { startMonthOnly: s.monthOnly })}, ${weeks} wks`, evidence: s.sentence });
    } else {
      const v = judgeRange(s.start, s.start + w.minWeeks * 7 * DAY, w, { startMonthOnly: s.monthOnly });
      verdicts.push({ verdict: v.verdict === "conflict" ? "conflict" : "flex", note: v.verdict === "conflict" ? "" : "end date not stated", dates: `starts ${label(s.start, null, { startMonthOnly: s.monthOnly })}`, evidence: s.sentence });
    }
  }
  const pick = (kind) => verdicts.find((v) => v.verdict === kind);
  const fit = pick("fit");
  if (fit) return result("fit", "posted dates fit", { dates: fit.dates, evidence: fit.evidence });
  const flex = pick("flex");
  if (flex) return result("flex", flex.note || "near your window", { dates: flex.dates, evidence: flex.evidence });
  const conflict = pick("conflict");
  if (conflict && facts.flexible) return result("flex", `listed ${conflict.dates}, but posting says "${facts.flexEvidence}"`, { dates: conflict.dates, evidence: `${conflict.evidence} … ${facts.flexSentence || ""}` });
  if (conflict) return result("exclude", `posted dates ${conflict.dates}`, { dates: conflict.dates, evidence: conflict.evidence });

  // 3. No usable dates in the posting.
  if (facts.flexible || terms.offCycle) return result("flex", `posting says "${facts.flexEvidence || "off-cycle"}"`, { dates: "flexible", evidence: facts.flexSentence || job.Title || "" });
  if (facts.weakFlexible) return result("flex", `posting mentions "${facts.weakFlexEvidence}"`, { dates: "", evidence: facts.weakFlexSentence || "" });
  if (fallOnly) return result("exclude", "fall-only term (usually runs past Oct 1)");
  if (terms.coop && !seasons.has("summer")) return result("exclude", "co-op with no dates (usually 4-6 months)");
  if (weeks && weeks >= 20) return result("exclude", `${weeks}-week assignment`);
  const longNote = weeks && weeks >= 12 ? `; ${weeks}+ weeks, so a late-July start would run into October` : weeks ? `; ${weeks}-week program` : "";
  return result("ask", `${seasons.has("summer") ? "Summer 2027" : "term"} dates not stated${longNote}`, { dates: "" });
}
