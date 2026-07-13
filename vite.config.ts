import { defineConfig } from 'vite';

export default defineConfig({
   base: '/portofolio-sultannang-nandito-setiyawan/', // Wajib untuk GitHub Pages agar membaca relative path dari folder assets
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    server: {
        watch: {
            // Abaikan file temp dari image editor & file yang sedang di-lock di Windows
            ignored: ['**/*.~tmp', '**/*.tmp', '**/.~*'],
        },
    },
});

