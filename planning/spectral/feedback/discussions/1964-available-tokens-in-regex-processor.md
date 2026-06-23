---
number: 1964
title: "Available tokens in regex processor"
category: "Q&A"
author: "htadashi"
created: "2021-11-18T05:42:24Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1964"
---

# Available tokens in regex processor

Does Spectral supports word boundaries (i.e. the token `\b`) detection in its pattern function?

Tried to use the following rule to detect "e-mail" in any description field and it seems to break after using \b in the pattern:
```
rules:
  path-params: off
  e-mail-in-description:
    description: Should use email instead of e-mail in descriptions
    severity: warn
    given: "$..*[?(@property === 'description')]"	
    then:
      function: pattern
      functionOptions:
        notMatch: "\be-mail\b"
```

Thanks for all support and the team for developing such useful tool!

## ✅ Accepted answer — @P0lip

It does, you just need to get the escaping sorted out.

`notMatch: "\be-mail\b"` is not correct, because you don't escape `\`.
Try the following instead `\\be-mail\\b`
