---
number: 1822
title: "Merge keys in ruleset not working in 6.0.0"
state: "closed"
labels: ["t/bug", "released", "p/low"]
author: "ioggstream"
created: "2021-09-08T14:16:54Z"
updated: "2021-09-14T12:11:53Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1822"
---

# Merge keys in ruleset not working in 6.0.0

**Describe the bug**
- merge keys in ruleset seem not to work

**To Reproduce**

1. run

```
$ spectral lint  -r https://raw.githubusercontent.com/italia/api-oas-checker/master/rules/cache-control.yml /dev/null
```

2. I get an error

```
Error at #/rules/cache-responses-undocumented: the rule must have at least "given" and "then" properties
```

**Expected behavior**
spectral not to raise error


**Environment (remove any that are not applicable):**
 - Library version: 6.0.0
 
**Additional context**
Provided ruleset references a previous yaml entry

```
  cache-responses-undocumented:
    <<: *cache-control  # <--- this is defined above in the file, works with Spectral 5.x 
    severity: info
    message: >-
      Cache usage in responses SHOULD be documented in Cache-Control and/or Expires. {{error}}
    given: >-
      $.[responses][?(@property[0] == "2" )][headers].[?(@property.match(/Cache-Control|Expires/i))]]
```
