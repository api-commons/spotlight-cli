---
number: 2553
title: "PowerShell: Multiple Formater / Output  does not work "
state: "open"
labels: ["t/bug", "documentation", "triaged"]
author: "LasneF"
created: "2023-11-15T13:15:28Z"
updated: "2024-05-31T12:34:32Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2553"
---

# PowerShell: Multiple Formater / Output  does not work 

**Describe the bug**
the feature leveraging multiple formater / output is broken 

**To Reproduce**

- spectral lint openapi.yaml -r .spectral.yaml -f junit,html

**returns** 
Invalid values:
  Argument: format, Given: "junit html", Choices: "json", "stylish", "junit", "html", "text", "teamcity", "pretty", "github-actions", "sarif

notice i provided a coma , but the is mentionning a space 

- spectral lint openapi.yaml -r .spectral.yaml -f junit -f html -o a.junit -o a.html

**return**
Multiple outputs have to be provided when more than a single format is specified

looks several -f is correctly interpreting as multiple formater , but not multiple output

- spectral lint openapi.yaml -r .spectral.yaml -f junit -f html -o a.junit,a.html 

**Returns** 
The number of outputs must match the number of formats


at the end i do not have found the right combination that make the multiple output working (target junit, html and stdout) 

**Expected behavior**
command line working like this 

i can provide either -f junit,html  or -f junit -f html , and same for output 

documentation for the stdout output 
documentation with a basic sample with for instance stdout + a formater  *



notice as well that in the simple case
 spectral lint openapi.yaml -r .spectral.yaml -f junit -o a.junit -q true

leveraging -q true or false as no impact , wheras i would expect it has (my target beeing output on stdout + html file) 

**Environment **
spectral --version :  6.11.0
