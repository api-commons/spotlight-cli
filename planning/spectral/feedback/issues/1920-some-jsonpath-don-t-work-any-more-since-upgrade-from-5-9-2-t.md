---
number: 1920
title: "some JsonPath don't work any more since upgrade from 5.9.2 to 6.1.0"
state: "closed"
labels: []
author: "OnimeNoKyo"
created: "2021-10-29T15:17:19Z"
updated: "2022-06-18T14:40:04Z"
comments: 8
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1920"
---

# some JsonPath don't work any more since upgrade from 5.9.2 to 6.1.0

**Describe the bug**
Since an upgrade from 5.9.2 to 6.1.0, some given JsonPath don't work anymore

**To Reproduce**

1. Given this OpenAPI
```yaml
openapi: "3.0.0"

info:
  title: Wonderful API
  description: A super cool API that does cray stuff
  version: "1.0.0"

paths:
  /resources/{id}:
    post:
      summary: with unitary id
    parameters:
      - in: query
        name: id
        required: true
        schema:
          type: string
```
2. Given this CustomRule Set
```yaml
rules:
  http-method-no-post-on-unit-resource:
    recommended: true
    description: Post cannot be used on unitary resource (/resources/{id})
    message: "{{description}} ({{path}})"
    severity: error
    tags:
      - http method
    given: $.paths[?(/^((\/[a-z0-9\-_]+)?\/v[0-9]+)?(\/[a-z0-9\-_]+\/(?!search)[a-z0-9\-_{}]+)+$/i.test(@property))]
    then:
      - field: "@key"
        function: pattern
        functionOptions:
          match: "^(parameters|x-.*|get|put|patch|delete)$"
``` 
3. Run this CLI command
```bash
npm i --force -g @stoplight/spectral@5.9.2 &&
spectral --version &&
spectral lint example-openapi.yaml -r http-method-ruleset.yaml
```
4. See error
```bash
evalmachine.<anonymous>:1
/^((/[a-z0-9-_]+)?/v[0-9]+)?(/[a-z0-9-_]+/(?!search)[a-z0-9-_{}]+)+$/i.test(_$_property)
                ^

SyntaxError: Unexpected token ')'
    at new Script (vm.js:102:7)
    at createScript (vm.js:262:10)
    at Object.runInNewContext (vm.js:303:10)
    at JSONPath._eval (C:\work\data\npm\node_modules\@stoplight\spectral-cli\node_modules\jsonpath-plus\dist\index-node-cjs.cjs:643:20)
    at C:\work\data\npm\node_modules\@stoplight\spectral-cli\node_modules\jsonpath-plus\dist\index-node-cjs.cjs:420:16
    at C:\work\data\npm\node_modules\@stoplight\spectral-cli\node_modules\jsonpath-plus\dist\index-node-cjs.cjs:576:7
    at Array.forEach (<anonymous>)
    at JSONPath._walk (C:\work\data\npm\node_modules\@stoplight\spectral-cli\node_modules\jsonpath-plus\dist\index-node-cjs.cjs:575:22)
    at JSONPath._trace (C:\work\data\npm\node_modules\@stoplight\spectral-cli\node_modules\jsonpath-plus\dist\index-node-cjs.cjs:419:10)
    at JSONPath._trace (C:\work\data\npm\node_modules\@stoplight\spectral-cli\node_modules\jsonpath-plus\dist\index-node-cjs.cjs:536:17)
jsonPath: Unexpected token ')': /^((/[a-z0-9-_]+)?/v[0-9]+)?(/[a-z0-9-_]+/(?!search)[a-z0-9-_{}]+)+$/i.test(_$_property)
```

**Expected behavior**
using v5.9.2, it's working perfectly
```bash
OpenAPI 3.x detected

c:/api-linter/samples/example-openapi.yaml
 10:10  error  http-method-no-post-on-unit-resource  Post cannot be used on unitary resource (/resources/{id}) (#/paths/~1resources~1{id}/post)  paths./resources/{id}.post

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

**Environment (remove any that are not applicable):**
 - Library version: 6.1.0
 - OS: Windows 10
