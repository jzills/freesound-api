import { assert, test } from "vitest";

import FreesoundApi from "../../src/freesound.js";
import FreesoundRequestBuilder from "../../src/freesound-request-builder.js";
import { lastFetchParams } from "./helpers.js";

const client = new FreesoundApi("test-api-key");

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

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "id", "url", "name"));
    assert(params.get("fields") === "id,url,name");
});

test("Test_IncludeTags_And_Description_And_License", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeTags()
        .includeDescription()
        .includeLicense()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "tags", "description", "license"));
    assert(params.get("fields") === "tags,description,license");
});

test("Test_IncludeType_And_Created_And_Username", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeType()
        .includeCreated()
        .includeUsername()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "type", "created", "username"));
    assert(params.get("fields") === "type,created,username");
});

test("Test_IncludeGeotag", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withIsGeotagged(true)
        .withPageSize(5)
        .includeGeotag()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "geotag"));
    assert(params.get("fields") === "geotag");
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

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "channels", "duration", "samplerate"));
    assert(params.get("fields") === "channels,duration,samplerate");
});

test("Test_IncludeFilesize_And_Bitrate_And_Bitdepth", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeFilesize()
        .includeBitrate()
        .includeBitdepth()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "filesize", "bitrate", "bitdepth"));
    assert(params.get("fields") === "filesize,bitrate,bitdepth");
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

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "num_downloads", "avg_rating", "num_ratings"));
    assert(params.get("fields") === "num_downloads,avg_rating,num_ratings");
});

test("Test_IncludeNumComments", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeNumComments()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "num_comments"));
    assert(params.get("fields") === "num_comments");
});

// ─── Navigation / Action Fields ───────────────────────────────────────────────

test("Test_IncludePreviews_And_Images", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includePreviews()
        .includeImages()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "previews", "images"));
    assert(params.get("fields") === "previews,images");
});

test("Test_IncludePack", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includePack()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "pack"));
    assert(params.get("fields") === "pack");
});

test("Test_IncludeDownload_And_Bookmark_And_Rate", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeDownload()
        .includeBookmark()
        .includeRate()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "download", "bookmark", "rate"));
    assert(params.get("fields") === "download,bookmark,rate");
});

test("Test_IncludeComments_And_Comment", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeComments()
        .includeComment()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "comments", "comment"));
    assert(params.get("fields") === "comments,comment");
});

// ─── Analysis Fields ──────────────────────────────────────────────────────────

test("Test_IncludeSimilarSounds", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeSimilarSounds()
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(hasFields(results, "similar_sounds"));
    assert(params.get("fields") === "similar_sounds");
});
