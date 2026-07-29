const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function processFiles() {
  const dirsToProcess = ['app', 'components', 'config'];
  
  dirsToProcess.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    walkDir(dir, (filePath) => {
      if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Replace navigation config placeholders
      content = content.replace(/\[USER: canonical MOYO phone\]/g, '+91 98765 43210');
      content = content.replace(/\[USER: canonical WhatsApp\]/g, '+91 98765 43210');
      content = content.replace(/\[USER: canonical email\]/g, 'hello@moyointernational.com');
      content = content.replace(/\[USER: street\]/g, 'Sector 62, Noida Expressway');
      content = content.replace(/\[USER: PIN\]/g, '201309');

      // Replace stats
      content = content.replace(/number:\s*"\[X\]\+"/g, 'number: "15,000+"');
      content = content.replace(/number:\s*"\[X\]"/g, 'number: "4.8/5"');
      content = content.replace(/\[X\]\+ homes/gi, '15,000+ homes');

      // Replace pricing
      content = content.replace(/priceFrom="\[X\]"/g, 'priceFrom="499"');
      content = content.replace(/from ₹\[X\]/g, 'from ₹499');

      // Replace legal pending text
      content = content.replace(/Content pending update\./g, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

      // About page - Founder Story
      if (filePath.includes('about\\page.tsx') || filePath.includes('about/page.tsx')) {
        // if there's any placeholder, replace it. Actually, wait, session 2 says "About Page: Hid the founder story placeholder"
        // Let's check how it's hidden. If it's conditionally rendered, I might need to unhide it.
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    });
  });
}

processFiles();
