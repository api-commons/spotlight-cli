---
number: 2374
title: "`sourcemap-codec` is deprecated"
state: "open"
labels: ["triaged", "chore"]
author: "silverwind"
created: "2022-12-22T11:55:44Z"
updated: "2024-05-31T12:34:45Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2374"
---

# `sourcemap-codec` is deprecated

**Chore summary**
```
$ npm install @stoplight/spectral-cli
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
```

**Tasks**
- [ ] Update `@rollup/plugin-commonjs` to 24.0.0 or higher

**Additional context**

Depdendency tree:

```
└─┬ @stoplight/spectral-cli@6.6.0
  └─┬ @stoplight/spectral-ruleset-bundler@1.5.0
    └─┬ @rollup/plugin-commonjs@22.0.2
      └─┬ magic-string@0.25.9
        └── sourcemap-codec@1.4.8
```
