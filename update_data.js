const fs = require('fs');

const dataFile = 'client/src/data.js';
const content = fs.readFileSync(dataFile, 'utf8');

const startMarker = 'export const PZ=[';
const lastIndex = content.lastIndexOf('];');

const beforePZ = content.substring(0, content.indexOf(startMarker) + startMarker.length);
const pzContent = content.substring(content.indexOf(startMarker) + startMarker.length, lastIndex);
const afterPZ = content.substring(lastIndex);

const pzLines = pzContent.split('},');
const filteredPZ = pzLines.filter(block => {
  // Remove levels 1-10 (as before)
  const lvMatch = block.match(/"lv":\s*(\d+)/);
  if (lvMatch) {
    const lv = parseInt(lvMatch[1]);
    if (lv <= 10) return false;
  }
  
  // ALSO remove the 200 "Hard Tech" questions I accidentally added earlier (IDs start with PZ-HARD-)
  if (block.includes('PZ-HARD-')) return false;
  
  return true;
});

const newPuzzles = JSON.parse(fs.readFileSync('new_puzzles.json', 'utf8'));
const newPzBlocks = newPuzzles.map(p => JSON.stringify(p, null, 2));

const finalPZ = [...filteredPZ, ...newPzBlocks].join('},\n');

fs.writeFileSync(dataFile, beforePZ + '\n' + finalPZ + '\n' + afterPZ);
console.log('Successfully cleaned up and updated data.js with ONLY the requested categories.');
