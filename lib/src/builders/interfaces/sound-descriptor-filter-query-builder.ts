/**
 * Interface for filtering sounds by audio descriptor properties.
 */
export interface ISoundDescriptorFilterQueryBuilder {
    /**
     * Filters sounds by their integrated loudness (LUFS) measured using the EBU R128 standard.
     * @param value - The loudness value.
     */
    withLoudness(value: number): this;

    /**
     * Filters sounds by their loudness range (dB, LU) measured using the EBU R128 standard.
     * @param value - The dynamic range value.
     */
    withDynamicRange(value: number): this;

    /**
     * Filters sounds by their temporal centroid (sec.) of the audio signal.
     * @param value - The temporal centroid value.
     */
    withTemporalCentroid(value: number): this;

    /**
     * Filters sounds by the log (base 10) of the attack time of a signal envelope.
     * @param value - The log attack time value.
     */
    withLogAttackTime(value: number): this;

    /**
     * Filters sounds based on whether they contain one single audio event or more.
     * @param value - `true` if the sound contains a single event, `false` otherwise.
     */
    withSingleEvent(value: boolean): this;

    /**
     * Filters sounds by their tonality (e.g., "C minor", "F# major").
     * @param value - The tonality in the format "root_note scale".
     */
    withTonality(value: string): this;

    /**
     * Filters sounds by the confidence level of the tonality estimation.
     * @param min - The minimum confidence value between 0 and 1.
     * @param max - The maximum confidence value between 0 and 1.
     */
    withTonalityConfidence(min: number, max: number): this;

    /**
     * Filters sounds based on whether they are loopable.
     * @param value - `true` if the sound is loopable, `false` otherwise.
     */
    withLoopable(value: boolean): this;

    /**
     * Filters sounds by their tempo in beats per minute.
     * @param value - The BPM value.
     */
    withBpm(value: number): this;

    /**
     * Filters sounds by the confidence level of the BPM estimation.
     * @param min - The minimum confidence value between 0 and 1.
     * @param max - The maximum confidence value between 0 and 1.
     */
    withBpmConfidence(min: number, max: number): this;

    /**
     * Filters sounds by the MIDI value corresponding to the estimated note.
     * @param value - The MIDI value.
     */
    withNoteMidi(value: number): this;

    /**
     * Filters sounds by the pitch note name based on the median of the estimated fundamental frequency.
     * @param value - The note name (e.g., "A4", "E#7").
     */
    withNoteName(value: string): this;

    /**
     * Filters sounds by their fundamental frequency (Hz).
     * @param value - The pitch value in Hz.
     */
    withPitch(value: number): this;

    /**
     * Filters sounds by the confidence level of the note estimation.
     * @param min - The minimum confidence value between 0 and 1.
     * @param max - The maximum confidence value between 0 and 1.
     */
    withNoteConfidence(min: number, max: number): this;

    /**
     * Filters sounds by their brightness on a scale from 0 to 100.
     * @param min - The minimum brightness value.
     * @param max - The maximum brightness value.
     */
    withBrightness(min: number, max: number): this;

    /**
     * Filters sounds by their depth on a scale from 0 to 100.
     * @param min - The minimum depth value.
     * @param max - The maximum depth value.
     */
    withDepth(min: number, max: number): this;

    /**
     * Filters sounds by their hardness on a scale from 0 to 100.
     * @param min - The minimum hardness value.
     * @param max - The maximum hardness value.
     */
    withHardness(min: number, max: number): this;

    /**
     * Filters sounds by their roughness on a scale from 0 to 100.
     * @param min - The minimum roughness value.
     * @param max - The maximum roughness value.
     */
    withRoughness(min: number, max: number): this;

    /**
     * Filters sounds by their boominess on a scale from 0 to 100.
     * @param min - The minimum boominess value.
     * @param max - The maximum boominess value.
     */
    withBoominess(min: number, max: number): this;

    /**
     * Filters sounds by their warmth on a scale from 0 to 100.
     * @param min - The minimum warmth value.
     * @param max - The maximum warmth value.
     */
    withWarmth(min: number, max: number): this;

    /**
     * Filters sounds by their sharpness on a scale from 0 to 100.
     * @param min - The minimum sharpness value.
     * @param max - The maximum sharpness value.
     */
    withSharpness(min: number, max: number): this;

}
