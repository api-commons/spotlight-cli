---
number: 1942
title: "Overrides in Spectral 6"
category: "Q&A"
author: "krousseau"
created: "2021-11-04T13:54:27Z"
upvotes: 2
comments: 2
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1942"
---

# Overrides in Spectral 6

Hi all,

I am trying to migrate from v5 to v6 and am getting hung up on overrides. Any format I try for `files` is throwing the following error:
```
Ruleset must have some source assigned. If you use Spectral programmatically make sure to pass the source to Ruleset
```
Everything works fine (besides the list of errors I receive) when I don't include overrides.

Here's the example of what I'm doing 
ruleset.js
```
overrides: [{
    "files": ["../../generated/openapi3/api.json#/paths/foo/delete/requestBody/content/application~1vnd.segment.v1alpha+json/example/rules/0"],
    "rules": {
      "delete-request-format": "off"
    }
  }]
```
Note, I've also tried many different paths (including `*`, `**/*.json`, `api.json`, `**/api.json`)

The following worked in v5 in `ruleset.json`:
```
"except": {
    "../../generated/openapi3/api.json#/paths/foo/delete/requestBody/content/application~1vnd.segment.v1alpha+json/example/rules/0": [
      "delete-request-format"
    ],
```

My validate function does the following:
```
  const document = new Document(openApiJson, JsonParser, '/some/absolute/path/generated/openapi3/api.json')
  const spectral = new Spectral()
  await setSpectralRuleset(spectral, path.join(__dirname, 'ruleset.js'))
  const results = await spectral.run(document)
```

## ✅ Accepted answer — @krousseau

After a bit more exploration and digging into the code I found that I needed to do the following:
```
  const m = require(rulesetPath)
  const rulesetFML = new Ruleset(m, { source: openApiSpecPath })
```

If this is actually required for overrides, then it would be great if it can be added to the docs.
