const fs = require('fs');

const dataFile = 'client/src/data.js';
let content = fs.readFileSync(dataFile, 'utf8');

const startMarker = 'export const PZ=[';
const lastIndex = content.lastIndexOf('];');

const before = content.substring(0, content.indexOf(startMarker) + startMarker.length);
let pz = content.substring(content.indexOf(startMarker) + startMarker.length, lastIndex);
const after = content.substring(lastIndex);

// Remove existing commas between blocks to normalize
pz = pz.replace(/\}\s*,\s*\{/g, '} {');
pz = pz.replace(/\}\s*,\s*\n\s*\{/g, '} {');

// Now pz is just a bunch of { ... } { ... }
// We want to put a comma between them
pz = pz.replace(/\}\s*\{/g, '},\n{');

fs.writeFileSync(dataFile, before + pz + after);
console.log('Normalized PZ array commas.');
