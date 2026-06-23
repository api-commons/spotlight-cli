---
number: 1636
title: "Spectral yells at you if there are x-extensions on operation level"
state: "closed"
labels: ["t/bug", "p/high", "triaged"]
author: "mnaumanali94"
created: "2021-05-24T17:35:02Z"
updated: "2021-05-25T15:13:34Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1636"
---

# Spectral yells at you if there are x-extensions on operation level

OpenAPI allows x-extensions on the operation level: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject

Spectral yells at you if x-internal or any other x-extension is added to the operation level. This shouldn't happen as it's valid OpenAPI

![image.png](https://images.zenhubusercontent.com/5ea9a7f489044245dbd23d46/b7c92a41-db5b-4b50-93e1-43238800af28)

- [ ] Fix the issue above
- [ ] Find and fix other places where x-extensions can be used but aren't validating rn.
