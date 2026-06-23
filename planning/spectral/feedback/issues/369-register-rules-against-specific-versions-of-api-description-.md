---
number: 369
title: "Register rules against specific versions of API description formats"
state: "closed"
labels: ["enhancement", "discussion", "tech-debt"]
author: "philsturgeon"
created: "2019-07-15T12:34:31Z"
updated: "2019-08-13T09:36:58Z"
comments: 4
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/369"
---

# Register rules against specific versions of API description formats

**User story.**
I'd like to write one ruleset for a specific API description format (e.g.: OpenAPI), knowing that some rules will only effect v2.0 or v3.0 or v3.1 specifically. 

**Is your feature request related to a problem?**

Before CLI users could chose a custom ruleset, Spectral would look at the contents of the file, and automatically apply oas2 or oas3, both of which extend the oas ruleset but add some version-specific rules. 

When we added --ruleset in v3, this autodetect behavior was kept, but only as a default. v3 and v4 have no knowledge of what version is being run, so whatever ruleset you apply will be used without any further thought. If you apply a ruleset with OpenAPI v3 rules to a OpenAPI v2 document, it will silently fail in some scenarios, or loudly fail in other scenarios. 

Folks can create their own version specific rulesets, then use their own detection code in order to decide which ruleset to run, but this should not be something our users need to do. 

**Describe the solution you'd like**

```
extends: spectral:oas
rules:
  my-rule-name:
    description: Tags must have a description.
    formats:
      - oas2
      - oas3
    given: $.tags[*]
    then:
      field: description
      function: truthy
```

Or something. Not tied to that, and open to recommendations. 

For backwards compatibility, we just empty the `spectral:oas2` and `spectral:oas3` rulesets, move everything to the main `spectral:oas` ruleset, and tie them to the appropriate formats.
