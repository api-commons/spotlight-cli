---
number: 2141
title: "loadRuleset and registerFormat alternatives for spectral 6"
state: "closed"
labels: []
author: "KiranReddy0808"
created: "2022-04-29T06:39:38Z"
updated: "2023-01-09T21:49:28Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2141"
---

# loadRuleset and registerFormat alternatives for spectral 6

Hello,

Since from spectral 6, registerFormat and loadRuleset are removed from spectral object from version 6. Would like to know alternative for implementing registerFormat.

For our use case we have RAML 08 specs for which we have different parser and is fed into spectral run with own ruleset. Register Format was important way to distinguish between which of rules to run. Since its removed is there any alternate we could use? I've seen there is new optional object field in documents object, if it's new way to track format then creating a document is compulsory now?

Earlier loadRuleset used to take array of paths to rules files and load them into spectral. With spectral 6 setRuleset we have to give actual rules not the ruleset file paths. I've tried using bundleAndLoad as mentioned in docs but I could give only one path at a time.

I've also tried spectral.setRuleset( bundleLoad ) for each of ruleset file but that seems to be replacing the ruleset with latest rules. Is there any advice for using setRuleset for multiple rules file use case?

This area is not covered in documentation. Please point me to appropriate issue if it's a duplicate.
Thanks!
