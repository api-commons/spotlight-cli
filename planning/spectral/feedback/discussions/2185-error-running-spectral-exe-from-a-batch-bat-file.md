---
number: 2185
title: "Error running Spectral.exe from a batch (.bat) file"
category: "Q&A"
author: "JosephSNewman"
created: "2022-06-16T16:59:55Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2185"
---

# Error running Spectral.exe from a batch (.bat) file

Hello, trying to run Spectral.exe from a .bat file, for a POC, I keep getting...

```
Run Spectral...?
Press any key to continue . . .
Spectral linting...
Error running Spectral!
Error #1: [object Object]
Error #2: [object Object]
Error #3: [object Object]
Error #4: [object Object]
Error #5: [object Object]
Error #6: [object Object]
Error #7: [object Object]
Error #8: [object Object]
Error #9: [object Object]
Error #10: [object Object]
Error #11: [object Object]
Error #12: [object Object]
Press any key to continue . . .

```
here is the batch file code...

```
@echo off
title Run_Spectral
echo Run Spectral...?
set ruleset= .spectral.yaml
set contract= V2-before.json
pause
echo Spectral linting...
spectral.exe lint %contract% --r %ruleset% --verbose
pause 
```
how can I run spectral.exe? Or see the contents of the errors? Are there any examples of spectral.exe being run from a .bat file?
