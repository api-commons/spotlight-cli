---
number: 2770
title: "Add option to support override-ready paths in Spectral diagnotsics"
state: "open"
labels: ["enhancement"]
author: "DavidBiesack"
created: "2025-01-10T16:22:33Z"
updated: "2025-04-03T15:18:10Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2770"
---

# Add option to support override-ready paths in Spectral diagnotsics

**User story.**

As a Spectral user, I can use a command line option so that the locations in Spectral's error/warning/information diagnostics use the same notation/syntax as the `overrides/files` notation in a Spectral ruleset.

**Is your feature request related to a problem?**

It is tedious and error prone to manually specify the `files` locations in ruleset overrides.
The diagnostics emitted by Spectral use one format that differs from that used in a ruleset.

I.e. for the [Redocly Museum sample OpenAPI](https://github.com/Redocly/museum-openapi-example)
and the `oas` and [Spectral OWASP ruleset](https://github.com/stoplightio/spectral-owasp-ruleset), Spectral emits many diagnostics, such as

```
 108:17  warning  owasp:api4:2023-rate-limit-responses-429    Operation is missing rate limiting response in responses[429].                                      paths./special-events/{eventId}.get.responses
```

If one wanted to add an override for a specific instance (not just disable the entire rule), one must "map" the path notation `paths./special-events/{eventId}.get.responses` to
```
overrides:
  files:
    - 'test/data/openapi.yaml#/paths/~1special-events~1%7BeventId%7D/get/responses'
```

**Describe the solution you'd like**

Add a command line option so that the Spectral output uses the notation required for the ruleset overrides
Such as

```
 108:17  warning  owasp:api4:2023-rate-limit-responses-429    Operation is missing rate limiting response in responses[429]. test/data/openapi.yaml#/paths/~1special-events~1%7BeventId%7D/get/responses
```

**Additional context**

Note that the new location should use the relative file location, not the absolute file location that Spectral emits when processing a file, since ruleset files normally use relative `files` file paths (i.e. relative to the current directory when running the `spectral` CLI)
