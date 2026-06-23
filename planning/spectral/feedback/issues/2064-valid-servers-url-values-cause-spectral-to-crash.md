---
number: 2064
title: "Valid \"servers\" URL values cause Spectral to crash"
state: "closed"
labels: ["OpenAPI"]
author: "dpopp07"
created: "2022-02-16T22:42:18Z"
updated: "2022-02-23T20:56:06Z"
comments: 3
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2064"
---

# Valid "servers" URL values cause Spectral to crash

**Describe the bug**
Spectral expects all URLs in the "servers" field of an API definition to create valid Node `URL` objects, despite the fact that this excludes valid field values according to the OpenAPI specification.

**To Reproduce**

1. Add this "servers" entry to any API document that would otherwise validate cleanly. It is [an example copied directly from the OpenAPI specification](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md#server-object-example).

```
servers:
- url: https://{username}.gigantic-server.com:{port}/{basePath}
  description: The production API server
  variables:
    username:
      # note! no enum here means it is an open value
      default: demo
      description: this value is assigned by the service provider, in this example `gigantic-server.com`
    port:
      enum:
        - '8443'
        - '443'
      default: '8443'
    basePath:
      # open meaning there is the opportunity to use special base paths as assigned by the provider, default is `v2`
      default: v2
```

2. Run Spectral CLI on the document
`spectral lint api-definition.yaml`

3. See error: `Error running Nimma`

It's a rather uninformative error but I am aware that [work is being done to address this problem](https://github.com/stoplightio/spectral/issues/2053#issuecomment-1032502797). Digging a bit deeper, this is the error happening inside nimma:
`RuntimeError: $ threw: NodeError("Invalid URL: https://{username}.gigantic-server.com:{port}/{basePath}")`

caused by this Node exception:
`cause: TypeError [ERR_INVALID_URL]: Invalid URL: https://{username}.gigantic-server.com:{port}/{basePath}`

**Expected behavior**
I would expect URL values that are allowed by the OpenAPI specification to not cause Spectral to crash. It surprises me that 1) these values are being used to create Node `URL` objects and 2) that these values are not at least being resolved (with the server variables and their default values, etc.) before validated with Node. Whatever the approach is, it should allow valid values for these fields.

**Environment (remove any that are not applicable):**
 - Library version: 6.2.1
 - OS: Mac
