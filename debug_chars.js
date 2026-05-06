const fs = require('fs');
const content = fs.readFileSync('client/src/data.js', 'utf8');
const pzLine = content.indexOf('export const PZ=[');
const snippet = content.substring(pzLine, pzLine + 100);
for (let i = 0; i < snippet.length; i++) {
    console.log(`${i}: ${snippet[i]} (${snippet.charCodeAt(i)})`);
}
