---
number: 1235
title: "Including multiple body parameters on operation doesn't result in error"
state: "closed"
labels: ["t/bug", "cs/reported"]
author: "connorpwilliams"
created: "2020-06-17T15:08:06Z"
updated: "2020-06-23T16:00:27Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1235"
---

# Including multiple body parameters on operation doesn't result in error

**Describe the bug**
Developing API specifications in Stoplight Studio V1 does not identify OAS file issues. When my team imports this into our API management tool, the specification is checked with what I'm guessing is an implementation of swagger as it appears very closely similar to https://editor.swagger.io. 

**To Reproduce**
I cannot copy content here as the APIs are company data which cannot be published. But one example is using an OpenAPI V2 specification - setting an attribute in a request JSON body to be data type "string" or "number" is not identified as an issue but it is identified as an issue with multiple types being invalid.
** EDIT **
Another issue that can come up is duplicate "in":"body" parameters for an API route. This is not identified as an issue but is indeed invalid.

**Expected behavior**
Invalid OAS 2 syntax is identified. 

**Screenshots**
For security reasons I cannot attach screenshots.

**Environment (remove any that are not applicable):**
 - Library version: 5.4.0-beta1 (Built-in with Stoplight Studio V1)
 - OS: Windows 10
 - Browser: Version 83.0.4103.97 (Official Build) (64-bit)

**Additional context**
I am not sure if there is a difference between OpenAPI and Swagger. My team faces issues Daily when importing de-referenced API specifications from Stoplight Studio to our API Management platform. My team indicated that this issue was not happening with Stoplight Next.
