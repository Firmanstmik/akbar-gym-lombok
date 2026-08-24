import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function loadPublicAsset(relativePath: string, mime: string) {
  const file = await readFile(join(process.cwd(), "public", relativePath));
  return `data:${mime};base64,${file.toString("base64")}`;
}

export async function loadWordmark() {
  return loadPublicAsset("images/akbar-gym/branding/akbar-gym-wordmark.png", "image/png");
}

export async function loadHeroBackground() {
  return loadPublicAsset("images/akbar-gym/hero/brand-interior.jpg", "image/jpeg");
}
