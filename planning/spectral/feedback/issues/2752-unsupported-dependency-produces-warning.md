---
number: 2752
title: "Unsupported dependency produces warning"
state: "open"
labels: ["chore"]
author: "matthieuLepetit"
created: "2024-12-05T16:53:54Z"
updated: "2024-12-09T16:35:26Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2752"
---

# Unsupported dependency produces warning

**Chore summary**

Hello !

I found unsupported dependency which could be updated.

It produces warnings when installing :

`npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported`
`npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead`

  └─┬ @stoplight/spectral-cli@6.14.2
    └─┬ @stoplight/spectral-ruleset-bundler@1.6.1
      └─┬ @rollup/plugin-commonjs@22.0.2
        └─┬ magic-string@0.25.9
          └── sourcemap-codec@1.4.8

│ ├─┬ @stoplight/spectral-cli@6.14.2
│ │ └─┬ @stoplight/spectral-ruleset-bundler@1.6.1
│ │   └─┬ @rollup/plugin-commonjs@22.0.2
│ │     └── glob@7.2.3

**Tasks**
- [ ] update @rollup/plugin-commonjs to a version where glob is v9 or higher and no warning about sourcemap-codec
