---
number: 2239
title: "How to use a JSON custom ruleset ?"
category: "Q&A"
author: "imsuneth"
created: "2022-08-11T17:20:33Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2239"
---

# How to use a JSON custom ruleset ?

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
