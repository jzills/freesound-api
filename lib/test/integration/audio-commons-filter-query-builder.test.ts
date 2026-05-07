import { assert, test } from "vitest";

import FreesoundApi from "../../src/freesound.js";
import FreesoundRequestBuilder from "../../src/freesound-request-builder.js";

const client = new FreesoundApi(process.env.VITE_API_KEY!);

// ─── Tonal ───────────────────────────────────────────────────────────────────

test("Test_WithTonality", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("piano")
        .withPageSize(5)
        .withTonality("C major")
    );

    assert(results.length > 0);
});

test("Test_WithTonalityConfidence", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("piano")
        .withPageSize(5)
        .withTonality("A minor")
        .withTonalityConfidence(0.7, 1.0)
    );

    assert(results.length > 0);
});

test("Test_WithNoteName", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("note")
        .withPageSize(5)
        .withNoteName("A4")
    );

    assert(results.length > 0);
});

test("Test_WithNoteMidi", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("note")
        .withPageSize(5)
        .withNoteMidi(69)
    );

    assert(Array.isArray(results));
});

test("Test_WithNoteConfidence", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("note")
        .withPageSize(5)
        .withNoteConfidence(0.7, 1.0)
    );

    assert(results.length > 0);
});

test("Test_WithPitch", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("tone")
        .withPageSize(5)
        .withPitch(440)
    );

    assert(Array.isArray(results));
});

// ─── Rhythmic ─────────────────────────────────────────────────────────────────

test("Test_WithBpm", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withBpm(120)
    );

    assert(results.length > 0);
});

test("Test_WithBpmConfidence", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withBpm(100)
        .withBpmConfidence(0.7, 1.0)
    );

    assert(results.length > 0);
});

test("Test_WithLoopable_True", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("loop")
        .withPageSize(5)
        .withLoopable(true)
    );

    assert(results.length > 0);
});

test("Test_WithLoopable_False", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withLoopable(false)
    );

    assert(results.length > 0);
});

// ─── Perceptual ───────────────────────────────────────────────────────────────

test("Test_WithBrightness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withBrightness(50, 100)
    );

    assert(results.length > 0);
});

test("Test_WithDepth", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withDepth(0, 100)
    );

    assert(results.length > 0);
});

test("Test_WithHardness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withHardness(0, 100)
    );

    assert(results.length > 0);
});

test("Test_WithRoughness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withRoughness(0, 100)
    );

    assert(results.length > 0);
});

test("Test_WithBoominess", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withBoominess(0, 100)
    );

    assert(results.length > 0);
});

test("Test_WithWarmth", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withWarmth(0, 100)
    );

    assert(results.length > 0);
});

test("Test_WithSharpness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withSharpness(0, 100)
    );

    assert(results.length > 0);
});

// ─── Dynamic / Temporal ───────────────────────────────────────────────────────

test("Test_WithLoudness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withPageSize(5)
        .withLoudness(-20)
    );

    assert(Array.isArray(results));
});

test("Test_WithDynamicRange", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withPageSize(5)
        .withDynamicRange(10)
    );

    assert(Array.isArray(results));
});

test("Test_WithTemporalCentroid", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withTemporalCentroid(0.5)
    );

    assert(Array.isArray(results));
});

test("Test_WithLogAttackTime", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withLogAttackTime(-2)
    );

    assert(Array.isArray(results));
});

// ─── Boolean ──────────────────────────────────────────────────────────────────

test("Test_WithSingleEvent_True", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("hit")
        .withPageSize(5)
        .withSingleEvent(true)
    );

    assert(results.length > 0);
});
