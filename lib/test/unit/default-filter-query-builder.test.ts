import { assert, test } from "vitest";

import FreesoundApi from "../../src/freesound.js";
import FreesoundRequestBuilder from "../../src/freesound-request-builder.js";
import { lastFetchParams } from "./helpers.js";

const client = new FreesoundApi("test-api-key");

// ─── Tag / License / Type ─────────────────────────────────────────────────────

test("Test_WithTag", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withTag("drums")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('tag:"drums"'));
});

test("Test_WithLicense_CC0", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("ambient")
        .withLicense("Creative Commons 0")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('license:"Creative%20Commons%200"'));
});

test("Test_WithLicense_Attribution", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withLicense("Attribution")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('license:"Attribution"'));
});

test("Test_WithType_Wav", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withType("wav")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('type:"wav"'));
});

test("Test_WithType_Mp3", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withType("mp3")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('type:"mp3"'));
});

test("Test_WithType_Ogg", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withType("ogg")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('type:"ogg"'));
});

test("Test_WithType_Flac", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withType("flac")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('type:"flac"'));
});

// ─── Audio Format ─────────────────────────────────────────────────────────────

test("Test_WithChannels_Stereo", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withChannels(2)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('channels:"2"'));
});

test("Test_WithChannels_Mono", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("voice")
        .withChannels(1)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('channels:"1"'));
});

test("Test_WithSampleRate_44100", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withSampleRate(44100)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('samplerate:"44100"'));
});

test("Test_WithBitDepth_16", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withBitDepth(16)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('bitdepth:"16"'));
});

test("Test_WithBitrate", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("music")
        .withType("mp3")
        .withBitrate(128000)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('bitrate:"128000"'));
});

// ─── Boolean Flags ────────────────────────────────────────────────────────────

test("Test_WithIsRemix_False", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withIsRemix(false)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('is_remix:"false"'));
});

test("Test_WithIsRemix_True", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withIsRemix(true)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('is_remix:"true"'));
});

test("Test_WithWasRemixed_False", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withWasRemixed(false)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('was_remixed:"false"'));
});

test("Test_WithIsGeotagged_True", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withIsGeotagged(true)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('is_geotagged:"true"'));
});

test("Test_WithIsGeotagged_False", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withIsGeotagged(false)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('is_geotagged:"false"'));
});

// ─── Text Fields ──────────────────────────────────────────────────────────────

test("Test_WithDescription", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withDescription("drums")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('description:"drums"'));
});

test("Test_WithComment", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withComment("great")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('comment:"great"'));
});

// ─── User / Pack ──────────────────────────────────────────────────────────────

test("Test_WithUsername", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withUsername("Freesound")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('username:"Freesound"'));
});

test("Test_WithPack", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("nature")
        .withPack("nature")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('pack:"nature"'));
});

// ─── Numeric Counts ───────────────────────────────────────────────────────────

test("Test_WithNumComments_Zero", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withNumComments(0)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("filter")?.includes('num_comments:"0"'));
});

test("Test_WithAvgRating", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withAvgRating(5)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('avg_rating:"5"'));
});

test("Test_WithNumRatings", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withNumRatings(10)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('num_ratings:"10"'));
});

test("Test_WithNumDownloads", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withNumDownloads(100)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('num_downloads:"100"'));
});

// ─── Exact-Value Shape Checks ─────────────────────────────────────────────────

test("Test_WithId", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withId(12345)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('id:"12345"'));
});

test("Test_WithDuration", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withDuration(5)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('duration:"5"'));
});

test("Test_WithFileSize", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("sound")
        .withFileSize(1000000)
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('filesize:"1000000"'));
});

test("Test_WithMd5", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withMd5("00000000000000000000000000000000")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('md5:"00000000000000000000000000000000"'));
});

test("Test_WithCreated", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withCreated("2020-01-01T00:00:00Z")
        .withPageSize(5)
    );

    const params = lastFetchParams();
    assert(Array.isArray(results));
    assert(params.get("filter")?.includes('created:"2020-01-01T00%3A00%3A00Z"'));
});
