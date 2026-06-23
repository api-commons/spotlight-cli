---
number: 868
title: "Wrong example in docu for \"Custom Functions\""
state: "closed"
labels: ["documentation"]
author: "Snoopy1964"
created: "2019-12-20T09:32:12Z"
updated: "2020-01-22T00:46:31Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/868"
---

# Wrong example in docu for "Custom Functions"

**Describe the bug**
I tried to create a custom function as described in the documentation [Custom Functions](https://stoplight.io/p/docs/gh/stoplightio/spectral/docs/guides/custom-functions.md#custom-functions) using an own function-directory. 

**To Reproduce**
I copied the `abc.js` file from [Example](https://stoplight.io/p/docs/gh/stoplightio/spectral/docs/guides/custom-functions.md#example) into a directory `.\my-functions` relative to the ruleset file `.spectral.yml`.

In my rules file I added the `functionsDir: ./my-functions` property as described in the last example (section starts with _If for some reason, you do not want..._).

This does not work, because the property `functions: [abc]` is missing in the example.

**Expected behavior**
Documentation should be correct :-)
