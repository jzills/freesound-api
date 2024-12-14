import { Freesound, QueryBuilder } from "freesound-api";

async function sample() {
    const fs = new Freesound("...");
    const response = await fs.searchText(new QueryBuilder()
        .withPageSize(3)
        .withQuery("piano")
    );

    console.log(response);
}

sample();