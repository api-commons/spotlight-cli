---
number: 26
title: "Add getRules function"
state: "closed"
labels: ["enhancement"]
author: "casserni"
created: "2018-10-03T17:51:19Z"
updated: "2018-10-03T18:02:27Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/26"
---

# Add getRules function

Currently we are importing the rules from spectral, in platform, and this is no good

- [x] create a get rules function to return rules
   - [x] should be a flattened array with rule attributes, name, and format
- [x] allow to filter by format 
    - basic functionality is there but we may want to rethink how we are currently matching on format both here and during apply
- [x] add tests
