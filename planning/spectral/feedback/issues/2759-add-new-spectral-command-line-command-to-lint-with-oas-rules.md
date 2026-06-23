---
number: 2759
title: "Add new spectral command line command to lint with oas ruleset"
state: "open"
labels: []
author: "DavidBiesack"
created: "2024-12-13T19:38:13Z"
updated: "2026-04-30T14:28:04Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2759"
---

# Add new spectral command line command to lint with oas ruleset

**User story**

As a Spectral user, I can lint an OpenAPI document with minimum fuss, so that I can benefit from Spectral without extra configuration.

**Is your feature request related to a problem?**
It is very tedious and a poor developer experience to require a -r / -- ruleset CLI _option_ when I'm linting an OpenAPI document. (options should be just that - optional).

Worse, this also requires creating a ruleset file somewhere and referencing it.

Follow the "convention over customization" principle to make Spectral easier to use.

Note: the [help page](https://stoplight.io/open-source/spectral#continuous-integration) is wrong since it omits the `-r` option:
```bash
spectral lint petstore.yaml
````
this won't work unless one has created a .`spectral.yaml` file in the current directory

**Describe the solution you'd like**

One option is to do a simple content check on the source file if a ruleset is not passed on the command line or is not present at  `./.spectral.yaml`. I.e. if the file is valid JSON or YAML, and  the file has a top-level `"openapi"` (or even `"swagger"`) value, then default to the oas ruleset ( `spectral:oas` ). 

Another option is to add a second command line command name such as `spectral-oas` which defaults to the oas ruleset. One can always override the default with a command line option SImilarly, define `spectral-asyncapi`  and `spectral-arazzo` commands to use just those rulesets.

A third option is to default to a ruleset as described [here](https://docs.stoplight.io/docs/spectral/674b27b261c3c-overview#installation-and-usage):
```
extends: ["spectral:oas", "spectral:asyncapi", "spectral:arazzo"]
```

whenever the `-r` option is omitted and there is no `./spectral.yaml` file.

A final option is to look in `$HOME/.spectral.yaml` (or `$HOME/config/.spectral.yaml`) so `spectral` can work in arbitrary locations that contain just an openapi document.

Although Spectral can load a `./.spectral.yaml` file (if it exists), that file seldom exists. In my experience, most code repos or OAS document downloads do not include a `.spectral.yaml` along with the OpenAPI source (pick your favorite developer portal that allows OAS downloads).
