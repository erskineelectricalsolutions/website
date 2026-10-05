import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
let count=0;
async function check(dir){
 for(const item of await fs.readdir(dir,{withFileTypes:true})){
  const file=path.join(dir,item.name);
  if(item.isDirectory())await check(file);
  else if(file.endsWith('.html')){
   const html=await fs.readFile(file,'utf8');
   assert(html.includes('<meta name="robots" content="noindex, follow">'),file+' must not compete with the business domain');
   assert(html.includes('rel="canonical" href="https://erskineelectricalsolutions.com'),file+' must retain its business-domain canonical');
   assert(html.includes('https://erskine-electrical-preview.darren825731.chatgpt.site/assets/IMG_9848.webp'),'Preview sharing image must exist on preview host');
   count++;
  }
 }
}
await check('dist');
const productionPages = (await fs.readdir('public', { recursive: true })).filter(file=>file.endsWith('.html'));
assert.equal(count,productionPages.length,'Preview must contain every production page');
console.log(`PASS: ${count} preview pages are noindex with production canonicals.`);
