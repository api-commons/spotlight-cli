---
number: 1289
title: "Is it possible to have both stdout and file output in one run?"
state: "closed"
labels: []
author: "vitaly-magyari"
created: "2020-07-24T11:40:48Z"
updated: "2020-09-29T17:15:19Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1289"
---

# Is it possible to have both stdout and file output in one run?

**User story.**
As a user, I can do run spectral lint with params, so that I can both see the stdout text output and receive report as an html-file.

**Is your feature request related to a problem?**
Well I have a report file that is then published but I'd also like to have visible output in a gitlab job which shows stdout

**Describe the solution you'd like**
Maybe additional parameter `--stdout-format` that locks stdout output in a chosen format, `--output` param does its thing as it currently does independently. If `--stdout-format` is absent then `--output` suppresses stdout as it does now.
NOTE: I kinda need different formats here as we publish html reports, which are well not stdout-friendly, so just removing stdout suppression by output wouldn't be enough

**Additional context**
I could try to implement this at least in a rough draft if somebody points me to where it's handled in the src. I couldn't find by myself. I also might fail miserably since I'm not a js/ts-developer.
