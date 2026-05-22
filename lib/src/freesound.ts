import { FreesoundResponse } from "./types/freesound-response";
import QueryBuilder from "./builders/query-builder";

/**
 * Error thrown when the Freesound API returns a non-OK HTTP response.
 * Preserves the original HTTP status code so callers can distinguish
 * between e.g. 401 (bad key), 429 (rate limited), and 5xx (server error).
 */
export class FreesoundError extends Error {
    constructor(readonly status: number, message: string) {
        super(message);
        this.name = "FreesoundError";
    }
}

/**
 * Represents a client for interacting with the Freesound API.
 */
export default class Freesound {
    /**
     * The base URL of the Freesound API.
     */
    readonly URL: string = "https://freesound.org/apiv2";

    /**
     * The API key used for authentication with the Freesound API.
     */
    readonly APIKey: string;

    /**
     * Creates an instance of the Freesound client.
     * @param APIKey - The API key used to authenticate requests to the Freesound API.
     */
    constructor(APIKey: string) {
        this.APIKey = APIKey;
    }

    /**
     * Searches Freesound for sounds using a text-based query.
     * @param builder - An instance of `QueryBuilder` to construct the query parameters.
     * @returns A promise that resolves to a `FreesoundResponse` object containing the search results.
     * @throws A `FreesoundError` containing the HTTP status code if the API request fails.
     */
    searchText = async (builder: QueryBuilder): Promise<FreesoundResponse> => {
        const queryURL = builder.build(this.APIKey);
        const response = await fetch(`${this.URL}/search/text/?${queryURL}`);
        if (response.ok) {
            return response.json();
        } else {
            throw new FreesoundError(response.status, await response.text());
        }
    }
}
