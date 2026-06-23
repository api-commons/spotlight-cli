---
number: 2505
title: "Spectral no longer respecting rule overrides"
state: "closed"
labels: []
author: "br-tyler-milner"
created: "2023-07-11T23:01:21Z"
updated: "2023-07-24T11:53:18Z"
comments: 4
reactions_total: 2
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2505"
---

# Spectral no longer respecting rule overrides

**Describe the bug**
Running Spectral outputs linter warnings/errors for paths that have rules turned off via the `overrides` in my `.spectral.yaml`. The issues seems to have coincided with the update of the `spectral-core` dependency from [version `1.18.1` to version `1.18.2`](https://github.com/stoplightio/spectral/compare/@stoplight/spectral-core-1.18.1...@stoplight/spectral-core-1.18.2) as my builds were working fine before that update was made.

**To Reproduce**
I created a [sample project](https://github.com/br-tyler-milner/spectral-rule-override-bug) that demonstrates this issue, which includes detailed steps to reproduce. Abbreviated steps below:

1. Given [this](https://github.com/br-tyler-milner/spectral-rule-override-bug/blob/main/reference/Demo.yaml) OpenAPI document and [this](https://github.com/br-tyler-milner/spectral-rule-override-bug/blob/main/.spectral.yaml) `.spectral.yaml`.
2. Run this CLI command: `spectral lint Demo.yaml --ruleset .spectral.yaml --verbose`
3. See `path-casing` and `resource-names-plural` errors produced for `paths./v2.1/users/{userId}`, which is configured to disable those rules via rule `overrides`.

**Expected behavior**
No errors should be output.

**Screenshots**
![image](https://github.com/stoplightio/spectral/assets/78233128/e037428a-cf64-4277-9648-251b324ce643)

**Environment:**
 - Library version: 6.8.0 (also observed using Spectral 0.6.6)
 - OS: macOS 13.4.1 and Ubuntu 22.04
 - Browser: N/A

**Additional context**
See `README` in sample project linked above for additional details.
