/**
 * A builder class for constructing Freesound API search requests with various filters.
 */
export default class QueryBuilder {
    private readonly query: string[] = [];
    private readonly fields: string[] = [];
    private readonly filter: string[] = [];
    private page: number = 1;
    private pageSize: number = 15;
    private descriptors: string[] = [];
    private normalized: boolean = false;

    /**
     * Adds a search query to the request.
     * @param {string} value - The search term to query.
     * @returns {QueryBuilder} The current instance for chaining.
     */
    withQuery(value: string): this {
        this.query.push(encodeURIComponent(value));
        return this;
    }

    /**
     * Specifies which fields to include in the response.
     * @param {string} value - The field name to include.
     * @returns {QueryBuilder} The current instance for chaining.
     */
    includeField(value: string): this {
        this.fields.push(encodeURIComponent(value));
        return this;
    }

    /**
     * Adds a generic filter to the request.
     * @param {string} name - The name of the filter.
     * @param {number | string | boolean} value - The value of the filter.
     * @returns {QueryBuilder} The current instance for chaining.
     */
    withFilter(name: string, value: number | string | boolean): this {
        const encodedValue = encodeURIComponent(value.toString());
        this.filter.push(`${encodeURIComponent(name)}:${encodedValue}`);
        return this;
    }

    /**
     * Sets the page number for pagination.
     * @param {number} page - The page number to return. Default is 1.
     * @returns {QueryBuilder} The current instance for chaining.
     */
    withPage(page: number): this {
        this.page = page;
        return this;
    }

    /**
     * Sets the number of items per page in the result.
     * @param {number} pageSize - The number of items per page to include. Default is 15, maximum is 150.
     * @returns {QueryBuilder} The current instance for chaining.
     */
    withPageSize(pageSize: number): this {
        this.pageSize = Math.min(pageSize, 150); // Max page_size is 150
        return this;
    }

    /**
     * Specifies which sound content-based descriptors to include in the response.
     * @param {string} value - The descriptor names to include.
     * @returns {QueryBuilder} The current instance for chaining.
     */
    withDescriptors(value: string): this {
        this.descriptors.push(encodeURIComponent(value));
        return this;
    }

    /**
     * Specifies whether the descriptors should be normalized.
     * @param {boolean} normalized - Whether to normalize the descriptors. Default is false (no normalization).
     * @returns {QueryBuilder} The current instance for chaining.
     */
    withNormalized(normalized: boolean): this {
        this.normalized = normalized;
        return this;
    }

    /**
     * @internal
     * Builds the final URL for the Freesound API request with all specified queries, fields, and filters.
     * @param {string} APIKey - The API key to authenticate the request.
     * @returns {string} The complete API request URL.
     */
    build(APIKey: string): string {
        const params: Record<string, string | number | boolean> = {
            query: this.query.join("&"),
            fields: this.fields.join(","),
            filter: this.filter.join(" "),
            page: this.page,
            page_size: this.pageSize,
            descriptors: this.descriptors.join(","),
            normalized: this.normalized ? 1 : 0,
        };
    
        // Remove any keys that have empty values
        Object.keys(params).forEach((key) => {
            if (!params[key]) {
                delete params[key];
            }
        });
    
        // Construct the query string
        const queryString = new URLSearchParams(params as Record<string, string>).toString();
    
        return `${queryString}&token=${APIKey}`;
    }
}