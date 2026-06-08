const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:\\Users\\Yug\\.gemini\\antigravity-ide\\brain\\11b98b6d-5790-466c-91e8-7e7a657b9be2';
const publicDir = 'c:\\Users\\Yug\\Desktop\\intern_project\\public';

async function convert() {
  console.log("Converting generated PNGs to WebP...");
  
  // Find the exact files in the brain directory (since timestamps are appended)
  const files = fs.readdirSync(brainDir);
  
  const retailFile = files.find(f => f.startsWith('retail_mobile_') && f.endsWith('.png'));
  const fintechFile = files.find(f => f.startsWith('fintech_mobile_') && f.endsWith('.png'));
  const healthcareFile = files.find(f => f.startsWith('healthcare_mobile_') && f.endsWith('.png'));
  const saasFile = files.find(f => f.startsWith('saas_mobile_') && f.endsWith('.png'));

  if (retailFile) {
    await sharp(path.join(brainDir, retailFile))
      .toFormat('webp')
      .toFile(path.join(publicDir, 'assets/images/sectors/retail_mobile.webp'));
    console.log("Converted retail mobile app image.");
  }
  
  if (fintechFile) {
    await sharp(path.join(brainDir, fintechFile))
      .toFormat('webp')
      .toFile(path.join(publicDir, 'assets/images/sectors/fintech_mobile.webp'));
    console.log("Converted fintech mobile app image.");
  }

  if (healthcareFile) {
    await sharp(path.join(brainDir, healthcareFile))
      .toFormat('webp')
      .toFile(path.join(publicDir, 'assets/images/sectors/healthcare_mobile.webp'));
    console.log("Converted healthcare mobile app image.");
  }

  if (saasFile) {
    await sharp(path.join(brainDir, saasFile))
      .toFormat('webp')
      .toFile(path.join(publicDir, 'assets/images/sectors/saas_mobile.webp'));
    console.log("Converted saas mobile app image.");
  }
}

convert().catch(console.error);
