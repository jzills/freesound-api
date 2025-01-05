/**
 * Represents the response from the Freesound API for a search query.
 */
export type FreesoundResponse = {
    /**
     * The total number of results matching the query.
     */
    count: number;

    /**
     * The URL for the previous page of results, or `null` if there is no previous page.
     */
    previous: string | null;

    /**
     * The URL for the next page of results, or `null` if there is no next page.
     */
    next: string | null;

    /**
     * An array of results matching the query.
     * Each item in the array contains data specific to the query results.
     */
    results: any[];
};