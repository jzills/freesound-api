import { Constructor } from "../types/constructor";
import { IAudioCommonsFilterQueryBuilder } from "./interfaces/audio-commons-filter-query-builder";
import QueryBuilder from "./query-builder";

const AudioCommonsFilterQueryBuilder = <T extends Constructor<QueryBuilder>>(Base: T): T & Constructor<IAudioCommonsFilterQueryBuilder> => {
    return class extends Base {
        /** @inheritdoc */
        withLoudness(value: number): this {
            return this.withFilter("ac_loudness", value);
        }

        /** @inheritdoc */
        withDynamicRange(value: number): this {
            return this.withFilter("ac_dynamic_range", value);
        }

        /** @inheritdoc */
        withTemporalCentroid(value: number): this {
            return this.withFilter("ac_temporal_centroid", value);
        }

        /** @inheritdoc */
        withLogAttackTime(value: number): this {
            return this.withFilter("ac_log_attack_time", value);
        }

        /** @inheritdoc */
        withSingleEvent(value: boolean): this {
            return this.withFilter("ac_single_event", value);
        }

        /** @inheritdoc */
        withTonality(value: string): this {
            return this.withFilter("ac_tonality", value);
        }

        /** @inheritdoc */
        withTonalityConfidence(min: number, max: number = 1.0): this {
            return this.withNumericRangeFilter("ac_tonality_confidence", min, max);
        }

        /** @inheritdoc */
        withLoop(value: boolean): this {
            return this.withFilter("ac_loop", value);
        }

        /** @inheritdoc */
        withTempo(value: number): this {
            return this.withFilter("ac_tempo", value);
        }

        /** @inheritdoc */
        withTempoConfidence(min: number, max: number = 1.0): this {
            return this.withNumericRangeFilter("ac_tempo_confidence", min, max);
        }

        /** @inheritdoc */
        withNoteMidi(value: number): this {
            return this.withFilter("ac_note_midi", value);
        }

        /** @inheritdoc */
        withNoteName(value: string): this {
            return this.withFilter("ac_note_name", value);
        }

        /** @inheritdoc */
        withNoteFrequency(value: number): this {
            return this.withFilter("ac_note_frequency", value);
        }

        /** @inheritdoc */
        withNoteConfidence(min: number, max: number = 1.0): this {
            return this.withNumericRangeFilter("ac_note_confidence", min, max);
        }

        /** @inheritdoc */
        withBrightness(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("ac_brightness", min, max);
        }

        /** @inheritdoc */
        withDepth(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("ac_depth", min, max);
        }

        /** @inheritdoc */
        withHardness(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("ac_hardness", min, max);
        }

        /** @inheritdoc */
        withRoughness(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("ac_roughness", min, max);
        }

        /** @inheritdoc */
        withBoominess(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("ac_boominess", min, max);
        }

        /** @inheritdoc */
        withWarmth(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("ac_warmth", min, max);
        }

        /** @inheritdoc */
        withSharpness(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("ac_sharpness", min, max);
        }

        /** @inheritdoc */
        withReverb(value: boolean): this {
            return this.withFilter("ac_reverb", value);
        }
    }
}

export default AudioCommonsFilterQueryBuilder;