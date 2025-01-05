import { assert, test } from "vitest";

import QueryBuilder from "../src/builders/query-builder.js";
import Freesound from "../src/freesound.js";

const client = new Freesound(process.env.VITE_API_KEY!);

test("Test_Single_Query_And_Field_With_PageSize_1", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withPageSize(1)
        .includeField("username")
    );

    // Assert
    assert(results.length === 1);
    assert(results.every(result => "username" in result));
});

test("Test_Single_Query_And_Field_With_PageSize_25", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .includeField("username")
    );
  
    // Assert
    assert(results.length === 5);
});