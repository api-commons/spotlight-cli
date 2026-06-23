---
number: 304
title: "Port Prism test harness"
state: "closed"
labels: []
author: "brianmrock"
created: "2019-07-06T16:25:44Z"
updated: "2019-08-29T20:07:47Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/304"
---

# Port Prism test harness

**User story.**
Port the existing Prism test harness once it has settled. At time of writing it is still being reworked and refactored, but once done, Spectral should get the same treatment.

**AC*
-Spectral uses the same test-harness library Prism does
- Run test-harness for every PR in CI
- Write some e2e smoke tests (up to 5 should be enough)

**Scope of Work**
- [ ] Extract the Prism harness utilities in a separate package
- [ ] Reinstall the utilities in Prism and Spectral
