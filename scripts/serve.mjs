import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('public');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json','.webp':'image/webp','.jpg':'image/jpeg','.woff2':'font/woff2','.pdf':'application/pdf','.xml':'application/xml','.txt':'text/plain','.rss':'application/rss+xml','.atom':'application/atom+xml'};
const redirects=new Map((await fs.readFile('public/_redirects','utf8')).split('\n').filter(l=>l.trim()&&!l.startsWith('#')).map(l=>l.trim().split(/\s+/)).map(([from,to,status])=>[from,{to,status:Number(status)}]));
const server=http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,'http://localhost');const route=decodeURIComponent(url.pathname);
  if(redirects.has(route)){const r=redirects.get(route);res.writeHead(r.status,{Location:r.to});res.end();return;}
  if(route.endsWith('.html')&&route!='/404.html'){res.writeHead(301,{Location:route==='/index.html'?'/':route.slice(0,-5)});res.end();return;}
  let file=path.resolve(root,'.'+(route==='/'?'/index.html':route));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  if(!path.extname(file))file+='.html';
  let status=200,body;
  try{body=await fs.readFile(file);}catch{status=404;file=path.join(root,'404.html');body=await fs.readFile(file);}
  res.writeHead(status,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:body);
 }catch{res.writeHead(400);res.end('Bad request');}
});
server.listen(Number(process.env.PORT)||4173,'127.0.0.1',()=>console.log('Preview: http://localhost:4173'));
