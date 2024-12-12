/**
 * A builder class for constructing Freesound API search requests with various filters.
 */
export default class FreesoundQueryBuilder {
    private readonly query: string[] = [];
    private readonly fields: string[] = [];
    private readonly filter: string[] = [];

    /**
     * Adds a search query to the request.
     * @param {string} value - The search term to query.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withQuery(value: string): this {
        this.query.push(encodeURIComponent(value));
        return this;
    }

    /**
     * Specifies which fields to include in the response.
     * @param {string} value - The field name to include.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withField(value: string): this {
        this.fields.push(encodeURIComponent(value));
        return this;
    }

    /**
     * Adds a generic filter to the request.
     * @param {string} name - The name of the filter.
     * @param {number | string | boolean} value - The value of the filter.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withFilter(name: string, value: number | string | boolean): this {
        const encodedValue = encodeURIComponent(value.toString());
        this.filter.push(`${encodeURIComponent(name)}:${encodedValue}`);
        return this;
    }

    /**
     * Filters sounds by their integrated loudness (LUFS) measured using the EBU R128 standard.
     * @param {number} value - The loudness value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withLoudness(value: number): this {
        return this.withFilter("ac_loudness", value);
    }

    /**
     * Filters sounds by their loudness range (dB, LU) measured using the EBU R128 standard.
     * @param {number} value - The dynamic range value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withDynamicRange(value: number): this {
        return this.withFilter("ac_dynamic_range", value);
    }

    /**
     * Filters sounds by their temporal centroid (sec.) of the audio signal.
     * @param {number} value - The temporal centroid value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withTemporalCentroid(value: number): this {
        return this.withFilter("ac_temporal_centroid", value);
    }

    /**
     * Filters sounds by the log (base 10) of the attack time of a signal envelope.
     * @param {number} value - The log attack time value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withLogAttackTime(value: number): this {
        return this.withFilter("ac_log_attack_time", value);
    }

    /**
     * Filters sounds based on whether they contain one single audio event or more.
     * @param {boolean} value - `true` if the sound contains a single event, `false` otherwise.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withSingleEvent(value: boolean): this {
        return this.withFilter("ac_single_event", value);
    }

    /**
     * Filters sounds by their tonality (e.g., "C minor", "F# major").
     * @param {string} value - The tonality in the format "root_note scale".
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withTonality(value: string): this {
        return this.withFilter("ac_tonality", value);
    }

    /**
     * Filters sounds by the confidence level of the tonality estimation.
     * @param {number} value - The confidence value between 0 and 1.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withTonalityConfidence(value: number): this {
        return this.withFilter("ac_tonality_confidence", value);
    }

    /**
     * Filters sounds based on whether they are loopable.
     * @param {boolean} value - `true` if the sound is loopable, `false` otherwise.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withLoop(value: boolean): this {
        return this.withFilter("ac_loop", value);
    }

    /**
     * Filters sounds by their tempo (BPM) estimated by beat tracking algorithm.
     * @param {number} value - The BPM value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withTempo(value: number): this {
        return this.withFilter("ac_tempo", value);
    }

    /**
     * Filters sounds by the confidence level of the tempo estimation.
     * @param {number} value - The confidence value between 0 and 1.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withTempoConfidence(value: number): this {
        return this.withFilter("ac_tempo_confidence", value);
    }

    /**
     * Filters sounds by the MIDI value corresponding to the estimated note.
     * @param {number} value - The MIDI value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withNoteMidi(value: number): this {
        return this.withFilter("ac_note_midi", value);
    }

    /**
     * Filters sounds by the pitch note name based on the median of the estimated fundamental frequency.
     * @param {string} value - The note name (e.g., "A4", "E#7").
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withNoteName(value: string): this {
        return this.withFilter("ac_note_name", value);
    }

    /**
     * Filters sounds by the frequency corresponding to the estimated note.
     * @param {number} value - The frequency value in Hz.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withNoteFrequency(value: number): this {
        return this.withFilter("ac_note_frequency", value);
    }

    /**
     * Filters sounds by the confidence level of the note name/MIDI/frequency estimation.
     * @param {number} value - The confidence value between 0 and 1.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withNoteConfidence(value: number): this {
        return this.withFilter("ac_note_confidence", value);
    }

    /**
     * Filters sounds by their brightness on a scale from 0 to 100.
     * @param {number} value - The brightness value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withBrightness(value: number): this {
        return this.withFilter("ac_brightness", value);
    }

    /**
     * Filters sounds by their depth on a scale from 0 to 100.
     * @param {number} value - The depth value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withDepth(value: number): this {
        return this.withFilter("ac_depth", value);
    }

    /**
     * Filters sounds by their hardness on a scale from 0 to 100.
     * @param {number} value - The hardness value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withHardness(value: number): this {
        return this.withFilter("ac_hardness", value);
    }

    /**
     * Filters sounds by their roughness on a scale from 0 to 100.
     * @param {number} value - The roughness value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withRoughness(value: number): this {
        return this.withFilter("ac_roughness", value);
    }

    /**
     * Filters sounds by their boominess on a scale from 0 to 100.
     * @param {number} value - The boominess value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withBoominess(value: number): this {
        return this.withFilter("ac_boominess", value);
    }

    /**
     * Filters sounds by their warmth on a scale from 0 to 100.
     * @param {number} value - The warmth value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withWarmth(value: number): this {
        return this.withFilter("ac_warmth", value);
    }

    /**
     * Filters sounds by their sharpness on a scale from 0 to 100.
     * @param {number} value - The sharpness value.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withSharpness(value: number): this {
        return this.withFilter("ac_sharpness", value);
    }

    /**
     * Filters sounds based on whether the signal is reverberated.
     * @param {boolean} value - `true` if the sound has reverb, `false` otherwise.
     * @returns {FreesoundRequestBuilder} The current instance for chaining.
     */
    withReverb(value: boolean): this {
        return this.withFilter("ac_reverb", value);
    }

    /**
     * Builds the final URL for the Freesound API request with all specified queries, fields, and filters.
     * @returns {string} The complete API request URL.
     */
    build(APIKey: string): string {
        let url = "";

        if (this.query.length) {
            url += `query=${this.query.join("&")}&`;
        }

        if (this.fields.length) {
            url += `fields=${this.fields.join(",")}&`;
        }

        if (this.filter.length) {
            url += `filter=${this.filter.join("&")}&`;
        }

        url += `token=${APIKey}`;
        return url;
    }
}