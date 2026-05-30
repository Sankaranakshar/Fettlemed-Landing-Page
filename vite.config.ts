import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const isSSR = process.env.BUILD_SSR === '1';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@config': path.resolve(__dirname, './src/config'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
  build: {
    // SSR build goes to dist-ssr/ and is cleaned up after prerendering.
    // Client build stays in dist/ (unchanged).
    outDir: isSSR ? 'dist-ssr' : 'dist',
    ...(isSSR
      ? {
          // SSR entry — bundle for Node.js consumption
          ssr: 'src/entry-server.tsx',
          rollupOptions: {
            output: { format: 'es' },
          },
        }
      : {
          // Client build — chunk splitting for optimal browser caching
          rollupOptions: {
            output: {
              manualChunks: {
                'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                'ui-vendor': ['lucide-react', 'clsx', 'tailwind-merge'],
                'animations': ['motion', 'react-helmet-async'],
              },
            },
          },
        }),
  },
  // Bundle all node_modules into the SSR output so the prerender script
  // runs as a fully self-contained ES module with no runtime external imports.
  // This avoids ESM/CJS interop failures when Node.js loads the SSR bundle.
  ssr: {
    noExternal: true,
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
