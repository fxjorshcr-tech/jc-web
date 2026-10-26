#!/usr/bin/env node
/**
 * Import tour photos from a local folder into public/images/tours/<slug>/.
 *
 *   npm run photos -- "C:\Users\you\Downloads\Fotos JC"
 *
 * Expects one sub-folder per tour (names are matched loosely, e.g. "Birds Lover Morning",
 * "Curu Nature Scape", "Lets get Local", "Finca Paraiso ATV Adventure", "Nocturno Night Journey").
 * For each tour:
 *   - a file whose name contains "hero" or "portada" becomes hero.jpg; otherwise the first photo does
 *   - the rest become 01.jpg, 02.jpg, ... in file-name order
 *   - every photo is auto-rotated (EXIF), resized to max 2000 px on the long edge, saved as JPEG q80
 *     with metadata stripped
 * Existing files are overwritten only with --force.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const TOURS = [
  { slug: "nocturno-night-journey", match: /nocturno|night/i },
  { slug: "bird-lovers-morning", match: /bird/i },
  { slug: "curu-nature-escape", match: /curu/i },
  { slug: "lets-get-local", match: /local/i },
  { slug: "finca-el-paraiso-atv", match: /paraiso|para[ií]so|atv/i },
];
const IMAGE_RE = /\.(jpe?g|png|heic|heif|webp|tiff?)$/i;
const MAX_EDGE = 2000;
const QUALITY = 80;

const args = process.argv.slice(2);
const force = args.includes("--force");
const source = args.find((a) => !a.startsWith("--"));
if (!source || !fs.existsSync(source)) {
  console.error('Usage: npm run photos -- "<folder with one sub-folder per tour>" [--force]');
  process.exit(1);
}

const root = path.resolve(process.cwd(), "public", "images", "tours");
let total = 0;

for (const dir of fs.readdirSync(source, { withFileTypes: true }).filter((d) => d.isDirectory())) {
  const tour = TOURS.find((t) => t.match.test(dir.name));
  if (!tour) {
    console.warn(`skip  "${dir.name}" (no tour matched)`);
    continue;
  }
  const files = fs
    .readdirSync(path.join(source, dir.name))
    .filter((f) => IMAGE_RE.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  if (files.length === 0) {
    console.warn(`skip  "${dir.name}" (no images)`);
    continue;
  }
  const heroIndex = Math.max(0, files.findIndex((f) => /hero|portada|cover/i.test(f)));
  const hero = files[heroIndex];
  const rest = files.filter((_, i) => i !== heroIndex);
  const outDir = path.join(root, tour.slug);
  fs.mkdirSync(outDir, { recursive: true });

  const jobs = [[hero, "hero.jpg"], ...rest.map((f, i) => [f, `${String(i + 1).padStart(2, "0")}.jpg`])];
  console.log(`\n${dir.name}  ->  public/images/tours/${tour.slug}/  (${jobs.length} photos)`);
  for (const [from, to] of jobs) {
    const target = path.join(outDir, to);
    if (fs.existsSync(target) && !force) {
      console.log(`  keep  ${to} (exists, use --force to overwrite)`);
      continue;
    }
    const input = path.join(source, dir.name, from);
    const info = await sharp(input)
      .rotate()
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(target);
    total++;
    console.log(`  ${to.padEnd(9)} <- ${from}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  }
}
console.log(`\nDone. ${total} photos written. Review them, then: git add public/images && git commit -m "Add tour photos" && git push`);
