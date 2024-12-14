import { FreesoundResponse } from "./FreesoundResponse.js";
import QueryBuilder from "./QueryBuilder.js";

export default class Freesound {
    readonly URL: string = "https://freesound.org/apiv2";
    readonly APIKey: string;

    constructor(APIKey: string) {
        this.APIKey = APIKey;
    }

    searchText = async (builder: QueryBuilder): Promise<FreesoundResponse> => {
        const queryURL = builder.build(this.APIKey);
        const response = await fetch(`${this.URL}/search/text/?${queryURL}`);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(await response.text());
        }
    }

    // sound = async (id: string) => {
    //     const response = await fetch(`${this.URL}/apiv2/sounds/${id}/`);
    //     if (response.ok) {
    //         return response.json();
    //     } else {
    //         console.error("Oops");
    //         return [];
    //     }
    // }
}