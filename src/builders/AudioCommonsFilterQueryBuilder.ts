import { Constructor } from "../FreesoundRequestBuilder";
import QueryBuilder from "./QueryBuilder"

export interface IAudioCommonsFilterQueryBuilder {
    withLoudness(value: number): this;
    withDynamicRange(value: number): this;
    withTemporalCentroid(value: number): this;
    withLogAttackTime(value: number): this;
    withSingleEvent(value: boolean): this;
    withTonality(value: string): this;
    withTonalityConfidence(value: number): this;
    withLoop(value: boolean): this;
    withTempo(value: number): this;
    withTempoConfidence(value: number): this;
    withNoteMidi(value: number): this;
    withNoteName(value: string): this;
    withNoteFrequency(value: number): this;
    withNoteConfidence(value: number): this;
    withBrightness(value: number): this;
    withDepth(value: number): this;
    withHardness(value: number): this;
    withRoughness(value: number): this;
    withBoominess(value: number): this;
    withWarmth(value: number): this;
    withSharpness(value: number): this;
    withReverb(value: boolean): this;
}

const AudioCommonsFilterQueryBuilder = <T extends Constructor<QueryBuilder>>(Base: T): T & Constructor<IAudioCommonsFilterQueryBuilder> => {
    return class extends Base {
        /**
         * Filters sounds by their integrated loudness (LUFS) measured using the EBU R128 standard.
         * @param {number} value - The loudness value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withLoudness(value: number): this {
            return this.withFilter("ac_loudness", value);
        }

        /**
         * Filters sounds by their loudness range (dB, LU) measured using the EBU R128 standard.
         * @param {number} value - The dynamic range value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withDynamicRange(value: number): this {
            return this.withFilter("ac_dynamic_range", value);
        }

        /**
         * Filters sounds by their temporal centroid (sec.) of the audio signal.
         * @param {number} value - The temporal centroid value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withTemporalCentroid(value: number): this {
            return this.withFilter("ac_temporal_centroid", value);
        }

        /**
         * Filters sounds by the log (base 10) of the attack time of a signal envelope.
         * @param {number} value - The log attack time value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withLogAttackTime(value: number): this {
            return this.withFilter("ac_log_attack_time", value);
        }

        /**
         * Filters sounds based on whether they contain one single audio event or more.
         * @param {boolean} value - `true` if the sound contains a single event, `false` otherwise.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withSingleEvent(value: boolean): this {
            return this.withFilter("ac_single_event", value);
        }

        /**
         * Filters sounds by their tonality (e.g., "C minor", "F# major").
         * @param {string} value - The tonality in the format "root_note scale".
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withTonality(value: string): this {
            return this.withFilter("ac_tonality", value);
        }

        /**
         * Filters sounds by the confidence level of the tonality estimation.
         * @param {number} value - The confidence value between 0 and 1.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withTonalityConfidence(value: number): this {
            return this.withFilter("ac_tonality_confidence", value);
        }

        /**
         * Filters sounds based on whether they are loopable.
         * @param {boolean} value - `true` if the sound is loopable, `false` otherwise.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withLoop(value: boolean): this {
            return this.withFilter("ac_loop", value);
        }

        /**
         * Filters sounds by their tempo (BPM) estimated by beat tracking algorithm.
         * @param {number} value - The BPM value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withTempo(value: number): this {
            return this.withFilter("ac_tempo", value);
        }

        /**
         * Filters sounds by the confidence level of the tempo estimation.
         * @param {number} value - The confidence value between 0 and 1.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withTempoConfidence(value: number): this {
            return this.withFilter("ac_tempo_confidence", value);
        }

        /**
         * Filters sounds by the MIDI value corresponding to the estimated note.
         * @param {number} value - The MIDI value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withNoteMidi(value: number): this {
            return this.withFilter("ac_note_midi", value);
        }

        /**
         * Filters sounds by the pitch note name based on the median of the estimated fundamental frequency.
         * @param {string} value - The note name (e.g., "A4", "E#7").
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withNoteName(value: string): this {
            return this.withFilter("ac_note_name", value);
        }

        /**
         * Filters sounds by the frequency corresponding to the estimated note.
         * @param {number} value - The frequency value in Hz.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withNoteFrequency(value: number): this {
            return this.withFilter("ac_note_frequency", value);
        }

        /**
         * Filters sounds by the confidence level of the note name/MIDI/frequency estimation.
         * @param {number} value - The confidence value between 0 and 1.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withNoteConfidence(value: number): this {
            return this.withFilter("ac_note_confidence", value);
        }

        /**
         * Filters sounds by their brightness on a scale from 0 to 100.
         * @param {number} value - The brightness value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withBrightness(value: number): this {
            return this.withFilter("ac_brightness", value);
        }

        /**
         * Filters sounds by their depth on a scale from 0 to 100.
         * @param {number} value - The depth value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withDepth(value: number): this {
            return this.withFilter("ac_depth", value);
        }

        /**
         * Filters sounds by their hardness on a scale from 0 to 100.
         * @param {number} value - The hardness value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withHardness(value: number): this {
            return this.withFilter("ac_hardness", value);
        }

        /**
         * Filters sounds by their roughness on a scale from 0 to 100.
         * @param {number} value - The roughness value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withRoughness(value: number): this {
            return this.withFilter("ac_roughness", value);
        }

        /**
         * Filters sounds by their boominess on a scale from 0 to 100.
         * @param {number} value - The boominess value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withBoominess(value: number): this {
            return this.withFilter("ac_boominess", value);
        }

        /**
         * Filters sounds by their warmth on a scale from 0 to 100.
         * @param {number} value - The warmth value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withWarmth(value: number): this {
            return this.withFilter("ac_warmth", value);
        }

        /**
         * Filters sounds by their sharpness on a scale from 0 to 100.
         * @param {number} value - The sharpness value.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withSharpness(value: number): this {
            return this.withFilter("ac_sharpness", value);
        }

        /**
         * Filters sounds based on whether the signal is reverberated.
         * @param {boolean} value - `true` if the sound has reverb, `false` otherwise.
         * @returns {AudioCommonsFilterQueryBuilder} The current instance for chaining.
         */
        withReverb(value: boolean): this {
            return this.withFilter("ac_reverb", value);
        }
    }
}

export default AudioCommonsFilterQueryBuilder;