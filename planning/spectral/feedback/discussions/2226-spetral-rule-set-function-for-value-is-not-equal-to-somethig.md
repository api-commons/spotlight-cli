---
number: 2226
title: "spetral rule set function for value is not equal to somethig"
category: "Q&A"
author: "jmgamboa"
created: "2022-07-31T17:13:30Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2226"
---

# spetral rule set function for value is not equal to somethig

I am trying to ensure the selected path is **not**  certain value as opposed to exist within a given set of values
```
...
given: $.path.value
function: enumeration
then:
   field: @key 
   function: enumeration
   - instead of equal to this, not equal to this 


```
would i need to do a custom function for this?
