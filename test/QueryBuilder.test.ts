import { assert, test } from "vitest";

import FreesoundApi from "../src/Freesound.js";
import QueryBuilder from "../src/QueryBuilder.js";

const APIKey = "ZBlVylZFLC8Bh2Jn6gQ3AnbzHL5KxrreqjqtL4JO";
const client = new FreesoundApi(APIKey);

test("Test_Single_Query_And_Field", async () => {
    const { results } = await client.searchText(new QueryBuilder()
        .withQuery("drums")
        .withField("username")
    );

    // Assert
    assert(results.length);
    assert(results.every(result => "username" in result));
});