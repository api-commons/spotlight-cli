---
number: 864
title: "Javascript API does not support extending rulesets"
state: "closed"
labels: ["t/bug"]
author: "Jaredk3nt"
created: "2019-12-18T16:49:56Z"
updated: "2019-12-18T17:50:48Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/864"
---

# Javascript API does not support extending rulesets

**Describe the bug**
I have a ruleset that extends the oas2 ruleset. This ruleset works perfectly from the command line but when I try to port that into my code with the JS API I cannot extend the oas2 rules. ~In the CLI the `RulesetProcessor` it is checking for `ruleset.extends` and processing those in turn. However neither `spectral.loadRuleset()` or `spectral.setRuleset()` take into account extends. This is made worse by the fact that there is a `spectral.mergeRules()` function that could be used to merge in my own rules if I wanted to take all of the rules from oas2, but there isn't an equivalent for functions to be able to add my custom functions.~

**To Reproduce**

Try to lint a ruleset with an extends using the JS API. Here is the one I am using (without my custom functions) https://gist.github.com/Jaredk3nt/6cf890fd26a77fced3dd602f11607c0e

**Expected behavior**
~There should be some way to extend a ruleset, either automatically or manually.~

---

This was caused by me misreading the code and the docs not really having a good example. I was able to get my extended ruleset to work in the JS API by using loadRuleset on my json ruleset rather than setRuleset like it shows in the docs:

```js
const spectral = new Spectral();
spectral.registerFormat("oas2", isOpenApiv2);

function validate(spec) {
  return spectral.loadRuleset(__dirname + "/my-rules.json").then(() => {
    return spectral
      .run({
        getLocationForJsonPath,
        parsed: parseWithPointers(spec)
      })
      .then(console.log);
  });
}
```

Hopefully this example will save someone else!
