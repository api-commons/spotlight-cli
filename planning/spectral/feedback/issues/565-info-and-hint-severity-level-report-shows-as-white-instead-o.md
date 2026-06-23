---
number: 565
title: "`info` and `hint` severity level report shows as `white` instead of the appropriate name in pretty-print CLI"
state: "closed"
labels: ["t/bug"]
author: "jerzyn"
created: "2019-09-18T13:44:14Z"
updated: "2019-09-19T10:11:57Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/565"
---

# `info` and `hint` severity level report shows as `white` instead of the appropriate name in pretty-print CLI

**Describe the bug**
Rules with `info` or `hint` severity level shows as `white` instead of their name in the pretty print CLI display

**To Reproduce**

1. Apply a ruleset with a rule of severity `info` or `hint`
2. Run the CLI against a JSON/YAML file which would match those rules
3. See the screen

**Expected behavior**
Instead of displaying `white` display `info` or `hint`, depending on the severity level.

**Screenshots**
![image](https://user-images.githubusercontent.com/1447151/65153742-8ff21780-da2a-11e9-8cf2-002e8e91cd08.png)


**Environment (remove any that are not applicable):**
 - Library version: 4.1.1
 - OS: Ubuntu 18.04.3 LTS
 - Browser: command line
