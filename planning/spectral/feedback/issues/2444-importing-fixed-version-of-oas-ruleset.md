---
number: 2444
title: "Importing fixed version of OAS ruleset"
state: "open"
labels: ["enhancement", "triaged"]
author: "OllieTho"
created: "2023-03-30T22:22:28Z"
updated: "2024-05-31T12:34:23Z"
comments: 0
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2444"
---

# Importing fixed version of OAS ruleset

**Describe the bug**
I was directed to raise this as an issue by @P0lip 

I'm attempting to pin a specific version of spectral's OAS ruleset and have it work in both spectral cli and StopLight studio.  Previously when importing this into StopLight studio I get an error about the spectral-functions package attempting to be imported when it already exists.  Now it displays the following:

Module "https://unpkg.com/@stoplight/spectral-rulesets@1.14.1/dist/oas/index.js" that is marked with 'syntheticNamedExports: "__moduleExports"' needs an explicit export named "__moduleExports" that does not reexport an unresolved named export of the same module.

**To Reproduce**
Import the oas ruleset into your .spectral.yaml file.
```
extends:
  - https://unpkg.com/@stoplight/spectral-rulesets@1.14.1/dist/oas/index.js
```

**Expected behavior**
I would like to be able to use a specific version of the OAS ruleset to maintain project uptime in case an update requires changes or a service outage prevents us from reaching npm or other providers.
