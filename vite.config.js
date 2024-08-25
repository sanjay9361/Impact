import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    // Disable React Refresh
    // Uncomment the next line to disable React Refresh temporarily
    // fastRefresh: false
  })],
});
