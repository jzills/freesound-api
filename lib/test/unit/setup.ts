import { afterAll, beforeAll, beforeEach, vi } from "vitest";
import fixture from "./fixtures/response.json";

const page2Results = fixture.results.map((r) => ({ ...r, id: r.id + 1000 }));

beforeAll(() => {
    vi.stubGlobal("fetch", vi.fn().mockImplementation((url: string) => {
        const params = new URLSearchParams(url.split("?").pop() ?? "");
        const page = Number(params.get("page") ?? 1);
        const pageSize = Number(params.get("page_size") ?? 15);
        const pool = page === 2 ? page2Results : fixture.results;
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ ...fixture, results: pool.slice(0, pageSize) }),
        });
    }));
});

beforeEach(() => {
    vi.clearAllMocks();
});

afterAll(() => {
    vi.unstubAllGlobals();
});
