---
number: 447
title: "Make recommended: true by default and fix inheritence"
state: "closed"
labels: ["enhancement", "p/high", "breaking"]
author: "miller79"
created: "2019-08-13T15:23:46Z"
updated: "2020-08-31T16:18:07Z"
comments: 16
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/447"
---

# Make recommended: true by default and fix inheritence

_*Updated 2019-10-29:* Replaced with content from @marbemac's comment, which will be used to drive this issue._

recommended should be the default across the board - cli and ruleset extension. 

E.g. this:

```yaml
extends: spectral:oas3
```

Is the same as:

```yaml
extends: [[spectral:oas3, recommended]]
```

As far as extending w all, recommended, or none, it should bubble up the hierarchy (I thought that this was happening now, but maybe not?):

E.g. this:

```yaml
extends: [[foo.json, all]]
```

Is the same as:

```yaml
extends: [[bar.json, all], [baz.json, all]]
```

### Todo

- [x] change recommended to be true by default
- [ ] make sure all rules maintain their recommended status (no accidental changes)
- [ ] audit documentation to make sure there is no statements which disagree (for JS, CLI, rulesets in general, custom functions, etc)
