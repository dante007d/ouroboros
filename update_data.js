const fs = require('fs');

const dataFile = 'client/src/data.js';
const content = fs.readFileSync(dataFile, 'utf8');

// Find the PZ array content
const startMarker = 'export const PZ=[';
const endMarker = '];'; // This might be tricky if there are multiple ];
// Actually, let's find the last ]; in the file.
const lastIndex = content.lastIndexOf('];');

const beforePZ = content.substring(0, content.indexOf(startMarker) + startMarker.length);
const pzContent = content.substring(content.indexOf(startMarker) + startMarker.length, lastIndex);
const afterPZ = content.substring(lastIndex);

// I'll parse the PZ content manually or just filter it line by line.
// But it's easier to just append my new ones and let the engine handle duplicates 
// (actually, duplicates might be okay if they have different IDs).
// The user said "first 10aptitude questions should be hard one".
// To ensure this, I must REMOVE any other lv 1-10 questions.

const pzLines = pzContent.split('},');
const filteredPZ = pzLines.filter(block => {
  const lvMatch = block.match(/"lv":\s*(\d+)/);
  if (lvMatch) {
    const lv = parseInt(lvMatch[1]);
    return lv > 10; // Keep only levels > 10
  }
  return true; // Keep if we can't find level (probably malformed or empty)
});

const newPuzzles = JSON.parse(fs.readFileSync('new_puzzles.json', 'utf8'));
const newPzBlocks = newPuzzles.map(p => JSON.stringify(p, null, 2));

const finalPZ = [...filteredPZ, ...newPzBlocks].join('},\n');

fs.writeFileSync(dataFile, beforePZ + '\n' + finalPZ + '\n' + afterPZ);
console.log('Successfully updated data.js with hard aptitude and new categories.');
