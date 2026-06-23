---
number: 2795
title: "Docs: Overrides first example is invalid"
state: "open"
labels: ["documentation", "triaged"]
author: "Relequestual"
created: "2025-03-17T11:40:16Z"
updated: "2025-03-18T15:00:21Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2795"
---

# Docs: Overrides first example is invalid

Using Spectral 6.14.2.
Docs: https://docs.stoplight.io/docs/spectral/293426e270fac-overrides

```yaml
overrides:
  formats:
    - json-schema-draft7
  files:
    - schemas/**/*.draft7.json
  rules:
    valid-number-validation:
      given:
        - $..exclusiveMinimum
        - $..exclusiveMaximum
      then:
        function: schema
        functionOptions:
          type: number
```

The value of overrides must be an array, although this isn't clearly documented.


Using this config results in the following error:

```
Error running Spectral!
Error #1: must be array
          at                     …dation/errors.js:57  return new RulesetV…
          at flatMap                                                       
          at convertAjvErrors    …dation/errors.js:51  return filteredErro…
          at assertValidRuleset  …on/assertions.js:19  throw new es_aggreg…
          at new Ruleset         …leset/ruleset.js:31  (0, index_1.assertV…
```

The error message is not ideal. What must be an array? Who knows.

I can't seem to find a JSON Schema for the config file. Do you have one?

In addition, [per documentation](https://meta.stoplight.io/docs/spectral/cb95cf0d26b83-core-functions#schema), if the `function` is schema, the `functionOptions` object shown in the example, must be nested under `schema`.

```
Error running Spectral!
Error #1: "schema" function has invalid options specified. Example valid options: { "schema": { /* any JSON Schema can be defined here */ } , { "schema": { "type": "object" }, "dialect": "auto" }
          at                   …set/function.js:101  throw new Aggregate…
          at map                                                         
          at validator         …set/function.js:101  throw new Aggregate…
          at validateFunction  …tors/function.js:17  validator(opts);    
          at validate26        …ompile/index.ts:171  const makeValidate …
```
