import { assert, test } from "vitest";

import FreesoundApi from "../src/freesound.js";
import FreesoundRequestBuilder from "../src/freesound-request-builder.js";

const client = new FreesoundApi(process.env.VITE_API_KEY!);

test("Test_Single_Query_And_Tempo_Confidence", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(5)
        .withTempo(100)
        .withTempoConfidence(0.7, 1.0)
    );
  
    // Assert
    assert(results.length === 5);
});

test("Test_Single_Query_And_Tonality_Confidence", async () => {
    const { results } = await client.searchText(new FreesoundRequestBuilder()
        .withQuery("piano")
        .withPageSize(5)
        .withTonality("A minor")
        .withTonalityConfidence(0.7, 1.0)
    );
    
    // Assert
    assert(results.length === 5);
});