import { assert, test } from "vitest";

import FreesoundApi from "../../src/freesound.js";
import FreesoundRequestBuilder from "../../src/freesound-request-builder.js";
import { lastFetchParams } from "./helpers.js";

const client = new FreesoundApi("test-api-key");

// ─── Tonal ───────────────────────────────────────────────────────────────────

test("Test_WithTonality", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("piano")
        .withPageSize(5)
        .withTonality("C major")
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('tonality:"C%20major"'));
});

test("Test_WithTonalityConfidence", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("piano")
        .withPageSize(5)
        .withTonality("A minor")
        .withTonalityConfidence(0.7, 1.0)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('tonality:"A%20minor"'));
    assert(params.get("filter")?.includes("tonality_confidence:%5B0.7%20TO%201%5D"));
});

test("Test_WithNoteName", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("note")
        .withPageSize(5)
        .withNoteName("A4")
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('note_name:"A4"'));
});

test("Test_WithNoteMidi", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("note")
        .withPageSize(5)
        .withNoteMidi(69)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('note_midi:"69"'));
});

test("Test_WithNoteConfidence", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("note")
        .withPageSize(5)
        .withNoteConfidence(0.7, 1.0)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes("note_confidence:%5B0.7%20TO%201%5D"));
});

test("Test_WithPitch", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("tone")
        .withPageSize(5)
        .withPitch(440)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('pitch:"440"'));
});

// ─── Rhythmic ─────────────────────────────────────────────────────────────────

test("Test_WithBpm", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withBpm(120)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('bpm:"120"'));
});

test("Test_WithBpmConfidence", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withBpm(100)
        .withBpmConfidence(0.7, 1.0)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('bpm:"100"'));
    assert(params.get("filter")?.includes("bpm_confidence:%5B0.7%20TO%201%5D"));
});

test("Test_WithLoopable_True", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("loop")
        .withPageSize(5)
        .withLoopable(true)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('loopable:"true"'));
});

test("Test_WithLoopable_False", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withLoopable(false)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('loopable:"false"'));
});

// ─── Perceptual ───────────────────────────────────────────────────────────────

test("Test_WithBrightness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withBrightness(50, 100)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes("brightness:%5B50%20TO%20100%5D"));
});

test("Test_WithDepth", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withDepth(0, 100)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes("depth:%5B0%20TO%20100%5D"));
});

test("Test_WithHardness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withHardness(0, 100)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes("hardness:%5B0%20TO%20100%5D"));
});

test("Test_WithRoughness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withRoughness(0, 100)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes("roughness:%5B0%20TO%20100%5D"));
});

test("Test_WithBoominess", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withBoominess(0, 100)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes("boominess:%5B0%20TO%20100%5D"));
});

test("Test_WithWarmth", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withWarmth(0, 100)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes("warmth:%5B0%20TO%20100%5D"));
});

test("Test_WithSharpness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withSharpness(0, 100)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes("sharpness:%5B0%20TO%20100%5D"));
});

// ─── Dynamic / Temporal ───────────────────────────────────────────────────────

test("Test_WithLoudness", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withPageSize(5)
        .withLoudness(-20)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('loudness:"-20"'));
});

test("Test_WithDynamicRange", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withPageSize(5)
        .withDynamicRange(10)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('dynamic_range:"10"'));
});

test("Test_WithTemporalCentroid", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withTemporalCentroid(0.5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('temporal_centroid:"0.5"'));
});

test("Test_WithLogAttackTime", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withPageSize(5)
        .withLogAttackTime(-2)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('log_attack_time:"-2"'));
});

// ─── Boolean ──────────────────────────────────────────────────────────────────

test("Test_WithSingleEvent_True", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("hit")
        .withPageSize(5)
        .withSingleEvent(true)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('single_event:"true"'));
});
