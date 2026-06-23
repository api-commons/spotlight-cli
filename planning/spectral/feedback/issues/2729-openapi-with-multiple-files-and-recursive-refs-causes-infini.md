---
number: 2729
title: "OpenAPI with multiple files and recursive $refs causes infinite loop"
state: "open"
labels: []
author: "pedrogude"
created: "2024-11-13T14:29:35Z"
updated: "2024-11-13T14:29:35Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2729"
---

# OpenAPI with multiple files and recursive $refs causes infinite loop

**Describe the bug**
Given an API with multiple files and recursive $refs, when executing the linting the process enters an infinite loop


**To Reproduce**
1. Given this OpenAPI/AsyncAPI document [test-api.zip](https://github.com/user-attachments/files/17733957/test-api.zip)
2. Run this CLI command `spectral lint openapi-rest.yml`
3. See error: No error occurs, it runs infinitely


**Expected behavior**
The process ends in a few seconds

**Environment (remove any that are not applicable):**
 - Library version: [6.11.0]
 - OS: [Linux]

**Additional context**
If I bundle the API, (in the attached zip),  the process ends in approximately 1 second
