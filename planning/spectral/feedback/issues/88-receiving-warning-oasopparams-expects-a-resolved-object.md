---
number: 88
title: "Receiving warning: oasOpParams expects a resolved object"
state: "closed"
labels: ["released"]
author: "cbetta"
created: "2019-02-04T17:37:56Z"
updated: "2019-04-12T13:21:45Z"
comments: 10
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/88"
---

# Receiving warning: oasOpParams expects a resolved object

## **I'm submitting a bug report**

### What is the current behavior?

I am currently migrating my API specification and running into this warning:

```
oasOpParams expects a resolved object, but none was provided. Results may not be correct.
oasPathParam expects a resolved object, but none was provided. Results may not be correct.
```

There are no `$ref` mentions in my spec, so I am confused as to why I am getting this error. The code is as follows.

### What is the expected behavior?

For this not to error

### Please tell us about your environment:

  - Version:   `@stoplight/spectral": "^1.0.1"`
  - Framework: Node v11.7.0
  - Language: Node v11.7.0

### Other information

My code:

```js
// Load Spectral and its OAS3 validations
const { Spectral } = require('@stoplight/spectral')
const { oas3Functions, oas3Rules } = require('@stoplight/spectral/rulesets/oas3')

// Find all OpenAPI files
const fs = require('fs')
const glob = require('glob')

const lint = async () => {
  const fileNames = await new Promise((resolve, reject) => {
    glob('./v2.0/*.openapi.json', {}, (error, match) => {
      if (error) { reject(error) }
      else { resolve(match) }
    })
  })
  
  // Initialize Spectral
  const spectral = new Spectral()
  spectral.addFunctions(oas3Functions())
  spectral.addRules(oas3Rules())
  
  fileNames.forEach(fileName => {
    let specification = JSON.parse(fs.readFileSync(fileName))
    const results = spectral.run(specification)
    // console.dir(results)
  })  
}

lint()
```
