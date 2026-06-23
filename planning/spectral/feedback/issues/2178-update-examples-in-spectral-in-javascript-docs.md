---
number: 2178
title: "Update examples in Spectral in JavaScript docs"
state: "closed"
labels: ["documentation"]
author: "heitortsergent"
created: "2022-06-07T21:51:26Z"
updated: "2022-06-28T19:10:18Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2178"
---

# Update examples in Spectral in JavaScript docs

https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg3-spectral-in-java-script

I had some trouble running some of these examples, especially the one for [Loading YAML/JSON rulesets](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg3-spectral-in-java-script#loading-yamljson-rulesets) which is using `require` to load modules and `await`.

I think it would be helpful to update the examples so they show:

- Importing an external spec file
- Use `import` instead of `require` like other examples
- Clarify what is a JS ruleset in "[Loading Rulesets](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg3-spectral-in-java-script#loading-rulesets)" section ([this?](https://meta.stoplight.io/docs/spectral/e5b9616d6d50c-custom-rulesets#alternative-js-ruleset-format))
- Describe how to use multiple rulesets (#2148)
