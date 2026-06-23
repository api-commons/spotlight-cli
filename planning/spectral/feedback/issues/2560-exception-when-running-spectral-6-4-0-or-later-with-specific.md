---
number: 2560
title: "Exception when running spectral 6.4.0 or later with specific custom rule using js function: endsWith is not a function"
state: "open"
labels: ["t/bug", "p/medium", "triaged"]
author: "phoenixy1"
created: "2023-12-11T17:11:41Z"
updated: "2024-05-31T12:34:34Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2560"
---

# Exception when running spectral 6.4.0 or later with specific custom rule using js function: endsWith is not a function

**Describe the bug**
A custom rule that worked in spectral 6.3.0 and earlier is causing spectral to throw an exception in 6.4.0 and later 
**To Reproduce**

1. Given this OpenAPI/AsyncAPI document: https://github.com/plaid/plaid-openapi/blob/master/2020-09-14.yml
2. With the following custom rule in the spectral ruleset:
```
  response-object-additional-properties:
    description: Every model of type object used in a response has additionalProperties=true
    message: '{{path}} {{error}}'
    severity: error
    given: '$.components.schemas.[?(@.type == ''object'')]'
    resolved: false
    then:
      function: response-object-additional-properties
```
and the following response-object-additional-properties.js function defined:

```
module.exports = (input, options, context) => {
    if (context.path == null) {
        return;
    }

    const parentPropertyName = context.path[context.path.length - 1]
    if (parentPropertyName.endsWith('Response')) {
        if (!input.additionalProperties) {
            return [{
                message: 'No additional properties field',
            }]
        }
    }
}
```
4. Run this CLI command: `spectral lint 2020-09-14.yml`
5. Error received: 
```
Error #1: Function "responseObjectAdditionalProperties" threw an exception: parentPropertyName.endsWith is not a function
Error #2: Function "responseObjectAdditionalProperties" threw an exception: parentPropertyName.endsWith is not a function
Error #3: Function "responseObjectAdditionalProperties" threw an exception: parentPropertyName.endsWith is not a function
```

**Expected behavior**
I expected spectral to run without an error. 

**Additional context**
This error appears in Spectral 6.4.0 and later. Spectral 6.3.0 does not exhibit this issue.
