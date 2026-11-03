// Commit and push scan output (used by the GitHub Action; works locally too).
import { spawnSync } from "node:child_process";

const run = (cmd, args) => {
  const r = spawnSync(cmd, args, { encoding: "utf8" });
  if (r.status !== 0) throw new Error(`${cmd} ${args.join(" ")} failed\n${r.stdout}\n${r.stderr}`);
  return r.stdout.trim();
};

if (!run("git", ["status", "--porcelain"])) { console.log("publish: no changes"); process.exit(0); }
run("git", ["add", "-A"]);
if (!run("git", ["diff", "--cached", "--name-only"])) { console.log("publish: nothing staged"); process.exit(0); }
run("git", ["commit", "-m", `Update scan results ${new Date().toISOString().slice(0, 10)}`]);
const branch = run("git", ["branch", "--show-current"]) || "main";
for (let attempt = 1; attempt <= 3; attempt += 1) {
  const push = spawnSync("git", ["push", "origin", branch], { encoding: "utf8" });
  if (push.status === 0) { console.log(`publish: pushed ${branch}`); process.exit(0); }
  console.error(`push attempt ${attempt} failed: ${push.stderr}`);
  spawnSync("git", ["pull", "--rebase", "origin", branch], { encoding: "utf8" });
}
throw new Error("publish: push failed");
