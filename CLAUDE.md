# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `lib/` directory.

```bash
cd lib
npm run build   # Compile to dist/ via Vite (ESM + CJS outputs)
npm test        # Run tests in watch mode
npx vitest run  # Run tests once (no watch)
```

Tests are integration tests that hit the live Freesound API. The API key is read from `lib/.env` as `VITE_API_KEY`. A 1-second delay between tests is enforced in `test/setup.ts`.

## Architecture

The library exposes a single client class (`Freesound`) and a set of composable builder classes that construct the query string for the Freesound text search API (`/apiv2/search/text/`).

### Builder composition

Builders follow the TypeScript mixin pattern using a `Constructor<T>` type (`src/types/constructor.ts`). Each mixin function takes a base class and returns an extended class:

```
FreesoundRequestBuilder
  └── SoundDescriptorFilterQueryBuilder
        └── DefaultFilterQueryBuilder
              └── FieldQueryBuilder
                    └── QueryBuilder  ← base class with build()
```

- **`QueryBuilder`** (`src/builders/query-builder.ts`): base class. Holds all internal state (`query`, `fields`, `filter`, pagination, sort, etc.) and implements `build(APIKey)` which serializes everything to a URL query string.
- **`FieldQueryBuilder`** mixin: typed `includeXxx()` convenience methods that delegate to `QueryBuilder.includeField()`.
- **`DefaultFilterQueryBuilder`** mixin: typed `withXxx()` filter methods (id, username, type, license, duration, etc.) that delegate to `QueryBuilder.withFilter()`.
- **`SoundDescriptorFilterQueryBuilder`** mixin: audio-descriptor filter methods (loudness, bpm, tonality, brightness, etc.) using `withFilter()` and `withNumericRangeFilter()`.
- **`FreesoundRequestBuilder`** (`src/freesound-request-builder.ts`): the single public composite builder — extends all four layers.

Individual builders can be imported directly when only a subset of features is needed.

### Build output

Vite builds two formats from `src/index.ts`:
- `dist/freesound-api.js` (ESM)
- `dist/freesound-api.cjs` (CommonJS)

Type declarations are rolled up into `dist/freesound-api.d.ts` via `vite-plugin-dts`.

### Test structure

Tests live in `test/` and are integration tests — they call the real Freesound API. `vitest.config.ts` loads `.env` for the API key and runs tests in a single fork with a 15-second timeout per test.
