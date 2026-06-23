---
number: 1715
title: "Misleading error for invalid header object"
state: "open"
labels: ["t/bug", "triaged", "OpenAPI"]
author: "MarcusAckermann"
created: "2021-07-06T12:43:21Z"
updated: "2024-05-31T12:35:07Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1715"
---

# Misleading error for invalid header object

**To Reproduce**

1. Given the attached OpenAPI/AsyncAPI document
2. Run this CLI command 'spectral lint openapi.json'
3. I get ' 38:18    error  oas3-schema       Property `schema` is not expected to be here.           components.headers.Cache-Control.schema'

**Expected behavior**
According to https://swagger.io/specification/#header-object the property 'schema' is allowed in a header declaration. There should be no error regarding rule oas3-schema.

[openapi.zip](https://github.com/stoplightio/spectral/files/6770087/openapi.zip)
