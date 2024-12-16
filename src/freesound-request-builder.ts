import AudioCommonsFilterQueryBuilder from "./builders/audio-commons-filter-query-builder";
import DefaultFilterQueryBuilder from "./builders/default-filter-query-builder";
import FieldQueryBuilder from "./builders/field-query-builder";
import QueryBuilder from "./builders/query-builder";

export type Constructor<T = {}> = new (...args: any[]) => T;

export default class FreesoundRequestBuilder extends
    AudioCommonsFilterQueryBuilder(
        DefaultFilterQueryBuilder(
            FieldQueryBuilder(QueryBuilder)))
{
}