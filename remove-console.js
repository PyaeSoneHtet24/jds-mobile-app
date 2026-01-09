const fs = require('fs');

const files = process.argv.slice(2);

files.forEach(file => {
  if (!fs.existsSync(file)) return;

  const content = fs.readFileSync(file, 'utf8');
  const updatedContent = content.replace(/^\s*console\.log\(.*?\);?\s*$/gm, '');
  fs.writeFileSync(file, updatedContent, 'utf8');
});
