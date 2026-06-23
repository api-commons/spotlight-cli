---
number: 2723
title: "Registering custom rules format for browser bundled rulesets"
category: "Q&A"
author: "JedrzejJanasiak"
created: "2024-11-06T15:43:22Z"
upvotes: 3
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2723"
---

# Registering custom rules format for browser bundled rulesets

I'm trying to bundle a ruleset in a way that is described in the documentation here: 
https://meta.stoplight.io/docs/spectral/eb68e7afd463e-spectral-in-java-script#browser

However, what I'm trying to achieve is to load a ruleset with my own definied custom format (_my-custom-format_) using that method so it could look more like this:
```
import { Spectral } from "@stoplight/spectral-core";
import { bundleAndLoadRuleset } from "@stoplight/spectral-ruleset-bundler/with-loader";

// create a ruleset that extends the spectral:oas ruleset
const myRuleset = `extends: spectral:oas
formats: ['my-custom-format']
rules: {}';`

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

const spectral = new Spectral();
s.setRuleset(await bundleAndLoadRuleset("/.spectral.yaml", { fs, fetch }));
```

I know there is a method to register a new format to the ruleset: 
```
ruleset.formats.add(myCustomFormat);
```

But I noticed that you can only do it with an already bundled ruleset.

**Is there any way to register a new custom format so the bundler would allow it?**
