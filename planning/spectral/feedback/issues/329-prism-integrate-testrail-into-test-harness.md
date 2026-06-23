---
number: 329
title: "Prism : Integrate TestRail into Test Harness "
state: "closed"
labels: []
author: "brianmrock"
created: "2019-07-06T19:37:23Z"
updated: "2019-07-11T12:37:57Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/329"
---

# Prism : Integrate TestRail into Test Harness 

**User Story**

As a Stoplight developer I want to be able to link test harness tests to specific test cases in TestRail, and to do that I need somewhere to put the "Case ID" e.g: C-123.

**Acceptance Criteria**
- Somewhere (could be body, filename, wherever) the case ID should be incorporated into test harness
- Not all tests need to have a case ID (for now at least) so it must be optional
- Reporting back to TestRail via their API or however integration works
