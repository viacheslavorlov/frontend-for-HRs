import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    build: { outDir: 'dist-vite' },
    assetsInclude: '/public/locales/',
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
        ],
    },
    css: {
        modules: {
            generateScopedName: '[path][name]__[local]--[hash:base64:5]',
        },
    },
    plugins: [
        react(),
        svgr({ exportAsDefault: true }),
    ],
    define: {
        __IS_DEV: JSON.stringify(true),
        __API_URL: JSON.stringify('http://localhost:8000'),
        __PROJECT: JSON.stringify('frontend'),
    },
});
