import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Wajib untuk GitHub Pages agar membaca relative path dari folder assets
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    }
});