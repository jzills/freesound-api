import { assert, test } from "vitest";

import FreesoundApi from "../src/Freesound.js";
import QueryBuilder from "../src/QueryBuilder.js";

const client = new FreesoundApi(process.env.VITE_API_KEY!);

test("Test_Single_Query_And_Field_With_PageSize_1", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withField("username")
        .withPageSize(1)
    );

    // Assert
    assert(results.length === 1);
    assert(results.every(result => "username" in result));
});

test("Test_Single_Query_And_Field_With_PageSize_25", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withField("username")
        .withPageSize(5)
    );
  
    // Assert
    assert(results.length === 5);
});