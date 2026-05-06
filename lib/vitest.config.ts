import process from "process";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
    test: {
        env: loadEnv(mode, process.cwd(), ""),
        setupFiles: ["./test/setup.ts"],
        pool: "threads",
        poolOptions: {
            threads: {
                singleThread: true,
            },
        },
        testTimeout: 15000,
    },
}));
