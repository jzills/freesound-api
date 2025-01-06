
# Freesound-Api

[![NPM Version](https://img.shields.io/npm/v/freesound-api)](https://www.npmjs.com/package/freesound-api) [![NPM Downloads](https://img.shields.io/npm/d18m/freesound-api)](https://www.npmjs.com/package/freesound-api)

## Usage

Import the `Freesound` client and the `FreesoundRequestBuilder`.

    import { Freesound, FreesoundRequestBuilder } from "freesound-api";

> [!NOTE]
> The `FreesoundRequestBuilder` encapsulates multiple builder variations that can be used for querying, filtering and so on. The individual builders can be imported directly as well and used instead if only a subset of features are required. The other available builders are `AudioCommonsFilterQueryBuilder`, `DefaultFilterQueryBuilder`, `FieldQueryBuilder` and `QueryBuilder`.

Create a `Freesound` client instance.

    const client = new Freesound("YOUR_API_KEY");

Call one of the available methods.

    const response = await client.searchText(
        new FreesoundRequestBuilder()
            .withQuery("drums")
            .withPageSize(5)
            .includeField("username")
        );

> [!NOTE]
> Currently, the only available method is *searchText*. This method corresponds to [this](https://freesound.org/docs/api/resources_apiv2.html#search-resources) definition. 

The response is of type `FreesoundResponse` which can be found [here](./types/freesound-response.ts). 