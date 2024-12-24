export interface IFieldQueryBuilder {
    /**
     * Include the "id" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeId(): this;

    /**
     * Include the "url" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeUrl(): this;

    /**
     * Include the "name" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeName(): this;

    /**
     * Include the "tags" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeTags(): this;

    /**
     * Include the "description" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeDescription(): this;

    /**
     * Include the "geotag" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeGeotag(): this;

    /**
     * Include the "created" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeCreated(): this;

    /**
     * Include the "license" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeLicense(): this;

    /**
     * Include the "type" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeType(): this;

    /**
     * Include the "channels" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeChannels(): this;

    /**
     * Include the "filesize" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeFilesize(): this;

    /**
     * Include the "bitrate" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeBitrate(): this;

    /**
     * Include the "bitdepth" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeBitdepth(): this;

    /**
     * Include the "duration" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeDuration(): this;

    /**
     * Include the "samplerate" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeSamplerate(): this;

    /**
     * Include the "username" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeUsername(): this;

    /**
     * Include the "pack" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includePack(): this;

    /**
     * Include the "download" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeDownload(): this;

    /**
     * Include the "bookmark" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeBookmark(): this;

    /**
     * Include the "previews" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includePreviews(): this;

    /**
     * Include the "images" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeImages(): this;

    /**
     * Include the "num_downloads" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeNumDownloads(): this;

    /**
     * Include the "avg_rating" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeAvgRating(): this;

    /**
     * Include the "num_ratings" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeNumRatings(): this;

    /**
     * Include the "rate" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeRate(): this;

    /**
     * Include the "comments" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeComments(): this;

    /**
     * Include the "num_comments" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeNumComments(): this;

    /**
     * Include the "comment" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeComment(): this;

    /**
     * Include the "similar_sounds" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeSimilarSounds(): this;

    /**
     * Include the "analysis" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeAnalysis(): this;

    /**
     * Include the "analysis_stats" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeAnalysisStats(): this;

    /**
     * Include the "analysis_frames" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeAnalysisFrames(): this;

    /**
     * Include the "ac_analysis" field in the fields list.
     * @returns {this} The current instance for chaining.
     */
    includeAcAnalysis(): this;
}