// Education-requirement screen: is this internship open to an undergraduate?
//
//   titleDegree(title)        -> { ok, reason }          "Graduate Intern", "PhD", "MS", "Master's", "MBA", "JD"...
//   degreeRequirement(text)   -> { ok, level, evidence }
//        level "undergrad"  posting explicitly includes undergrads (kept, shown as UG ✓)
//        level ""           posting doesn't say (kept)
//        level "Master's/PhD" | "PhD" | "MBA" | "JD / law school"  (dropped)
//
// A graduate degree only disqualifies when it appears as a requirement ("currently pursuing a
// Master's or PhD", "must be enrolled in an MBA program") with no undergraduate option in the same
// sentence, and no other sentence opens the role to undergraduates. "PhD preferred", "work with
// PhD researchers" and "graduate students are also welcome" do not disqualify.
import { splitSentences } from "./dates.mjs";

const UG_WORDS = /\bundergrad\w*|\bunder[- ]graduate\b|\bbachelor['’]?s?\b|\bbaccalaureate\b|\bfour[- ]year\b|\b4[- ]year (?:degree|college|university|program)|\brising (?:sophomore|junior|senior)s?\b|\b(?:sophomore|junior|senior|penultimate)[- ]year\b|\b(?:sophomores?|juniors?|seniors?)\b(?=[^.;]{0,40}\b(?:standing|class|college|university|undergrad|graduat|grad|students?))|\bcollege (?:students?|sophomores?|juniors?|seniors?)\b|\benrolled in (?:an? )?(?:accredited )?(?:college|university)\b(?!\s+(?:graduate|master|ph))/i;
const UG_ABBR = /\b(?:B\.?S\.?c?|B\.?A\.?|BBA|B\.?Eng\.?|B\.?Tech\.?|UG)(?![A-Za-z])/;
const MS_WORDS = /\bmaster['’]s\b|\bmasters\b|\bmaster of (?:science|engineering|arts|business|finance|financial|computer|data|statistics|applied|information|quantitative|mathematical)|\bmaster (?:degree|program|programme|student|candidate|level|course)s?\b|\bmaster\/|(?<!under[- ])\bgraduate (?:students?|degrees?|school|studies|level|coursework|research)\b|(?<!under[- ])\bgraduate-level\b|\b(?:enrolled in|pursuing|attending|current(?:ly)? in|in) (?:an? |a full-time |full-time )?(?:accredited )?graduate (?:degree )?program(?:me)?s?\b|\badvanced degrees?\b|\bpost-?graduate\b|\bgrad (?:students?|school)\b/i;
const MS_ABBR = /\b(?:M\.?S\.?c?|M\.?Eng\.?|MFE|MSF|MFin|MSCS|MSDS|MSBA|MQF|MCF)(?![A-Za-z])/;
const MS_OFFICE = /\bMS[- ]?(?:Office|Excel|Word|Teams|PowerPoint|Access|Project|Outlook|Visio|Dynamics|SQL|Azure|Windows|365)\b/gi;
const PHD_RE = /\bph\.?\s?d\.?(?![a-z])|\bdoctoral\b|\bdoctorate\b|\bdoctor of philosophy\b|\bpost-?doc/i;
const MBA_RE = /\bMBAs?\b|\bM\.B\.A\.?/;
const JD_WORDS = /\bjuris doctor|\blaw school|\blaw students?\b|\b(?:first|second|third)[- ]year law\b/i;
const JD_ABBR = /\bJ\.D\.?(?![A-Za-z])|\bJD\b|\b[123]Ls?\b/;

const PURSUING = /\b(?:current|currently|pursuing|pursue|pursuit|enrolled|enrollment|enrolling|candidates?|students?|working (?:toward|towards)|in the process|studying|attending|rising|matriculated|toward|towards|seeking|obtaining|completing|in progress|graduating|graduation|progressing)\b/i;
const REQUIRED = /\b(?:must|required|requires?|requirements?|eligib\w*|minimum|qualifications?|open (?:only )?to|only|need|should be|looking for|for (?:current )?students)\b/i;
const PREFERRED = /\b(?:prefer\w*|nice[- ]to[- ]have|bonus|a plus|plus\b|ideally|desir\w*|advantage\w*|helpful|beneficial|stand out)\b/i;
const INCLUSIVE = /\b(?:also|as well|welcome|encouraged to apply|including|or above|or higher)\b/i;
const COMPLETED_UG = /\b(?:completed|complete|hold|holding|have|has|earned|received|obtained|possess\w*|already)\b[^.;]{0,25}(?:\bundergrad\w*|\bbachelor['’]?s?\b|\bB\.?S\.?\b|\bB\.?A\.?\b)/i;
const UG_FIRST = /\bundergrad\w*|\bunder[- ]graduate\b|\bbachelor['’]?s?\b|\bB\.?S\.?c?(?![A-Za-z])|\bB\.?A\.?(?![A-Za-z])|\bfour[- ]year\b/i;
const ACTIVE_BEFORE = /\b(?:current|currently|pursuing|pursue|enrolled|working toward|working towards|in the process|completing|graduating|graduation|attending|studying|progressing)\b/i;
const UG_ACTIVE = /\bundergraduate (?:students?|programs?|candidates?|interns?)\b|\brising\b|\b(?:sophomore|junior|senior)s?\b|pursuing (?:an? |your )?(?:bachelor|undergrad|B\.?S|B\.?A)|graduating with/i;
const COLLEAGUE_PHD = /\b(?:our|team of|alongside|colleagues|researchers with|staff of|employees|world-class)\b[^.;]{0,40}\b(?:ph\.?\s?d|doctorates?)/i;

function mentions(sentence) {
  const s = sentence.replace(MS_OFFICE, " ");
  return {
    ug: UG_WORDS.test(s) || UG_ABBR.test(s),
    ms: MS_WORDS.test(s) || MS_ABBR.test(s),
    phd: PHD_RE.test(s) && !COLLEAGUE_PHD.test(s),
    mba: MBA_RE.test(s),
    jd: JD_WORDS.test(s) || JD_ABBR.test(s),
    s,
  };
}

export function degreeRequirement(text = "") {
  let undergrad = null;
  let grad = null;
  for (const sentence of splitSentences(text)) {
    const m = mentions(sentence);
    if (!m.ug && !m.ms && !m.phd && !m.mba && !m.jd) continue;
    const ugAt = m.s.search(UG_FIRST);
    const activeBefore = ugAt > 0 && ACTIVE_BEFORE.test(m.s.slice(0, ugAt));
    const ugOnlyCompleted = m.ug && COMPLETED_UG.test(m.s) && !UG_ACTIVE.test(m.s) && !activeBefore;
    if (m.ug && !ugOnlyCompleted && (PURSUING.test(m.s) || /undergrad/i.test(m.s))) undergrad ??= sentence;
    const gradMention = m.ms || m.phd || m.mba || m.jd;
    if (!gradMention || grad) continue;
    if (m.ug && !ugOnlyCompleted) continue; // "Bachelor's, Master's or PhD" -> undergrad option in the same sentence
    if (PREFERRED.test(m.s) && !REQUIRED.test(m.s)) continue; // "PhD preferred"
    if (INCLUSIVE.test(m.s) && !/\bonly\b/i.test(m.s)) continue; // "graduate students are also welcome"
    if (!PURSUING.test(m.s) && !REQUIRED.test(m.s)) continue; // "work alongside PhD researchers"
    const level = m.jd ? "JD / law school" : m.mba ? "MBA" : m.phd && !m.ms ? "PhD" : "Master's/PhD";
    grad = { level, sentence };
  }
  if (undergrad) return { ok: true, level: "undergrad", evidence: undergrad };
  if (grad) return { ok: false, level: grad.level, evidence: grad.sentence };
  return { ok: true, level: "", evidence: "" };
}

const T_GRAD = /\b(?:ph\.?\s?d|doctoral|doctorate|post-?doc\w*|postdoctoral|m\.b\.a|j\.d|juris|law|legal|summer associate|master['’]?s?|masters|graduate|grad|msc|meng|mfe|msf)\b/i;
const T_ABBR = /\b(?:MS|M\.S\.|MBA|JD|PhD)(?![A-Za-z])/;
const T_UG = /undergrad|bachelor|\bBS\b|\bB\.S\.|\bUG\b|\bBA\b|\bB\.A\./i;

export function titleDegree(title = "") {
  const t = String(title);
  if (/\b(?:new|recent) grad/i.test(t)) return { ok: true };
  const hit = t.match(T_GRAD) || t.match(T_ABBR);
  if (hit && !T_UG.test(t)) return { ok: false, reason: `title says "${hit[0]}"` };
  return { ok: true };
}
