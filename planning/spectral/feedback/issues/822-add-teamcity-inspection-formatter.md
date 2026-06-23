---
number: 822
title: "Add teamcity inspection formatter"
state: "closed"
labels: ["enhancement"]
author: "memelet"
created: "2019-11-30T01:26:47Z"
updated: "2019-12-03T16:17:44Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/822"
---

# Add teamcity inspection formatter

**User story.**
As an SRE, I can do configure spectral to emit teamcity inspection service messages, so that I can fail the build and navigate to errors.

**Describe the solution you'd like**
A new formatter that emits teamcity service messages.

**Additional context**
Teamcity service messages look like
```
##teamcity[inspection typeId='valid-example-in-schemas' file='src/api.yml' line='3970' message='\"hour-min.example\" property pattern should match pattern \"^(?:(|[01|]\\d||2|[0-3|]):(|[0-5|]\\d))$\"']
```

See also https://www.jetbrains.com/help/teamcity/build-script-interaction-with-teamcity.html#BuildScriptInteractionwithTeamCity-ReportingInspections

(PR forthcoming)
