---
number: 1400
title: "Missing validation of child parameter child properties"
state: "closed"
labels: ["t/bug", "OpenAPI"]
author: "savage-alex"
created: "2020-11-09T11:49:26Z"
updated: "2021-01-07T16:50:52Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1400"
---

# Missing validation of child parameter child properties

Spectral VScode version 0.2.4 and spectral 5.6.0

Is not flagging an issue when a designer forgets to include a schema for a path parameter and enters type directly:

```yaml
/required-actions/{actionId}:
  put:
    description: 'The description'
    operationId: updateRequiredActionById
    tags:
      - Required-Actions
    parameters:
      - name: alias
        in: path
        type: string
        required: true
        example: 'VERIFY_EMAIL'
      - name: default
        in: path
        type: boolean
        required: true
        example: false 
```

**To Reproduce**

Given the above OAS, lint the definition and no error will be raised

**Expected behaviour**
type is flagged as an invalid additional property

**Additional context**
SwaggerHub is now able to notice this but spectral was not :-(
