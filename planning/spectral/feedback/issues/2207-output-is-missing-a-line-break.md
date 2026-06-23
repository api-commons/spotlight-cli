---
number: 2207
title: "Output is missing a line break"
state: "closed"
labels: ["t/bug", "released", "p/low"]
author: "nmoreaud"
created: "2022-07-15T07:21:21Z"
updated: "2022-08-24T12:10:33Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2207"
---

# Output is missing a line break

This message should finish with a line break, following linux standards: `No results with a severity of 'error' found!`

Current ouput:
```
$ npx @stoplight/spectral-cli lint ./data_explorer/specs/v1/v1.yaml
No results with a severity of 'error' found!dev@SOME-COMPUTER:~/projects/python_project$
```

**Environment**
 - Library version: 6.4.1
 - Node version: 18.5.0
