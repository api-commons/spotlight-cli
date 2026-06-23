---
number: 325
title: "Switch from oclif to yargs"
state: "closed"
labels: ["enhancement"]
author: "brianmrock"
created: "2019-07-06T19:25:25Z"
updated: "2019-08-30T18:11:30Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/325"
---

# Switch from oclif to yargs

oclif has been causing all sorts of oddities and weirdness, including a recent issue where it starts moaning about globby for no reason. 

```
$ spectral --version
(node:30001) [MODULE_NOT_FOUND] Error Plugin: @stoplight/spectral: Cannot find module 'globby'
module: @oclif/config@1.13.0
task: not loading commands, globby not found
plugin: @stoplight/spectral
root: /Users/phil/.asdf/installs/nodejs/10.15.3/.npm/lib/node_modules/@stoplight/spectral
See more details with DEBUG=*
@stoplight/spectral/4.0.0-beta1 darwin-x64 node-v10.15.3
```
Switch it out for Yargs as Prism has done. 

**Acceptance Criteria**
- No breaking changes to the CLI (e.g: its ok if help page looks a bit different)
- Oclif is gone
- Lint command is still tested, coverage going up would be nice
