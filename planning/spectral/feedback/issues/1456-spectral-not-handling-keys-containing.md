---
number: 1456
title: "Spectral not handling keys containing @"
state: "closed"
labels: ["t/bug", "released"]
author: "singhtejpal11"
created: "2021-01-05T11:13:46Z"
updated: "2021-09-06T12:11:22Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1456"
---

# Spectral not handling keys containing @

This refactor will help us to allow below schema:
'@customerLocation':
 type: string
 example: "https://google.com"
 format: uri
 description: A URI to a JSON-Schema file that defines additional attributes and relationships
 
 As of now, we are getting below exception with this-
 TypeError: Unknown value type customerTy
    at JSONPath._trace (/*/node_modules/jsonpath-plus/dist/index-umd.js:766:17)
    at /*/node_modules/jsonpath-plus/dist/index-umd.js:745:23
    at /*/node_modules/jsonpath-plus/dist/index-umd.js:909:9
    at Array.forEach (<anonymous>)
    at JSONPath._walk (/*/node_modules/jsonpath-plus/dist/index-umd.js:908:24)
    at JSONPath._trace (/*/node_modules/jsonpath-plus/dist/index-umd.js:743:12)
    at JSONPath._trace (/*/node_modules/jsonpath-plus/dist/index-umd.js:698:19)
    at /*/node_modules/jsonpath-plus/dist/index-umd.js:706:23
    at /*/node_modules/jsonpath-plus/dist/index-umd.js:909:9
    at Array.forEach (<anonymous>)
