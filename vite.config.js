import { defineConfig } from 'vite';
import { resolve } from 'path';

console.log(__dirname);

export default defineConfig({
    base: "/multiPage/",
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'src/pages/about.html'),
                catalog: resolve(__dirname, 'src/pages/catalog.html'),
            },
        },
        sourcemap: true,
    }    
});