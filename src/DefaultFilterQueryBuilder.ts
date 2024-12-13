import QueryBuilder from "./QueryBuilder";

export default class DefaultFilterQueryBuilder extends QueryBuilder {
    /**
     * Filters sounds by their unique Freesound ID.
     * @param {number} value - The ID of the sound.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withId(value: number): this {
        return this.withFilter("id", value);
    }

    /**
     * Filters sounds by the uploader's username.
     * @param {string} value - The username of the uploader.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withUsername(value: string): this {
        return this.withFilter("username", value);
    }

    /**
     * Filters sounds by the date they were added to Freesound.
     * @param {string} value - The creation date in ISO 8601 format.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withCreated(value: string): this {
        return this.withFilter("created", value);
    }

    /**
     * Filters sounds by their original filename.
     * @param {string} value - The name of the file.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withOriginalFilename(value: string): this {
        return this.withFilter("original_filename", value);
    }

    /**
     * Filters sounds by their textual description.
     * @param {string} value - The description of the sound.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withDescription(value: string): this {
        return this.withFilter("description", value);
    }

    /**
     * Filters sounds by their tags.
     * @param {string} value - The tag.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withTag(value: string): this {
        return this.withFilter("tag", value);
    }

    /**
     * Filters sounds by their Creative Commons license type.
     * @param {"Attribution" | "Attribution NonCommercial" | "Creative Commons 0"} value - The license type.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withLicense(value: string): this {
        return this.withFilter("license", value);
    }

    /**
     * Filters sounds by whether they are remixes.
     * @param {boolean} value - `true` if the sound is a remix, `false` otherwise.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withIsRemix(value: boolean): this {
        return this.withFilter("is_remix", value);
    }

    /**
     * Filters sounds by whether they have remixes.
     * @param {boolean} value - `true` if the sound has remixes, `false` otherwise.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withWasRemixed(value: boolean): this {
        return this.withFilter("was_remixed", value);
    }

    /**
     * Filters sounds by their pack name.
     * @param {string} value - The pack name.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withPack(value: string): this {
        return this.withFilter("pack", value);
    }

    /**
     * Filters sounds by their tokenized pack name.
     * @param {string} value - The tokenized pack name.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withPackTokenized(value: string): this {
        return this.withFilter("pack_tokenized", value);
    }

    /**
     * Filters sounds by whether they are geotagged.
     * @param {boolean} value - `true` if the sound is geotagged, `false` otherwise.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withIsGeotagged(value: boolean): this {
        return this.withFilter("is_geotagged", value);
    }

    /**
     * Filters sounds by their original file type.
     * @param {"wav" | "aiff" | "ogg" | "mp3" | "m4a" | "flac"} value - The file type.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withType(value: string): this {
        return this.withFilter("type", value);
    }

    /**
     * Filters sounds by their duration in seconds.
     * @param {number} value - The duration.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withDuration(value: number): this {
        return this.withFilter("duration", value);
    }

    /**
     * Filters sounds by their encoding bit depth.
     * @param {number} value - The bit depth.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withBitDepth(value: number): this {
        return this.withFilter("bitdepth", value);
    }

    /**
     * Filters sounds by their encoding bitrate.
     * @param {number} value - The bitrate.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withBitrate(value: number): this {
        return this.withFilter("bitrate", value);
    }

    /**
     * Filters sounds by their sample rate.
     * @param {number} value - The sample rate.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withSampleRate(value: number): this {
        return this.withFilter("samplerate", value);
    }

    /**
     * Filters sounds by their file size in bytes.
     * @param {number} value - The file size.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withFileSize(value: number): this {
        return this.withFilter("filesize", value);
    }

    /**
     * Filters sounds by the number of channels.
     * @param {number} value - The number of channels.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withChannels(value: number): this {
        return this.withFilter("channels", value);
    }

    /**
     * Filters sounds by their MD5 hash.
     * @param {string} value - The MD5 hash.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withMd5(value: string): this {
        return this.withFilter("md5", value);
    }

    /**
     * Filters sounds by the number of downloads.
     * @param {number} value - The number of downloads.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withNumDownloads(value: number): this {
        return this.withFilter("num_downloads", value);
    }

    /**
     * Filters sounds by their average rating.
     * @param {number} value - The average rating (0 to 5).
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withAvgRating(value: number): this {
        return this.withFilter("avg_rating", value);
    }

    /**
     * Filters sounds by the number of ratings.
     * @param {number} value - The number of ratings.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withNumRatings(value: number): this {
        return this.withFilter("num_ratings", value);
    }

    /**
     * Filters sounds by their comments' content.
     * @param {string} value - A keyword in the comments.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withComment(value: string): this {
        return this.withFilter("comment", value);
    }

    /**
     * Filters sounds by the number of comments they have.
     * @param {number} value - The number of comments.
     * @returns {DefaultFilterQueryBuilder} The current instance for chaining.
     */
    withNumComments(value: number): this {
        return this.withFilter("num_comments", value);
    }
}