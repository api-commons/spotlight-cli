---
number: 2220
title: "Override to turn off specific oas3-unused-component warning?"
category: "Q&A"
author: "clydecutting"
created: "2022-07-27T13:48:28Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2220"
---

# Override to turn off specific oas3-unused-component warning?

I'm volunteering on FDX (financialdataexchange.org) APIs which have two intentionally-defined but unused (within the yaml) entities. How can I create an override to turn off that warning or downgrade to info? I've tried this ruleset:

```yaml
extends: [[spectral:oas, all]]
overrides:
  files:
    - "API/fdxapi.consent.yaml"
  rules:
    oas3-unused-component:
      given:
        - "$.components/schemas/ConsentRequest"
      severity: info
```

Which gives me:

``` shell
clydecutting@Clydes-MBP fdxapi % spectral lint --ruleset  config/spectral-ruleset.yaml API/fdxapi.consent.yaml --verbose
Error running Spectral!
Error #1: [object Object]
```

Without the override (ruleset just `extends: [[spectral:oas, all]]`) we get:

```shell
/opt/atlassian/pipelines/agent/build/API/fdxapi.consent.yaml
 267:20  warning  oas3-unused-component  Potentially unused component has been detected.  components.schemas.ConsentRequest
```
