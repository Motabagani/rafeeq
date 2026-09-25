import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standalone build of Rafeeq (also embedded in the motabagani.com portfolio).
export default defineConfig({
  plugins: [react()],
});
