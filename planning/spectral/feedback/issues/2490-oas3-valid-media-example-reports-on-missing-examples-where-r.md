---
number: 2490
title: "oas3-valid-media-example reports on missing examples where response body uses a required but read only property"
state: "closed"
labels: []
author: "savage-alex"
created: "2023-06-19T14:26:43Z"
updated: "2023-07-27T06:20:51Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2490"
---

# oas3-valid-media-example reports on missing examples where response body uses a required but read only property

Given a schema that contains a readonly and required property such as fooId
When this schema is used in a response body and a schema level example is provided without fooId (its read only)
The OAS3 valid media example error is thrown even though the schema is valid vs openAPI3 rules on read only required properties in requestBodies.

Thanks
