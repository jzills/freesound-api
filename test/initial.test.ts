import { assert, test } from "vitest";

import FreesoundQueryBuilder from "../src/FreesoundQueryBuilder.js";
import FreesoundApi from "../src/FreesoundApi.js";

const APIKey = "ZBlVylZFLC8Bh2Jn6gQ3AnbzHL5KxrreqjqtL4JO";
const client = new FreesoundApi(APIKey);

test("Test_Single_Query_And_Field", async () => {
    const response = await client.text(new FreesoundQueryBuilder()
        .withQuery("drums")
        .withField("username")
    );

    // Assert
    assert(true);
});