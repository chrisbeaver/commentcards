import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "url";
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    resolve: {
        alias: [
          { find: '@', replacement: fileURLToPath(new URL('./resources/ts', import.meta.url)) },
        ]
    },
    plugins: [
        laravel({
            input: 'resources/ts/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
