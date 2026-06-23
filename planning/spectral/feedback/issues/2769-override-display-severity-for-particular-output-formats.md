---
number: 2769
title: "Override display severity for particular output formats"
state: "open"
labels: []
author: "anikitin"
created: "2025-01-08T23:39:20Z"
updated: "2025-01-08T23:39:20Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2769"
---

# Override display severity for particular output formats

We use Spectral in CI job and get benefit of dual output option:
- HTML report file  goes to job artifacts;
- text output goes to stdout (because many people don't look at job artifacts).

There is an option "--display-only-failures" that works globally for all outputs.
It would be great to be able to override it per output, so that we can only output errors to stdout (to keep the log shorter) and all severities to HTML.

It could be done similarly to overridden "-o" command, e.g. "-D.stylish" that will only affect "stylish" output.

At the moment our workarounds are:
1) Run spectral two times with different CLI options (undesirable because of increased job duration).
2) Send stylish output to the file, filter warnings/infos then print it to stdout
