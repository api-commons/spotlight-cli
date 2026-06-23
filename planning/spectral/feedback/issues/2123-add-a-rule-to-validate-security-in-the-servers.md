---
number: 2123
title: "Add a rule to validate security in the servers"
state: "closed"
labels: ["enhancement", "released", "AsyncAPI"]
author: "magicmatatjahu"
created: "2022-04-12T18:01:10Z"
updated: "2022-06-30T12:26:36Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2123"
---

# Add a rule to validate security in the servers

**User story.**
As a user I want to know if the server has the correct security defined (that given security key has reference to the schemes defined in the `components.securitySchemes`).

**Is your feature request related to a problem?**
The following AsyncAPI document is invalid and Spectral should throw errors due to not defined security schemes inside one of server:

```yaml
asyncapi: '2.0.0',
servers:
  production:
    security:
    - not_defined: []
components:
  securitySchemes:
    petstore_auth:
      ...
```

**Additional context**
Part of #2100
