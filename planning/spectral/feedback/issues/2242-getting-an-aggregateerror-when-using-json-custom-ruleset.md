---
number: 2242
title: "Getting an AggregateError when using JSON custom ruleset"
state: "closed"
labels: []
author: "imsuneth"
created: "2022-08-15T04:41:12Z"
updated: "2022-08-16T08:01:45Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2242"
---

# Getting an AggregateError when using JSON custom ruleset

I have a configuration file that includes the custom rules among other configurations. I retrieve the custom rules object (I have defined it as a const below) from the file and set it and run the linter.
```
const apiDefinition
const customRules = {
  "rules": {
    "empty-title-property": {
      "message": "Title must not be empty",
      "given": "$..title",
      "then": {
        "function": "truthy"
      }
    }
  }
};
const spectral = new Spectral();
spectral.setRuleset(customRules);
spectral.run(apiDefinition).then((result)=> {
  console.log(result);
}
```

However, I am getting this AggregateError and not sure what I am doing wrong. Could you please help?
```
AggregateError: Error running Nimma
    at Scope.destroy (scope.js:137:1)
    at Nimma.eval (eval at query (index.js:66:1), <anonymous>:17:11)
    at Nimma.query (index.js:68:1)
    at execute (runner.js:90:1)
    at Runner.run (runner.js:53:1)
    at Spectral.runWithResolved (spectral.js:60:1)
    at async Spectral.run (spectral.js:68:1)
```

**Environment (remove any that are not applicable):**
 - Library version: 1.12.2
 - OS: macOs monetrey 12.4
