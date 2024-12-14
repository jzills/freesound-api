import AudioCommonsFilterQueryBuilder from "./AudioCommonsFilterQueryBuilder";
import DefaultFilterQueryBuilder from "./DefaultFilterQueryBuilder";
import FieldQueryBuilder from "./FieldQueryBuilder";
import QueryBuilder from "./QueryBuilder";

export type Constructor<T = {}> = new (...args: any[]) => T;

export default class FreesoundRequestBuilder extends
    DefaultFilterQueryBuilder(
        AudioCommonsFilterQueryBuilder(
            FieldQueryBuilder(QueryBuilder)))
{
}