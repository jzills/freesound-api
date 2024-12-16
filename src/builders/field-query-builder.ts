import { Constructor } from "../freesound-request-builder";
import QueryBuilder from "./query-builder";

export interface IFieldQueryBuilder {
    includeId(): this;
    includeUrl(): this;
    includeName(): this;
    includeTags(): this;
    includeDescription(): this;
    includeGeotag(): this;
    includeCreated(): this;
    includeLicense(): this;
    includeType(): this;
    includeChannels(): this;
    includeFilesize(): this;
    includeBitrate(): this;
    includeBitdepth(): this;
    includeDuration(): this;
    includeSamplerate(): this;
    includeUsername(): this;
    includePack(): this;
    includeDownload(): this;
    includeBookmark(): this;
    includePreviews(): this;
    includeImages(): this;
    includeNumDownloads(): this;
    includeAvgRating(): this;
    includeNumRatings(): this;
    includeRate(): this;
    includeComments(): this;
    includeNumComments(): this;
    includeComment(): this;
    includeSimilarSounds(): this;
    includeAnalysis(): this;
    includeAnalysisStats(): this;
    includeAnalysisFrames(): this;
    includeAcAnalysis(): this;
}

export default function FieldQueryBuilder<T extends Constructor<QueryBuilder>>(Base: T): T & Constructor<IFieldQueryBuilder> {
    return class extends Base {
        /**
         * Include the "id" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeId(): this {
            return this.includeField('id');
        }

        /**
         * Include the "url" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeUrl(): this {
            return this.includeField('url');
        }

        /**
         * Include the "name" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeName(): this {
            return this.includeField('name');
        }

        /**
         * Include the "tags" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeTags(): this {
            return this.includeField('tags');
        }

        /**
         * Include the "description" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeDescription(): this {
            return this.includeField('description');
        }

        /**
         * Include the "geotag" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeGeotag(): this {
            return this.includeField('geotag');
        }

        /**
         * Include the "created" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeCreated(): this {
            return this.includeField('created');
        }

        /**
         * Include the "license" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeLicense(): this {
            return this.includeField('license');
        }

        /**
         * Include the "type" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeType(): this {
            return this.includeField('type');
        }

        /**
         * Include the "channels" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeChannels(): this {
            return this.includeField('channels');
        }

        /**
         * Include the "filesize" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeFilesize(): this {
            return this.includeField('filesize');
        }

        /**
         * Include the "bitrate" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeBitrate(): this {
            return this.includeField('bitrate');
        }

        /**
         * Include the "bitdepth" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeBitdepth(): this {
            return this.includeField('bitdepth');
        }

        /**
         * Include the "duration" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeDuration(): this {
            return this.includeField('duration');
        }

        /**
         * Include the "samplerate" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeSamplerate(): this {
            return this.includeField('samplerate');
        }

        /**
         * Include the "username" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeUsername(): this {
            return this.includeField('username');
        }

        /**
         * Include the "pack" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includePack(): this {
            return this.includeField('pack');
        }

        /**
         * Include the "download" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeDownload(): this {
            return this.includeField('download');
        }

        /**
         * Include the "bookmark" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeBookmark(): this {
            return this.includeField('bookmark');
        }

        /**
         * Include the "previews" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includePreviews(): this {
            return this.includeField('previews');
        }

        /**
         * Include the "images" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeImages(): this {
            return this.includeField('images');
        }

        /**
         * Include the "num_downloads" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeNumDownloads(): this {
            return this.includeField('num_downloads');
        }

        /**
         * Include the "avg_rating" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeAvgRating(): this {
            return this.includeField('avg_rating');
        }

        /**
         * Include the "num_ratings" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeNumRatings(): this {
            return this.includeField('num_ratings');
        }

        /**
         * Include the "rate" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeRate(): this {
            return this.includeField('rate');
        }

        /**
         * Include the "comments" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeComments(): this {
            return this.includeField('comments');
        }

        /**
         * Include the "num_comments" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeNumComments(): this {
            return this.includeField('num_comments');
        }

        /**
         * Include the "comment" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeComment(): this {
            return this.includeField('comment');
        }

        /**
         * Include the "similar_sounds" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeSimilarSounds(): this {
            return this.includeField('similar_sounds');
        }

        /**
         * Include the "analysis" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeAnalysis(): this {
            return this.includeField('analysis');
        }

        /**
         * Include the "analysis_stats" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeAnalysisStats(): this {
            return this.includeField('analysis_stats');
        }

        /**
         * Include the "analysis_frames" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeAnalysisFrames(): this {
            return this.includeField('analysis_frames');
        }

        /**
         * Include the "ac_analysis" field in the fields list.
         * @returns {FieldBuilder} The current instance for chaining.
         */
        includeAcAnalysis(): this {
            return this.includeField('ac_analysis');
        }
    }
}