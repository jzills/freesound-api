import { Freesound, FreesoundRequestBuilder, QueryBuilder } from "freesound-api";

async function sample() {
    const fs = new Freesound("...");
    const response = await fs.searchText(new FreesoundRequestBuilder()
        .withQuery("Piano")
        .includeAcAnalysis()
        .includeBitrate()
    );

    console.log(response);
}

sample();