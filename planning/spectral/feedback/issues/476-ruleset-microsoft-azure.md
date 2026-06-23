---
number: 476
title: "ruleset: Microsoft Azure"
state: "closed"
labels: ["enhancement", "help wanted"]
author: "philsturgeon"
created: "2019-08-22T17:43:53Z"
updated: "2022-07-06T15:29:04Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/476"
---

# ruleset: Microsoft Azure

Similar to #475, the folks over at Microsoft Azure have implemented a subset of OpenAPI for their API Import functionality. 

https://docs.microsoft.com/en-us/azure/api-management/api-management-api-import-restrictions

We should guide folks through that with a new ruleset.

Create a new ruleset `ms-azure-openapi` which extends the `spectral:oas` ruleset.

- [ ] Required parameters across both path and query must have unique names. (In OpenAPI a parameter name only needs to be unique within a location, for example path, query, header. However, in API Management we allow operations to be discriminated by both path and query parameters (which OpenAPI doesn't support). That's why we require parameter names to be unique within the entire URL template.)

- [ ] $ref pointers can't reference external files.

- [ ] x-ms-paths and x-servers are the only supported extensions.

- [ ] Custom extensions are ignored on import and aren't saved or preserved for export.

- [ ] Recursion - API Management doesn't support definitions defined recursively (for example, schemas referring to themselves).

- [ ] Source file URL (if available) is applied to relative server URLs.

OpenAPI version 2

- [ ] Only JSON format is supported.

OpenAPI version 3

- [ ] If many servers are specified, API Management will try to select the first HTTPs URL. If there aren't any HTTPs URLs - the first HTTP URL. If there aren't any HTTP URLs - the server URL will be empty.

- [ ] Examples isn't supported, but example is. (seek clarification on where but I am going to guess they mean response examples/example, not property example/examples)
- [ ] Multipart/form-data isn't supported.
