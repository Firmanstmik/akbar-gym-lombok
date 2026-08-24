import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images/akbar-gym");

const jobs = [
  {
    src: "hero/brand-interior.jpg",
    dest: "hero/brand-interior.webp",
    width: 1920,
  },
  {
    src: "hero/training-floor.jpeg",
    dest: "hero/training-floor.webp",
    width: 1600,
  },
  {
    src: "community/welcome-group.jpg",
    dest: "community/welcome-group.webp",
    width: 1600,
  },
  {
    src: "community/athletes.jpg",
    dest: "community/athletes.webp",
    width: 1600,
  },
  {
    src: "community/women-training.jpeg",
    dest: "community/women-training.webp",
    width: 1600,
  },
  {
    src: "community/community-atmosphere.jpg",
    dest: "community/community-atmosphere.webp",
    width: 1600,
  },
  {
    src: "community/training-focus.jpg",
    dest: "community/training-focus.webp",
    width: 1600,
  },
  {
    src: "facilities/free-weights.jpg",
    dest: "facilities/free-weights.webp",
    width: 1600,
  },
  {
    src: "facilities/machines.jpg",
    dest: "facilities/machines.webp",
    width: 1600,
  },
  {
    src: "facilities/strength-area.jpg",
    dest: "facilities/strength-area.webp",
    width: 1600,
  },
];

for (const job of jobs) {
  const input = path.join(root, job.src);
  const output = path.join(root, job.dest);
  if (!fs.existsSync(input)) {
    console.warn("missing", input);
    continue;
  }
  await sharp(input)
    .rotate()
    .resize({
      width: job.width,
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen(0.8, 1, 2)
    .webp({ quality: 80, effort: 6 })
    .toFile(output);
  const inSize = fs.statSync(input).size;
  const outSize = fs.statSync(output).size;
  console.log(
    `${job.dest}  ${(inSize / 1024).toFixed(0)}KB -> ${(outSize / 1024).toFixed(0)}KB`,
  );
}
