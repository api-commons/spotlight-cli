---
number: 1151
title: "Feature to extend ruleset without a filereader dependency"
state: "closed"
labels: []
author: "codeasashu"
created: "2020-05-11T20:09:21Z"
updated: "2020-05-21T20:45:30Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1151"
---

# Feature to extend ruleset without a filereader dependency

**User story.**
As a javacript developer, I should be able to extend existing ruleset without having to create/read a file, so that I can override existing ruleset partially.

**Is your feature request related to a problem?**
I am trying to override few rules of OAS 3 but I am working in a client side application, which does not have access to `fs.readFile` method. Is there a way I can pass in `extends` and be able to reference existing rule? 

For example, I am trying to make `info.description` non-required. So extending oas3 ruleset and overriding `info.description` seems intuitive. Something like:

```js
spectral.setRuleset({
        extends: "spectral:oas3",
        functions: [],
        exceptions: {},
        rules: {
          "info-description": false,
        },
      });
```
But it seems like this method completely ignores `extends`.

**Describe the solution you'd like**
Seems like the only way for now is to have a yaml/json rule file which allows `extends`. A method should exists to allow javascript objects to be passed in just as they would after being read from file/remote location.
