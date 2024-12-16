import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        dts({
            outDir: "dist",
            rollupTypes: true
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "FreesoundApi", // Library name in UMD builds
            fileName: "freesound-api", // Output file name without extension
        },
        rollupOptions: {
            output: [{
                entryFileNames: 'freesound-api.js',
                format: 'esm',  // ESM output
            },
            {
                entryFileNames: 'freesound-api.cjs',  // CommonJS output (plain .cjs)
                format: 'cjs',
            }],
            external: ["tslib"], // Externalize dependencies like tslib
        },
        target: "esnext"
    }
});