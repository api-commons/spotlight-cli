---
number: 2210
title: "How to import external NPM libraries into custom functions?"
category: "Q&A"
author: "antonio-jara-db"
created: "2022-07-19T16:03:37Z"
upvotes: 2
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2210"
---

# How to import external NPM libraries into custom functions?

Hi! I'm trying to validate API definitions are written in English, so I decided to implement one custom function.

This JavaScript code will use "franc" NPM library (https://www.npmjs.com/package/franc) to detect the language of the input data.

npm install and so on, but when trying to validate the API definition, it ends with connectivity problems.

Error inside Spectral output log:
`_FetchError: Could not load https://cdn.skypack.dev/franc (imported by functions\english.js): request to https://cdn.skypack.dev/franc failed, reason: connect ETIMEDOUT_`

I'm behind a proxy, but we have an internal NPM registry which can be used to download dependencies.

Am I missing something? Any help would be very appreciated, thanks a lot! 😄 

Custom function english.js source code:
```
import {franc} from 'franc'

export default input => {
  if (franc(input) != "eng") {
    return [
      {
        message: 'value should be in english',
      },
    ];
  }
};
```

Configuration in .spectral.yaml file:
```
extends:
  - "spectral:oas"
  - "spectral:asyncapi" 
functions: [english]
  descriptions-english:
    message: "{{property}} {{error}}"
    given: $..description
    severity: error
    then:
      function: "english"
```
