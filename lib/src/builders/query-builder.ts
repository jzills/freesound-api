export type SortOption =
    | "score"
    | "duration_desc"
    | "duration_asc"
    | "created_desc"
    | "created_asc"
    | "downloads_desc"
    | "downloads_asc"
    | "rating_desc"
    | "rating_asc";

export type SimilaritySpace = "laion_clap" | "freesound_classic";

/**
 * A builder class for constructing Freesound API search requests with various filters.
 */
export default class QueryBuilder {
    private readonly query: string[] = [];
    private readonly fields: string[] = [];
    private readonly filter: string[] = [];
    private page: number = 1;
    private pageSize: number = 15;
    private sort?: SortOption;
    private groupByPack?: boolean;
    private similarTo?: number | number[];
    private similaritySpace?: SimilaritySpace;
    private weights?: string;

    /**
     * Adds a search query term to the request.
     * @param value - The search term.
     */
    withQuery(value: string): this {
        this.query.push(encodeURIComponent(value));
        return this;
    }

    /**
     * Specifies which fields to include in the response.
     * @param value - The field name to include.
     */
    includeField(value: string): this {
        this.fields.push(encodeURIComponent(value));
        return this;
    }

    /**
     * Adds a generic filter to the request.
     * @param name - The filter field name.
     * @param value - The filter value.
     */
    withFilter(name: string, value: number | string | boolean): this {
        const encodedValue = encodeURIComponent(value.toString());
        this.filter.push(`${name}:\"${encodedValue}\"`);
        return this;
    }

    /**
     * Adds a numeric range filter using Solr [min TO max] syntax.
     * @param name - The filter field name.
     * @param min - The minimum value.
     * @param max - The maximum value.
     */
    withNumericRangeFilter(name: string, min: number, max: number): this {
        const encodedValue = encodeURIComponent(`[${min} TO ${max}]`);
        this.filter.push(`${name}:${encodedValue}`);
        return this;
    }

    /**
     * Sets the page number for pagination.
     * @param page - The page number. Default is 1.
     */
    withPage(page: number): this {
        this.page = page;
        return this;
    }

    /**
     * Sets the number of results per page.
     * @param pageSize - Results per page. Default is 15, maximum is 150.
     */
    withPageSize(pageSize: number): this {
        this.pageSize = Math.min(pageSize, 150);
        return this;
    }

    /**
     * Sets the sort order for results.
     * @param value - The sort option.
     */
    withSort(value: SortOption): this {
        this.sort = value;
        return this;
    }

    /**
     * Collapses results so that only one sound per pack is returned.
     * @param value - Whether to group by pack. Default is false.
     */
    withGroupByPack(value: boolean): this {
        this.groupByPack = value;
        return this;
    }

    /**
     * Finds sounds similar to the given sound ID(s).
     * @param id - A single sound ID or an array of sound IDs.
     */
    withSimilarTo(id: number | number[]): this {
        this.similarTo = id;
        return this;
    }

    /**
     * Sets the similarity algorithm used when finding similar sounds.
     * @param space - "laion_clap" (semantic + acoustic) or "freesound_classic" (low-level audio features).
     */
    withSimilaritySpace(space: SimilaritySpace): this {
        this.similaritySpace = space;
        return this;
    }

    /**
     * Sets custom field weights for scoring.
     * @param value - The weights string as accepted by the Freesound API.
     */
    withWeights(value: string): this {
        this.weights = value;
        return this;
    }

    /**
     * @internal
     * Builds the final query string for the Freesound search API.
     * @param APIKey - The API key to authenticate the request.
     */
    build(APIKey: string): string {
        const params: Record<string, string | number | boolean> = {
            query: this.query.join("&"),
            fields: this.fields.join(","),
            filter: this.filter.join(" "),
            page: this.page,
            page_size: this.pageSize,
        };

        if (this.sort !== undefined) {
            params.sort = this.sort;
        }
        if (this.groupByPack !== undefined) {
            params.group_by_pack = this.groupByPack ? 1 : 0;
        }
        if (this.similarTo !== undefined) {
            params.similar_to = Array.isArray(this.similarTo)
                ? this.similarTo.join(",")
                : this.similarTo;
        }
        if (this.similaritySpace !== undefined) {
            params.similarity_space = this.similaritySpace;
        }
        if (this.weights !== undefined) {
            params.weights = this.weights;
        }

        Object.keys(params).forEach((key) => {
            if (!params[key] && params[key] !== 0) {
                delete params[key];
            }
        });

        const queryString = new URLSearchParams(params as Record<string, string>).toString();
        return `${queryString}&token=${APIKey}`;
    }
}
