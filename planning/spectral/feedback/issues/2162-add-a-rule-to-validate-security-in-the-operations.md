---
number: 2162
title: "Add a rule to validate security in the operations"
state: "closed"
labels: ["enhancement", "released", "AsyncAPI"]
author: "magicmatatjahu"
created: "2022-05-19T11:42:13Z"
updated: "2022-06-30T12:26:39Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2162"
---

# Add a rule to validate security in the operations

**User story.**
As a user I want to know if the operation has the correct security defined (that given security key has reference to the schemes defined in the `components.securitySchemes`).

**Is your feature request related to a problem?**
The following AsyncAPI document is invalid and Spectral should throw errors due to not defined security schemes inside one of operation:

```yaml
asyncapi: '2.0.0',
channels:
  'user/signup':
    publish:
      security:
        - not_defined: []
components:
  securitySchemes:
    petstore_auth:
      ...
```

**Additional context**
Part of #2100
