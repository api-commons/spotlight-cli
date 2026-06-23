---
number: 1902
title: "Did they way custom function load change from 5.9.2 to 6.1.0"
category: "Q&A"
author: "DFog14"
created: "2021-10-14T15:20:24Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1902"
---

# Did they way custom function load change from 5.9.2 to 6.1.0

Heyoh,

We're trying to move our pipeline from Spectral v5.9.2 over to v6.1.0, but it  seems our custom functions no longer load on v6.1.0 despite being error free on v5.9.2.
Specifically what is happening is that the first rule that makes reference to one of our functions is Error-ing out with the following:
Error at #/rules/path-elements-should-not-contain-textual-references/then: must have required property 'function'

Our "then: section for that particular rule is unchanged from v5 to v6 and looks like the following:
```
path-elements-should-not-contain-textual-references:
  description: path elements should not contain textual references
  given: $.paths
  severity: warn
  recommended: true
  then:
    function: "pathElements"
    functionOptions:
      notInclude: "text"
```

Thank you in advance
