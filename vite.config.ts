import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    build: {
        lib: {
            entry: 'src/Index.ts', 
            name: 'freesound-api'
        }
    },
});
