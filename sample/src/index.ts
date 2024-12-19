import { Freesound, FreesoundRequestBuilder } from "freesound-api";
import path from "path";
import { config } from "dotenv";

config({ path: path.resolve(__dirname, "../../.env") });

async function sample() {
    const fs = new Freesound(process.env.VITE_API_KEY as string);
    const response = await fs.searchText(new FreesoundRequestBuilder()
        .withQuery("drums")
        .withPageSize(1)
        .includeField("username")
        .includePreviews()
        .withLoop(true)
        .withDuration(10)
        .withTonality("C minor")
    );

    console.log(response);
}

sample();
