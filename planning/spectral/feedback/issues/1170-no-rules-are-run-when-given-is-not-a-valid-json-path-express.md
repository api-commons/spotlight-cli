---
number: 1170
title: "No rules are run when given is not a valid JSON path expression"
state: "closed"
labels: ["t/bug", "p/high", "cs/reported"]
author: "rossmcdonald"
created: "2020-05-19T17:37:04Z"
updated: "2020-05-20T17:30:23Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1170"
---

# No rules are run when given is not a valid JSON path expression

Version:

```
$ spectral --version
5.4.0-beta1
```

## To Reproduce

Using ruleset:

```yml
extends: 'spectral:oas'
rules:
  query_params_must_not_contain_underscore:
    recommended: true
    summary: Query parameters must not contain underscores
    type: style
    given: '$..parameters[?(@.in==query)]'
    then:
      field: name
      function: pattern
      functionOptions:
        notMatch: _
```

Note that `query` should be `"query"`.

## Expected

Just like in v5.3.0, I would expect one syntax error to not impact any other rules:

```bash
$ spectral lint -r ruleset.yml spec.json
OpenAPI 2.0 (Swagger) detected
evalmachine.<anonymous>:1
_$_v.in==query
         ^

ReferenceError: query is not defined
    at evalmachine.<anonymous>:1:10
    at Script.runInContext (vm.js:127:20)
    at Script.runInNewContext (vm.js:133:17)
    at Object.runInNewContext (vm.js:299:38)
    at JSONPath._eval (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:902:17)
    at /Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:654:18
    at JSONPath._walk (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:824:9)
    at JSONPath._trace (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:653:12)
    at JSONPath._trace (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:788:19)
    at JSONPath._trace (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:608:19)
Unable to run rule 'query_params_must_not_contain_underscore':
Error: jsonPath: query is not defined: _$_v.in==query

/Users/ross/Documents/Stoplight Studio/test/OAS-2-Test-API.v1.json
   1:1   warning  openapi-tags           OpenAPI object should have non-empty `tags` array.
  6:20   warning  info-description       OpenAPI object info `description` must be present and non-empty string.
 287:24  warning  operation-description  Operation `description` must be present and non-empty string.
 296:14  warning  operation-description  Operation `description` must be present and non-empty string.
 296:14  warning  operation-tags         Operation should have non-empty `tags` array.

✖ 5 problems (0 errors, 5 warnings, 0 infos, 0 hints)
```

## Actual

Error is encountered and no rules get run:

```sh
$ spectral lint -r ruleset.yml spec.json
OpenAPI 2.0 (Swagger) detected
evalmachine.<anonymous>:1
_$_v.in==query
         ^

ReferenceError: query is not defined
    at evalmachine.<anonymous>:1:10
    at Script.runInContext (vm.js:127:20)
    at Script.runInNewContext (vm.js:133:17)
    at Object.runInNewContext (vm.js:299:38)
    at JSONPath._eval (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:902:17)
    at /Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:654:18
    at JSONPath._walk (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:824:9)
    at JSONPath._trace (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:653:12)
    at JSONPath._trace (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:788:19)
    at JSONPath._trace (/Users/ross/.npm-global/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:608:19)
jsonPath: query is not defined: _$_v.in==query
```

Also it doesn't mention what rule hit the error.
