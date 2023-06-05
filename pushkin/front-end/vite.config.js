import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy'; //support legacy browsers


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), viteTsconfigPaths(), svgrPlugin(),
    legacy({
      targets: ['defaults', 'not IE <=11'],
    }),
  ],
  server: {
    fs: {
      allow: ['src/.env.js'],
    },
  },
});
