---
number: 2072
title: "Unable to load rulesets from NPM package"
state: "closed"
labels: ["t/bug"]
author: "dpopp07"
created: "2022-02-21T21:45:43Z"
updated: "2022-03-03T16:05:42Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2072"
---

# Unable to load rulesets from NPM package

**Describe the bug**
According to [the documentation](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTky-sharing-and-distributing-rulesets#npm), Spectral supports loading rulesets from other NPM packages. However, this appears to be broken. When defining a ruleset with "extends", Spectral seems to only look within the local filesystem.

**To Reproduce**

1. Given any OpenAPI document and the following `.spectral.yaml` file:
```yaml
extends: '@ibm-cloud/openapi-ruleset'
```
Note: I have tried this with other public Spectral rulesets on NPM, all with the same result.

2. Run this CLI command:
```
spectral lint <your-api-definition>`
```

3. See error:
```
ENOENT: no such file or directory, open '<path-to-cwd>/@ibm-cloud/openapi-ruleset'
```

**Expected behavior**
I would expect to see the behavior described in the the documentation - Spectral would find the NPM package and retrieve the ruleset from it. Perhaps I'm reading the documentation wrong but the way I read it, installing the ruleset NPM package locally should not be required. That should just allow me to version control it but it shouldn't be necessary. It's worth noting that if I _do_ have the ruleset installed within `node_modules/` in my current directory, Spectral will find it just fine.

This is a fairly show-stopping bug as far as the configurable and extensible nature of Spectral goes (two of the tool's best assets). I seem to remember this working correctly at some point but I can't prove that to myself. I am seeing this error as far back as v6.0.0.

**Environment (remove any that are not applicable):**
 - Library version: Spectral CLI 6.2.1
 - OS: Mac
