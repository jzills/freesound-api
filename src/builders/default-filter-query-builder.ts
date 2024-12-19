import { Constructor } from "../freesound-request-builder";
import QueryBuilder from "./query-builder";

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

export default function DefaultFilterQueryBuilder<T extends Constructor<QueryBuilder>>(Base: T): T & Constructor<IDefaultFilterQueryBuilder> {
    return class extends Base {
        /** @inheritdoc */
        withId(value: number): this {
            return this.withFilter("id", value);
        }

        /** @inheritdoc */
        withUsername(value: string): this {
            return this.withFilter("username", value);
        }

        /** @inheritdoc */
        withCreated(value: string): this {
            return this.withFilter("created", value);
        }

        /** @inheritdoc */
        withOriginalFilename(value: string): this {
            return this.withFilter("original_filename", value);
        }

        /** @inheritdoc */
        withDescription(value: string): this {
            return this.withFilter("description", value);
        }

        /** @inheritdoc */
        withTag(value: string): this {
            return this.withFilter("tag", value);
        }

        /** @inheritdoc */
        withLicense(value: "Attribution" | "Attribution NonCommercial" | "Creative Commons 0"): this {
            return this.withFilter("license", value);
        }

        /** @inheritdoc */
        withIsRemix(value: boolean): this {
            return this.withFilter("is_remix", value);
        }

        /** @inheritdoc */
        withWasRemixed(value: boolean): this {
            return this.withFilter("was_remixed", value);
        }

        /** @inheritdoc */
        withPack(value: string): this {
            return this.withFilter("pack", value);
        }

        /** @inheritdoc */
        withPackTokenized(value: string): this {
            return this.withFilter("pack_tokenized", value);
        }

        /** @inheritdoc */
        withIsGeotagged(value: boolean): this {
            return this.withFilter("is_geotagged", value);
        }

        /** @inheritdoc */
        withType(value: "wav" | "aiff" | "ogg" | "mp3" | "m4a" | "flac"): this {
            return this.withFilter("type", value);
        }

        /** @inheritdoc */
        withDuration(value: number): this {
            return this.withFilter("duration", value);
        }

        /** @inheritdoc */
        withBitDepth(value: number): this {
            return this.withFilter("bitdepth", value);
        }

        /** @inheritdoc */
        withBitrate(value: number): this {
            return this.withFilter("bitrate", value);
        }

        /** @inheritdoc */
        withSampleRate(value: number): this {
            return this.withFilter("samplerate", value);
        }

        /** @inheritdoc */
        withFileSize(value: number): this {
            return this.withFilter("filesize", value);
        }

        /** @inheritdoc */
        withChannels(value: number): this {
            return this.withFilter("channels", value);
        }

        /** @inheritdoc */
        withMd5(value: string): this {
            return this.withFilter("md5", value);
        }

        /** @inheritdoc */
        withNumDownloads(value: number): this {
            return this.withFilter("num_downloads", value);
        }

        /** @inheritdoc */
        withAvgRating(value: number): this {
            return this.withFilter("avg_rating", value);
        }

        /** @inheritdoc */
        withNumRatings(value: number): this {
            return this.withFilter("num_ratings", value);
        }

        /** @inheritdoc */
        withComment(value: string): this {
            return this.withFilter("comment", value);
        }

        /** @inheritdoc */
        withNumComments(value: number): this {
            return this.withFilter("num_comments", value);
        }
    };
}