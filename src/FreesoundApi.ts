import FreesoundQueryBuilder from "./FreesoundQueryBuilder.js";

export default class FreesoundApi {
    readonly URL: string = "https://freesound.org/apiv2";
    readonly APIKey: string;

    constructor(APIKey: string) {
        this.APIKey = APIKey;
    }

    text = async (builder: FreesoundQueryBuilder): Promise<any> => {
        const queryURL = builder.build(this.APIKey);
        const response = await fetch(`${this.URL}/search/text/?${queryURL}`);
        if (response.ok) {
            return response.json();
        } else {
            console.error(await response.text());
            return null;
        }
    }
}