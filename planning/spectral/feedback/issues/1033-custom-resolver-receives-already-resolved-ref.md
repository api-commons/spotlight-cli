---
number: 1033
title: "Custom resolver receives already-resolved $ref"
state: "closed"
labels: ["t/bug"]
author: "germanschnyder"
created: "2020-03-25T15:37:19Z"
updated: "2020-03-30T12:34:54Z"
comments: 13
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1033"
---

# Custom resolver receives already-resolved $ref

When implementing a custom resolver I get the $ref already resolved instead of the value expressed in the openapi file.

**To Reproduce**

Implement example custom resolver:

```
module.exports = new Resolver({
  resolvers: {
    file: {
      resolve(ref) {
        console.log(ref.path()) <-- this will output the full path of the $ref content
     }
    }
  }
}
```

**Expected behavior**
Receive the exact value specified in the $ref field (for example, mydir/myfile.yml) instead of the resolved full path (that may not exist and I'm trying to fix)

**Environment (remove any that are not applicable):**
 - Library version: 5.2.0
 - OS: Ubuntu
