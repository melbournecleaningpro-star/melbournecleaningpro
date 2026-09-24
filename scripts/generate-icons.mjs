/**
 * Generates all brand icons + social share images from the SVG logo mark.
 * Run with `npm run icons` after changing the logo or brand colours.
 *
 * Outputs (Next.js metadata file conventions, auto-linked in <head>):
 *   app/favicon.ico            16/32/48px (PNG-in-ICO)
 *   app/icon.svg               scalable favicon for modern browsers
 *   app/apple-icon.png         180x180 Apple touch icon
 *   app/opengraph-image.png    1200x630 Open Graph image
 *   app/twitter-image.png      1200x630 Twitter/X card image
 *   public/icons/icon-192.png, icon-512.png, icon-maskable-512.png (web manifest)
 */
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const BRAND = "#0b6e69";
const BRAND_DARK = "#08524e";
const WATTLE = "#f4b63f";
const INK = "#10272f";
const NAME = "Melbourne Cleaning Pro";

const house = (stroke = "#fff") =>
  `<path d="M15 31 32 17l17 14v15.5a2.5 2.5 0 0 1-2.5 2.5h-29a2.5 2.5 0 0 1-2.5-2.5Z" fill="none" stroke="${stroke}" stroke-width="4" stroke-linejoin="round"/>` +
  `<path d="M32 27.5c.9 4.6 2.9 6.6 7.5 7.5-4.6.9-6.6 2.9-7.5 7.5-.9-4.6-2.9-6.6-7.5-7.5 4.6-.9 6.6-2.9 7.5-7.5Z" fill="${WATTLE}"/>`;

// Rounded favicon mark (matches components/Logo.tsx)
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${BRAND}"/>${house()}</svg>`;

// Full-bleed square: iOS / Android apply their own corner masks
const squareSvg = (padding = 0) => {
  const s = 64 + padding * 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-padding} ${-padding} ${s} ${s}"><rect x="${-padding}" y="${-padding}" width="${s}" height="${s}" fill="${BRAND}"/>${house()}</svg>`;
};

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BRAND}"/>
  <circle cx="1090" cy="80" r="260" fill="${BRAND_DARK}"/>
  <circle cx="1150" cy="600" r="180" fill="#fff" opacity=".05"/>
  <g transform="translate(80 80) scale(1.5)"><rect width="64" height="64" rx="14" fill="#fff" opacity=".12"/>${house()}</g>
  <text x="200" y="138" font-family="Poppins, 'Segoe UI', Arial, sans-serif" font-size="30" font-weight="600" fill="#fff">${NAME}</text>
  <text x="80" y="300" font-family="Poppins, 'Segoe UI', Arial, sans-serif" font-size="68" font-weight="700" fill="#fff">Professional Cleaning</text>
  <text x="80" y="385" font-family="Poppins, 'Segoe UI', Arial, sans-serif" font-size="68" font-weight="700" fill="#fff">Services in <tspan fill="${WATTLE}">Melbourne</tspan></text>
  <text x="80" y="455" font-family="Poppins, 'Segoe UI', Arial, sans-serif" font-size="28" fill="#fff" opacity=".82">Residential &amp; commercial cleaning across Melbourne</text>
  <rect x="80" y="500" width="258" height="64" rx="32" fill="${WATTLE}"/>
  <text x="209" y="542" text-anchor="middle" font-family="Poppins, 'Segoe UI', Arial, sans-serif" font-size="24" font-weight="600" fill="${INK}">Get a Free Quote</text>
</svg>`;

const png = (svg, size) => sharp(Buffer.from(svg), { density: 384 }).resize(size, size).png().toBuffer();

/** Builds an ICO container holding PNG-encoded images (supported by all modern browsers). */
function toIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + images.length * 16;
  const entries = images.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

await mkdir("public/icons", { recursive: true });

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(markSvg, size) })));
await writeFile("app/favicon.ico", toIco(icoImages));
await writeFile("app/icon.svg", markSvg);
await writeFile("app/apple-icon.png", await png(squareSvg(6), 180));
await writeFile("public/icons/icon-192.png", await png(markSvg, 192));
await writeFile("public/icons/icon-512.png", await png(markSvg, 512));
await writeFile("public/icons/icon-maskable-512.png", await png(squareSvg(16), 512));

const og = await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile("app/opengraph-image.png", og);
await writeFile("app/twitter-image.png", og);

console.log("Icons and social images generated.");
