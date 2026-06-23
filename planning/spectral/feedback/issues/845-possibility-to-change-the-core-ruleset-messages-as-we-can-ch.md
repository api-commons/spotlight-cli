---
number: 845
title: "Possibility to change the core ruleset messages (as we can change severity)"
state: "closed"
labels: ["enhancement", "p/low"]
author: "arnaduga"
created: "2019-12-10T09:56:21Z"
updated: "2021-10-25T08:32:17Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/845"
---

# Possibility to change the core ruleset messages (as we can change severity)

**User story.**
As a API VALIDATION SCRIPT DEVELOPER, I can do replace the core rules return message (as I ca do for severity), so that I can have messages more consistent regarding a company standard guide (for instance, "Break rule 00001: information section MUST have a description".

**Is your feature request related to a problem?**
I'm always frustrated when I do not have consistent messages:
```
 2:6     error  info-description       OpenAPI object info description must be present and non-empty string.

11:10    error  https-server-endpoint  GUIDE001 - API described SHOULD be exposed on a secure http endpoint

13:11    error  verb-in-path           GUIDE003 - API paths MUST NOT contains verbs.
```

**Describe the solution you'd like**
I would like to be able to overlad rules like:
```
extends: spectral:oas
rules:
  info-description: 
    overload:
        severity: error
        message: "GUIDE0010: OpenAPI object MUST have a non-empty description field"
```

Structure of the way to overload above is just a suggestion. Distinction between string or object could be done to keep backward compatibility.

Thank you !
