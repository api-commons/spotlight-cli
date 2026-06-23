---
number: 1327
title: "Routes with parameters are never validates with casing rule"
state: "closed"
labels: ["t/bug"]
author: "hpatoio"
created: "2020-09-07T21:13:21Z"
updated: "2021-06-24T07:10:09Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1327"
---

# Routes with parameters are never validates with casing rule

**Describe the bug**
Routes with parameters are never validates with casing rule

**To Reproduce**

I set up this repo https://github.com/hpatoio/spectral-issue with a scenario

```
git clone git@github.com:hpatoio/spectral-issue.git spectral-issue
cd spectral-issue
docker run --rm -it -v `pwd`:/tmp stoplight/spectral lint -v -D /tmp/openApi.json --ruleset /tmp/.spectral.yml
```

Output is 

```
/tmp/openApi.json
 27:26  error  paths-kebab-case  /kebab-two/{foo} is not kebab-case (lower case and separated with hyphens)

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

OpenApi definition is https://github.com/hpatoio/spectral-issue/blob/master/openApi.json

**Expected behavior**
Path `/kebab-two/{foo}"` should be valid
