---
number: 1556
title: "Missing `json-schema` drafts"
state: "closed"
labels: ["enhancement"]
author: "yordis"
created: "2021-03-23T12:04:38Z"
updated: "2021-04-29T12:10:12Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1556"
---

# Missing `json-schema` drafts

**Describe the bug**

It seems that spectral doesn't support all the JSON-Schema published drafts 

**To Reproduce**

```yaml
# .spectral.yaml
rules:
  events-schemas:
    description: Must follow the Events schema
    given: '$'
    then:
      function: schema
      functionOptions:
        schema:
          $ref: ./events.json
```

```jsonc
// data file: ./events/data/events.json
{
  "$schema": "./events.json", // points to some schema locally
}
```

```jsonc
{
  "$schema": "https://json-schema.org/draft/2020-12/schema", // this is the issue, it is not recognized by ajv
  "type": "object"
}
```

Run

```
spectral lint ./events/data/events.json --ignore-unknown-format

**Expected behavior**
A clear and concise description of what you expected to happen.

```text
$ spectral lint ./events/data/events.json --ignore-unknown-format
Error: no schema with key or ref "https://json-schema.org/draft/2020-12/schema"
    at Ajv.validate (/myapp/spec/node_modules/ajv/lib/ajv.js:93:19)
    at Ajv.validateSchema (/myapp/spec/node_modules/ajv/lib/ajv.js:174:20)
    at Ajv._addSchema (/myapp/spec/node_modules/ajv/lib/ajv.js:307:10)
    at Ajv.compile (/myapp/spec/node_modules/ajv/lib/ajv.js:113:24)
    at WeakMap.get (/myapp/spec/node_modules/@stoplight/spectral/dist/functions/schema.js:70:29)
    at Object.exports.schema (/myapp/spec/node_modules/@stoplight/spectral/dist/functions/schema.js:92:87)
    at Object.exports.lintNode (/myapp/spec/node_modules/@stoplight/spectral/dist/runner/lintNode.js:30:33)
    at runRule (/myapp/spec/node_modules/@stoplight/spectral/dist/runner/runner.js:27:24)
    at Runner.run (/myapp/spec/node_modules/@stoplight/spectral/dist/runner/runner.js:98:17)
    at Spectral.runWithResolved (/myapp/spec/node_modules/@stoplight/spectral/dist/spectral.js:101:22)
No results with a severity of 'error' or higher found!
```

**Environment (remove any that are not applicable):**
 - "@stoplight/spectral": "^5.9.0"
