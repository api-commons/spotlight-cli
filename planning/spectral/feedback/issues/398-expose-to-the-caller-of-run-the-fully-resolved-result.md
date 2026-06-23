---
number: 398
title: "Expose to the caller of `.run()` the fully resolved result"
state: "closed"
labels: ["enhancement"]
author: "nulltoken"
created: "2019-07-21T11:03:03Z"
updated: "2019-08-20T14:32:10Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/398"
---

# Expose to the caller of `.run()` the fully resolved result

**User story.**
As a developer, I can access the fully resolved results of multiple calls to `spectral.run()`, so that I can apply some further custom processing on the standalone resulting object.

**Is your feature request related to a problem?**
We have to deal with multiple .yaml root files, each of them relying on remotes references.
Spectral is an amazing tool to lint each root file (and pointing at where each issue come from, on a file by file basis). However, eventually, we have to combine those files into a gigantic standalone OAS doc and apply some further linting (that only makes sense when all the files are combined).

**Describe the solution you'd like**
I'd like to be able to retrieve from each `run()` call the [internally resolved result](https://github.com/stoplightio/spectral/blob/develop/src/spectral.ts#L64), so that I've only got to perform the final combining and the additional linting.
