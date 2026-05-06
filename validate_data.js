const fs = require('fs');

const dataFile = 'client/src/data.js';
const content = fs.readFileSync(dataFile, 'utf8');

const startMarker = 'export const PZ=[';
const lastIndex = content.lastIndexOf('];');

const pzJsonString = content.substring(content.indexOf(startMarker) + startMarker.length - 1, lastIndex + 1);

try {
    // Replace single quotes with double quotes and fix common JS-to-JSON issues
    // But wait, the file currently has double quotes for the new ones and single for the old.
    // I'll just check if eval works.
    eval('const test = ' + pzJsonString);
    console.log('PZ array is syntactically valid Javascript.');
} catch (e) {
    console.error('PZ array is INVALID:', e.message);
    // Find where it breaks
    const lines = pzJsonString.split('\n');
    for (let i = 1; i <= lines.length; i++) {
        try {
            eval('const test = [' + lines.slice(0, i).join('\n') + ']');
        } catch (err) {
            console.log('Error likely around line:', i + 104);
            console.log('Line content:', lines[i-1]);
            break;
        }
    }
}
