---
number: 2926
title: "Output file for `github-actions` and `code-climate` formatters cannot be specified"
state: "open"
labels: []
author: "Vampire"
created: "2026-03-31T16:36:47Z"
updated: "2026-06-05T08:05:53Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2926"
---

# Output file for `github-actions` and `code-climate` formatters cannot be specified

When giving multiple `--format` to the executable, you also need to specify an `--output.<format>`  per format.
But for `github-actions` and `code-climate` this does not work, at least not how documented.

Using `--output.github-actions` and `--output.code-climate` like documented and working for other formats,
you get "The number of outputs must match the number of formats".

Using - as a guess - `--output.githubActions` and `--output.codeClimate` instead,
you get "Missing outputs for the following formats: github-actions, code-climate".

I guess somewhere the CLI parser does note like the dash or something like that.
Or if it is possible somehow, at least it is well hidden.
Also tried `--output.github.actions` / `--output.code.climate` and `--output.github_actions` / `--output.code_climate`
