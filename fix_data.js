const fs = require('fs');

const dataFile = 'client/src/data.js';
let content = fs.readFileSync(dataFile, 'utf8');

// Fix the }}, issue
content = content.replace(/\}\},/g, '},');

fs.writeFileSync(dataFile, content);
console.log('Fixed syntax errors in data.js');
