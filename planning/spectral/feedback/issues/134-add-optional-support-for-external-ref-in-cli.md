---
number: 134
title: "Add optional support for external $ref in CLI"
state: "closed"
labels: []
author: "philsturgeon"
created: "2019-04-03T15:56:15Z"
updated: "2019-06-18T02:05:51Z"
comments: 4
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/134"
---

# Add optional support for external $ref in CLI

### **I'm submitting a...**
  - [ ] bug report
  - [x] feature request

### What is the current behavior?

The default behavior of Spectral v2.0 is to operate only on the original description object for 95% of the rules, and the uses the `resolvedTarget` in a few rules which specifically request that resolved version of the object (like oasOpsParams). 

Spectral CLI uses [json-ref-parser](https://github.com/stoplightio/json-ref-resolver) to created that resolvedTarget, and by default json-ref-parser only processes internal `$ref`. This is a safe default, because $ref can be potentially used maliciously if you are working with description files you don't control.  

This is unexpected for people transitioning from Speccy, which did external by default. See #108.

### What is the expected behavior?

Maybe we could have a new CLI option for the `lint` command, maybe `--external`.

The main `Spectral` constructor takes an object with a `resolver` key, which defaults to a stock standard json-ref-parser instance. The lint command should take advantage of this and change the resolver based on CLI options. 

```
if (flags.external) {
    const spectral = new Spectral(resolver: <fancy-resolver-however-that-works>);
}
```

Or something like that.

Thoughts @tbarn @marbemac @MikeRalphson?
