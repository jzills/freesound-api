import { Constructor } from "../freesound-request-builder";
import QueryBuilder from "./query-builder";

/**
 * Interface for filtering audio commons query parameters.
 */
export interface IAudioCommonsFilterQueryBuilder {
    /**
     * Filters sounds by their integrated loudness (LUFS) measured using the EBU R128 standard.
     * @param value - The loudness value.
     * @returns {this} The current instance for chaining.
     */
    withLoudness(value: number): this;

    /**
     * Filters sounds by their loudness range (dB, LU) measured using the EBU R128 standard.
     * @param value - The dynamic range value.
     * @returns {this} The current instance for chaining.
     */
    withDynamicRange(value: number): this;

    /**
     * Filters sounds by their temporal centroid (sec.) of the audio signal.
     * @param value - The temporal centroid value.
     * @returns {this} The current instance for chaining.
     */
    withTemporalCentroid(value: number): this;

    /**
     * Filters sounds by the log (base 10) of the attack time of a signal envelope.
     * @param value - The log attack time value.
     * @returns {this} The current instance for chaining.
     */
    withLogAttackTime(value: number): this;

    /**
     * Filters sounds based on whether they contain one single audio event or more.
     * @param value - `true` if the sound contains a single event, `false` otherwise.
     * @returns {this} The current instance for chaining.
     */
    withSingleEvent(value: boolean): this;

    /**
     * Filters sounds by their tonality (e.g., "C minor", "F# major").
     * @param value - The tonality in the format "root_note scale".
     * @returns {this} The current instance for chaining.
     */
    withTonality(value: string): this;

    /**
     * Filters sounds by the confidence level of the tonality estimation.
     * @param value - The confidence value between 0 and 1.
     * @returns {this} The current instance for chaining.
     */
    withTonalityConfidence(value: number): this;

    /**
     * Filters sounds based on whether they are loopable.
     * @param value - `true` if the sound is loopable, `false` otherwise.
     * @returns {this} The current instance for chaining.
     */
    withLoop(value: boolean): this;

    /**
     * Filters sounds by their tempo (BPM) estimated by beat tracking algorithm.
     * @param value - The BPM value.
     * @returns {this} The current instance for chaining.
     */
    withTempo(value: number): this;

    /**
     * Filters sounds by the confidence level of the tempo estimation.
     * @param value - The confidence value between 0 and 1.
     * @returns {this} The current instance for chaining.
     */
    withTempoConfidence(value: number): this;

    /**
     * Filters sounds by the MIDI value corresponding to the estimated note.
     * @param value - The MIDI value.
     * @returns {this} The current instance for chaining.
     */
    withNoteMidi(value: number): this;

    /**
     * Filters sounds by the pitch note name based on the median of the estimated fundamental frequency.
     * @param value - The note name (e.g., "A4", "E#7").
     * @returns {this} The current instance for chaining.
     */
    withNoteName(value: string): this;

    /**
     * Filters sounds by the frequency corresponding to the estimated note.
     * @param value - The frequency value in Hz.
     * @returns {this} The current instance for chaining.
     */
    withNoteFrequency(value: number): this;

    /**
     * Filters sounds by the confidence level of the note name/MIDI/frequency estimation.
     * @param value - The confidence value between 0 and 1.
     * @returns {this} The current instance for chaining.
     */
    withNoteConfidence(value: number): this;

    /**
     * Filters sounds by their brightness on a scale from 0 to 100.
     * @param value - The brightness value.
     * @returns {this} The current instance for chaining.
     */
    withBrightness(value: number): this;

    /**
     * Filters sounds by their depth on a scale from 0 to 100.
     * @param value - The depth value.
     * @returns {this} The current instance for chaining.
     */
    withDepth(value: number): this;

    /**
     * Filters sounds by their hardness on a scale from 0 to 100.
     * @param value - The hardness value.
     * @returns {this} The current instance for chaining.
     */
    withHardness(value: number): this;

    /**
     * Filters sounds by their roughness on a scale from 0 to 100.
     * @param value - The roughness value.
     * @returns {this} The current instance for chaining.
     */
    withRoughness(value: number): this;

    /**
     * Filters sounds by their boominess on a scale from 0 to 100.
     * @param value - The boominess value.
     * @returns {this} The current instance for chaining.
     */
    withBoominess(value: number): this;

    /**
     * Filters sounds by their warmth on a scale from 0 to 100.
     * @param value - The warmth value.
     * @returns {this} The current instance for chaining.
     */
    withWarmth(value: number): this;

    /**
     * Filters sounds by their sharpness on a scale from 0 to 100.
     * @param value - The sharpness value.
     * @returns {this} The current instance for chaining.
     */
    withSharpness(value: number): this;

    /**
     * Filters sounds based on whether the signal is reverberated.
     * @param value - `true` if the sound has reverb, `false` otherwise.
     * @returns {this} The current instance for chaining.
     */
    withReverb(value: boolean): this;
}

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