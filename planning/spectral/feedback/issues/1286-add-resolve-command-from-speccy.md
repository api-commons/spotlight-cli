---
number: 1286
title: "Add resolve command from speccy"
state: "closed"
labels: []
author: "duydao"
created: "2020-07-19T10:57:54Z"
updated: "2020-07-20T20:49:41Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1286"
---

# Add resolve command from speccy

**User story.**
As a user, I would like to resolve a document with all $refs into a single document, so that I can use it on a mock server or on an API Gateway to generate the Endpoints

**Is your feature request related to a problem?**
Currently, there is no way to save the resolved document like in [speccy](https://github.com/wework/speccy#usage). This makes it hard to use the API file in different services, where everything must be in one file.

**Describe the solution you'd like**
- Add a command line argument to lint & resolve the document, printing the resolut to STDOUT
- an argument to save the output to the filesystem

**Additional context**
Maybee we could use the speccy implementation, see speccy resolve https://github.com/wework/speccy#usage -> 
speccy resolve [options] <file-or-url>  pull in external $ref files to create one mega-file
