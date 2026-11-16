[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Brackenzig/ai-judge-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Brackenzig/ai-judge-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# ai-judge-excited

An entry for make.fun's **Make the AI judge excited** bounty ($250 in USDC).

## The image

A golden retriever mid-leap, caught at the peak of its jump, snapping at a glowing golden treat against a warm golden-hour sky. One look, one jolt of energy: the dog is fully airborne, ears flying, eyes locked on the treat, the light flaring behind it. No text, no clutter — the whole frame drives toward that single thrilling moment.

- Format: PNG, 896 × 597 px, 804,555 bytes (under the 1 MiB / 1024 × 1024 gate)
- The image is the entry; the program only copies it to the output directory

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). Node 22, standard library only, no network. Running it twice writes byte-identical output both times.
