// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Para que todas las rutas de assets sean relativas
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',      // Salida en dist/
    emptyOutDir: true,   // Limpia dist/ en cada build
    assetsDir: 'assets', // Archivos (js, css, imágenes) en dist/assets/
  },
  resolve: {
    alias: {
      '@public': '/public',
      '@images': '/public/images', // Añadimos este alias
    },
  },
  publicDir: 'public',
});
