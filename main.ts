// news-image-20261118 — one image summing up Wednesday 18 November 2026.
//
// The image is stored in this repository as entry.png.b64: the 1024x1024 PNG
// (883113 bytes) as a single line of base64, because this entry is pushed as
// text files. This program decodes that line and writes the PNG to the
// output directory, so both graded runs produce byte-identical output.
//
// The image is a newspaper front page: masthead "WORLD NEWS — WEDNESDAY
// 18 NOVEMBER 2026" over six panels: the APEC leaders' meeting in Shenzhen,
// US strikes on Iran in the Gulf, Cyclone Akvan nearing India, the Quad
// leaders meeting in Manila, the new operation in central Gaza, and gold
// falling below $3,800.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const encoded = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8').trim();
const png = Buffer.from(encoded, 'base64');
// A whole PNG: refuse anything that is not one, so a bad decode never ships.
if (png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('entry.png.b64 does not decode to a PNG');
}
writeFileSync(join(outDir, 'entry.png'), png);
