---
number: 1691
title: "Reference resolution"
category: "Q&A"
author: "gk12277"
created: "2021-06-24T12:32:22Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1691"
---

# Reference resolution

Hi have a document,

```yaml
type: object
properties:
     pet: 
         type: string
         ref_key: main.property
```

Whenever `ref_key` is encountered a custom function is called.
Inside the function I convert `ref_key` to an actual reference and resolve it.( Something like { $ref: "#/main/property" }.
Currently I am doing the resolution on my own.
I noticed that spectral resolves references and throws error in case of invalid reference. So, is there a way for me to converted the ref_key to actual reference and call spectral for resolving reference in my custom function.

I found i could call built in function for truthy but didn't find a way to resolve references.
