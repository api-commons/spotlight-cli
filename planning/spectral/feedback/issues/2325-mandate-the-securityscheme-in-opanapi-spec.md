---
number: 2325
title: "Mandate the securityScheme in opanapi spec"
state: "closed"
labels: []
author: "sgomath"
created: "2022-11-02T06:05:31Z"
updated: "2022-11-10T12:21:52Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2325"
---

# Mandate the securityScheme in opanapi spec

I have the below security scheme defined in my openapi spec.
```
{
    "openapi": "3.0.1",
     "components": {
      "securitySchemes": {
        "bearerAuth": {
          "type": "http",
          "scheme": "bearer",
          "bearerFormat": "jwt"
        }
      }
    }
}
```

the rule that i have is as below
```
{
  "formats": [
    "oas3",
    "oas2"
  ],
 "extends": [
    ["spectral:oas","off"]
  ],
  "rules": {
  "oas-api-security-scheme-missing": {
    "description": "Requires the security scheme.",
    "message": "Must define a  security scheme",
    "recommended": true,
    "given": "$.components.securitySchemes.bearerAuth",
    "severity": "error",
    "then": {
          "field": "bearerFormat",
          "function": "truthy"
        }
    
   }
  }
}
```

Expected output : The error message should be thrown as the securityScheme doesn't exist in the above openapi spec. But the spectral lint doesn't throw any errors or warnings for this. Can you suggest me what is wrong in this?
