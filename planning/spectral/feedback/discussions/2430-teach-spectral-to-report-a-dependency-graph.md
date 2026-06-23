---
number: 2430
title: "Teach Spectral to report a dependency graph"
category: "Ideas"
author: "nulltoken"
created: "2020-07-13T06:53:08Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2430"
---

# Teach Spectral to report a dependency graph

**User story.**
As a user of the VSCode plugin, when working on $reffed files that aren't root documents, Spectral properly find out the proper root file to lint.

**Is your feature request related to a problem?**
https://github.com/stoplightio/vscode-spectral/pull/6/ introduces a half-baked way to deal with this by managing an in-memory tree of dependencies based on the issues that have been in found. Although this helps (a bit) the "lint-while-you-work" experience, this is very fragile.

**Describe the solution you'd like**
Maybe a first step would be to have `run()/runWithResolved()` return an object representing the dep graph of the files that the resolver met. This dep graph may contain multiple roots. This object would also expose a helper function allowing one to find the proper root(s) from a random file.
