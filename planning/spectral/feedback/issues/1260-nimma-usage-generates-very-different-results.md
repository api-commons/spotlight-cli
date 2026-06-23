---
number: 1260
title: "Nimma usage generates very different results "
state: "closed"
labels: ["t/bug", "released"]
author: "nulltoken"
created: "2020-06-30T09:37:28Z"
updated: "2021-09-06T12:11:19Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1260"
---

# Nimma usage generates very different results 

**Describe the bug**
5.5.0 introduces an optional rule jsonpath optimizer: nimma. It seems to not properly parse some paths.

**To Reproduce**

**ruleset:**
```yaml
rules:
  read-scope-prefix-on-get:
    type: validation
    severity: warn
    recommended: true
    formats: ["oas3"]
    description: Scope should start with something
    message: Scope should start with something
    given: "$.paths.*[?(@property === 'get' || @property === 'options')].security.*.my_auth.*"
    then:
      function: pattern
      functionOptions:
        match: "^urn:"

  no-404-response:
    type: validation
    severity: info
    recommended: true
    formats: ["oas3"]
    description: Operation must not define a 404 response when no ressource identifier.
    message: The request must not define a 404 response.
    given: "$.paths[?(!@property.includes('_id}'))][?(@property === 'get' || @property === 'post' || @property === 'delete' || @property === 'options' || @property === 'patch' )].responses"
    then:
      field: "404"
      function: falsy
```

**document:**
```yaml
openapi: 3.0.0

paths:
  /any/resources/{resource}:
    get:
      responses:
        "200":
          description: All is good
        "404":
          description: All is nowhere"
  /resources:
    get: &dummy-endpoint
      responses:
        "200":
          description: All is good
      security:
        - my_auth:
            - urn:something
    patch:
      <<: *dummy-endpoint
      security:
        - my_auth:
            - Urn:wrong-but-should-go-unnoticed
```
**without nimma:**
```bash
$ node -r ts-node/register -r tsconfig-paths/register src/cli/index.ts lint -r ./repro/nimma.ruleset.yaml ./repro/nimma.openapi.yaml
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
OpenAPI 3.x detected

c:/spectral/repro/nimma.openapi.yaml
 9:15  information  no-404-response  The request must not define a 404 response.

✖ 1 problem (0 errors, 0 warnings, 1 info, 0 hints)

```

**activating nimma:**
```bash
$ node -r ts-node/register -r tsconfig-paths/register src/cli/index.ts lint -r ./repro/nimma.ruleset.yaml ./repro/nimma.openapi.yaml
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
OpenAPI 3.x detected

c:/_work/spectral/repro/nimma.openapi.yaml
 23:15  warning  read-scope-prefix-on-get  Scope should start with something

✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)
```

**Expected behavior**
Using nimma or not should not change the return results.

**Environment (remove any that are not applicable):**
 - Library version: develop branch
 - OS: Win10
 - Browser: N/A
