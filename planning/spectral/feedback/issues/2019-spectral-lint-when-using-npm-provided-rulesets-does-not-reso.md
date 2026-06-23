---
number: 2019
title: "`spectral lint` when using NPM-provided rulesets does not resolve rulesets"
state: "closed"
labels: ["t/bug", "released"]
author: "jamietanna"
created: "2022-01-07T16:16:23Z"
updated: "2022-01-26T12:19:20Z"
comments: 9
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2019"
---

# `spectral lint` when using NPM-provided rulesets does not resolve rulesets

**Describe the bug**

When running `spectral lint`, via `npx`, I cannot provide an NPM-based dependency for 

A clear and concise description of what the bug is.

**To Reproduce**

Given the following `.spectral.yaml`:

```yaml
extends: 
  - spectral:oas
  - spectral-aws-apigateway-ruleset
```

And the following `openapi.yml`:

```yaml
openapi: 3.1.0
info:
  title: ''
  version: ''
  description: ''
paths: {}
```

Then running:

```
./node_modules/.bin/spectral lint openapi.yml
# or
npx @stoplight/spectral-cli lint openapi.yml
```

**Expected behavior**

The rules from https://www.npmjs.com/package/spectral-aws-apigateway-ruleset are downloaded and executed

**Actual Behaviour**

```
ENOENT: no such file or directory, open '/home/jamie/workspaces/cddo/federated-api-model/schemas/spectral-aws-apigateway-ruleset'
```

**Screenshots**

N/A

**Environment (remove any that are not applicable):**
 - Spectral CLI: 6.1.0
 - OS: Linux

**Additional context**

N/A
