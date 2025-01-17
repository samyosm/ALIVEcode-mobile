import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.png', 'maskable-icon.png', 'mask-icon.svg'],
    manifest: {
      name: 'AliveCulture',
      short_name: 'AliveCulture',
      description: 'An interface for the AliveCulture sensors',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      maximumFileSizeToCacheInBytes: 5 * 1024 ** 2, // 5 MB or set to something else
    },
    devOptions: {
      enabled: true
    }
  })],
})
