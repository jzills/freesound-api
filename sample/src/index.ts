import { Freesound, FreesoundRequestBuilder } from "freesound-api";
import path from "path";
import { config } from "dotenv";

config({ path: path.resolve(__dirname, "../../.env") });

async function sample() {
    const fs = new Freesound(process.env.VITE_API_KEY as string);
    const response = await fs.searchText(new FreesoundRequestBuilder()
        .withQuery("Piano")
        .includeAcAnalysis()
        .includeBitrate()
    );

    console.log(response);
}

sample();
