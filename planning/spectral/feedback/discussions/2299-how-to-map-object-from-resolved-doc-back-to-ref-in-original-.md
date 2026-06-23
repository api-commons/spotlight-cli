---
number: 2299
title: "How to map object from resolved doc back to $ref in original unresolved doc"
category: "Q&A"
author: "padamstx"
created: "2022-09-30T15:23:03Z"
upvotes: 1
comments: 2
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2299"
---

# How to map object from resolved doc back to $ref in original unresolved doc

Hi,
I'm writing a custom rule function that needs to examine the schemas within the resolved version of an openapi definition.   This function needs to compare two schema properties p1 and p2 to determine if they are in fact the same schema.  In this context, p1 and p2 are like-named schema properties from two different schemas.  If p1 and p2 represent primitive types, the comparison is straightforward.  However, if p1 and p2 are object schemas (i.e nested objects), then they are
"equivalent" only if they were defined with the same $ref in the original unresolved API definition.

Is there a reliable way to map an object (perhaps based on its jsonpath) back to it's original form in the original/unresolved API definition?

Thanks in advance for any help.
Phil
