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
        withTonalityConfidence(value: number): this {
            return this.withFilter("ac_tonality_confidence", value);
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
        withTempoConfidence(value: number): this {
            return this.withFilter("ac_tempo_confidence", value);
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
        withNoteConfidence(value: number): this {
            return this.withFilter("ac_note_confidence", value);
        }

        /** @inheritdoc */
        withBrightness(value: number): this {
            return this.withFilter("ac_brightness", value);
        }

        /** @inheritdoc */
        withDepth(value: number): this {
            return this.withFilter("ac_depth", value);
        }

        /** @inheritdoc */
        withHardness(value: number): this {
            return this.withFilter("ac_hardness", value);
        }

        /** @inheritdoc */
        withRoughness(value: number): this {
            return this.withFilter("ac_roughness", value);
        }

        /** @inheritdoc */
        withBoominess(value: number): this {
            return this.withFilter("ac_boominess", value);
        }

        /** @inheritdoc */
        withWarmth(value: number): this {
            return this.withFilter("ac_warmth", value);
        }

        /** @inheritdoc */
        withSharpness(value: number): this {
            return this.withFilter("ac_sharpness", value);
        }

        /** @inheritdoc */
        withReverb(value: boolean): this {
            return this.withFilter("ac_reverb", value);
        }
    }
}

export default AudioCommonsFilterQueryBuilder;