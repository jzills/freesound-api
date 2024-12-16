import { assert, test } from "vitest";

import FreesoundApi from "../src/freesound.js";
import FreesoundRequestBuilder from "../src/freesound-request-builder.js";

const client = new FreesoundApi(process.env.VITE_API_KEY!);

test("Test_Single_Query_And_Field_With_PageSize_1", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(1)
        .includeField("username")
    );

    // Assert
    assert(results.length === 1);
    assert(results.every(result => "username" in result));
});

test("Test_Single_Query_And_Field_With_PageSize_25", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeField("username")
    );
  
    // Assert
    assert(results.length === 5);
});