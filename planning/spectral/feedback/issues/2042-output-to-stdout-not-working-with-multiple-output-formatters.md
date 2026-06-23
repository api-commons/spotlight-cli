---
number: 2042
title: "Output to stdout not working with multiple output formatters"
state: "closed"
labels: ["t/bug", "released"]
author: "max-moritz"
created: "2022-01-31T15:18:27Z"
updated: "2025-03-18T16:48:50Z"
comments: 9
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2042"
---

# Output to stdout not working with multiple output formatters

**Describe the bug**

spectral lint fails with error message `The number of outputs must match the number of formats` when on the command line there are two formatters specified but only one output file

**To Reproduce**
1. Given an arbitrary OpenAPI document `my-api.yaml` and any ruleset `.spectral.yaml`
2. Run this CLI command: `spectral lint --format stylish --format junit --output.junit junit-results.xml my-api.yaml`
3. See error  `[usage message omitted] The number of outputs must match the number of formats`

**Expected behavior**

junit formatted output is written to junit-results.xml while stylish formatted output is written to stdout.

Expecting this behavior since the usage message says
` -o, --output                   where to output results, can be a single file name, multiple "output.<format>" or missing to print to stdout`

**Environment**
 - spectral version: 6.2.0
 - OS: Microsoft Windows 10 Enterprise Version 10.0.19042 Build 19042

**Additional context**
No error when formatter count matches output file count, e.g. with
`spectral lint --format stylish --format junit --output.stylish stylish-results --output.junit junit-results.xml my-api.yml`
