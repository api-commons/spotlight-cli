---
number: 534
title: "Allow multiple paths as argument"
state: "closed"
labels: ["enhancement"]
author: "mrjoops"
created: "2019-09-09T07:51:36Z"
updated: "2020-05-14T22:49:36Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/534"
---

# Allow multiple paths as argument

**User story.**
As a CI tool, I can lint all the files in a repository, so that I can see a report for all the files with a single command line.

**Is your feature request related to a problem?**
It is time consuming to iterate manually through all files, run the command, store the status, do some computation to get the global status and display the report.

**Describe the solution you'd like**
Today only one file is accepted as argument, it would be great to accept multiple paths (file or directory), maybe with wildcards too.
