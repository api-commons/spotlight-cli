---
number: 1746
title: "chore(dependencies): Security issue"
state: "closed"
labels: ["chore"]
author: "dalisoft"
created: "2021-07-12T17:49:58Z"
updated: "2021-07-29T11:08:43Z"
comments: 9
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1746"
---

# chore(dependencies): Security issue

**Chore summary**
https://github.com/advisories/GHSA-35jh-r3h4-6jhm

**Tasks**
- [ ] Upgrade `lodash` to version 4.17.21 or later

**Additional context**

```diff
❯ yarn why lodash
yarn why v1.22.10
[1/4] 🤔  Why do we have the module "lodash"...?
[2/4] 🚚  Initialising dependency graph...
[3/4] 🔍  Finding dependency...
[4/4] 🚡  Calculating file sizes...
=> Found "lodash@4.17.21"
info Has been hoisted to "lodash"
info Reasons this module exists
   - "workspace-aggregator-9d7c4e81-a142-402a-a0aa-d73d18c6433a" depends on it
   - Hoisted from "_project_#@commitlint#cli#lodash"
   - Hoisted from "_project_#@commitlint#cli#@commitlint#load#lodash"
   - Hoisted from "_project_#smartlint#stylelint#lodash"
   - Hoisted from "_project_#smartlint#dockerfilelint#lodash"
+   - Hoisted from "_project_#smartlint#@stoplight#spectral#@stoplight#json#lodash"
   - Hoisted from "_project_#commitlint-config-airlight#@commitlint#config-conventional#conventional-changelog-conventionalcommits#lodash"
   - Hoisted from "_project_#@commitlint#cli#@commitlint#read#git-raw-commits#lodash"
   - Hoisted from "_project_#@commitlint#cli#@commitlint#load#@commitlint#resolve-extends#lodash"
   - Hoisted from "_project_#lerna#@lerna#create#whatwg-url#lodash"
+   - Hoisted from "_project_#smartlint#@stoplight#spectral#@stoplight#json-ref-resolver#@stoplight#json#lodash"
   - Hoisted from "_project_#lerna#@lerna#version#@lerna#conventional-commits#conventional-changelog-core#lodash"
   - Hoisted from "_project_#@commitlint#cli#@commitlint#lint#@commitlint#parse#conventional-commits-parser#lodash"
   - Hoisted from "_project_#@commitlint#cli#@commitlint#lint#@commitlint#rules#@commitlint#ensure#lodash"
   - Hoisted from "_project_#lerna#@lerna#clean#@lerna#prompt#inquirer#lodash"
   - Hoisted from "_project_#lerna#@lerna#version#@lerna#conventional-commits#conventional-changelog-core#conventional-changelog-writer#lodash"
info Disk size without dependencies: "4.88MB"
info Disk size with unique dependencies: "4.88MB"
info Disk size with transitive dependencies: "4.88MB"
info Number of shared dependencies: 0
=> Found "@stoplight/spectral#lodash@4.17.20"
info This module exists because "_project_#smartlint#@stoplight#spectral" depends on it.
info Disk size without dependencies: "4.86MB"
info Disk size with unique dependencies: "4.86MB"
info Disk size with transitive dependencies: "4.86MB"
info Number of shared dependencies: 0
✨  Done in 0.62s.
```
