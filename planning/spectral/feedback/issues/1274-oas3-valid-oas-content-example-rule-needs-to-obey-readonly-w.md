---
number: 1274
title: "`oas3-valid-oas-content-example` rule needs to obey readOnly/writeOnly property"
state: "closed"
labels: ["t/bug", "help wanted", "released", "OpenAPI", "team/dnc", "p/documented"]
author: "aleung"
created: "2020-07-08T09:18:14Z"
updated: "2024-06-07T15:12:09Z"
comments: 14
reactions_total: 17
thumbs_up: 17
url: "https://github.com/stoplightio/spectral/issues/1274"
---

# `oas3-valid-oas-content-example` rule needs to obey readOnly/writeOnly property

**Describe the bug**

According to https://swagger.io/docs/specification/data-models/data-types/ :
> If a readOnly or writeOnly property is included in the required list, required affects just the relevant scope – responses only or requests only. That is, read-only required properties apply to responses only, and write-only required properties – to requests only.

The rule `oas3-valid-oas-content-example` should not raise error when a `readOnly` and `required` property is missing in request example. And also `writeOnly` property isn't required in response example.

The rule `oas3-valid-media-example` has the same bug as well.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document [index.yaml](https://github.com/stoplightio/spectral/files/4889475/index.yaml.txt)
2. Run this CLI command `spectral lint index.yaml`
3. See error
> 16:21    error  oas3-valid-oas-content-example  Object should have required property `self`

**Expected behavior**
This error report is not expected.

The `self` property is readOnly, it isn't required in request.

**Environment (remove any that are not applicable):**
 - Library version: 5.4.0
