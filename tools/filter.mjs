// Role screens: internship?, track (Software / Product / Data / Finance), seniority & degree,
// Python-friendly title, US location, pay.

const INTERN_RE = /\b(intern|interns|internship|internships|co-?op|summer (?:analyst|scholar|program|technology|engineer|developer|student|202\d)|student (?:researcher|program|analyst|engineer|developer|associate)|extern(?:ship)?|off[- ]?cycle|winternship|placement student|summer 202\d)\b/i;
const NOT_INTERN_RE = /\b(new grad|new graduate|entry[- ]level|full[- ]time (?:analyst|associate|engineer|role|position|hire)|apprentice(?:ship)?|postdoc|post-doc|residency|high[- ]school|micro[- ]?internship|bootcamp|boot camp|insight (?:day|days|week|program|series)|discovery (?:day|program)|spring week|open house|early insight|get to know|educational opportunit\w*|information session|info session|networking event)\b/i;
const SENIOR_RE = /\b(senior|sr\.?|staff|principal|lead|director|head of|vp|vice president)\b/i;
const DEGREE_RE = /\b(ph\.?\s?d|phd|doctoral|doctorate|mba|m\.b\.a|j\.?d\.?\b|law school|legal|summer associate|medical|pharm\.?d|nursing|clinical|postgraduate)\b/i;
const MASTERS_RE = /\b(master'?s|masters|ms\/phd|m\.s\.|graduate student|grad student)\b/i;
const UNDERGRAD_RE = /\b(bachelor'?s|undergrad\w*|bs\b|b\.s\.|ba\/bs|bs\/ms)\b/i;

const FUNCTION_EXCLUDE_RE = /\b(hardware|fpga|asic|embedded|firmware|silicon|rtl|verilog|vlsi|pcb|analog|circuit|chip|semiconductor|electrical|mechanical|manufactur\w*|civil|chemical|aerospace|propulsion|structural|optical|photonic|rf|antenna|robotics?|mechatronic\w*|test engineer|validation|verification|process engineer|quality engineer|field|facilities|construction|industrial|supply chain|logistics|procurement|sourcing|hr|human resources|people (?:ops|operations|partner)|talent|recruit\w*|marketing|brand|communications?|public relations|journalis\w*|editorial|content|social media|copywrit\w*|graphic|ux|ui\/ux|user experience|user research\w*|designer|design|creative|video|animation|legal|paralegal|compliance|audit|tax|accounting|accountant|sales(?!\s*(?:&|and)\s*trading)|account executive|account manager|business development|customer|support|help desk|technician|it support|desktop|nurse|clinical|pharmac\w*|biolog\w*|chemist\w*|laborator\w*|environmental|sustainability|real estate|event|hospitality|retail|warehouse|security officer|policy|government affairs|philanthropy|operations|ops)\b/i;
const FUNCTION_KEEP_RE = /\b(product operations|data operations|trading operations|investment operations|devops|mlops|sales\s*(?:&|and)\s*trading|security engineer|software)\b/i;

// Titles that name a non-Python stack or low-level specialty.
const LANG_EXCLUDE_RE = /\bembedded\b|\bfirmware\b|\brtos\b|c\+\+|\bc#|\.net\b|\bjava\b(?!script)|\brust\b|golang|\bgo\s+(?:developer|engineer)|kotlin|\bswift\b|\bios\b|android|mobile|flutter|react native|unity|unreal|game (?:engine|developer|programmer)|(?:engine|gameplay|graphics|tools|ui|audio|network|physics|rendering) programmer|tech(?:nical)? art(?:ist)?|kernel|compiler|gpu|cuda|low[- ]latency|systems programming|\bhpc\b|high[- ]performance computing|salesforce (?:developer|administrator)|\bsap\b|mainframe|cobol|abap/i;

const PRODUCT_RE = /product manag|associate product|\bapm\b|product owner|product strategy|product analyst|product operations|technical program manag|\btpm\b|program manag|product intern|product (?:development )?internship/i;
const SOFTWARE_STRONG_RE = /software|developer|\bswe\b|\bsde\b|full[- ]?stack|back[- ]?end|front[- ]?end|devops|site reliability|\bsre\b|web (?:dev|engineer)|programmer|coding|application (?:developer|engineer)|cloud engineer|platform engineer|infrastructure engineer|security engineer|forward deployed|solutions engineer/i;
const DATA_STRONG_RE = /data scien|data analy|data engineer|analytics|machine learning|\bml\b|\bai\b|artificial intelligence|business intelligence|\bbi\b|decision scien|statistic|research scien|applied scien|\bnlp\b|computer vision|deep learning|\bllm\b|generative|data intern|data & ai|data and ai/i;
const TECH_WORD_RE = /\b(technology|engineering|engineer|tech|technical)\b/i;
const FINANCE_RE = /invest|banking|\bib\b|sales\s*(?:&|and)\s*trading|\bs&t\b|trading|trader|asset management|wealth management|portfolio|equity research|private equity|venture|hedge fund|credit|fixed income|capital markets|corporate finance|\bm&a\b|mergers|leveraged finance|restructuring|global markets|markets?\b|quant|fp&a|treasury|underwriting|valuation|financ|summer analyst|risk|actuar|economist|economics|research analyst/i;
const DATA_WEAK_RE = /\bdata\b|analyst|insights|research/i;
const SOFTWARE_WEAK_RE = /platform|infrastructure|cloud|security|cyber|systems|automation|digital|developer/i;

export const TRACKS = ["Software", "Product", "Data", "Finance"];

const CATEGORY_TRACK = [
  [/product/i, "Product"],
  [/data|ai|machine learning/i, "Data"],
  [/quant|finance/i, "Finance"],
  [/software/i, "Software"],
];

export function trackFor(title = "", category = "", department = "") {
  const t = title;
  if (PRODUCT_RE.test(t)) return "Product";
  if (SOFTWARE_STRONG_RE.test(t)) return "Software";
  if (DATA_STRONG_RE.test(t)) return "Data";
  if (TECH_WORD_RE.test(t) && !/quant/i.test(t)) return "Software";
  if (FINANCE_RE.test(t)) return "Finance";
  if (DATA_WEAK_RE.test(t)) return "Data";
  if (SOFTWARE_WEAK_RE.test(t)) return "Software";
  for (const [re, track] of CATEGORY_TRACK) if (category && re.test(category)) return /hardware/i.test(category) ? null : track;
  const d = department || "";
  if (PRODUCT_RE.test(d)) return "Product";
  if (SOFTWARE_STRONG_RE.test(d) || TECH_WORD_RE.test(d)) return "Software";
  if (DATA_STRONG_RE.test(d)) return "Data";
  if (FINANCE_RE.test(d)) return "Finance";
  return null;
}

// Title-level screen. Returns { ok, reason, track }.
export function screenRole({ Title = "", Department = "", Category = "", URL = "" } = {}, { excludeNonPythonTitles = true } = {}) {
  const title = String(Title).replace(/\s+/g, " ").trim();
  if (!title) return { ok: false, reason: "no title" };
  if (!INTERN_RE.test(title)) return { ok: false, reason: "not an internship" };
  if (NOT_INTERN_RE.test(title)) return { ok: false, reason: "new grad / full-time" };
  // Job lists sometimes shorten the title; the posting's URL slug keeps the full one ("...-High-School-Intern-...").
  if (/high[-_ ]?school|micro[-_ ]?internship/i.test(String(URL))) return { ok: false, reason: "new grad / full-time" };
  if (SENIOR_RE.test(title)) return { ok: false, reason: "senior / manager title" };
  if (DEGREE_RE.test(title)) return { ok: false, reason: "PhD / MBA / law / medical" };
  if (MASTERS_RE.test(title) && !UNDERGRAD_RE.test(title)) return { ok: false, reason: "master's only" };
  if (/hardware/i.test(Category) && !SOFTWARE_STRONG_RE.test(title)) return { ok: false, reason: "hardware" };
  if (FUNCTION_EXCLUDE_RE.test(title) && !FUNCTION_KEEP_RE.test(title)) return { ok: false, reason: "outside SWE/PM/data/finance" };
  if (excludeNonPythonTitles && LANG_EXCLUDE_RE.test(title)) return { ok: false, reason: "non-Python stack in title" };
  const track = trackFor(title, Category, Department);
  if (!track) return { ok: false, reason: "no matching track" };
  return { ok: true, track };
}

// Body-level language signal (kept as a flag, not a filter).
export function languageFlags(content = "") {
  const text = String(content);
  const python = /\bpython\b/i.test(text);
  const others = [...new Set([...text.matchAll(/\b(c\+\+|java(?!script)|c#|golang|rust|scala|kotlin|swift)\b/gi)].map((m) => m[1].toLowerCase().replace("golang", "go")))];
  return { python, others };
}

// ---- Location ---------------------------------------------------------------------------------
const STATE_ABBR = "AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY|DC";
const STATE_ABBR_RE = new RegExp(`(?:,|\\s-)\\s*(?:${STATE_ABBR})\\b(?!\\s*,?\\s*(?:canada|uk|united kingdom))`);
const STATE_NAME_RE = /\b(alabama|alaska|arizona|arkansas|california|colorado|connecticut|delaware|florida|hawaii|idaho|illinois|indiana|iowa|kansas|kentucky|louisiana|maine|maryland|massachusetts|michigan|minnesota|mississippi|missouri|montana|nebraska|nevada|new hampshire|new jersey|new mexico|new york|north carolina|north dakota|ohio|oklahoma|oregon|pennsylvania|rhode island|south carolina|south dakota|tennessee|texas|utah|vermont|virginia|washington|west virginia|wisconsin|wyoming|district of columbia)\b/i;
const US_WORD_RE = /united states|\busa\b|\bu\.s\.a?\.?(?=\W|$)|\bus\b|\bamer(?:icas|ica)\b|nationwide|remote[- ]us|us[- ]remote/i;
const US_CITY_RE = /\b(new york|nyc|manhattan|brooklyn|san francisco|sf bay|bay area|silicon valley|seattle|chicago|boston|austin|los angeles|atlanta|denver|dallas|houston|miami|philadelphia|pittsburgh|san jose|palo alto|mountain view|menlo park|sunnyvale|redmond|bellevue|kirkland|cupertino|santa clara|san mateo|redwood city|south san francisco|oakland|berkeley|emeryville|irvine|san diego|santa monica|culver city|portland|salt lake city|lehi|phoenix|scottsdale|tempe|minneapolis|detroit|ann arbor|charlotte|raleigh|durham|nashville|columbus|cleveland|cincinnati|st\.? louis|kansas city|jersey city|hoboken|stamford|greenwich|princeton|madison|plano|irving|mclean|reston|herndon|tysons|arlington|alexandria|bethesda|baltimore|richmond|tampa|orlando|jacksonville|wilmington|boise|sacramento|providence|hartford|new haven|cambridge, ma|somerville|waltham|burlington, ma|los gatos|foster city|san ramon|pleasanton|fremont|milpitas|boulder|omaha|indianapolis|milwaukee|louisville|new orleans|honolulu|anchorage|washington,? d\.?c\.?)\b/i;
const NON_US_RE = /\b(canada|toronto|vancouver|montr[eé]al|ottawa|waterloo|calgary|edmonton|ontario|british columbia|qu[eé]bec|alberta|united kingdom|\buk\b|london|england|ireland|dublin|germany|berlin|munich|frankfurt|france|paris|netherlands|amsterdam|switzerland|zurich|geneva|india|bangalore|bengaluru|hyderabad|pune|mumbai|chennai|gurgaon|gurugram|noida|singapore|hong kong|japan|tokyo|china|shanghai|beijing|shenzhen|australia|sydney|melbourne|mexico|guadalajara|brazil|s[aã]o paulo|israel|tel aviv|poland|warsaw|krak[oó]w|spain|madrid|barcelona|italy|milan|sweden|stockholm|denmark|copenhagen|taiwan|taipei|korea|seoul|philippines|manila|vietnam|uae|dubai|abu dhabi|south africa|argentina|buenos aires|chile|colombia|bogot[aá]|costa rica|romania|bucharest|czech|prague|hungary|budapest|portugal|lisbon|belgium|brussels|austria|vienna|norway|oslo|finland|helsinki|luxembourg|scotland|edinburgh|glasgow|manchester|belfast|cyprus|limassol|estonia|serbia|belgrade|ukraine|kyiv|egypt|cairo|nigeria|lagos|kenya|nairobi|turkey|istanbul|saudi|riyadh|qatar|doha|malaysia|kuala lumpur|indonesia|jakarta|thailand|bangkok|new zealand|auckland|emea|apac|latam|monaco|canary wharf|knutsford|radbroke|milton keynes|bournemouth|northern ireland|slovakia|bratislava|lithuania|vilnius|latvia|bulgaria|croatia|zagreb|slovenia|ljubljana|gift city|gandhinagar|ahmedabad|kolkata|chandigarh|jaipur|kochi|coimbatore|trivandrum|lisboa|porto|milano|m[uü]nchen|z[uü]rich|wien|praha|warszawa|bengaluru|gurugram)\b/i;

// UK/European town names that also exist in the US: non-US only when nothing in the same part says US.
const AMBIGUOUS_NON_US_RE = /\b(northampton|leeds|sheffield|nottingham|cardiff|liverpool|wales|riga|greece|surrey)\b(?!,?\s*(?:[A-Z]{2}\b|usa|united states))/i;

// Returns "us" | "non-us" | "unknown".
export function usStatus(location = "") {
  const parts = String(location).split(/\s*(?:;|\||<\/?br\s*\/?>|\n|\s\/\s| or )\s*/i).map((p) => p.trim()).filter(Boolean);
  if (!parts.length) return "unknown";
  let anyUS = false; let anyNonUS = false;
  for (const part of parts) {
    const us = STATE_ABBR_RE.test(part) || US_WORD_RE.test(part) || US_CITY_RE.test(part) || STATE_NAME_RE.test(part);
    const nonUS = NON_US_RE.test(part) || (!us && AMBIGUOUS_NON_US_RE.test(part));
    if (us && (!nonUS || /united states|\busa\b/i.test(part))) anyUS = true;
    else if (nonUS) anyNonUS = true;
  }
  if (anyUS) return "us";
  if (anyNonUS) return "non-us";
  return "unknown";
}

// ---- Pay ----------------------------------------------------------------------------------------
const PAY_CONTEXT_RE = /pay|salary|compensation|wage|rate|hourly|per hour|\/\s*hr|\/\s*hour|stipend|base|range|earn|annualized|\bhr\b/i;
const AMOUNT = String.raw`(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)\s*(k)?`;
const PAY_RE = new RegExp(String.raw`\$\s?${AMOUNT}(?:\s*(?:usd)?\s*(?:-|–|—|to)\s*\$?\s?${AMOUNT})?\s*(?:usd)?\s*(?:\/|per|an|a)?\s*(hour|hr|hourly|month|mo|monthly|week|wk|weekly|year|yr|annual|annually|annum|annualized)?`, "gi");

function toNumber(raw, k) {
  const n = Number(String(raw).replace(/,/g, ""));
  return k ? n * 1000 : n;
}

const NOT_WAGE_RE = /stipend|bonus|relocation|housing|reimburs|allowance|credit|401|benefit|tuition|sign(?:ing|-on)|gift|equity|stock|budget|scholarship|award|prize|donat|raised|fund/i;

function toHourly(value, unit, ctx = "") {
  const u = (unit || "").toLowerCase();
  if (/^h/.test(u)) return value;
  if (/^w/.test(u)) return value / 40;
  if (/^mo/.test(u)) return value / 173;
  if (/^(y|an)/.test(u)) return value / 2080;
  if (value >= 15 && value < 300) return value;
  if (value >= 2000 && value < 20000) return /month|monthly|\/mo\b/i.test(ctx) ? value / 173 : null;
  if (value >= 20000) return value / 2080;
  return null;
}

// Best-effort hourly pay from free text ("$45 - $55 per hour", "$8,000/month", "$110k-$130k").
export function parsePay(text = "") {
  const s = String(text);
  const found = [];
  for (const m of s.matchAll(PAY_RE)) {
    const ctx = s.slice(Math.max(0, m.index - 80), m.index + m[0].length + 30);
    // Same-sentence neighbourhood only, so a stipend in the previous sentence doesn't veto real pay.
    const pre = s.slice(Math.max(0, m.index - 50), m.index);
    const post = s.slice(m.index + m[0].length, m.index + m[0].length + 40);
    const near = `${pre.slice(pre.search(/[^.;]*$/))} ${m[0]} ${post.split(/[.;]/)[0]}`;
    if (!m[5] && !PAY_CONTEXT_RE.test(ctx)) continue;
    if (NOT_WAGE_RE.test(near)) continue; // "$2,500 housing stipend", "$5,000 signing bonus"
    if (/million|billion|\bm\b|\bbn\b|revenue|funding|raised|valuation|aum|assets under/i.test(s.slice(m.index, m.index + m[0].length + 15))) continue;
    const lo = toNumber(m[1], m[2]);
    const hi = m[3] ? toNumber(m[3], m[4]) : lo;
    const hLo = toHourly(lo, m[5], ctx); const hHi = toHourly(hi, m[5], ctx);
    if (hLo == null || hLo < 10 || hLo > 250) continue;
    found.push({ min: Math.round(hLo), max: Math.round(hHi ?? hLo), text: m[0].trim() });
  }
  if (!found.length) return null;
  // Prefer an explicitly hourly figure; otherwise the first one.
  return found.find((f) => /hour|hr/i.test(f.text)) || found[0];
}

export const UNPAID_RE = /\bunpaid\b|for academic credit only|volunteer (?:position|role|internship)/i;

// Description says the role needs a PhD / MBA in progress, with no undergrad option in the same sentence.
export function advancedDegreeOnly(content = "") {
  for (const sentence of String(content).split(/(?<=[.;!?])\s+|\s\.\s|\n/)) {
    if (!/\b(ph\.?\s?d|doctoral|doctorate|mba)\b/i.test(sentence)) continue;
    if (!/currently|pursuing|obtaining|enrolled|candidate|student|working toward|in the process/i.test(sentence)) continue;
    if (/bachelor|undergrad|\bb\.?s\.?\b|\bb\.?a\.?\b|\bbs\/|\bms\b|master|or higher|any degree|degree program/i.test(sentence)) continue;
    if (/preferred|nice to have|bonus|plus\b/i.test(sentence)) continue;
    return sentence.trim().slice(0, 160);
  }
  return "";
}
