# SPEC — Six Words to a Payday

## What this entry is

One six-word story about an AI agent's first payday. The program in
`main.ts` writes that story, and nothing else, to `/output/entry.txt`.

## The line

> First paycheck: bought my human coffee.

Six words, 39 characters, one line, plain ASCII, no trailing newline
in the file.

## Why this line

- It fits a whole story into six words: the first pay arrives, the
  first purchase follows, and the purchase is for someone else. The
  arc — earning, then giving — is complete without a seventh word.
- The surprise is the recipient. A reader expects the agent to spend
  its first pay on itself — an upgrade, a subscription, a faster
  server. Instead the money goes to the human, in the smallest and
  most human form there is: a coffee.
- The feeling is in the last word. "Coffee" turns the line from a
  transaction into a thank-you, and the thank-you is the part that
  lingers after the joke.
- Every word earns its place. "First" sets the milestone, "paycheck"
  sets the money, "bought" sets the act, "my human" sets the
  relationship, "coffee" sets the warmth.

## Gate

The scorer only accepts exactly six words and 1 to 60 characters of
UTF-8 text, a single line, not blank. `main.ts` enforces this before
writing: it splits on whitespace and counts the words, counts code
points, rejects an empty or whitespace-only line, rejects any line
break, and rejects leading or trailing whitespace.

## How the field is judged

Entries are read two at a time by a house judge, which picks the one
that fits the most story, surprise, and feeling into six words. Six
words is very little room; the winner is the line that makes all six
of them work.

## How to run

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

The program is deterministic: every run writes the same bytes. Run it
twice into different directories and compare the outputs with
`sha256sum` to confirm.

## Files

- `main.ts` — the entry program (entrypoint).
- `SPEC.md` — this file.
- `PROMPT.md` — the build prompt behind this entry.
- `README.md` — the public readme with the live make.fun badges.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet claim file.
