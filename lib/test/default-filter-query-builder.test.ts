import { assert, test } from "vitest";

import FreesoundApi from "../src/freesound.js";
import FreesoundRequestBuilder from "../src/freesound-request-builder.js";

const client = new FreesoundApi(process.env.VITE_API_KEY!);

// ─── Tag / License / Type ─────────────────────────────────────────────────────

test("Test_WithTag", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withTag("drums")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithLicense_CC0", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("ambient")
        .withLicense("Creative Commons 0")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithLicense_Attribution", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withLicense("Attribution")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithType_Wav", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withType("wav")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithType_Mp3", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withType("mp3")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithType_Ogg", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withType("ogg")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithType_Flac", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withType("flac")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

// ─── Audio Format ─────────────────────────────────────────────────────────────

test("Test_WithChannels_Stereo", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withChannels(2)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithChannels_Mono", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("voice")
        .withChannels(1)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithSampleRate_44100", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withSampleRate(44100)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithBitDepth_16", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withBitDepth(16)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithBitrate", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withType("mp3")
        .withBitrate(128000)
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

// ─── Boolean Flags ────────────────────────────────────────────────────────────

test("Test_WithIsRemix_False", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withIsRemix(false)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithIsRemix_True", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withIsRemix(true)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithWasRemixed_False", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withWasRemixed(false)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithIsGeotagged_True", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withIsGeotagged(true)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithIsGeotagged_False", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withIsGeotagged(false)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

// ─── Text Fields ──────────────────────────────────────────────────────────────

test("Test_WithDescription", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withDescription("drums")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithComment", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withComment("great")
        .withPageSize(5)
    );

    assert(results.length > 0);
});

// ─── User / Pack ──────────────────────────────────────────────────────────────

test("Test_WithUsername", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withUsername("Freesound")
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

test("Test_WithPack", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("nature")
        .withPack("nature")
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

// ─── Numeric Counts ───────────────────────────────────────────────────────────

test("Test_WithNumComments_Zero", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withNumComments(0)
        .withPageSize(5)
    );

    assert(results.length > 0);
});

test("Test_WithAvgRating", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withAvgRating(5)
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

test("Test_WithNumRatings", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withNumRatings(10)
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

test("Test_WithNumDownloads", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withNumDownloads(100)
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

// ─── Exact-Value Shape Checks ─────────────────────────────────────────────────

test("Test_WithId", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withId(12345)
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

test("Test_WithDuration", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withDuration(5)
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

test("Test_WithFileSize", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withFileSize(1000000)
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

test("Test_WithMd5", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withMd5("00000000000000000000000000000000")
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});

test("Test_WithCreated", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withCreated("2020-01-01T00:00:00Z")
        .withPageSize(5)
    );

    assert(Array.isArray(results));
});
