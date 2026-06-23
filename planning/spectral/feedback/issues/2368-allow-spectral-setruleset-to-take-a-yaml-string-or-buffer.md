---
number: 2368
title: "Allow spectral.setRuleset to take a yaml string or buffer"
state: "open"
labels: ["enhancement", "triaged"]
author: "LMS007"
created: "2022-12-20T01:11:14Z"
updated: "2024-05-31T12:34:43Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2368"
---

# Allow spectral.setRuleset to take a yaml string or buffer

It seems that `setRuleset` does not work with "extends" inside an object so its very limited with JSON objects which are not completely aggregated into a single object already.

Secondly, rulesets are generally written in YAML (I think just about every example is in YAML) and converting from YAML to JSON seems unnecessary and could be problematic. 

It would be helpful is setRuleset could take an yaml file from memory rather than some fetcher for a file. In my case I don't have a file itself, I have a buffer of a file imported from an HTTP request. It seems like what I have to do it write this to a temporary file to then just read it in again, can't I just pass the data directly?
