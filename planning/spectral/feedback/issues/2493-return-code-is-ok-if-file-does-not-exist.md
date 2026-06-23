---
number: 2493
title: "Return code is OK if file does not exist"
state: "closed"
labels: []
author: "nico01h"
created: "2023-06-27T13:59:46Z"
updated: "2023-06-27T14:43:35Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2493"
---

# Return code is OK if file does not exist

**User story.**
As a developer, I can check that the files I want to verify are present, so that I can check that spectral returns OK only when files are checked.

**Is your feature request related to a problem?**
Yes, because if I add spectral in a CI, I can have a false positive : the CI will return OK even if the file does not exist. A developer could easily rename the filename, and spectral would return OK.

**Describe the solution you'd like**
I would like to have an error if any of the files to check does not exist. It may be with an option, or the default behavior, it does not matter to me.

**Additional context**
Current behaviour (spectral file not present)

$ spectral lint --ruleset .spectral.yaml swagger.yml -F=warn
No results with a severity of 'warn' or higher found!

$ ls
package.json  README.md

Thank you for your help, and the amazing job!
