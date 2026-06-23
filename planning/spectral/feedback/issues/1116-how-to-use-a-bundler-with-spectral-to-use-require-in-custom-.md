---
number: 1116
title: "How to use a bundler with spectral to use 'require' in custom functions?"
state: "closed"
labels: ["documentation"]
author: "astavria4"
created: "2020-04-22T23:57:24Z"
updated: "2020-06-12T17:39:17Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1116"
---

# How to use a bundler with spectral to use 'require' in custom functions?

"Require calls will work only in Node.js, and will cause errors for anyone trying to use the ruleset in the browser. If your ruleset is definitely going to only be used in the context of NodeJS then using them is ok, but if you are distributing your rulesets to the public we recommend avoiding the use of require() to increase portability."

I have a extensions.js file that has functions I reuse in multiple rulesets. Its very similar to:

const foo = require('./foo');
module.exports = (obj) => {
 if(!foo.testNode(obj)) return false; 
};

Im using spectral within an api. I have a swagger page where users put the yaml file in. Can you give me an example on how to use a bundler with the above code so that when the ruleset can be loaded and run?
