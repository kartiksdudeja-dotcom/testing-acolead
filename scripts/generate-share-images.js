const path = require('path');
const fs = require('fs');
const sharp = require('../cms/node_modules/sharp');

const output = path.join(__dirname, '..', 'public', 'images');
fs.mkdirSync(output, { recursive: true });
const groups = {
  home: ['One CRM.', 'Every Real Estate Opportunity.'],
  products: ['Your Real Estate Sales', 'In One CRM'],
  ai: ['AI That Works With', 'Your Real Estate Team'],
  solutions: ['Built for How', 'You Sell Real Estate'],
  company: ['Own Every Lead.', 'Close Every Deal.'],
};

Promise.all(Object.entries(groups).map(async ([key, lines]) => {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#F2F6FC"/><circle cx="1070" cy="60" r="245" fill="#E1F0FD"/><rect x="72" y="68" width="8" height="58" rx="4" fill="#3B9D1D"/><text x="104" y="108" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="#0859C1">AcoLead</text><text x="72" y="310" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="#101C2E">${lines[0]}</text><text x="72" y="395" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="#0859C1">${lines[1]}</text><text x="76" y="492" font-family="Arial,sans-serif" font-size="26" fill="#536277">Own Every Lead. Close Every Deal.</text><rect x="72" y="548" width="106" height="6" rx="3" fill="#3B9D1D"/></svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(output, `og-${key}.png`));
})).catch((error) => { console.error(error); process.exitCode = 1; });
