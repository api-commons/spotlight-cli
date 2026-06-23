---
number: 272
title: "Parameters in links objects shouldn't be linted for not having a description property."
state: "closed"
labels: ["t/bug", "enhancement"]
author: "gareth-a-jones"
created: "2019-06-26T01:18:40Z"
updated: "2019-09-06T08:35:43Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/272"
---

# Parameters in links objects shouldn't be linted for not having a description property.

### **I'm submitting a...**
  - [ x ] bug report

### What is the current behavior?

Lint an OAS 3 with links section, where a link object has a parameters collection containing the usual name to path dictionary.
Get warnings like this:

Rule:
Parameter objects should have a description.

Details:
paths./allSchools/createUploadSession.post.responses.201.links.getUploadSessionById.parameters.sessionId.description is not truthy

But the parameters collection in a links object is not a parameters object.

### What is the expected behavior?
No warning.

### What is the motivation / use case for changing the behavior?
Correctness.

### Please tell us about your environment:
Web version.
