// One-off image preparation. The generated assets and manifest are committed;
// regular builds and Cloudflare deployments need no image library.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const dir = 'public/assets';
await fs.mkdir(`${dir}/responsive`, { recursive: true });
const manifest = {};
for (const name of await fs.readdir(dir)) {
  if (!/\.(webp|jpe?g|png)$/i.test(name)) continue;
  const input = `${dir}/${name}`;
  const info = await sharp(input).metadata();
  const widths = [...new Set([320, 640, 960, 1440].map(w => Math.min(w, info.width)))];
  const variants = [];
  for (const width of widths) {
    const output = `${dir}/responsive/${path.parse(name).name}-${width}.webp`;
    const result = await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 76, effort: 5 }).toFile(output);
    variants.push({ src: output.replace(/^public/, ''), width: result.width, height: result.height, bytes: result.size });
  }
  manifest[`/assets/${name}`] = { width: info.width, height: info.height, originalBytes: (await fs.stat(input)).size, variants };
}
await fs.writeFile('src/image-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared responsive sizes for ${Object.keys(manifest).length} images.`);
