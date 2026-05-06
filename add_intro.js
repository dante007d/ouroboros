const fs = require('fs');

const introPuzzles = [
  {
    "id": "PZ-INTRO-001",
    "lv": 0,
    "q": "What is the name of the serpent which tries to devour itself?",
    "a": ["ouroboros", "ourobor"],
    "h": "The name of this game.",
    "type": "LORE",
    "difficulty": "EASY"
  },
  {
    "id": "PZ-INTRO-002",
    "lv": 0.1,
    "q": "What comes after the alphabet 'A'?",
    "a": ["B"],
    "h": "The second letter.",
    "type": "BASIC",
    "difficulty": "EASY"
  }
];

const dataFile = 'client/src/data.js';
const content = fs.readFileSync(dataFile, 'utf8');

const startMarker = 'export const PZ=[';
const lastIndex = content.lastIndexOf('];');

const beforePZ = content.substring(0, content.indexOf(startMarker) + startMarker.length);
const pzContent = content.substring(content.indexOf(startMarker) + startMarker.length, lastIndex);
const afterPZ = content.substring(lastIndex);

const newPzBlocks = introPuzzles.map(p => JSON.stringify(p, null, 2));

// Insert at the beginning of the array
const finalPZ = [...newPzBlocks].join(',\n') + ',\n' + pzContent;

fs.writeFileSync(dataFile, beforePZ + '\n' + finalPZ + '\n' + afterPZ);
console.log('Added level 0 and 0.1 intro questions.');
