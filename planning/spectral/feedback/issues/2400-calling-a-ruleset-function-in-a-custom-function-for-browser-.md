---
number: 2400
title: "Calling a ruleset function in a custom function for browser based linting"
state: "closed"
labels: []
author: "OllieTho"
created: "2023-02-15T00:25:45Z"
updated: "2023-02-15T13:19:59Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2400"
---

# Calling a ruleset function in a custom function for browser based linting

### Discussed in https://github.com/stoplightio/spectral/discussions/2398

<div type='discussions-op-text'>

Please see details provided in comments of issue.  I'm attempting to build the package locally and the package-lock.json file generated appears to require the fsevents package with is incompatible with non-Mac-OS systems, making building the project impossible on other systems.

<sup>Originally posted by **OllieTho** February  9, 2023</sup>
This is building off of my previous issue I posted here: https://github.com/stoplightio/spectral/discussions/2323

I have a custom function and I am wanting to use a function included in the oas ruleset provided with spectral inside the custom function.  I found a solution using the require() function for linting with spectral-cli by doing the following:
`const {oasUnusedComponent} = require('@stoplight/spectral-rulesets/dist/oas/functions');`

I'm also needing this to be functional in the browser however and since require() is a Node.js function, this solution does not work there.  I'm aware that the oas ruleset exists in the js delivered to the browser, but it has been minified, so the path to calling the function is obfuscated and I'm not sure there's a reliable way to call it from there.  Any help is appreciated!</div>
