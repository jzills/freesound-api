import { Constructor } from "../types/constructor";
import { IFieldQueryBuilder } from "./interfaces/field-query-builder";
import QueryBuilder from "./query-builder";

export default function FieldQueryBuilder<T extends Constructor<QueryBuilder>>(Base: T): T & Constructor<IFieldQueryBuilder> {
    return class extends Base {
        /** @inheritdoc */
        includeId(): this {
            return this.includeField('id');
        }

        /** @inheritdoc */
        includeUrl(): this {
            return this.includeField('url');
        }

        /** @inheritdoc */
        includeName(): this {
            return this.includeField('name');
        }

        /** @inheritdoc */
        includeTags(): this {
            return this.includeField('tags');
        }

        /** @inheritdoc */
        includeDescription(): this {
            return this.includeField('description');
        }

        /** @inheritdoc */
        includeGeotag(): this {
            return this.includeField('geotag');
        }

        /** @inheritdoc */
        includeCreated(): this {
            return this.includeField('created');
        }

        /** @inheritdoc */
        includeLicense(): this {
            return this.includeField('license');
        }

        /** @inheritdoc */
        includeType(): this {
            return this.includeField('type');
        }

        /** @inheritdoc */
        includeChannels(): this {
            return this.includeField('channels');
        }

        /** @inheritdoc */
        includeFilesize(): this {
            return this.includeField('filesize');
        }

        /** @inheritdoc */
        includeBitrate(): this {
            return this.includeField('bitrate');
        }

        /** @inheritdoc */
        includeBitdepth(): this {
            return this.includeField('bitdepth');
        }

        /** @inheritdoc */
        includeDuration(): this {
            return this.includeField('duration');
        }

        /** @inheritdoc */
        includeSamplerate(): this {
            return this.includeField('samplerate');
        }

        /** @inheritdoc */
        includeUsername(): this {
            return this.includeField('username');
        }

        /** @inheritdoc */
        includePack(): this {
            return this.includeField('pack');
        }

        /** @inheritdoc */
        includeDownload(): this {
            return this.includeField('download');
        }

        /** @inheritdoc */
        includeBookmark(): this {
            return this.includeField('bookmark');
        }

        /** @inheritdoc */
        includePreviews(): this {
            return this.includeField('previews');
        }

        /** @inheritdoc */
        includeImages(): this {
            return this.includeField('images');
        }

        /** @inheritdoc */
        includeNumDownloads(): this {
            return this.includeField('num_downloads');
        }

        /** @inheritdoc */
        includeAvgRating(): this {
            return this.includeField('avg_rating');
        }

        /** @inheritdoc */
        includeNumRatings(): this {
            return this.includeField('num_ratings');
        }

        /** @inheritdoc */
        includeRate(): this {
            return this.includeField('rate');
        }

        /** @inheritdoc */
        includeComments(): this {
            return this.includeField('comments');
        }

        /** @inheritdoc */
        includeNumComments(): this {
            return this.includeField('num_comments');
        }

        /** @inheritdoc */
        includeComment(): this {
            return this.includeField('comment');
        }

        /** @inheritdoc */
        includeSimilarSounds(): this {
            return this.includeField('similar_sounds');
        }

        /** @inheritdoc */
        includeAnalysis(): this {
            return this.includeField('analysis');
        }

        /** @inheritdoc */
        includeAnalysisStats(): this {
            return this.includeField('analysis_stats');
        }

        /** @inheritdoc */
        includeAnalysisFrames(): this {
            return this.includeField('analysis_frames');
        }

        /** @inheritdoc */
        includeAcAnalysis(): this {
            return this.includeField('ac_analysis');
        }
    }
}