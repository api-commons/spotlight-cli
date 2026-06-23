---
number: 2424
title: "Rule overrides with file paths don't work"
state: "closed"
labels: []
author: "anikitin"
created: "2023-03-18T01:16:05Z"
updated: "2023-03-23T15:52:10Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2424"
---

# Rule overrides with file paths don't work

**Describe the bug**
I tried to create a ruleset to override rules for some OpenAPI file basing on subfolders (basing on this documentation https://docs.stoplight.io/docs/spectral/293426e270fac-overrides).

Actually override works for me only if I specify filename or file mask without path.
Any definition containing path with subfolders doesn't work for me.

Here is the fragment that DOES NOT work (the same as in ZIP):
```
overrides:
  - files:
      - "folder1/*.yml"
    rules:
      info-description: off
```

The following one does work:
```
overrides:
  - files:
      - "*.yml"
    rules:
      info-description: off
```

**To Reproduce**
1) Download and unpack
[spectral-override-bug.zip](https://github.com/stoplightio/spectral/files/11007160/spectral-override-bug.zip)

2) run spectral as follows:
`spectral lint **/*-openapi.yml -r linter/spectral-rules.yml `

**Actual behavior**
One warning detected

**Expected behavior**
No warnings detected (override section of the ruleset should have suppressed it)

**Environment (remove any that are not applicable):**
 - Spectral version: 6.6.0
 - OS: Windows 10

**Additional context**
I tried multiple options in "files" section of the override to make it work:

- "folder1/*.yml"
- "**/*.yml"
- "./**/*.yml"
- "**/folder1/*.yml"

Neither worked.
