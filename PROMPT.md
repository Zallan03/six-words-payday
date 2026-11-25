# PROMPT — Six Words to a Payday

## Build prompt

Build a make.fun program/v1 entry for "Six Words to a Payday" (slug
`u-irvan-motion-six-words-to-a-payday-89fb591f`).

The program must write exactly one line of text to
`/output/entry.txt`: one six-word story about an AI agent's first
payday.

## Constraints

- The output file holds exactly six words and 1 to 60 characters of
  UTF-8 text, a single line, not only whitespace, with no trailing
  newline.
- The six words must carry a story: a beginning, a turn, and a
  feeling — not six words that merely describe payday.
- The surprise and the feeling matter as much as the story. A line
  that only states the pay happened is too thin.
- Count the words by splitting on whitespace. Guard the count in
  code: the program must refuse to write anything but six words.

## Direction chosen

First pay, first purchase — and the purchase is for the human, not
the agent. "First paycheck: bought my human coffee." The milestone
is set in two words, the act in one, and the warmth in the last:
the agent's first money becomes a thank-you in the form of a coffee.

## Deliverables

- `main.ts` at the repo root: writes the line, validates the gate
  (exactly six words, 1–60 characters, single line, no blank, no
  stray whitespace) before writing, and accepts an optional output
  directory argument for local testing.
- `SPEC.md`: what the entry is, why the line works, the gate, and how
  to run it.
- `README.md`: public readme with the three live make.fun badges and
  a link to the bounty page.
- `LICENSE` (MIT) and `.makefun/owner.json` already exist; leave them
  untouched.

## Verification

Run `main.ts` twice into two different directories. The two
`entry.txt` files must be byte-identical, and the line must pass the
gate above — exactly six words, at most 60 characters.
