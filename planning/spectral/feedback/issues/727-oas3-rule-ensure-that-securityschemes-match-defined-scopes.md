---
number: 727
title: "OAS3 Rule: Ensure that securitySchemes match defined scopes"
state: "closed"
labels: ["enhancement", "p/medium", "OpenAPI"]
author: "Amachua"
created: "2019-11-01T14:28:09Z"
updated: "2023-03-23T16:20:51Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/727"
---

# OAS3 Rule: Ensure that securitySchemes match defined scopes

**User stories.**
1. As an API Designer, when I define a security scope on an endpoint, then I want it to be defined in the securitySchemes.

2. As an API Designer, when I define the security scopes in the securitySchemes, then I want them to be defined at least on one endpoint.

**Is your feature request related to a problem?**

When making an update in one place, it happens that the designer do forget to make the update on the two places and that can be an issue for our end consumer.

**Describe the solution you'd like**

Consider the following OpenAPI specification:
```YAML
openapi: 3.0.0

info:
  title: Dummy title
  description: Dummy description
  version: 1.0.0

paths:
  /resources:
    get:
      description: Dummy description
      responses:
        "200":
          description: All is good
      security:
        - dummy_auth:
            - urn:my.dummy.scope.read_only
            - urn:my.precious.dummy.scope.read_only

components:
  securitySchemes:
    dummy_auth:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.com
          scopes:
            urn:my.dummy.scope.read_only: Right to read.
            urn.my.precious.scope.read_only: Right to read.
```

With the following specification, I would like to have in output for the first User Story something like:

```
The scope urn:my.precious.dummy.scope.read_only is not defined in the security definition
```

And with the second User Story
```
The scope urn.my.precious.scope.read_only is not defined on any endpoint.
```

Is my description clear? If not, I'll be glad to provide more information on that topic. :)
