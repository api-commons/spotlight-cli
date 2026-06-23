---
number: 1480
title: "Linting symlinked .yaml files?"
state: "closed"
labels: []
author: "iry-hor-code"
created: "2021-01-17T22:33:13Z"
updated: "2022-03-24T12:00:30Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1480"
---

# Linting symlinked .yaml files?

Hey guys,

Using Spectral to implement linting on a client project, but we have an automation testing framework in the same repo as the core app framework. Some of the OpenAPI definitions (.yaml files) are in the core app but symlinked in the automation testing framework. As such, when I lint against the folder with all the .yaml files in it inside of the automation testing framework Spectral throws `invalid-ref  ENOENT: no such file or directory` on the reference paths for the symlinked files.

Does anyone have an elegant solution to this? I can't just lint the whole core app for .yaml files. Should I try converting the .yaml files to strings then 'lint as a string,' or is there a better/easier way?

Any help would be greatly appreciated, and thanks for making Spectral -- it's awesome!
