---
number: 2906
title: "I used Spectral to lint OpenAPI, why is it different on my platform compared to the Stoplight platform? What rules does Stoplight use?"
state: "open"
labels: []
author: "lunarianss"
created: "2026-03-04T10:54:37Z"
updated: "2026-03-04T10:54:37Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2906"
---

# I used Spectral to lint OpenAPI, why is it different on my platform compared to the Stoplight platform? What rules does Stoplight use?

I used Spectral to lint OpenAPI, why is it different on my platform compared to the Stoplight platform? What rules does Stoplight use?

this is my code 

```
  // Create ruleset that extends both oas and asyncapi (matching Stoplight behavior)
  const { Ruleset } = await import('@stoplight/spectral-core');
  const ruleset = new Ruleset({
    extends: [modules.oas, modules.asyncapi],
  });

  spectralInstance = new modules.Spectral();
  spectralInstance.setRuleset(ruleset);
```
