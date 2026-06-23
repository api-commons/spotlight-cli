---
number: 1818
title: "Spectral dependency vulnerabilities"
state: "closed"
labels: ["chore"]
author: "benjamin-mogensen"
created: "2021-09-04T09:33:42Z"
updated: "2021-10-19T07:45:36Z"
comments: 5
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/1818"
---

# Spectral dependency vulnerabilities

**Chore summary**
Update dependencies so that they use later versions that are not having any security vulnerabilities

**Additional context**
In Github we have received two dependabot warnings for @stoplight/spectral@6.0.0-alpha3 (same version that Stoplight Desktop is using) one for immer and one for pac-resolver. Not sure how these are normally fixed - but is it possible to release a new version of Spectral that does not have these vulnerabilities?

![image](https://user-images.githubusercontent.com/73802221/132089866-38408647-6006-47d3-aa22-bde5f777de02.png)
