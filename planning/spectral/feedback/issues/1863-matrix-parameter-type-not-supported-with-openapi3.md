---
number: 1863
title: "matrix parameter type not supported with openapi3"
state: "closed"
labels: ["enhancement", "released", "OpenAPI"]
author: "lintaba"
created: "2021-10-03T19:19:34Z"
updated: "2021-10-19T12:12:21Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1863"
---

# matrix parameter type not supported with openapi3

**Describe the bug**
openapi 3 (or swagger2) supports matrix parameter style, which looks like this:
`/foo/bar;key=value/baz`
in this case, the query path should look like this: `/foo/bar{;key}/baz`.
however its currently not supported, and gives the following error message: 
`Parameter "key" must be used in path "/foo/bar{;key}/baz".`
It most probably comes from https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/oas/functions/oasPathParam.ts#L5 , where the regex does not matches `;`. Note to mention, that it may also contains asterix (`*`) and question mark (`?`) by the specification.

Also it seems it doesnt work even without the `;` , when there are more than one parameters are given.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document '...'
```json
{
  "openapi": "3.0.0",
  "info": { "title": "matrix failure", "version": "1.0"},
  "servers": [{"url": "http://localhost:3000"}],
  "paths": {
    "/foo{;key}": {
      "parameters": [
        {
          "name": "key",
          "in": "path",
          "schema": {
            "type": "string"
          },
          "required": true,
          "style": "matrix"
        }
      ],
      "get": { "responses": { "200": { "description": "OK"} } } },
    "/foo{key}{another}": {
      "parameters": [
        {
          "name": "key",
          "in": "path",
          "schema": {
            "type": "string"
          },
          "required": true,
          "style": "matrix"
        },
        {
          "name": "another",
          "in": "path",
          "schema": {
            "type": "string"
          },
          "required": true,
          "style": "matrix"
        }
      ],
      "get": { "responses": { "200": { "description": "OK"} } } }
	}
}

```
2. Run this CLI command:
```bash
$ cat .spectral.json 
{\n\t"extends": ["spectral:oas", "spectral:asyncapi"]\n}
$ spectral lint example.json
[...]
 8:28    error  path-params                 Parameter "key" must be used in path "/foo{;key}".             paths./foo{;key}.parameters[0]
  30:9    error  path-params            Parameter "another" must be used in path "/foo{key}{another}".                            paths./foo{key}{another}.parameters[1]
 40:13    error  path-params            Operation must define parameter "{keyanother}" as expected by path "/foo{key}{another}".  paths./foo{key}{another}.get

```


**Expected behavior**
Expected to support matrix parameters :)

**Environment (remove any that are not applicable):**
 - Library version: `6.0.0`
 - OS: osx

**Additional context**

related specs: https://swagger.io/docs/specification/serialization/#query
