---
number: 1693
title: "Rule to validate tag count"
state: "closed"
labels: []
author: "danielbecroft"
created: "2021-06-25T00:14:42Z"
updated: "2021-06-25T05:34:05Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1693"
---

# Rule to validate tag count

I'm trying to configure some custom rules in our environment, and using the `operation-singular-tag` example from the documentation [here](https://meta.stoplight.io/docs/spectral/docs/reference/functions.md#length).

```yaml
extends: [[ spectral:oas, off ]]

rules:
  operation-singular-tag:
    description: Operations must have between 1 and 3 tags.
    type: style
    given: "$.paths.*"
    then:
      field: tags
      function: length
      functionOptions:
        max: 3
        min: 1
```

When I run the ruleset, though, I don't get the rule firing. I've tried on paths with:
- 0 tags
- 1 tag
- 10 tags

I can see in the `-v` mode that the rule is getting picked up.

```
Found 56 rules (1 enabled)
Linting ......openapi.yaml
OpenAPI 3.x detected
No results with a severity of 'info' or higher found!
```

Am I missing anything obvious? This is the first custom rule I'm adding in.
