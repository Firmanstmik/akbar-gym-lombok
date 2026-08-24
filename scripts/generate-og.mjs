import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const W = 1200;
const H = 630;

const wordmark = await readFile("public/images/akbar-gym/branding/akbar-gym-wordmark.png");
const hero = await readFile("public/images/akbar-gym/hero/brand-interior.jpg");

const bg = await sharp(hero).resize(W, H, { fit: "cover", position: "centre" }).png().toBuffer();
const logo = await sharp(wordmark).resize({ width: 520, withoutEnlargement: true }).png().toBuffer();
const logoMeta = await sharp(logo).metadata();
const logoW = logoMeta.width ?? 520;
const logoH = logoMeta.height ?? 280;

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0A0A0A" stop-opacity="0.55"/>
      <stop offset="45%" stop-color="#0A0A0A" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="#0A0A0A" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="0" y="0" width="${W}" height="6" fill="#E86324"/>
  <text x="600" y="430" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="34" font-weight="700" fill="#FFFFFF" letter-spacing="4">TRAIN HARD. LIVE STRONG.</text>
  <text x="600" y="475" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="600" fill="#E86324" letter-spacing="2">Sengkol · Praya · South Lombok</text>
</svg>`);

const out = await sharp(bg)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: Math.round((H - logoH) / 2 - 70), left: Math.round((W - logoW) / 2) },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toBuffer();

await writeFile("public/og-akbar-gym.jpg", out);
console.log(`Wrote public/og-akbar-gym.jpg (${(out.length / 1024).toFixed(1)} KB)`);
