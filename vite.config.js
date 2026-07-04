import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { epcApiProxyPlugin } from './server/epcProxy.js'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), epcApiProxyPlugin(mode)],
}))
