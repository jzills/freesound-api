import AudioCommonsFilterQueryBuilder from "./builders/audio-commons-filter-query-builder";
import DefaultFilterQueryBuilder from "./builders/default-filter-query-builder";
import FieldQueryBuilder from "./builders/field-query-builder";
import QueryBuilder from "./builders/query-builder";

/**
 * A specialized query builder for creating requests to the Freesound API.
 * 
 * This class extends a composition of query builder classes, 
 * including `AudioCommonsFilterQueryBuilder`, `DefaultFilterQueryBuilder`, 
 * `FieldQueryBuilder`, and `QueryBuilder`, to provide additional functionality 
 * for constructing complex Freesound API requests.
 */
export default class FreesoundRequestBuilder extends 
    AudioCommonsFilterQueryBuilder(
        DefaultFilterQueryBuilder(
            FieldQueryBuilder(QueryBuilder))) 
{
}