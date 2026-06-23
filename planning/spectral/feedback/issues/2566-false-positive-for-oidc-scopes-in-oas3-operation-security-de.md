---
number: 2566
title: "False Positive for OIDC scopes in `oas3-operation-security-defined`"
state: "open"
labels: ["t/bug", "triaged", "OpenAPI"]
author: "arosenb2"
created: "2023-12-19T14:55:01Z"
updated: "2024-05-31T09:24:17Z"
comments: 1
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2566"
---

# False Positive for OIDC scopes in `oas3-operation-security-defined`

**Describe the bug**
When using a security schema of type `openIdConnect`, scopes are being checked for being defined in the flows, but per [the OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0#security-scheme-object), when using `openIdConnect`, `flows` is not a valid property (it should only be used with OAuth2). Therefore, the check for `isScopeDefined` is invalid for `openIdConnect`.

**To Reproduce**

1. Define an operation and apply a security schema of type `openIdConnect`.
2. Include a valid scope from the well-known OIDC configuration as part of the security schema reference in the operation.
3. Observe that `oas3-operation-security-defined` triggered, listing `"the-scope-you-included" must be listed among scopes.`.

**Expected behavior**
Either OIDC provided scopes should be skipped as part of the `isScopeDefined` function when the security schema is of type `openIdConnect`. Additionally, checking for `isScopeDefined` could be considered a separate rule from `oas3-operation-security-defined` so it can be selectively ignored (suggested name: `oas3-operationsecurity-scopes-defined`).

**Environment:**
 - Library version: 6.11.0

**Additional context**
[OpenAPI Specification - Security Schema Object](https://spec.openapis.org/oas/v3.1.0#security-scheme-object),
[Reference code in the ruleset](https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/oas/functions/oasSecurityDefined.ts#L75-L91)
