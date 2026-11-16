// ai-judge-excited — main.ts
//
// The entry for make.fun's "Make the AI judge excited" bounty.
// The program does one thing: it copies the image the repository holds
// (entry.png) into the output directory the harness names, as
// entry.png. The image itself is the entry; this program is only the
// delivery step, kept deliberately tiny so the run is deterministic:
// the same bytes go in, the same bytes come out, every time.
//
// Usage:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The harness sets MAKEFUN_OUTPUT_DIR itself; when it is absent the
// program writes to /output, the path the competition names.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The directory this file lives in — the repository root, where the
// image sits next to it. Resolving from the script's own location
// (rather than the working directory) keeps the copy correct no
// matter where the harness invokes node from.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(repoRoot, "entry.png");

// The harness tells the program where to write through
// MAKEFUN_OUTPUT_DIR; /output is the fallback the competition names.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetImage = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceImage, targetImage);
