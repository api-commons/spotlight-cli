---
number: 2093
title: "spectral doesn't work with a schema containing the `$ref` field"
state: "closed"
labels: []
author: "KhudaDad414"
created: "2022-03-16T07:25:24Z"
updated: "2023-11-14T16:41:16Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2093"
---

# spectral doesn't work with a schema containing the `$ref` field

**Describe the bug**
Spectral doesn't provide any output if the schema contains a `$ref` field anywhere. It works fine if I don't have any `$ref` fields in my schema.

**To Reproduce**

run the following code in a node app. or use cli. I have tested it in both ways and the results are the same.

```javascript
import pkg from '@stoplight/spectral-core';
const { Spectral, Document } = pkg;
import { Yaml } from '@stoplight/spectral-parsers';
import { schema } from '@stoplight/spectral-functions';
const myDocument = new Document(`typee: request`, Yaml, '/my-file');

const spectral = new Spectral();
spectral.setRuleset({
  rules: {
    'my-rle-name': {
      description: 'Does not validates.',
      severity: 'error',
      given: '$',
      then: {
        function: schema,
        functionOptions: {
          schema: {
            title: 'Operation Schema',
            type: 'object',
            additionalProperties: false,
            patternProperties: {
              '^x-[\\w\\d\\.\\-\\_]+$': {
                $ref: 'https://raw.githubusercontent.com/asyncapi/asyncapi-node/v2.7.7/schemas/2.0.0.json#/definitions/specificationExtension',
              },
            },
            properties: {
              type: {
                type: 'string',
                enum: ['request', 'response'],
              },
            },
          },
        },
      },
    },
  },
});
spectral.run(myDocument).then(console.log);

```

**Expected output**
```js
[
  {
    code: 'my-rle-name',
    message: 'Does not validates.',
    path: [],
    severity: 0,
    source: '/my-file',
    range: { start: [Object], end: [Object] }
  }
]
```

**Actual output**
```js
[]
```

**Environment:**
 - Library version:  @stoplight/spectral-core 1.11.0
 - OS: Windows 11
