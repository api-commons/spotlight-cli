---
number: 2635
title: "tokenUrl doesn't permit for relative references in OAS 3.1"
state: "closed"
labels: ["t/bug", "help wanted", "released", "p/medium", "triaged", "OpenAPI"]
author: "saturna"
created: "2024-06-08T02:17:52Z"
updated: "2024-09-13T10:21:05Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2635"
---

# tokenUrl doesn't permit for relative references in OAS 3.1

**Describe the bug**
In OAS 3.0 tokenUrl was of [uri-reference type](https://github.com/stoplightio/spectral/blob/daa8059c2270fa1d8a42a739f6c172647c700265/packages/rulesets/src/oas/schemas/oas/v3.0.json#L1540) but in 3.1 it seemed to be switched back to [uri](https://github.com/stoplightio/spectral/blob/daa8059c2270fa1d8a42a739f6c172647c700265/packages/rulesets/src/oas/schemas/oas/v3.1/index.json#L1179)
As per [OAS 3.1 documentation](https://spec.openapis.org/oas/latest.html) tokenUrl should be of type `URL` and as per section [Relative References in URLs](https://spec.openapis.org/oas/latest.html#relative-references-in-urls):

> Unless specified otherwise, all properties that are URLs MAY be relative references as defined by [[RFC3986](https://spec.openapis.org/oas/latest.html#bib-RFC3986)].
[RFC-3986 section 4.2 link](https://datatracker.ietf.org/doc/html/rfc3986#section-4.2) 

I'm assuming that tokenUrl should in fact permit relative paths and default to a baseURL as defined by the [Server Object](https://spec.openapis.org/oas/latest.html#server-object)

This would make sense because using tools such as [editor-next.swagger.io](editor-next.swagger.io), Authorize button should allow for baseUrl selection from the Servers drop-down. If tokenUrl cannot use relative paths, it will not work with this drop-down.
![image](https://github.com/stoplightio/spectral/assets/3442453/3d1aa1bf-f213-4081-81b3-8bc79a35c8b4)


**To Reproduce**
* define a security schema as follows using `openapi: 3.1.0` header:
```components:
  securitySchemes:
    Oauth2:
      type: oauth2
      description: Oauth 2.0 application authentication
      flows:
        clientCredentials:
          tokenUrl: /oauth2/token
```
* Attempt to use spectral to validate this schema with `spectral:oas` rule.
* Schema validation will fail with:
```
error  oas3-schema  "Oauth2" property must not have unevaluated properties.  components.securitySchemes.Oauth2
error  oas3-schema  "tokenUrl" property must match format "uri".             components.securitySchemes.Oauth2.flows.clientCredentials.tokenUrl
```

**Expected behavior**
Spectral validation should pass and allow for relative URLs

**Environment (remove any that are not applicable):**
 - Library version: 6.11.1
 - OS: MacOS Sonoma 14.4
 - Browser: [N/A]
