---
number: 70
title: "Consider use of JMesPath instead of JSONPath"
state: "closed"
labels: ["enhancement"]
author: "MikeRalphson"
created: "2018-12-15T03:40:39Z"
updated: "2019-07-11T12:37:56Z"
comments: 7
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/70"
---

# Consider use of JMesPath instead of JSONPath

**Note: For support questions, please use the [Stoplight Community forum](https://community.stoplight.io)**. This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, the [Community forum](https://community.stoplight.io) is a great place to start.

We realize there is a lot of data requested here. We ask only that you do your best to provide as much information as possible so we can better help you.

_Feel free to delete this section above before creating the issue._

### **I'm submitting a...**
  - [ ] bug report
  - [x] feature request

### What is the current behavior?

If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem.

JSONPath is used, which can be complex, confusing, non-cross-platform. and insecure

### What is the expected behavior?

Use [JMesPath](http://jmespath.org/) which is going to be the basis of [OpenAPI 3.1 Overlays](https://github.com/OAI/Overlay-Specification/issues/36).

### What is the motivation / use case for changing the behavior?

Improvements to readability, maintainability, cross-platform support and security.

### Please tell us about your environment:

  - Version: 2.0.0-beta.X
  - Framework: [ ]
  - Language: [ES6/7]


### Other information

(e.g. detailed explanation, stacktraces, related issues, suggestions how to fix, links for us to have context, eg. stackoverflow, issues outside of the repo, forum, etc.)
