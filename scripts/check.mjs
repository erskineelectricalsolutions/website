import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { services } from '../src/improvements.mjs';
const files=[];async function walk(dir){for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())await walk(p);else files.push(p);}}await walk('public');
const pages=files.filter(f=>f.endsWith('.html'));const checks=[];const titles=new Set();const descriptions=new Set();
const unescape=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>');
const htmls=new Map(await Promise.all(pages.map(async f=>[f.replaceAll('\\','/'),await fs.readFile(f,'utf8')])));
for(const [file,html] of htmls){
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+' must have one H1');
 assert(!/<form\b|<input\b|<iframe\b|wsimg\.com|recaptcha|GoDaddy Airo/.test(html),file+' has platform components');
 assert(!/href="(?:#|)"|src=""/.test(html),file+' has placeholder link or image');
 assert(html.includes('lang="en-GB"')&&html.includes('name="description"'),file+' lacks metadata');
 const title=html.match(/<title>(.*?)<\/title>/)[1];const description=html.match(/name="description" content="([^"]+)"/)[1];
 assert(!titles.has(title),file+' duplicate title');titles.add(title);
 assert(!descriptions.has(description),file+' duplicate description');descriptions.add(description);
 assert(html.includes(`name="robots" content="${file.endsWith('/404.html')?'noindex, follow':'index, follow, max-image-preview:large'}"`),file+' incorrect indexing policy');
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
 assert.equal(schema['@context'],'https://schema.org');
 const business=schema['@graph'].find(x=>x['@type']==='Electrician');
 assert.equal(business.telephone,'+447464071231');assert.equal(business['@id'],'https://erskineelectricalsolutions.com/#business');
 assert(!business.aggregateRating&&!business.address,'Unverified ratings/address must not be invented');
 const headings=[...html.matchAll(/<h([1-6])(?:\s[^>]*)?>/g)].map(m=>Number(m[1]));
 for(let i=1;i<headings.length;i++)assert(headings[i]<=headings[i-1]+1,file+' skipped heading level');
 for(const image of html.matchAll(/<img\b[^>]*>/g)){
  if(!image[0].includes('src='))continue; // Empty, hidden lightbox is populated only when opened.
  assert(/width="\d+"/.test(image[0])&&/height="\d+"/.test(image[0]),file+' image dimensions missing');
  assert(/alt="[^"]*"/.test(image[0]),file+' image alternative missing');
  for(const variant of (image[0].match(/srcset="([^"]+)"/)?.[1]||'').split(',').filter(Boolean))await fs.access('public'+variant.trim().split(' ')[0]);
 }
 for(const m of html.matchAll(/(?:href|src)="([^"]*)"/g)){
  const ref=unescape(m[1]);if(/^https?:/.test(ref))continue;
  if(ref.startsWith('mailto:')){const u=new URL(ref);assert(u.searchParams.get('subject')&&u.searchParams.get('body')?.includes('Work required:'),file+' email draft missing');continue;}
  if(ref.startsWith('tel:')){assert.equal(ref,'tel:+447464071231');continue;}
  const current='/'+file.replace(/^public\//,'').replace(/index.html$/,'').replace(/\.html$/,'');
  const u=new URL(ref,'https://test.local'+current);let target='public'+(u.pathname==='/'?'/index.html':u.pathname);if(!path.extname(target))target+='.html';
  await fs.access(target);
  if(u.hash&&target.endsWith('.html')){const h=htmls.get(target);assert(h?.includes(`id="${decodeURIComponent(u.hash.slice(1))}"`),file+' missing anchor '+ref);}
 }
 checks.push({page:file,passed:true});
}
const data=JSON.parse(await fs.readFile('src/site.json','utf8'));
for(const key of ['about-us','services','pricing']){const html=unescape(htmls.get('public/'+key+'.html'));for(const item of data.pages[key].sections[1].text.filter(t=>t.tag==='p'||t.tag==='h4'))assert(html.includes(item.text.replaceAll('&','&')),key+' missing source text: '+item.text.slice(0,50));}
for(const g of data.galleries)for(const i of g.images)assert(i.src&&files.some(f=>f.replaceAll('\\','/')==='public'+i.src),'missing gallery asset');
assert((await fs.readFile('public/assets/health-and-safety-policy.pdf')).subarray(0,5).toString()==='%PDF-','invalid PDF');
const sitemap=await fs.readFile('public/sitemap.xml','utf8');
for(const [file,html] of htmls){if(file.endsWith('/404.html'))continue;const canonical=html.match(/rel="canonical" href="([^"]+)"/)[1];assert(sitemap.includes(`<loc>${canonical}</loc>`),'Page omitted from sitemap: '+file);}
assert(!sitemap.includes('/404'),'404 must not be in sitemap');
for(const service of services){const html=htmls.get(`public/services/${service.slug}.html`);assert(html.includes('"@type":"Service"'),'Missing service schema');for(const [q,a] of service.faq){assert(unescape(html).includes(q)&&unescape(html).includes(a),'FAQ not in server-rendered HTML');}}
const robots=await fs.readFile('public/robots.txt','utf8');assert(robots.includes('User-agent: *\nAllow: /')&&!/Disallow:\s*\//.test(robots),'Crawlers blocked');
const llms=await fs.readFile('public/llms.txt','utf8');for(const s of services)assert(llms.includes('/services/'+s.slug),'Machine-readable summary missing service');
const report={checkedAt:new Date().toISOString(),pages:pages.length,files:files.length,galleryImages:data.galleries.reduce((n,g)=>n+g.images.length,0),checks,passed:true};
await fs.mkdir('audit',{recursive:true});await fs.writeFile('audit/check-results.json',JSON.stringify(report,null,2));
console.log(`PASS: ${pages.length} HTML pages; local links, fragments, images, PDF, metadata, phone numbers, email drafts, pricing and service text; ${report.galleryImages} gallery images.`);
