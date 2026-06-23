---
number: 2834
title: "Markdown formatter works only for errors - lack of documentation for formatters"
state: "open"
labels: []
author: "rartych"
created: "2025-07-24T10:39:00Z"
updated: "2025-07-24T10:39:00Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2834"
---

# Markdown formatter works only for errors - lack of documentation for formatters

**Describe the bug**
When there are no linting errors `-f markdown` produces only table header in Markdown.
For other formatters all errors (like stylish, github-action) are  allways  printed

**To Reproduce**

1. Given  OpenAPI document without errors of severity `error` but with `warning` or `info` errors
2. run spectral lint with `-f markdown`  option  --> only table header in Markdown  is printed
3. run spectral lint with `-f markdown`  option  and `--fail-severity=info` option -->  Markdown table with all errors  is printed

```
spectral lint --version
6.15.0
```

**Expected behavior**
Markdown table with all errors is printed without setting `--fail-severity` option


**Additional context**
More detailed documentation on available formats should be added to https://github.com/stoplightio/spectral/blob/develop/packages/formatters/README.md and https://docs.stoplight.io/docs/spectral/9ffa04e052cc1-spectral-cli#formatters
