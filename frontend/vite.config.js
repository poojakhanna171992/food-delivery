import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/',
  plugins: [react()],
  server: {
    port: 5000,  // Ensure this is set correctly
  },
});