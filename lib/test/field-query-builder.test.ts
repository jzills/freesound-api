import { assert, test } from "vitest";

import FreesoundApi from "../src/freesound.js";
import FreesoundRequestBuilder from "../src/freesound-request-builder.js";

const client = new FreesoundApi(process.env.VITE_API_KEY!);

const hasFields = (results: any[], ...fields: string[]) =>
    results.every(result => fields.every(f => f in result));

// ─── Core Metadata ────────────────────────────────────────────────────────────

test("Test_IncludeId_And_Url_And_Name", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeId()
        .includeUrl()
        .includeName()
    );

    assert(results.length > 0);
    assert(hasFields(results, "id", "url", "name"));
});

test("Test_IncludeTags_And_Description_And_License", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeTags()
        .includeDescription()
        .includeLicense()
    );

    assert(results.length > 0);
    assert(hasFields(results, "tags", "description", "license"));
});

test("Test_IncludeType_And_Created_And_Username", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeType()
        .includeCreated()
        .includeUsername()
    );

    assert(results.length > 0);
    assert(hasFields(results, "type", "created", "username"));
});

test("Test_IncludeGeotag", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withIsGeotagged(true)
        .withPageSize(5)
        .includeGeotag()
    );

    assert(results.length > 0);
    assert(hasFields(results, "geotag"));
});

// ─── Audio Format Fields ──────────────────────────────────────────────────────

test("Test_IncludeChannels_And_Duration_And_Samplerate", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeChannels()
        .includeDuration()
        .includeSamplerate()
    );

    assert(results.length > 0);
    assert(hasFields(results, "channels", "duration", "samplerate"));
});

test("Test_IncludeFilesize_And_Bitrate_And_Bitdepth", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeFilesize()
        .includeBitrate()
        .includeBitdepth()
    );

    assert(results.length > 0);
    assert(hasFields(results, "filesize", "bitrate", "bitdepth"));
});

// ─── Social / Stats Fields ────────────────────────────────────────────────────

test("Test_IncludeNumDownloads_And_AvgRating_And_NumRatings", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeNumDownloads()
        .includeAvgRating()
        .includeNumRatings()
    );

    assert(results.length > 0);
    assert(hasFields(results, "num_downloads", "avg_rating", "num_ratings"));
});

test("Test_IncludeNumComments", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeNumComments()
    );

    assert(results.length > 0);
    assert(hasFields(results, "num_comments"));
});

// ─── Navigation / Action Fields ───────────────────────────────────────────────

test("Test_IncludePreviews_And_Images", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includePreviews()
        .includeImages()
    );

    assert(results.length > 0);
    assert(hasFields(results, "previews", "images"));
});

test("Test_IncludePack", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includePack()
    );

    assert(results.length > 0);
    assert(hasFields(results, "pack"));
});

test("Test_IncludeDownload_And_Bookmark_And_Rate", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeDownload()
        .includeBookmark()
        .includeRate()
    );

    assert(results.length > 0);
    assert(hasFields(results, "download", "bookmark", "rate"));
});

test("Test_IncludeComments_And_Comment", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeComments()
        .includeComment()
    );

    assert(results.length > 0);
    assert(hasFields(results, "comments", "comment"));
});

// ─── Analysis Fields ──────────────────────────────────────────────────────────

test("Test_IncludeSimilarSounds", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeSimilarSounds()
    );

    assert(results.length > 0);
    assert(hasFields(results, "similar_sounds"));
});
