import SoundDescriptorFilterQueryBuilder from "./builders/sound-descriptor-filter-query-builder";
import DefaultFilterQueryBuilder from "./builders/default-filter-query-builder";
import FieldQueryBuilder from "./builders/field-query-builder";
import QueryBuilder from "./builders/query-builder";

/**
 * A specialized query builder for creating requests to the Freesound API.
 *
 * Composes `SoundDescriptorFilterQueryBuilder`, `DefaultFilterQueryBuilder`,
 * `FieldQueryBuilder`, and `QueryBuilder` into a single fluent interface.
 */
export default class FreesoundRequestBuilder extends
    SoundDescriptorFilterQueryBuilder(
        DefaultFilterQueryBuilder(
            FieldQueryBuilder(QueryBuilder)))
{
}
