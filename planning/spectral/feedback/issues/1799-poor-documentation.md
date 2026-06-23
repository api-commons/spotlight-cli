---
number: 1799
title: "Poor documentation"
state: "closed"
labels: ["chore"]
author: "staboness"
created: "2021-08-31T16:36:31Z"
updated: "2021-09-01T12:52:05Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1799"
---

# Poor documentation

**Chore summary**
Improve documentation for JS and add more examples of usage

**Tasks**
After updating to v6, I can't figure out how to register already existing formats, used to be:
```

import { Spectral, Document, Parsers, isOpenApiv2, isOpenApiv3, IRuleResult } from "@stoplight/spectral";

const spectral = new Spectral();  
spectral.registerFormat("oas3", isOpenApiv3);  
spectral.registerFormat("oas2", isOpenApiv2);

```

now: 
```

import { Spectral } from "@stoplight/spectral-core"

const spectral = new Spectral();

spectral.registerFormat <- not existing anymore

```
Unable to use formats in rules, example: 
```

export const oasRule = {
   rules: {
      "exampleRule": {
      "severity": 0,
      "formats": [
        "oas2",
        "oas3"
      ],
      "given": "$.info",
      "message": "Info should contain non empty value",
      "then": {
        "field": "description",
        "function": "truthy"
      }
    }
}
}

```
Receiving error: "exampleRules/formats/0 must be a valid format" and I was unable to find "valid" formats in docs (oas2 and etc. not working)

Unable to extend OAS2 and OAS3 in my rules object:
```
export const oasRule = {
   extends: ["spectral:oas"], // Or OAS3? OAS2? Can't find
   functions: [
    "truthy",
    "xor",
    "pattern",
    "length",
    "casing",
    "schema"
  ],
  // Previous version required to use functions field and exceptions, now its showing me an error below
  rules: {...}
}
```
Gives me an error: no additional properties should be in my rules object.

After removing all "formats" fields out of my rules and "additional properties", received an error: 
`then.function is not a function at Object.lintNode (lintNode.js:21)`
I don't know is it a bug or just I'm doing something wrong.

Example what I did:

```
import { Spectral } from "@stoplight/spectral-core"
import { Parsers } from "@stoplight/spectral-parsers"
import { oasRule } from "../../spectral-rules/oas-rule";

const spectral = new Spectral();

const doc = new Document(code, Parsers.Json); <- `code` here is json formatted openapi 3 (works fine with prev. version)

spectral.setRuleset(oasRule); <- this rules is from .js file
spectral.run(doc).then(response => console.log(response)); <- getting error "then.function is not a function"
```
How to extend common OAS rules to check with my custom rules? How to specify a format for a specific rule?
