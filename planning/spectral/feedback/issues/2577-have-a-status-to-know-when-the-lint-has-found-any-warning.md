---
number: 2577
title: "Have a status to know when the lint has found any warning"
state: "open"
labels: ["enhancement", "triaged", "CLI"]
author: "jdrcabral"
created: "2024-01-18T13:15:36Z"
updated: "2024-05-31T09:24:19Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2577"
---

# Have a status to know when the lint has found any warning

**User story.**
Have a status to know when the lint execution has warnings

**Is your feature request related to a problem?**
I have spectral configured in my Gitlab CI, configured following the Continuous Integration documentation for Gitlab.
I wanted to when we have warning when executing the linter, to the job on Gitlab to be marked as warning instead of a success.  I need a way to capture that output and raise as warning so we can easily check the jobs

I can't change the `fail-severity`, because it shouldn't make the job in the pipeline fail.

**Describe the solution you'd like**
Maybe a different return status for when it executed with any warnings, also shouldn't be the same for an error

**Additional context**
Here we a list of job status: https://docs.gitlab.com/ee/ci/jobs/#the-order-of-jobs-in-a-pipeline
