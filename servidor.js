// Servidor estático mínimo (sem dependências). Railway: `node servidor.js`
const http = require('http'), fs = require('fs'), path = require('path');
const RAIZ = path.join(__dirname, 'publico');
const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.css': 'text/css' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(RAIZ, path.normalize(p));
  if (!f.startsWith(RAIZ)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (err, data) => {
    if (err) { res.writeHead(200, { 'Content-Type': TIPOS['.html'] }); return fs.createReadStream(path.join(RAIZ, 'index.html')).pipe(res); }
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  });
}).listen(process.env.PORT || 3000, () => console.log('Casa de Nazaré no ar'));
