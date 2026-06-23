---
number: 2190
title: "CLI: Cannot provide multiple `--format` options"
state: "closed"
labels: []
author: "jamietanna"
created: "2022-06-20T09:13:29Z"
updated: "2022-06-20T13:39:35Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2190"
---

# CLI: Cannot provide multiple `--format` options

> For support questions, please use the [Stoplight Discord Community](https://discord.com/invite/stoplight). This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, our Discord is a great place to start.
>
> **Please delete this section, any any sections below that you don't use, before creating the issue.**

**Describe the bug**

In the docs for `spectral lint`, we note that we can have multiple options by using a comma-separated value:

>  -f, --format                   formatters to use for outputting results, more than one can be given joining them with a comma                                                                                        [string] [choices: "json", "stylish", "junit", "html", "text", "teamcity", "pretty"] [default: "stylish"]

However, when doing so, we receive an error saying it's not possible to do that:

```
Invalid values:
  Argument: format, Given: "stylish,junit", Choices: "json", "stylish", "junit", "html", "text", "teamcity", "pretty"
```

**To Reproduce**

1. `npx @stoplight/spectral-cli@6.4.0 lint . --format stylish,junit`

**Expected behavior**

Multiple options are possible.

**Screenshots**

N/A

**Environment (remove any that are not applicable):**
 - Library version: CLI version 6.4.0

**Additional context**
