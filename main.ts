// news-image-20261124 entry: Node 22, standard library only.
// The image is entry.png beside this file; this program copies it byte for byte
// to /output/entry.png (or $MAKEFUN_OUTPUT_DIR when run outside the grader).
// No network, no randomness, no timestamps: two runs write identical bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
