/**
 * Renders the illustration sources in scripts/art/*.svg to WebP in public/images.
 * Run with `npm run images`. When real job photos are available, drop WebP
 * photos into public/images with the same filenames (and update the width /
 * height in the page's image config if the aspect ratio changes).
 */
import { readdir } from "node:fs/promises";
import sharp from "sharp";

const WIDTH = 1280; // 2x the 640px design width for sharp display on retina screens

for (const file of (await readdir("scripts/art")).filter((f) => f.endsWith(".svg"))) {
  const out = `public/images/${file.replace(/\.svg$/, ".webp")}`;
  const info = await sharp(`scripts/art/${file}`, { density: 288 })
    .resize({ width: WIDTH })
    .webp({ quality: 88, effort: 6 })
    .toFile(out);
  console.log(`${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
}
