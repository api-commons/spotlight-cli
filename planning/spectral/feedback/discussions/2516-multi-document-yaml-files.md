---
number: 2516
title: "Multi Document YAML Files"
category: "Q&A"
author: null
created: "2023-07-25T08:40:14Z"
upvotes: 4
comments: 2
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2516"
---

# Multi Document YAML Files

I am investigating using Spectral Lint to help check YAML files for 'correctness'.
However the input YAML Files are 'multi document' - i.e separated by `---`

When processing I get this error:
```
 1:1  error  parser  Expected a single document in the stream, but found more
```
From the documents I cant find a way to support scanning the entire file (and the multiple documents within).
Is it possible?
