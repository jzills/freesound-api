import process from "process";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
    test: {
        env: loadEnv(mode, process.cwd(), ""),
        include: ["test/integration/**/*.test.ts"],
        setupFiles: ["./test/integration/setup.ts"],
        pool: "threads",
        poolOptions: {
            threads: {
                singleThread: true,
            },
        },
        testTimeout: 15000,
    },
}));
