const fs = require('fs');

const dataFile = 'client/src/data.js';
let content = fs.readFileSync(dataFile, 'utf8');

// Replace common special characters that might cause encoding issues
content = content.replace(/²/g, '^2');
content = content.replace(/×/g, '*');
content = content.replace(/₹/g, 'Rs.');
content = content.replace(/π/g, 'pi');
content = content.replace(/±/g, '+/-');

fs.writeFileSync(dataFile, content);
console.log('Normalized special characters in data.js');
