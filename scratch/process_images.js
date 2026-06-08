const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:\\Users\\Yug\\.gemini\\antigravity-ide\\brain\\11b98b6d-5790-466c-91e8-7e7a657b9be2';
const publicDir = 'c:\\Users\\Yug\\Desktop\\intern_project\\public';
const srcAppDir = 'c:\\Users\\Yug\\Desktop\\intern_project\\src\\app';

async function process() {
  console.log("Processing images...");
  
  // Create output directories if they don't exist
  fs.mkdirSync(path.join(publicDir, 'assets/images/sectors'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'assets/images/services'), { recursive: true });

  // 1. Healthcare
  await sharp(path.join(brainDir, 'media__1780660384698.jpg'))
    .toFormat('webp')
    .toFile(path.join(publicDir, 'assets/images/sectors/healthcare_new.webp'));
  console.log("Converted healthcare.");

  // 2. Retail
  await sharp(path.join(brainDir, 'media__1780660384699.jpg'))
    .toFormat('webp')
    .toFile(path.join(publicDir, 'assets/images/sectors/retail_new.webp'));
  console.log("Converted retail.");

  // 3. Fintech
  await sharp(path.join(brainDir, 'media__1780660384886.jpg'))
    .toFormat('webp')
    .toFile(path.join(publicDir, 'assets/images/sectors/fintech_new.webp'));
  console.log("Converted fintech.");

  // 4. SaaS
  await sharp(path.join(brainDir, 'media__1780660384916.jpg'))
    .toFormat('webp')
    .toFile(path.join(publicDir, 'assets/images/sectors/saas_new.webp'));
  console.log("Converted saas.");

  // 5. Logo and Favicon
  const logoPath = path.join(brainDir, 'media__1780660565587.png');
  const metadata = await sharp(logoPath).metadata();
  console.log("Logo metadata:", metadata);

  // Convert full logo to webp
  await sharp(logoPath)
    .toFormat('webp')
    .toFile(path.join(publicDir, 'assets/logo.webp'));
  console.log("Converted full logo.");

  // Crop the left-side (which is the ribbon icon)
  const size = metadata.height; // Square crop of height x height
  
  // Save logo symbol webp
  await sharp(logoPath)
    .extract({ left: 0, top: 0, width: size, height: size })
    .toFormat('webp')
    .toFile(path.join(publicDir, 'assets/logo-symbol.webp'));
  console.log("Created logo-symbol.webp.");

  // Save icon.png for Next.js App Router favicon fallback
  await sharp(logoPath)
    .extract({ left: 0, top: 0, width: size, height: size })
    .resize(64, 64)
    .toFormat('png')
    .toFile(path.join(srcAppDir, 'icon.png'));
  console.log("Created icon.png.");

  // Overwrite favicon.ico
  await sharp(logoPath)
    .extract({ left: 0, top: 0, width: size, height: size })
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.join(srcAppDir, 'favicon.ico'));
  console.log("Updated favicon.ico.");
}

process().catch(console.error);
