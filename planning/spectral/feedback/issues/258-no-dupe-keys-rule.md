---
number: 258
title: "no-dupe-keys rule"
state: "closed"
labels: ["enhancement"]
author: "P0lip"
created: "2019-06-17T02:34:57Z"
updated: "2019-07-15T09:25:42Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/258"
---

# no-dupe-keys rule

### **I'm submitting a...**
  - [ ] bug report
  - [x] feature request

### What is the current behavior?

There is no way to report duplicated properties.
If you have an object containing 2 or more properties with the same key, Spectral operates on the value of the last property and this is very likely to be unwanted,

### What is the expected behavior?

Having duplicated properties is not desired. We could have a no-dupe-keys rule to help spot such issues.

### What is the motivation / use case for changing the behavior?

Linters such as ESLint provide [rules](https://eslint.org/docs/rules/no-dupe-keys) to detect such errors.

### Please tell us about your environment:

  - Version:  3.x.x
  - Framework: [ ]
  - Language: all

### Other information

(e.g. detailed explanation, stacktraces, related issues, suggestions how to fix, links for us to have context, eg. stackoverflow, issues outside of the repo, forum, etc.)
