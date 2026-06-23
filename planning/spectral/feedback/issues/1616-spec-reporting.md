---
number: 1616
title: "Spec reporting"
state: "closed"
labels: ["enhancement", "breaking", "v6", "CLI"]
author: "P0lip"
created: "2021-05-11T15:40:11Z"
updated: "2021-06-30T12:14:31Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1616"
---

# Spec reporting

The current way of logging the spec of a document had been fine until we introduced support for multiple documents.
As of the multiple documents, if you pass a glob pattern, the results are useless.
![image.png](https://images.zenhubusercontent.com/5d080cab08bab04301b24969/9e4802a0-42c0-45d9-87f9-2decb8437e30)

I believe we can get rid of that reporting entirely _or_, if it's truly needed, try to include the spec to the filename if `--verbose` flag is specified.
