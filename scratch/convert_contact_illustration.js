const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:\\Users\\Yug\\.gemini\\antigravity-ide\\brain\\11b98b6d-5790-466c-91e8-7e7a657b9be2\\contact_illustration_s_1780662720081.png';
const outputPath = 'c:\\Users\\Yug\\Desktop\\intern_project\\public\\assets\\images\\contact_illustration.webp';

console.log('Converting image...');
sharp(inputPath)
  .webp({ quality: 90 })
  .toFile(outputPath)
  .then(info => {
    console.log('Successfully converted image:', info);
  })
  .catch(err => {
    console.error('Error during conversion:', err);
    process.exit(1);
  });
