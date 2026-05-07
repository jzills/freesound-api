import { Constructor } from "../types/constructor";
import { ISoundDescriptorFilterQueryBuilder } from "./interfaces/sound-descriptor-filter-query-builder";
import QueryBuilder from "./query-builder";

const SoundDescriptorFilterQueryBuilder = <T extends Constructor<QueryBuilder>>(Base: T): T & Constructor<ISoundDescriptorFilterQueryBuilder> => {
    return class extends Base {
        /** @inheritdoc */
        withLoudness(value: number): this {
            return this.withFilter("loudness", value);
        }

        /** @inheritdoc */
        withDynamicRange(value: number): this {
            return this.withFilter("dynamic_range", value);
        }

        /** @inheritdoc */
        withTemporalCentroid(value: number): this {
            return this.withFilter("temporal_centroid", value);
        }

        /** @inheritdoc */
        withLogAttackTime(value: number): this {
            return this.withFilter("log_attack_time", value);
        }

        /** @inheritdoc */
        withSingleEvent(value: boolean): this {
            return this.withFilter("single_event", value);
        }

        /** @inheritdoc */
        withTonality(value: string): this {
            return this.withFilter("tonality", value);
        }

        /** @inheritdoc */
        withTonalityConfidence(min: number, max: number = 1.0): this {
            return this.withNumericRangeFilter("tonality_confidence", min, max);
        }

        /** @inheritdoc */
        withLoopable(value: boolean): this {
            return this.withFilter("loopable", value);
        }

        /** @inheritdoc */
        withBpm(value: number): this {
            return this.withFilter("bpm", value);
        }

        /** @inheritdoc */
        withBpmConfidence(min: number, max: number = 1.0): this {
            return this.withNumericRangeFilter("bpm_confidence", min, max);
        }

        /** @inheritdoc */
        withNoteMidi(value: number): this {
            return this.withFilter("note_midi", value);
        }

        /** @inheritdoc */
        withNoteName(value: string): this {
            return this.withFilter("note_name", value);
        }

        /** @inheritdoc */
        withPitch(value: number): this {
            return this.withFilter("pitch", value);
        }

        /** @inheritdoc */
        withNoteConfidence(min: number, max: number = 1.0): this {
            return this.withNumericRangeFilter("note_confidence", min, max);
        }

        /** @inheritdoc */
        withBrightness(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("brightness", min, max);
        }

        /** @inheritdoc */
        withDepth(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("depth", min, max);
        }

        /** @inheritdoc */
        withHardness(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("hardness", min, max);
        }

        /** @inheritdoc */
        withRoughness(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("roughness", min, max);
        }

        /** @inheritdoc */
        withBoominess(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("boominess", min, max);
        }

        /** @inheritdoc */
        withWarmth(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("warmth", min, max);
        }

        /** @inheritdoc */
        withSharpness(min: number, max: number = 100.0): this {
            return this.withNumericRangeFilter("sharpness", min, max);
        }

    }
}

export default SoundDescriptorFilterQueryBuilder;
