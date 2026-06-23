---
number: 2319
title: "Select ruleset file dynamically"
category: "Q&A"
author: "infraos89"
created: "2022-10-25T08:16:03Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2319"
---

# Select ruleset file dynamically

What I am trying to do is to choose an specific ruleset depending of the layer/environment of the API. To make this more undestandeable, lets say that we have 2 separated environments with different rules for each of them. The main spectral file seems something like this:

```
### MAIN RULES

formats:
  - oas3
extends:
  - [spectral:oas, recommended]

rules:
  layer-selection:
    description:  Layer selection.
    severity: error
    recommended: true
    given: "$.info.title"
    then:
      function: "oasRulesetSelection"
 
 ... 
```
The function will choose a specific ruleset depending on the information contained in the API title where it is indicated to which environment it belongs.
```
// oasRulesetSelection.js
module.exports = (targetVal, opts, path) => {
  
  if (!targetVal) {
    return;
  }
  
  var apiTitle = JSON.stringify(targetVal));
  if (targetVal.match('- INTEGRATION')) {
    return [{extends: 'oas-rules-int.yml'}];                  //extends a ruleset file for integration environment
  } else if (targetVal.match('- PRODUCTION')) {
    return [{extends: 'oas-rules-pro.yml'}]                 //extends a ruleset file for prod environment
  } else {
    return
  };
};
```
Is there any way to do this? I have checked the documentation and tried several ways but none of them work, most of the time it returns a Nimma error.

I know that it is possible to load basic rules from a custom function but my goal is to work directly with files containing the rules. Any help would be greatly appreciated!
