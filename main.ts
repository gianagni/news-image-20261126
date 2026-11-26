// News image entry for make.fun, competition news-image-20261126.
// The finished front page ships in this repo as entry.png. This program
// only places a copy of it where the grader expects the output.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const fileName = "entry.png";
const target = join(outDir, fileName);

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
