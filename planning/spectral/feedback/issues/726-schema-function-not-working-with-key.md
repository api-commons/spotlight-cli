---
number: 726
title: "Schema Function Not Working with @key"
state: "closed"
labels: ["t/bug"]
author: "dillonredding"
created: "2019-10-31T21:41:36Z"
updated: "2019-12-10T13:23:09Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/726"
---

# Schema Function Not Working with @key

## Describe the bug

The `schema` function doesn't appear to work when `field` is `'@key'`. Here's the rule I'm trying to create:

```yaml
  response-code-type:
    message: Response codes must be strings
    recommended: true
    given: $.paths.*.*.responses
    then:
      field: '@key'
      function: schema
      functionOptions:
        schema:
          type: string
```

## To Reproduce

Given this OpenAPI document

```yaml
openapi: 3.0.2
info:
  title: Test Spec
  version: 0.0.0
paths:
  /foo:
    get:
      operationId: get-foo
      responses:
        200:
          description: ''
```

Run this CLI command

```yaml
spectral lint test-spec.yaml -r my-rules.yaml
```

## Expected behavior

The lint output should contain the following:

```
 9:17  warning  response-code-type    Response codes must be strings
```

It might be worth noting that if the rule is changed so that `type` is `number` or `integer`, the rule is triggered.

## Environment
 - Library version: 4.2.0
 - OS: Windows 10
