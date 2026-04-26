import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { trackingMiddleware } from './tracker.js';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'whatsapp-tracker',
      configureServer(server) {
        server.middlewares.use('/track/whatsapp', (req, res) => {
          trackingMiddleware(req, res);
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use('/track/whatsapp', (req, res) => {
          trackingMiddleware(req, res);
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
