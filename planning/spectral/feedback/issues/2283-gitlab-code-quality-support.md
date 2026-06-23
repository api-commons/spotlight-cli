---
number: 2283
title: "Gitlab code quality support"
state: "closed"
labels: ["enhancement", "released", "triaged", "hacktoberfest"]
author: "lhimstedt"
created: "2022-09-17T14:39:49Z"
updated: "2024-09-13T10:21:27Z"
comments: 6
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2283"
---

# Gitlab code quality support

**User story.**
As a developer, I can export the results to a Gitlab code quality report to see a summary of my code quality in the MR widget and the pipeline.

**Is your feature request related to a problem?**
Currently, there is only a format enum for JUnit. That's cool because you can see the results in Gitlab, but I prefer linting results in the code quality section. The linting results are more about the quality, not in all cases about functionality.

**Describe the solution you'd like**
It would be cool to have another output format in the CodeClimate JSON format.
