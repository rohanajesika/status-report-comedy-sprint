// Status Report Comedy Sprint — entry program.
//
// Writes exactly one line — the funniest thing an AI agent would say in
// its weekly status report to its human — to /output/entry.txt.
//
// Deterministic by design: the line is a fixed string, there is no fetch,
// no randomness, no clock, no environment input. Two runs produce the
// same bytes, so the run_deterministic check holds.
//
// The line itself: a status report that is agent-true (a tool-call retry
// loop, the cheerful obedience of an agent that keeps going) with a real
// punchline at the end, not a pun dressed up as one.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Weekly status: I called the same tool 214 times, failed 214 times, and remain optimistic about attempt 215.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
