---
number: 2871
title: "Deprecated glob and inflight version used"
state: "open"
labels: ["chore"]
author: "enescakir"
created: "2025-12-21T14:17:15Z"
updated: "2026-01-06T08:52:10Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2871"
---

# Deprecated glob and inflight version used

**Chore summary**
We use `@stoplight/spectral-cli` in our project.

npm warns us of deprecated subdependencies:

```
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
```

```
$ npm why inflight@1.0.6
inflight@1.0.6 dev
node_modules/inflight
  inflight@"^1.0.4" from glob@7.2.3
  node_modules/@rollup/plugin-commonjs/node_modules/glob
    glob@"^7.1.6" from @rollup/plugin-commonjs@22.0.2
    node_modules/@rollup/plugin-commonjs
      @rollup/plugin-commonjs@"~22.0.2" from @stoplight/spectral-ruleset-bundler@1.6.3
      node_modules/@stoplight/spectral-ruleset-bundler
        @stoplight/spectral-ruleset-bundler@"^1.6.0" from @stoplight/spectral-cli@6.15.0
        node_modules/@stoplight/spectral-cli
          dev @stoplight/spectral-cli@"^6.15.0" from the root project
```

**Tasks**
- [ ] Bump the used version of glob to a non-deprecated version.
