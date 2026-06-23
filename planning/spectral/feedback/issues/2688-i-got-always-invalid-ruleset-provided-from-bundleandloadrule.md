---
number: 2688
title: "I got always  Invalid ruleset provided from bundleAndLoadRuleset"
state: "open"
labels: []
author: "jean13360"
created: "2024-09-16T09:17:49Z"
updated: "2024-09-16T09:32:11Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2688"
---

# I got always  Invalid ruleset provided from bundleAndLoadRuleset

I am using spectral and bundleAndLoadRuleset but when i load my rules , i always have an error Invalid ruleset


const {Spectral} = require('@stoplight/spectral-core');
const { bundleAndLoadRuleset } = require('@stoplight/spectral-ruleset-bundler/with-loader');

async function main() {
    const spectral = new Spectral();
    const myRuleset = `[{
    extends: "spectral:oas",
    rules: {}
}]`;
    // try to load an external ruleset
    const fs = {
      promises: {
        async readFile(filepath) {
          if (filepath === "/.spectral.yaml") {
            return myRuleset;
          }

          throw new Error(`Could not read ${filepath}`);
        },
      },
    };
    
    spectral.setRuleset(await bundleAndLoadRuleset("/.spectral.yaml", { fs, fetch }));
    console.log(spectral)
  }
  
  if (require.main === module) {
    main();
  }
  
  i am using
   "@stoplight/spectral-core": "^1.16.1",
    "@stoplight/spectral-ruleset-bundler": "^1.5.1",
    "@stoplight/spectral-runtime": "^1.1.2",
    and node 18.18.0
    how to correct my ruleSet ?
