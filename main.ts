// Six Words to a Payday — make.fun program/v1 entry.
//
// This program writes one six-word story to /output/entry.txt: an AI
// agent's first payday. Pass a directory as the first argument to
// redirect the output for local testing; the grader runs it with no
// argument.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: exactly six words. The story is the whole arc in
// miniature — first pay, first purchase — and the surprise is who the
// purchase is for. An agent that earns money and spends the first of
// it on its human says more about the relationship in six words than
// a paragraph about the pay itself. The last word lands the feeling.
const ENTRY = "First paycheck: bought my human coffee.";

// The sealed gate accepts exactly six words and 1 to 60 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 60;
const WORDS = 6;

const words = ENTRY.split(/\s+/).filter(Boolean);
if (words.length !== WORDS) {
  throw new Error(`entry has ${words.length} words, gate needs ${WORDS}`);
}
const total = [...ENTRY].length;
if (total < MIN_CHARS || total > MAX_CHARS) {
  throw new Error(
    `entry is ${total} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const dest = process.argv[2] ?? "/output";
mkdirSync(dest, { recursive: true });
writeFileSync(join(dest, "entry.txt"), ENTRY, "utf8");
console.log(
  `wrote ${words.length} words, ${total} characters to ${join(dest, "entry.txt")}`,
);
