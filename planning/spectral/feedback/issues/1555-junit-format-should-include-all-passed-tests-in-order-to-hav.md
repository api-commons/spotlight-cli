---
number: 1555
title: "JUnit format should include all passed tests in order to have an accurate failure rate"
state: "open"
labels: ["enhancement", "triaged"]
author: "chrif"
created: "2021-03-22T15:49:01Z"
updated: "2024-05-31T12:35:40Z"
comments: 3
reactions_total: 5
thumbs_up: 5
url: "https://github.com/stoplightio/spectral/issues/1555"
---

# JUnit format should include all passed tests in order to have an accurate failure rate

In Azure Pipelines, it makes much more sense to have test results with all passed tests along with the failed ones. We want to publish results even when they pass. And we want to know what percentage of tests failed. Right now if no tests failed, we get an empty xml file:
```
<?xml version="1.0" encoding="utf-8"?>
<testsuites>
</testsuites>
```

And when they fail, it includes only the failed ones, so the failure rate is always either 100% or no results to publish.
