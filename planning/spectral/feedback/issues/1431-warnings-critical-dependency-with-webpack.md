---
number: 1431
title: "Warnings critical dependency with webpack"
state: "closed"
labels: ["t/bug"]
author: "emilioSp"
created: "2020-12-30T15:40:30Z"
updated: "2021-01-12T17:06:27Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1431"
---

# Warnings critical dependency with webpack

**Describe the bug**
Not sure if it could be classified as bug, but during the build phase, webpack throws out some warnings like these
```bash
WARNING in ./node_modules/@stoplight/spectral/dist/rulesets/evaluators.js 57:15-22
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/@stoplight/spectral/dist/spectral.js 18:21-53
 @ ./node_modules/@stoplight/spectral/dist/index.js 5:21-42
 @ ./index.js 1:0-60 2:19-27 3:32-43

WARNING in ./node_modules/@stoplight/spectral/dist/rulesets/finder.js 16:15-35
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/@stoplight/spectral/dist/rulesets/reader.js 8:17-36
 @ ./node_modules/@stoplight/spectral/dist/rulesets/index.js 5:15-34
 @ ./node_modules/@stoplight/spectral/dist/spectral.js 17:19-40
 @ ./node_modules/@stoplight/spectral/dist/index.js 5:21-42
 @ ./index.js 1:0-60 2:19-27 3:32-43

```

**To Reproduce**
```bash
git clone https://github.com/emilioSp/spectral-webpack.git
yarn
yarn build
```

then you should see 6 warnings in the console.

**Expected behavior**
No warnings.

**Environment (remove any that are not applicable):**
 - Library version: 5.7.2
 - OS: MacOS Big Sur
