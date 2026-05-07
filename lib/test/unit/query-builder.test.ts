import { assert, test } from "vitest";

import QueryBuilder from "../../src/builders/query-builder.js";
import Freesound from "../../src/freesound.js";
import { lastFetchParams } from "./helpers.js";

const client = new Freesound("test-api-key");

// ─── Query / Fields / PageSize ────────────────────────────────────────────────

test("Test_WithQuery_And_PageSize_1", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withPageSize(1)
        .includeField("username")
    );

    const params = lastFetchParams();
    assert(results.length === 1);
    assert(results.every(result => "username" in result));
    assert(params.get("query") === "drums");
    assert(params.get("page_size") === "1");
    assert(params.get("fields") === "username");
});

test("Test_WithQuery_And_PageSize_5", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeField("username")
    );

    const params = lastFetchParams();
    assert(results.length === 5);
    assert(params.get("query") === "drums");
    assert(params.get("page_size") === "5");
});

// ─── Pagination ───────────────────────────────────────────────────────────────

test("Test_WithPage_Returns_Different_Results", async () => {
    const page1 = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withPage(1)
        .includeField("id")
    );

    const page2 = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withPage(2)
        .includeField("id")
    );

    const ids1 = page1.results.map((r: any) => r.id);
    const ids2 = page2.results.map((r: any) => r.id);

    assert(page1.results.length > 0);
    assert(page2.results.length > 0);
    assert(!ids1.some((id: number) => ids2.includes(id)));
});

// ─── Weights ──────────────────────────────────────────────────────────────────

test("Test_WithWeights", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withWeights("tags:2 description:1")
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("weights") === "tags:2 description:1");
});

// ─── PageSize Clamp ───────────────────────────────────────────────────────────

test("Test_PageSize_Clamped_To_150", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withPageSize(9999)
    );

    const params = lastFetchParams();
    assert(results.length <= 150);
    assert(params.get("page_size") === "150");
});
