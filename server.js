// Production server: serves ./dist static files + /track/whatsapp redirect endpoint.
// Run with: node server.js
// Required for server-side WhatsApp open tracking (static hosting skips the endpoint).
import http from 'node:http';
import fs   from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { trackingMiddleware } from './tracker.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 5000;
const DIST = path.resolve(__dirname, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript',
  '.css': 'text/css', '.json': 'application/json', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain',
  '.xml': 'application/xml', '.woff': 'font/woff', '.woff2': 'font/woff2',
};

// Prevents directory traversal: resolves to null if the path escapes DIST.
function safeResolve(pathname) {
  const resolved = path.resolve(DIST, '.' + pathname);
  return (resolved === DIST || resolved.startsWith(DIST + path.sep)) ? resolved : null;
}

function serveStatic(res, filePath) {
  const contentType = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(DIST, 'index.html'), (e2, html) => {
        if (e2) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://localhost:${PORT}`);
  if (reqUrl.pathname === '/track/whatsapp') { trackingMiddleware(req, res); return; }
  if (!path.extname(reqUrl.pathname)) { serveStatic(res, path.join(DIST, 'index.html')); return; }
  const filePath = safeResolve(reqUrl.pathname);
  if (!filePath) { res.writeHead(403); res.end('Forbidden'); return; }
  serveStatic(res, filePath);
}).listen(PORT, '0.0.0.0', () => console.log(`Server on http://0.0.0.0:${PORT}`));
