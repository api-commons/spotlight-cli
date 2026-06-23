---
number: 2850
title: "oas3-valid-media-example rule fails on maxLength of exploded/form query parameters"
state: "open"
labels: []
author: "laytong"
created: "2025-09-16T23:20:19Z"
updated: "2025-09-16T23:20:19Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2850"
---

# oas3-valid-media-example rule fails on maxLength of exploded/form query parameters

open api yaml definition

```
/v1/stores:
    get:
      summary: Get stores by IDs
      description: Get multiple stores by ID. If a store is not found, it will be excluded from the response.
      operationId: getStoresById
      tags:
        - stores
      parameters:
        - name: storeId
          description: The ID of the store to get
          in: query
          example:
            - ?storeId="0c245f8a-d5bf-4d8b-a80a-59662b0f2c32"&storeId="bd97719e-c9b3-44e2-a9bf-3a6680df834e"
          required: true
          schema:
            type: array
            items:
              type: string
              minLength: 1
              maxLength: 50
            minItems: 1
            maxItems: 10
```

**Expected behavior**
Each item is individually less than 50 chars, validation should pass

**Actual behavior**
oas3-valid-media-example  "0" property must not have more than 50 characters  paths./v1/stores.get.parameters[0].example[0]

changing the example to a total string less than 50 chars succeeds


**Environment (remove any that are not applicable):**
 - '@stoplight/spectral-cli': 6.15.0
 - OS: MacOS Sequoia 15.4.1
 - openapi 3.1.0

**Additional context**
the maxLength validation does not correctly handle item by item maxLength
