---
number: 730
title: "Alphabetical and '@key'"
state: "closed"
labels: ["t/bug"]
author: "dillonredding"
created: "2019-11-04T15:51:20Z"
updated: "2020-02-20T17:55:11Z"
comments: 9
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/730"
---

# Alphabetical and '@key'

## Describe the bug

I may be doing it wrong, but the `alphabetical` function doesn't appear to work with `'@key'`. Here's the rule I'm trying to create:

```yaml
  response-order:
    message: Responses should be in alphabetical order
    recommended: true
    given: $.paths.*.*
    then:
      field: responses
      function: alphabetical
      functionOptions:
        keyedBy: '@key'
```

I've also tried this form:

```yaml
  response-order:
    message: Responses should be in alphabetical order
    recommended: true
    given: $.paths.*.*.responses
    then:
      field: '@key'
      function: alphabetical
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
        '400':
          description: ''
        '200':
          description: ''
```

Run this CLI command

```yaml
spectral lint test-spec.yaml -r my-rules.yaml
```

## Expected behavior

The lint output should contain the following:

```
 9:17  warning  response-order    Responses should be in alphabetical order
```

## Environment

 - Library version: 4.2.0
 - OS: Windows 10
