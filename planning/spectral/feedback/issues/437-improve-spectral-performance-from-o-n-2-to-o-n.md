---
number: 437
title: "Improve Spectral performance from O(n^2) to O(n)"
state: "closed"
labels: ["enhancement"]
author: "chris-miaskowski"
created: "2019-08-12T14:44:02Z"
updated: "2020-05-29T13:48:07Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/437"
---

# Improve Spectral performance from O(n^2) to O(n)

This is what we have now:
- foreach rule
  - call jsonpath.find(rootObj, targetPath)
    - json path will recurse through relevant parts of object to find matches and return them

We want to have:
- foreach property in rootObject (recursively)
  - for each rule
    - call jsonpath.match(currentPath, targetPath)
