---
number: 2544
title: "How to pass a raw Javascript bundle into `extend` or VSCode/IntelliJ plugins?"
category: "Q&A"
author: "bteng22"
created: "2023-10-12T18:03:08Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2544"
---

# How to pass a raw Javascript bundle into `extend` or VSCode/IntelliJ plugins?

My company has bundled up their rulesets on a private repo and my teammates are trying to access it from the VSCode/Intellij plugins but we're running into trouble on fetching the ruleset. It seems when `extend` pulls down a JS bundle from HTTP(S) it doesn't know to convert it into a Javascript module and fails with the error below.  We've tried fetching the JS directly or placing it under a `.spectral.yaml` file in the `extends` options but we're still not able to pull it down. Are there any workarounds or alternatives here?

```
[Error - 12:39:29 PM] An error occurred while validating document /Users/$USER/Repos/spectral-test/openapi.yaml: Unable to read ruleset at /Users/$USER/Repos/spectral-test/.spectral.yaml. Error: 'default' is not exported by https://github.cloud.$COMPANY.com/raw/$USER/spectral-test/main/bundle.js?token=$TOKEN, imported by .spectral.js
```

.spectral.yaml
```
extends:
  - https://github.cloud.$COMPANY.com/raw/$USER/spectral-test/main/bundle.js?token=$TOKEN
```

Linting directly from the CLI works with
`spectral lint -r "https://github.cloud.$COMPANY.com/raw/$USER/spectral-test/main/bundle.js?token=$TOKEN" openapi.yaml` so we were hoping to get the same results with the plugin but doesn't seem to be the case. Any help here would be appreciated!
