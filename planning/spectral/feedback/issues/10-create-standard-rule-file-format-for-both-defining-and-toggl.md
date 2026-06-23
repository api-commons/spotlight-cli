---
number: 10
title: "Create standard rule file format for both defining and toggling rules"
state: "closed"
labels: []
author: "rossmcdonald"
created: "2018-09-26T16:46:31Z"
updated: "2018-09-28T12:51:39Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/10"
---

# Create standard rule file format for both defining and toggling rules

We should use the same format for both defining rules as well as toggling. Sample format:

```
{
  rules: {
    '*': {
      'object-literal-sort-keys': true,
    },
    'oas2|oas3|jschema': {

    },
    oas3: false,
    oas2: {
      'validate:object-literal-sort-keys': true,
      'radix': false,
      'variable-name': false,
      'curly': false,
      'no-console': false,
      'no-empty-interface': false,
      'ban-types': false,
      'max-classes-per-file': [true, 3],
      'no-var-requires': false,
    },
  }
}
```

### Open Questions

* [x] If `rules/oas3` is set to false, doesn't that conflict with a union rule containing `oas3` (ie, `oas2|oas3`? No, since all rules _should_ be unique.
* [x] Should we have a single to for rule definitions to ensure all rule names are unique (ie, something like a `ruleDefinitions` object, and everything else references the names)? Can evaluate at a later date.
