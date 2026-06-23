---
number: 2787
title: "The schemas at `packages/core/src/ruleset/meta` are invalid"
state: "open"
labels: []
author: "jviotti"
created: "2025-02-25T01:03:21Z"
updated: "2025-02-25T01:32:37Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2787"
---

# The schemas at `packages/core/src/ruleset/meta` are invalid

Hey there! JSON Schema TSC member here. I'm trying to ingest the JSON Schemas maintained in this repository in my public JSON Schema registry (https://schemas.sourcemeta.com) (see https://github.com/sourcemeta/registry/issues/146). While trying to do so, I uncovered a few problems with the schemas:

- Both https://github.com/stoplightio/spectral/blob/develop/packages/core/src/ruleset/meta/js-extensions.json and https://github.com/stoplightio/spectral/blob/develop/packages/core/src/ruleset/meta/json-extensions.json have the same `$id`

- Most schemas make use of `$anchor`, which is a keyword introduced in JSON Schema 2019-09, and invalid in Draft 7 (see https://www.learnjsonschema.com/2019-09/core/anchor/). In Draft 7, `$id` was used for the same purpose. i.e. `"$anchor": "foo"` was `"$id": "#foo"`

- Most schemas make use of `$defs`, which is also a keyword introduced in JSON Schema 2019-09, and not recognised in Draft 7 (see https://www.learnjsonschema.com/2019-09/core/defs/). While many implementations are a bit permissive and may consider `$ref` targets as subschemas, you have schemas like https://github.com/stoplightio/spectral/blob/develop/packages/core/src/ruleset/meta/shared.json, which serve as containers for anchored schemas. Because those are within `$defs`, the entire thing just gets ignored. You probably meant `definitions` in all of them

- It is an anti-pattern for top-level `$id` to be relative URIs. Many implementations won't gracefully handle that. It uncovered a bug on my implementation (good stress test after all!) which I'm fixing now, but might be worth just adopting absolute URIs or even URNs if you don't expect to expose these schemas over HTTP yourselves

Maybe there are more issues, but at least those ones seemed to be the obvious ones making my tooling choke.

If I may ask, are you testing or validating those schemas at all right now? Just curious if there is a specific implementation that is somehow allowing the current use of invalid keywords.

I also recommend taking a look at my JSON Schema CLI tool (https://github.com/sourcemeta/jsonschema). Many projects use it on CI/CD (we have an easy to use GitHub Action for it) to:

- Validate schemas against their meta schemas (the `metaschema` command)
- Lint schemas (the `lint` command)
- Run unit tests against the schemas (the `test` command)

Could be useful to avoid issues in the future! Happy to assist in all of the above!
