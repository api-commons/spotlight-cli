---
number: 2089
title: "Ref resolving sometimes drops certain keys"
state: "open"
labels: ["t/bug", "triaged", "json-refs"]
author: "mpetrunic"
created: "2022-03-14T14:12:43Z"
updated: "2024-05-31T12:35:15Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2089"
---

# Ref resolving sometimes drops certain keys

**Describe the bug**
Seems like when resolving files, all path param keys except for '$ref' get dropped. It doesn't happen every time and for us is only happening on single operation, on some runs it gets picked up and everything works. Cannot really figure out a reason. I've debugged the code and it's obvious that parsed ref data of operation contains all path param keys but when it gets merged into the main file, only `$ref` key is preserved.

**To Reproduce**
You can easily reproduce by running this spec in https://github.com/ethereum/beacon-APIs/pull/194
with `spectral lint beacon-node-oapi.yaml`

**Expected behavior**
Lint results should be consistent every time but on every other run, we get errors.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 6.2.1
 - OS: Linux, Mac

**Additional context**
Add any other context about the problem here.
