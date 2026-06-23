---
number: 2766
title: "Be able to store IDE plugin config in the `.spectral.yml`"
state: "open"
labels: []
author: "mskonovalov"
created: "2024-12-28T12:49:14Z"
updated: "2024-12-28T12:53:16Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2766"
---

# Be able to store IDE plugin config in the `.spectral.yml`

**User story.**
As a developer, I can define the IDE plugins config (Spectral for VSCode and Spectral for Intellij Idea) in the `.spectral.yml` file, so that I can commit it into git and I don't need to configure it manually every time on every computer.

**Is your feature request related to a problem?**
Spectral has 2 IDE plugins (https://plugins.jetbrains.com/plugin/18520-spectral and https://github.com/stoplightio/vscode-spectral). The parameters they allow to configure are:
- path to ruleset
- glob of validated files (VSCode supports !-notation for exclusion, not sure about Intellij)
- (VsCode only) language to validate.

**Describe the solution you'd like**
I'd like to put those params `validateFiles` and `validateLanguages` into root `.spectral.yml` file and commit it into git.
Then running spectral CLI in the root folder without arguments will actually use those params.
