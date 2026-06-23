---
number: 1893
title: "Support `--ruleset spectral:oas` from the command line & documentation"
state: "open"
labels: ["triaged"]
author: "FichteFoll"
created: "2021-10-08T10:31:14Z"
updated: "2024-05-31T12:35:09Z"
comments: 3
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/1893"
---

# Support `--ruleset spectral:oas` from the command line & documentation

While migrating to version 6, I had a major head-ache over the fact that I couldn't just add `--ruleset spectral:oas` to my calls because spectral interprets that as a file name instead of a "special identifer" as it does when extending. This special name is referenced all over the documentation (e.g. https://meta.stoplight.io/docs/spectral/ZG9jOjYyMDc0NQ-open-api-support), yet it took me a considerable amount of time to figure out I had to run `echo "extends: spectral:oas" > .spectral.yaml` to make it work.

Additionally, the auto-detection mentioned in the same page does not work either (or it wasn't removed, as I gathered from #1796 and https://github.com/stoplightio/spectral/pull/1797#discussion_r699449636).

Finally, the documentation at https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg1-spectral-cli is dishonest, as it states me it would "just work" when I run `spectral lint petstore.yaml`. The fact that a ruleset is required is only mentioned a whole page below.

A mention of the required changes on https://meta.stoplight.io/docs/spectral/ZG9jOjg2MDIwMDM-spectral-v5-to-v6-migration-guide would also be appreciated. Coming from no configuration, I'd expect to see instructions that get me up and running the way it was before if I just followed them.
