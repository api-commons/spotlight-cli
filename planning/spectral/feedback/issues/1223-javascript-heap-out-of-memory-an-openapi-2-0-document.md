---
number: 1223
title: "JavaScript heap out of memory an OpenAPI 2.0 document"
state: "closed"
labels: ["t/bug"]
author: "DavidBiesack"
created: "2020-06-11T17:16:41Z"
updated: "2020-06-23T13:06:25Z"
comments: 14
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1223"
---

# JavaScript heap out of memory an OpenAPI 2.0 document

**Describe the bug**
I ran:

`spectral lint openapi.json`

which resulted in a stack trace. The input OpenAPI 2.0 file is attached as 
[openapi.json.txt](https://github.com/stoplightio/spectral/files/4766149/openapi.json.txt)
(The OpenAPI contains some unused elements because it was extracted from a more complete API definition.)

Stack trace attached as 

[spectral-traceback.txt](https://github.com/stoplightio/spectral/files/4766150/spectral-traceback.txt)

**Expected behavior**

complete normally.

**Environment (remove any that are not applicable):**
 - Library version: spectral 5.4.0
 - OS: mac osx 10.15.2
 - Browser: n/a (CLI)

**Additional context**

May be related to the size of the OpenAPI document. If I trim down some more of the content, eventually it works without running out of heap. But the source OpenAPI has many operations I left off of this, and other data.
