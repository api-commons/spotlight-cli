---
number: 2404
title: "Warnings critical dependency with webpack, spectral-ruleset-migrator"
state: "closed"
labels: ["released"]
author: "dweber019"
created: "2023-02-19T20:03:00Z"
updated: "2023-05-23T22:18:13Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2404"
---

# Warnings critical dependency with webpack, spectral-ruleset-migrator

**Describe the bug**
I receive the following error when using Spectral like this
https://github.com/dweber019/backstage/blob/feat/api-spectral-linter/plugins/api-docs-spectral-linter/src/api/LinterClient.ts#L21

```
[0] WARNING in ../../node_modules/@stoplight/spectral-ruleset-migrator/dist/requireResolve.js 5:15-22
[0] Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
[0] 
[0] webpack compiled with 1 warning
```

I think it could be a similar issue like https://github.com/stoplightio/spectral/issues/1431

**To Reproduce**

1. Clone https://github.com/dweber019/backstage/tree/feat/api-spectral-linter
2. yarn install
3. yarn dev

**Expected behavior**
No warning

**Environment (remove any that are not applicable):**
OS:   Darwin 22.3.0 - darwin/x64
node: v16.14.2
yarn: 3.2.3
Webpack: 5.74.0
Webpack config: https://github.com/dweber019/backstage/blob/feat/api-spectral-linter/packages/cli/src/lib/bundler/config.ts
