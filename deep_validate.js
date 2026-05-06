const fs = require('fs');
const content = fs.readFileSync('client/src/data.js', 'utf8');
const pzMatch = content.match(/export const PZ\s*=\s*\[([\s\S]*?)\];/);
if (pzMatch) {
    const raw = pzMatch[1];
    const blocks = raw.split(/\}\s*,\s*\{/);
    console.log(`Split into ${blocks.length} blocks.`);
    
    for (let i = 0; i < blocks.length; i++) {
        let testStr = blocks[i].trim();
        if (!testStr.startsWith('{')) testStr = '{' + testStr;
        if (!testStr.endsWith('}')) testStr = testStr + '}';
        
        try {
            eval('const x = ' + testStr);
        } catch (e) {
            console.error(`Block ${i} INVALID at line ${104 + (i*11)}:`, e.message);
            console.log('Snippet:', testStr.substring(0, 100));
            break;
        }
    }
    console.log('Validation complete.');
}
