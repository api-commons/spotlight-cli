---
number: 1637
title: "Improve Ruleset validation"
state: "closed"
labels: []
author: "mnaumanali94"
created: "2021-05-25T07:59:37Z"
updated: "2021-06-16T05:57:28Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1637"
---

# Improve Ruleset validation

## To Reproduce

Use `.spectral.yml`:

```yml
extends: 'spectral:oas'
rules:
  se_oas3_components_must_exist:
    type: style
    given: $
    formats:
      - oas3
    message: '{{error}}'
    then:
      field: components
      function: schema
      functionOptions:
        type: object
        minItems: 1
```

Look at validations for spectral file.

## Expected Results

I would expect one error relating to the lack of a `schema` object under `functionOptions`.

## Actual Results

<img width="1129" alt="image" src="https://user-images.githubusercontent.com/4060903/84416079-545f3500-abd9-11ea-8092-07f68daa0489.png">

This made fixing a simple problem a goose chase. The CLI at least returns the actual error, though a ton of extra garbage:

```bash
$ spectral lint -r ~/Downloads/se-spectral.yml ~/Documents/Stoplight\ Studio/test/test.v1.json
/rules/se_oas3_components_must_exist/then/functionOptions should NOT have additional properties
/rules/se_oas3_components_must_exist/then/functionOptions should have required property 'schema'
/rules/se_oas3_components_must_exist/then should match "then" schema
/rules/se_oas3_components_must_exist/then should be array
/rules/se_oas3_components_must_exist/then should match some schema in anyOf
/rules/se_oas3_components_must_exist should be string
/rules/se_oas3_components_must_exist should be equal to one of the allowed values
/rules/se_oas3_components_must_exist should be boolean
/rules/se_oas3_components_must_exist should be array
/rules/se_oas3_components_must_exist should match exactly one schema in oneOf
```

## Expected

Improve the ruleset validation to show better errors for spectral rulesets
