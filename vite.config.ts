import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';

function generateStaticServer(): Plugin {
  return {
    name: 'generate-static-server',
    apply: 'build',
    closeBundle() {
      const serverCode = `'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
};

const server = http.createServer(function (req, res) {
  const urlPath = (req.url || '/').split('?')[0];
  let filePath = path.join(DIR, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath).toLowerCase();

  if (!ext || !fs.existsSync(filePath)) {
    filePath = path.join(DIR, 'index.html');
  }

  try {
    const data = fs.readFileSync(filePath);
    const mime = MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000',
    });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(PORT, function () {
  console.log('BCX server running on port ' + PORT);
});
`;
      writeFileSync('dist/index.cjs', serverCode);
    },
  };
}

export default defineConfig({
  plugins: [react(), generateStaticServer()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
