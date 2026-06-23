---
number: 2929
title: "Lodash 4.17 vulnerable versions GHSA-r5fr-rjxr-66jc"
state: "closed"
labels: []
author: "santiago-perez-axa"
created: "2026-04-02T07:32:51Z"
updated: "2026-04-13T12:38:49Z"
comments: 1
reactions_total: 6
thumbs_up: 6
url: "https://github.com/stoplightio/spectral/issues/2929"
---

# Lodash 4.17 vulnerable versions GHSA-r5fr-rjxr-66jc

The following packages have lodash 4.17 version affected by [CVE-2026-4800](https://github.com/lodash/lodash/security/advisories/GHSA-r5fr-rjxr-66jc)

- `@stoplight/spectral-core`: https://github.com/stoplightio/spectral/blob/c29966f19818202e76a533bcb46814ae6dea5446/packages/core/package.json#L52
- `@stoplight/spectral-cli`: https://github.com/stoplightio/spectral/blob/c29966f19818202e76a533bcb46814ae6dea5446/packages/cli/package.json#L51
- `@stoplight/spectral-functions`:  https://github.com/stoplightio/spectral/blob/c29966f19818202e76a533bcb46814ae6dea5446/packages/functions/package.json#L31
- `@stoplight/spectral-rulesets`: https://github.com/stoplightio/spectral/blob/c29966f19818202e76a533bcb46814ae6dea5446/packages/rulesets/package.json#L34

lodash Affected versions: >=4.0.0, <=4.17.23
lodash Patched versions:  >=4.18.0

dependency tree: 
````
└─┬ @stoplight/spectral-cli@6.15.0
│   ├─┬ @stoplight/json@3.21.7
│   │ └── lodash@4.18.1
│   ├─┬ @stoplight/spectral-core@1.21.0
│   │ └── lodash@4.17.23 deduped
│   ├─┬ @stoplight/spectral-formatters@1.5.0
│   │ └── lodash@4.18.1
│   ├─┬ @stoplight/spectral-ref-resolver@1.0.5
│   │ └─┬ @stoplight/json-ref-resolver@3.1.6
│   │   └── lodash@4.18.1
│   ├─┬ @stoplight/spectral-ruleset-bundler@1.6.3
│   │ └─┬ @stoplight/spectral-functions@1.10.1
│   │   └── lodash@4.17.23 deduped
│   ├─┬ @stoplight/spectral-rulesets@1.22.0
│   │ └── lodash@4.17.23 deduped
│   ├─┬ @stoplight/spectral-runtime@1.1.4
│   │ └── lodash@4.18.1
│   └── lodash@4.17.23
````

Could you please update the dependencies and release new versions? https://github.com/lodash/lodash/wiki/Changelog
