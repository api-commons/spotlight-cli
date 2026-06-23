---
number: 303
title: "Run Spectral against browser on CI"
state: "closed"
labels: []
author: "brianmrock"
created: "2019-07-06T16:10:32Z"
updated: "2019-07-08T08:17:04Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/303"
---

# Run Spectral against browser on CI

Spectral is supposed to run in a browser context without any significant limitations. While it's not the most common use of Spectral for most of our external users, it's essential for Studio/Dojo to perform correctly.That said, we need to put more attention on testing to make sure all external contributions as well as our own changes don't break Spectral in the browser.Having the testing process automated will certainly help us achieve that.

**Requirements**:
- API use of Spectral is tested in a browser, including parsing.
- All filesystem (`fs` module) API calls have to be tested - this is very important
- CLI related code paths should be validated as well - we need to make sure we do not execute code that is meant to be run in CLI in a browser environment
- Rulesets and their various configurations have to be tested
- stylish/json formatters does not have to be tested as they are specific to CLI.
- Logging could be tested as well

**Test Environment**:In short - it should be as close to Studio as possible, therefore:
- Webpack should be used for bundling
- lightning-fs is used as a shim for fs module
- a path module is shimmed as well

**Potential blockers**:The code might need to be updated in a couple of places. For instance, sync fs methods are unavailable in the browser context.

**Scope**
- [ ]  Setup CI (Vicenzo) 
- [x] Setup Karma Test Running (Jakub R.) 
- [x] Remove snapshot (Jakub R) 
- [ ] Browser-specific tests
