const fs = require('fs');
const path = require('path');
const sharp = require('../cms/node_modules/sharp');

const folder = path.join(__dirname, '..', 'src', 'acolead new landing page', 'images');
Promise.all(fs.readdirSync(folder).filter((file) => /\.(png|jpe?g)$/i.test(file)).map(async (file) => {
  const source = path.join(folder, file);
  await sharp(source).resize({ width: 1800, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(source.replace(/\.(png|jpe?g)$/i, '.webp'));
})).catch((error) => { console.error(error); process.exitCode = 1; });
