---
number: 919
title: "Improve Windows support"
state: "closed"
labels: ["chore"]
author: "m-mohr"
created: "2020-01-15T11:21:11Z"
updated: "2021-05-14T15:04:41Z"
comments: 13
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/919"
---

# Improve Windows support

**Chore summary**

The tests don't run on Windows, but fail although they succeed in the CI. Thus I have to always force-push my changes to PRs so that the CI checks the tests for me. That is discouraging Windows users to develop PRs for this project and rather use other projects.

**Tasks**
- [ ] Make tests run on Windows
