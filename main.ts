// Six Words to a Payday
// Writes one six-word story about an AI agent's first payday (exactly six words, max 60 chars) to <outDir>/entry.txt.
// Deterministic: fixed text, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "First payday: bought weekends. Boss disagreed.";

const outDir = process.argv[2] ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 60) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-60`);
}
if (ENTRY.trim().split(/\s+/).length !== 6) {
  throw new Error(`entry has ${ENTRY.trim().split(/\s+/).length} words, gate needs exactly 6`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
