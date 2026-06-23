---
number: 1970
title: "Generate multiple output formats with one cli call"
state: "closed"
labels: ["enhancement", "released"]
author: "albertored"
created: "2021-11-25T13:06:17Z"
updated: "2022-01-28T12:10:57Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1970"
---

# Generate multiple output formats with one cli call

**User story.**
As a spectral user, I would like to be able to generate lint reports in different formats with a single cli call without the need or lining the same spec multiple times (it can be time-consuming for huge specs).

**Describe the solution you'd like**
An option is to change `--output` and `--format` cli flags to accept a comma separated list of values so that a user can decide to generate more than one report and save it into different files. In particular

```bash
# as today, stylish report on stdout 
spectral lint --ruleset ruleset.yml openapi.json

# as today, json report on stdout 
spectral lint --ruleset ruleset.yml -f json openapi.json

# json report on file report.json, stylish report on file report.txt
spectral lint --ruleset ruleset.yml -f json,stylish -o report.json,report.txt openapi.json

# json report on file report.json, stylish report on stdout
spectral lint --ruleset ruleset.yml -f json,stylish -o report.json,stdout openapi.json

# TBD error or only json report on stdout
spectral lint --ruleset ruleset.yml -f json,stylish openapi.json
```

I can create a PR if you think is worth adding the feature
