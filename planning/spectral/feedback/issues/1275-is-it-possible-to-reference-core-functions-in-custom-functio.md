---
number: 1275
title: "Is it possible to reference core functions in custom functions?"
state: "closed"
labels: ["good first issue", "documentation"]
author: "vitaly-magyari"
created: "2020-07-08T12:09:08Z"
updated: "2020-10-08T15:48:53Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1275"
---

# Is it possible to reference core functions in custom functions?

**User story.**
As a custom rule developer I'd like to implement rules in such a way that check are performed if there is a marker field is absent in document, and skipped otherwise

**Is your feature request related to a problem?**
I have special schemas that are not subject to say `info-contact` check and they are marked by `info:skip-contact: true` field. 

the core rule is quite simple
```
    "info-contact": {
      "description": "Info object should contain `contact` object.",
      "recommended": true,
      "type": "style",
      "given": "$",
      "then": {
        "field": "info.contact",
        "function": "truthy"
      }
    },
```
But I'm at a loss as to how to add that extra check. I can write my custom function, yes, but I can't reference `truthy` from it, I think. So in a more complex core function case I have to either re-write completely or extract from the source. Am I wrong? I there a better way?

**Describe the solution you'd like**
Something along the lines of:
```
module.exports = (targetVal, opts, _paths, otherValues) => {
  const { value } = opts;
  if (targetVal.info["skip-info"] === true) return;
  
  return core.truthy(tagretVal.info) // I'd rather reference a rule here, but that's probably too much to ask...
    
  };
```
