---
number: 2675
title: "No error reported when file provided in input does not exists "
state: "open"
labels: []
author: "LasneF"
created: "2024-08-29T12:33:09Z"
updated: "2024-08-29T12:34:29Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2675"
---

# No error reported when file provided in input does not exists 

**Describe the bug**
running spectral on an non existing file does return that all is fine 

**To Reproduce**

spectral lint bob --ruleset .spectral\.spectral.yaml 

with no file called bob 
return 

"No results with a severity of 'error' found!"


**Expected behavior**
a message indicating that bob file does not exists and return error exit code 

**Environment (remove any that are not applicable):**
 - OS: Windows
- Spectral ; 6.11.1 

**Additional context**
if i set a wrong ruleset i have a nice error message , 
"Could not read ruleset" , i would expect the same cannot read the api decription file
