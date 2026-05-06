const fs = require('fs');

const dataFile = 'client/src/data.js';
let content = fs.readFileSync(dataFile, 'utf8');

// Find the PZ array
const startMarker = 'export const PZ=[';
const lastIndex = content.lastIndexOf('];');

let pzContent = content.substring(content.indexOf(startMarker) + startMarker.length, lastIndex);

// Standardize: remove all existing joiners/newlines and rebuild
// But pzContent is huge.
// I'll just fix the missing commas.
// Regex to find } then whitespace then {
pzContent = pzContent.replace(/\}\s*\{/g, '},\n{');

// Also fix any duplicate commas or braces from previous attempts
pzContent = pzContent.replace(/\}\s*,\s*,\s*\{/g, '},\n{');
pzContent = pzContent.replace(/\}\s*\}\s*,\s*\{/g, '},\n{');

const finalContent = content.substring(0, content.indexOf(startMarker) + startMarker.length) + pzContent + content.substring(lastIndex);

fs.writeFileSync(dataFile, finalContent);
console.log('Fixed missing commas and duplicate braces in data.js');
