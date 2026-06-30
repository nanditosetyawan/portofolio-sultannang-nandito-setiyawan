import { defineConfig } from 'vite';

export default defineConfig({
   base: '/portofolio-sultannang-nandito-setiyawan/', // Wajib untuk GitHub Pages agar membaca relative path dari folder assets
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    }
});

