import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ensures the server listens on all available network interfaces
    port: 5173, // Optional: Specify the development server port
    proxy: {
      '/api': {
        target: 'http://192.168.0.217:3000', // Backend server URL
        changeOrigin: true, // Makes the proxy handle cross-origin requests
        secure: false, // If your backend uses HTTPS, set this to `true`
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove `/api` prefix if your backend doesn't expect it
      },
    },
  },
});
