import AudioCommonsFilterQueryBuilder from "./builders/AudioCommonsFilterQueryBuilder";
import DefaultFilterQueryBuilder from "./builders/DefaultFilterQueryBuilder";
import FieldQueryBuilder from "./builders/FieldQueryBuilder";
import QueryBuilder from "./builders/QueryBuilder";

export type Constructor<T = {}> = new (...args: any[]) => T;

export default class FreesoundRequestBuilder extends
    AudioCommonsFilterQueryBuilder(
        DefaultFilterQueryBuilder(
            FieldQueryBuilder(QueryBuilder)))
{
}