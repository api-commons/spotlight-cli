---
number: 2715
title: "Output briefly flashes up and disappears when running spectral-cli via npx"
state: "open"
labels: []
author: "voltagex"
created: "2024-10-22T04:34:53Z"
updated: "2024-10-22T04:34:53Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2715"
---

# Output briefly flashes up and disappears when running spectral-cli via npx

**Describe the bug**

`npx @stoplight/spectral-cli lint doc.json` causes red text to flash up briefly and then disappear.

`npx @stoplight/spectral-cli lint doc.json 2>&1` shows the error is
`No ruleset has been found. Please provide a ruleset using the --ruleset CLI argument, or make sure your ruleset file matches .?spectral.(js|ya?ml|json)`

Which makes sense.

Two things here: I'm not sure what terminal control stuff you're using but something strange is happening here


**To Reproduce**

1. Given any JSON file, forget to set up a ruleset. 
2. Using npm/npx 10.9.0 from Debian Trixie, run `npx @stoplight/spectral-cli lint doc.json`
3. See error flash up and disappear

**Expected behavior**
Error to be displayed without less or cat tricks.
