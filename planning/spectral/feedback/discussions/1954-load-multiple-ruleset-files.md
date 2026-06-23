---
number: 1954
title: "Load multiple ruleset files"
category: "General"
author: "Andras-Csanyi"
created: "2021-11-12T13:13:53Z"
upvotes: 2
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1954"
---

# Load multiple ruleset files

Hi All,

In our validator Spectral is utilised and we are in the situation where two ruleset files should be loaded.

The use cases:
- the tool has its own rulesets and it is provided as a separate npm package and called `fantastic-rulesets`, if the this npm package is not installed then the validator app fails
- the user can provide his/her own rulesets using a `.spectral.yaml` file, it must `extend` the `fantastic-rulesets` package

Loading the npm package is easy, I created a loader which pulls the rules together in an object and will be handed over Spectral (`setRuleset` method) and call it a day.
But, in the second case I use `migrateRuleset` from `@stoplight/spectral-ruleset-migrator` which, if I assume correctly, ensures some compatibility (which is awesome) and deals with different file formats (also awesome). But, it returns a javascript file, and this is pain in the neck. I either have to use `eval()` to deal with the file or some other black magic.

Is there a recommended way to deal with that I have multiple sources of rulesets and they have to be loaded into Spectral?

Thanks for any help!
