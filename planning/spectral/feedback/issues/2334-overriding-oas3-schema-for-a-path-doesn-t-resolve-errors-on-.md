---
number: 2334
title: "Overriding `oas3-schema` for a path doesn't resolve errors on parent paths"
state: "open"
labels: ["t/bug", "triaged", "reviewed-medium"]
author: "bhrutledge"
created: "2022-11-09T18:17:00Z"
updated: "2024-05-31T12:34:39Z"
comments: 0
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2334"
---

# Overriding `oas3-schema` for a path doesn't resolve errors on parent paths

**Describe the bug**
My OpenAPI 3.0 spec includes template variables for the `authorizationCode` URLs, which are supplied at runtime by the implementation. This causes errors with the default configuration:

```
 1150:13  error  oas3-schema  Invalid security scheme.                                        components.securitySchemes.Cognito
 1152:13  error  oas3-schema  Property "flows" is not expected to be here.                    components.securitySchemes.Cognito.flows
 1154:29  error  oas3-schema  "authorizationUrl" property must match format "uri-reference".  components.securitySchemes.Cognito.flows.authorizationCode.authorizationUrl
 1155:21  error  oas3-schema  "tokenUrl" property must match format "uri-reference".          components.securitySchemes.Cognito.flows.authorizationCode.tokenUrl
```

Looking at the [`overrides` docs](https://docs.stoplight.io/docs/spectral/293426e270fac-overrides), I was able to silence the `uri-reference` errors. However, the higher-level errors remain. 

**To Reproduce**

1. Given this OpenAPI/AsyncAPI snippet

```yaml
components:
  securitySchemes:
    Cognito:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: '{{ auth_url }}/login'
          tokenUrl: '{{ auth_url }}/oauth2/token'
          scopes: {}
```

2. And this `.spectral.yaml`

```yaml
formats:
  - oas3.0
extends:
  - - "spectral:oas"
    - all
overrides:
  - files:
      - "**#/components/securitySchemes/Cognito/flows/authorizationCode/authorizationUrl"
      - "**#/components/securitySchemes/Cognito/flows/authorizationCode/tokenUrl"
    rules:
      oas3-schema: "off"
```

3. Run this CLI command

```sh
npx spectral lint api.yaml
```

4. See error

```
 1150:13  error  oas3-schema  Invalid security scheme.                      components.securitySchemes.Cognito
 1152:13  error  oas3-schema  Property "flows" is not expected to be here.  components.securitySchemes.Cognito.flows
```

**Expected behavior**
No linting errors

**Environment (remove any that are not applicable):**
 - Spectral version: 6.6.0

**Additional context**

I can work around this by disabling validation for the whole scheme:

```yaml
overrides:
  - files:
      - "**#/components/securitySchemes/Cognito"
    rules:
      oas3-schema: "off"
```

But that feels like a hack, and would miss other validation failures.
