---
number: 2447
title: "cannot use builtin functions from override rule"
state: "closed"
labels: ["t/bug", "released"]
author: "rittneje"
created: "2023-03-31T16:03:11Z"
updated: "2023-05-23T22:18:07Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2447"
---

# cannot use builtin functions from override rule

**Describe the bug**

If I do this:
```yaml
extends:
- "spectral:oas"
- "spectral:asyncapi"
aliases:
  OperationObject:
    - "#PathItem[get,put,post,delete,options,head,patch,trace]"
  PathItem:
    - $.paths[*]
overrides:
- files: ["*"]
  rules:
    operation-description:
      given: '#OperationObject'
      then:
        field: 'summary'
        function: 'truthy'
      severity: warn
```

I get an error:
```
Error running Spectral!
Error #1: Function is not defined
          at validateFunction  …tors/function.ts:27  return new RulesetV…
          at validate26        …ompile/index.ts:171  const makeValidate …
          at validate15        …ompile/index.ts:171  const makeValidate …
          at validate45        …ompile/index.ts:171  const makeValidate …
          at validate14        …ompile/index.ts:171  const makeValidate …
```

If I do this similar thing:

```yaml
extends:
- "spectral:oas"
- "spectral:asyncapi"
aliases:
  OperationObject:
    - "#PathItem[get,put,post,delete,options,head,patch,trace]"
  PathItem:
    - $.paths[*]
rules:
  operation-summary:
    given: '#OperationObject'
    then:
      field: 'summary'
      function: 'truthy'
    severity: warn
```

Then it works.


**Environment (remove any that are not applicable):**
 - Library version: 6.0.0
