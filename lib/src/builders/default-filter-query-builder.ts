import { Constructor } from "../types/constructor";
import { IDefaultFilterQueryBuilder } from "./interfaces/default-filter-query-builder";
import QueryBuilder from "./query-builder";

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