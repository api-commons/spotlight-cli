---
number: 2086
title: "'spectral' is not recognized as an internal or external command, operable program or batch file."
state: "closed"
labels: []
author: "Koushikj9823"
created: "2022-03-11T08:15:11Z"
updated: "2022-03-13T08:22:39Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2086"
---

# 'spectral' is not recognized as an internal or external command, operable program or batch file.

**Describe the bug**
 I have installed [@stoplight/spectral-cli](https://www.npmjs.com/package/@stoplight/spectral-cli) using the command **npm install -g @stoplight/spectral-cli**. It gets successfully installed, But while running spectral command, it does not recognize.

**To Reproduce**

1. Run this CLI command `'spectral lint -r ./lingo-ruleset-rpc.yaml ./spec.yaml'`
2. See error: 
```
  spectral : The term 'spectral' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path 
  was included, verify that the path is correct and try again.
  At line:1 char:1
  + spectral lint -r ./lingo-ruleset-rpc.yaml ./spec.yaml
  + ~~~~~~~~
+ CategoryInfo          : ObjectNotFound: (spectral:String) [], CommandNotFoundException
+ FullyQualifiedErrorId : CommandNotFoundException
```
    

**Environment:**
 - OS: Windows 10
 - Node: 14.17.1
 - npm: 6.14.13
