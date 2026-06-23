---
number: 2736
title: "`spectral:arazzo` breaks with file not found in VSCode"
state: "closed"
labels: []
author: "erwinkramer"
created: "2024-11-15T00:05:01Z"
updated: "2024-11-25T14:00:15Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2736"
---

# `spectral:arazzo` breaks with file not found in VSCode

**Describe the bug**
When using the Spectral VSCode extension i get the following output:

```
Using ruleset file: .
[Error - 12:53:55 AM] An error occurred while validating document c:\Users\erwin\bank-api\specs-generated\openapi.json: Unable to read ruleset at c:\Users\erwin\bank-api\.spectral.yml. Error: Could not load c:/Users/erwin/bank-api/spectral:arazzo (imported by .spectral.js): ENOENT: no such file or directory, open 'c:\Users\erwin\bank-api\spectral:arazzo'
seenDependencies (before): 0.
```

**To Reproduce**

Make a `.spectral.yml` file like this:

```
extends: ["spectral:oas", "spectral:arazzo"]
```

Then run it with VSCode and see it fails.

Then run it with the CLI and see the (supposedly fine) output: 

```
spectral lint ./specs-generated/openapi.json -v -F "hint"
Found 78 rules (67 enabled)
Linting c:/Users/erwin/bank-api/specs-generated/openapi.json
No results with a severity of 'hint' or higher found!
````

**Expected behavior**
Should work. It works with Spectral CLI, so should work with VSCode too (or at least have a consistent result over all forms).

**Environment (remove any that are not applicable):**
 - Library version: latest
 - OS: WIndows 11

**Additional context**
You can easily test it on this repo: https://github.com/erwinkramer/bank-api?tab=readme-ov-file#bank-api
