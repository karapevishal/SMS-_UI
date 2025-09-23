import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({ 
  plugins: [react()],
  base: "/SMS-_UI/",
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios', '@reduxjs/toolkit', 'react-redux']
  }
})
