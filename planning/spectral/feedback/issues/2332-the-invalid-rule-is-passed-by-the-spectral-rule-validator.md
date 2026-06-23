---
number: 2332
title: "The invalid rule is passed by the spectral rule validator"
state: "closed"
labels: []
author: "rzachari091521"
created: "2022-11-08T13:59:02Z"
updated: "2023-03-23T16:20:40Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2332"
---

# The invalid rule is passed by the spectral rule validator

**Describe the bug**
We at Postman, are trying to create custom spectral rules using config files. An invalid rule gets validated in the spectral validation process and later fails the spectral scans. 

**To Reproduce**
Rule:
```
rules:
  path-token-in-path-not-allowed:
    description:
      APIs SHOULD use industry standard OAuth2.0 via an Identity provider
      whose token URL is detailed in the security scheme.
    severity: warn
    type: style
    message: Operation {{property}} contains the word token suggesting it uses
      custom auth. APIs SHOULD use industry standard OAuth2.0 via an Identity
      provider whose token URL is detailed in the security scheme
    given: $.paths[*]~
    then:
      function: pattern
      functionOptions:
      notMatch: /.*(token\b|\btoken|tokens\b|\btokens).*/i
    formats:
      - oas3
 ```

Spectral validation
```
const { Spectral } = require('@stoplight/spectral-core'),
  spectral = new Spectral();
  
spectral.setRuleset(validatedCustomRule)
```

The above rule although a valid spectral ruleset, fails a spectral scan with a error: 
```
Error running Nimma
```


**Expected behavior**
The spectral validation process should identify if the mentioned ruleset is invalid


**Environment (remove any that are not applicable):**
 - Library version: [e.g. 3.0.0]
"@stoplight/spectral-core": "1.12.4"
