---
number: 2476
title: "spectral:oas ruleset doesn't recognize mutualTLS option for security scheme"
state: "closed"
labels: []
author: "pdconant"
created: "2023-05-17T17:40:28Z"
updated: "2023-05-17T23:11:34Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2476"
---

# spectral:oas ruleset doesn't recognize mutualTLS option for security scheme

**Describe the bug**
When validating an OpenAPI spec that uses Mutual TLS, `spectral lint`, spectral reports that `mutualTLS` is not a viable security scheme. Mutual TLS support was added to Open API 3.1. 

**To Reproduce**

1. Create a .spectral.json file containing:
```
{
  "extends": ["spectral:oas", "spectral:asyncapi"]
}
```
2. And an API spec that contains:
```

    "securitySchemes" : {
      "MutualTLS" : {
        "type" : "mutualTLS"
      }
    }
```
3. Run the command: `spectral lint {path-to}/api.json --ruleset {path-to}/.spectral.json`,
4. Observe the following output:
```
 2451:15    error  oas3-schema            Invalid security scheme.                                                                                  components.securitySchemes.MutualTLS
 2452:13    error  oas3-schema            "type" property must be equal to one of the allowed values: "apiKey", "http", "oauth2", "openIdConnect".  components.securitySchemes.MutualTLS.type
```

**Expected behavior**
Expected `mutualTLS` to be supported since it was added to OAS 3.1 here: https://github.com/OAI/OpenAPI-Specification/pull/1764
