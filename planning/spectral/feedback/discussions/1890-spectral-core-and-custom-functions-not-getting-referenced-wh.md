---
number: 1890
title: "SPECTRAL core and custom functions not getting referenced when running spectral lint command from CMD"
category: "Q&A"
author: "pankhiprasher"
created: "2021-10-07T22:17:16Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1890"
---

# SPECTRAL core and custom functions not getting referenced when running spectral lint command from CMD

Hey I have been raising requests and tickets on the stoplight support but haven't got any response yet.
In our project we are creating custom JS functions and already have core JS functions and we need to call it from CMD but when i run the spectral lint command , I  keep getting these errors - 
Also i need a way forward to have custom functions called in from my project structure where i have rulesets folder and respective js files and this testspectral all of them in rulesets folder and i run a command like - 
C:\Program Files>spectral lint --ruleset **rulesets**/testspectral.yaml C:\Users\xxx\API.yaml 

Any help would be really appreciated .

C:\Program Files>spectral lint --ruleset testspectral.yaml C:\Users\xxx\API.yaml 
Cannot find module 'c:/Program Files/functions/oasOp2xxResponse.js'
Require stack:
- C:\Users\xxx\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\services\linter\utils\getRuleset.js
- C:\Users\xxx\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\services\linter\utils\index.js
- C:\Users\xxx\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\services\linter\linter.js
- C:\Users\xxx\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\services\linter\index.js
- C:\Users\xxx\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\commands\lint.js
- C:\Users\xxx\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\index.js
