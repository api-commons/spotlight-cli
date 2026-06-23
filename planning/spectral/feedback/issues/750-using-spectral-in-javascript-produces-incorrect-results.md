---
number: 750
title: "Using Spectral in JavaScript produces incorrect results"
state: "closed"
labels: ["t/bug"]
author: "disposedtrolley"
created: "2019-11-07T05:53:22Z"
updated: "2019-11-08T00:41:53Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/750"
---

# Using Spectral in JavaScript produces incorrect results

**Describe the bug**
Importing Spectral into a NodeJS project (v8.16.1) and attempting to run the YAML example in the [docs](https://stoplight.io/p/docs/gh/stoplightio/spectral/docs/guides/javascript.md) doesn't produce the correct rule results. The docs reference a [repl.it example](https://repl.it/@ChrisMiaskowski/spectral-rules-example) which outputs 5 rule results when run, but in my program only a single rule result is produced, and the line numbers are incorrect. I've also noticed that the example uses a much older version of Spectral.

**To Reproduce**
1. Create a new `npm` project running Node v8.16.1 with a single JS file with the following contents:

```
const { Spectral } = require('@stoplight/spectral');
const { parseWithPointers } = require('@stoplight/yaml');

const myOpenApiDocument = parseWithPointers(`
responses:
  '200':
    description: ''
    schema:
      $ref: '#/definitions/error-response'
`);

const spectral = new Spectral();
spectral
  .loadRuleset('spectral:oas3') // spectral:oas2 for OAS 2.0 aka Swagger
  .then(() => spectral.run(myOpenApiDocument))
  .then(results => {
    console.log(JSON.stringify(results));
  });
```
2. Run the script with `node`
3. Observe output is as follows:

```
[{"code":"invalid-ref","path":["data","responses","200","schema","$ref"],"message":"'#/definitions/error-response' does not exist","severity":0,"range":{"start":{"line":154,"character":18},"end":{"line":154,"character":48}}}]
```

**Expected behavior**
5 rule results should be printed as shown in the repl.it example. The line numbers should be correct.

**Environment (remove any that are not applicable):**
 - Library version: 4.2.0
 - OS: macOS 10.14
 - Node: 8.16.1
