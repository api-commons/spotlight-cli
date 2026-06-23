---
number: 2563
title: "Rollup plugin commonjs should be a dev dependency"
state: "open"
labels: ["triaged", "chore"]
author: "w3nl"
created: "2023-12-15T22:23:25Z"
updated: "2024-05-31T09:24:17Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2563"
---

# Rollup plugin commonjs should be a dev dependency

@P0lip / @mnaumanali94 

**Chore summary**
Rollup plugin commonjs is now a normal dependency, and is installed if you add @stoplight/spectral-ruleset-bundler to a project.
This will result in some unnecessary dependencies that are installed.

**Tasks**
- [ ] Move @rollup/plugin-commonjs from devDependency to dependency

**Additional context**
Also fixes a Snyk issue of inflight
https://security.snyk.io/vuln/SNYK-JS-INFLIGHT-6095116
@stoplight/spectral-ruleset-bundler@1.5.2 › @rollup/plugin-commonjs@25.0.7 › glob@8.1.0 › inflight@1.0.6
