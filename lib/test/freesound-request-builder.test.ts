import { assert, test } from "vitest";

import FreesoundApi from "../src/freesound.js";
import FreesoundRequestBuilder from "../src/freesound-request-builder.js";

const client = new FreesoundApi(process.env.VITE_API_KEY!);

test("Test_Single_Query_And_Field_With_PageSize_1", async () => {
    const { results } = await client.searchText(
        new FreesoundRequestBuilder()
            .withQuery("drums")
            .withPageSize(1)
            .includeField("username")
            .includePreviews()
    );

    assert(results.length === 1);
    assert(results.every(result => "username" in result));
});

test("Test_Single_Query_And_Field_With_PageSize_25", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeField("username")
    );

    assert(results.length === 5);
});

test("Test_Sort_By_Rating_Desc", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("ambient")
        .withPageSize(5)
        .withSort("rating_desc")
        .includeAvgRating()
    );

    assert(results.length === 5);
});

test("Test_Group_By_Pack", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("nature")
        .withPageSize(5)
        .withGroupByPack(true)
    );

    assert(results.length === 5);
});

test("Test_Similar_To_With_Similarity_Space", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withPageSize(5)
        .withSimilarTo(1234)
        .withSimilaritySpace("laion_clap")
    );

    assert(results.length > 0);
});
