import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest: {
                name: 'My React PWA',
                short_name: 'ReactPWA',
                description: 'My Progressive Web App built with Vite and React',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#007acc',
                icons: [{
                    src: '/logo512.png',
                    sizes: '512x512',
                    type: 'image/png',
                }, ],
            },
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}']
            }
        }),
    ],
});