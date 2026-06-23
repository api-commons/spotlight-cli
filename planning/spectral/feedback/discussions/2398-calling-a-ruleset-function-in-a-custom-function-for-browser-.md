---
number: 2398
title: "Calling a ruleset function in a custom function for browser based linting"
category: "Q&A"
author: "OllieTho"
created: "2023-02-09T22:38:20Z"
upvotes: 1
comments: 4
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2398"
---

# Calling a ruleset function in a custom function for browser based linting

This is building off of my previous issue I posted here: https://github.com/stoplightio/spectral/discussions/2323

I have a custom function and I am wanting to use a function included in the oas ruleset provided with spectral inside the custom function.  I found a solution using the require() function for linting with spectral-cli by doing the following:
`const {oasUnusedComponent} = require('@stoplight/spectral-rulesets/dist/oas/functions');`

I'm also needing this to be functional in the browser however and since require() is a Node.js function, this solution does not work there.  I'm aware that the oas ruleset exists in the js delivered to the browser, but it has been minified, so the path to calling the function is obfuscated and I'm not sure there's a reliable way to call it from there.  Any help is appreciated!
