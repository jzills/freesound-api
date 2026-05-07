import { vi } from "vitest";

export function lastFetchParams(): URLSearchParams {
    const url = vi.mocked(fetch).mock.calls.at(-1)![0] as string;
    return new URLSearchParams(url.split("?").pop()!);
}
