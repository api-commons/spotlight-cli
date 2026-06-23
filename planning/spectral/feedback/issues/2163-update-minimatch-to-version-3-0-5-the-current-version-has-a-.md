---
number: 2163
title: "Update minimatch to version 3.0.5. The current version has a security vulnerability "
state: "closed"
labels: ["released", "chore"]
author: "Siafu"
created: "2022-05-23T15:06:31Z"
updated: "2022-06-29T12:14:05Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2163"
---

# Update minimatch to version 3.0.5. The current version has a security vulnerability 

**Chore summary**
Update minimatch to version 3.0.5 for official Docker release.  

minimatch contains a flaw in the braceExpand() function in minimatch.js that is triggered as an improper regular expression is used to match patterns for brace expansion. This may allow a context-dependent attacker to hang or slow down a Node process using the library.

**Tasks**
- [ ] Add resolution to package.json 
``` 
"resolutions": {
    "minimatch": "^3.0.5"
  } 
```
