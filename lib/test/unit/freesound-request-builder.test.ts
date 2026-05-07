import { assert, test } from "vitest";

import FreesoundApi from "../../src/freesound.js";
import FreesoundRequestBuilder from "../../src/freesound-request-builder.js";
import { lastFetchParams } from "./helpers.js";

const client = new FreesoundApi("test-api-key");

test("Test_Single_Query_And_Field_With_PageSize_1", async () => {
    const { results } = await client.searchText(
        new FreesoundRequestBuilder()
            .withQuery("drums")
            .withPageSize(1)
            .includeField("username")
            .includePreviews()
    );

    const params = lastFetchParams();
    assert(results.length === 1);
    assert(results.every(result => "username" in result));
    assert(params.get("query") === "drums");
    assert(params.get("page_size") === "1");
    assert(params.get("fields") === "username,previews");
});

test("Test_Single_Query_And_Field_With_PageSize_25", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeField("username")
    );

    const params = lastFetchParams();
    assert(results.length === 5);
    assert(params.get("query") === "drums");
    assert(params.get("page_size") === "5");
});

test("Test_Sort_By_Rating_Desc", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("ambient")
        .withPageSize(5)
        .withSort("rating_desc")
        .includeAvgRating()
    );

    const params = lastFetchParams();
    assert(results.length === 5);
    assert(params.get("sort") === "rating_desc");
});

test("Test_Group_By_Pack", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("nature")
        .withPageSize(5)
        .withGroupByPack(true)
    );

    const params = lastFetchParams();
    assert(results.length === 5);
    assert(params.get("group_by_pack") === "1");
});

test("Test_Similar_To_With_Similarity_Space", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withPageSize(5)
        .withSimilarTo(1234)
        .withSimilaritySpace("laion_clap")
    );

    const params = lastFetchParams();
    assert(results.length > 0);
    assert(params.get("similar_to") === "1234");
    assert(params.get("similarity_space") === "laion_clap");
});
