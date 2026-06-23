---
number: 801
title: "File not found (CLI and Docker)"
state: "closed"
labels: ["enhancement"]
author: "HugoSentelien"
created: "2019-11-21T14:29:15Z"
updated: "2020-04-01T14:37:17Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/801"
---

# File not found (CLI and Docker)

**User story.**
As an API Designer, I can validate my file from a Docker image, so that I can see if there is any errors.

**Is your feature request related to a problem?**
I'm always frustrated when the syntax for my file is a wrong one or my docker storage is badly mounted, and the log just tell me "No results with a severity of 'warn' or higher found!"

**Describe the solution you'd like**
I would like to know when a file search is giving no result, for example, when I am executing:
"docker run --rm -it -v C:/tmp:/tmp spectral lint "/tmp/*.{json,yml,yaml}" "/tmp/*.oas.{json,yml,yaml}" "doo.yml"
I would like a message to told me if there is no "doo.yml" or if on of the two fast-glob search are giving no result.

**Additional context**
I already made some change to the code, a pull request is coming soon, but I needed this issue to attached it.
I would love to have your feedback, because I don't know how to pass the test without updating the 'unixify paths' test and losing the purpose of this very same test.
