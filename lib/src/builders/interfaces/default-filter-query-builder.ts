/**
 * Interface defining the default filter query builder.
 */
export interface IDefaultFilterQueryBuilder {
    /**
     * Filters sounds by their unique Freesound ID.
     * @param value - The ID of the sound.
     * @returns {this} The current instance for chaining.
     */
    withId(value: number): this;

    /**
     * Filters sounds by the uploader's username.
     * @param value - The username of the uploader.
     * @returns {this} The current instance for chaining.
     */
    withUsername(value: string): this;

    /**
     * Filters sounds by the date they were added to Freesound.
     * @param value - The creation date in ISO 8601 format.
     * @returns {this} The current instance for chaining.
     */
    withCreated(value: string): this;

    /**
     * Filters sounds by their original filename.
     * @param value - The name of the file.
     * @returns {this} The current instance for chaining.
     */
    withOriginalFilename(value: string): this;

    /**
     * Filters sounds by their textual description.
     * @param value - The description of the sound.
     * @returns {this} The current instance for chaining.
     */
    withDescription(value: string): this;

    /**
     * Filters sounds by their tags.
     * @param value - The tag.
     * @returns {this} The current instance for chaining.
     */
    withTag(value: string): this;

    /**
     * Filters sounds by their Creative Commons license type.
     * @param value - The license type ("Attribution", "Attribution NonCommercial", or "Creative Commons 0").
     * @returns {this} The current instance for chaining.
     */
    withLicense(value: "Attribution" | "Attribution NonCommercial" | "Creative Commons 0"): this;

    /**
     * Filters sounds by whether they are remixes.
     * @param value - `true` if the sound is a remix, `false` otherwise.
     * @returns {this} The current instance for chaining.
     */
    withIsRemix(value: boolean): this;

    /**
     * Filters sounds by whether they have remixes.
     * @param value - `true` if the sound has remixes, `false` otherwise.
     * @returns {this} The current instance for chaining.
     */
    withWasRemixed(value: boolean): this;

    /**
     * Filters sounds by their pack name.
     * @param value - The pack name.
     * @returns {this} The current instance for chaining.
     */
    withPack(value: string): this;

    /**
     * Filters sounds by their tokenized pack name.
     * @param value - The tokenized pack name.
     * @returns {this} The current instance for chaining.
     */
    withPackTokenized(value: string): this;

    /**
     * Filters sounds by whether they are geotagged.
     * @param value - `true` if the sound is geotagged, `false` otherwise.
     * @returns {this} The current instance for chaining.
     */
    withIsGeotagged(value: boolean): this;

    /**
     * Filters sounds by their original file type.
     * @param value - The file type ("wav", "aiff", "ogg", "mp3", "m4a", or "flac").
     * @returns {this} The current instance for chaining.
     */
    withType(value: "wav" | "aiff" | "ogg" | "mp3" | "m4a" | "flac"): this;

    /**
     * Filters sounds by their duration in seconds.
     * @param value - The duration.
     * @returns {this} The current instance for chaining.
     */
    withDuration(value: number): this;

    /**
     * Filters sounds by their encoding bit depth.
     * @param value - The bit depth.
     * @returns {this} The current instance for chaining.
     */
    withBitDepth(value: number): this;

    /**
     * Filters sounds by their encoding bitrate.
     * @param value - The bitrate.
     * @returns {this} The current instance for chaining.
     */
    withBitrate(value: number): this;

    /**
     * Filters sounds by their sample rate.
     * @param value - The sample rate.
     * @returns {this} The current instance for chaining.
     */
    withSampleRate(value: number): this;

    /**
     * Filters sounds by their file size in bytes.
     * @param value - The file size.
     * @returns {this} The current instance for chaining.
     */
    withFileSize(value: number): this;

    /**
     * Filters sounds by the number of channels.
     * @param value - The number of channels.
     * @returns {this} The current instance for chaining.
     */
    withChannels(value: number): this;

    /**
     * Filters sounds by their MD5 hash.
     * @param value - The MD5 hash.
     * @returns {this} The current instance for chaining.
     */
    withMd5(value: string): this;

    /**
     * Filters sounds by the number of downloads.
     * @param value - The number of downloads.
     * @returns {this} The current instance for chaining.
     */
    withNumDownloads(value: number): this;

    /**
     * Filters sounds by their average rating.
     * @param value - The average rating (0 to 5).
     * @returns {this} The current instance for chaining.
     */
    withAvgRating(value: number): this;

    /**
     * Filters sounds by the number of ratings.
     * @param value - The number of ratings.
     * @returns {this} The current instance for chaining.
     */
    withNumRatings(value: number): this;

    /**
     * Filters sounds by their comments' content.
     * @param value - A keyword in the comments.
     * @returns {this} The current instance for chaining.
     */
    withComment(value: string): this;

    /**
     * Filters sounds by the number of comments they have.
     * @param value - The number of comments.
     * @returns {this} The current instance for chaining.
     */
    withNumComments(value: number): this;
}