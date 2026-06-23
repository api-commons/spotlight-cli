---
number: 2264
title: "Support GitHub annotation formatter"
state: "open"
labels: ["triaged", "hacktoberfest"]
author: "grobie"
created: "2022-09-04T10:35:57Z"
updated: "2024-05-31T12:36:35Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2264"
---

# Support GitHub annotation formatter

**User story.**
As a developer, I can configure the formatter to use the [GitHub annotation format](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-a-warning-message), so that I can see warnings directly in my pull request when running spectral as Github action.

**Is your feature request related to a problem?**
Developers are often missing new Spectral warnings as they rarely check the logs of the Github action run manually. 

**Describe the solution you'd like**
I'd expect to be able to use `--format github-annotation` or similar as CLI parameter. 

**Additional context**
Github annotations support both warnings and errors, as seen in this example:
![annotation example](https://user-images.githubusercontent.com/46307996/181099304-a6ab1d98-a6a8-4d09-ac15-cd1532e09d53.png)
