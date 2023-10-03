import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            refresh: true,
            input: [
                'resources/styles/css/app.css',
                'resources/js/app.jsx',
            ],
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            '@css': '/resources/styles/css',
            '@sass': '/resources/styles/sass',
            '@constants': '/resources/js/constants',
            '@components': '/resources/js/components',
            '@blocks': '/resources/js/blocks',
            '@pages': '/resources/js/pages',
        },
    },
    define: {
        "process.env": {},
    },
});