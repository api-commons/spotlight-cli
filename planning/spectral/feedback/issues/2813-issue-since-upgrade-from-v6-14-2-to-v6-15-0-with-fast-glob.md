---
number: 2813
title: "Issue since upgrade from v6.14.2 to v6.15.0 with fast-glob"
state: "open"
labels: []
author: "dgroh"
created: "2025-04-30T07:15:26Z"
updated: "2025-04-30T07:16:25Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2813"
---

# Issue since upgrade from v6.14.2 to v6.15.0 with fast-glob

Since the upgrade from `v6.14.2` to `v6.15.0` we get the following error in our pipeline:

```bash
RangeError: Set maximum size exceeded
         at Set.add (<anonymous>)
         at SyncReader._pushToQueue (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/@nodelib/fs.walk/out/readers/sync.js:19:21)
         at SyncReader._handleEntry (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/@nodelib/fs.walk/out/readers/sync.js:52:18)
         at SyncReader._handleDirectory (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/@nodelib/fs.walk/out/readers/sync.js:30:22)
         at SyncReader._handleQueue (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/@nodelib/fs.walk/out/readers/sync.js:23:18)
         at SyncReader.read (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/@nodelib/fs.walk/out/readers/sync.js:15:14)
         at SyncProvider.read (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/@nodelib/fs.walk/out/providers/sync.js:11:29)
         at ReaderSync.walkSync [as _walkSync] (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/@nodelib/fs.walk/out/index.js:20:21)
         at ReaderSync.dynamic (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/fast-glob/out/readers/sync.js:13:21)
         at ProviderSync.api (/usr/local/lib/node_modules/gitlab-ci-local/node_modules/fast-glob/out/providers/sync.js:18:33)
```

We assume this is related to the following changes: https://github.com/stoplightio/spectral/pull/2794/commits/2fe9379674ee8a8d32336a1d3cd7a3000f7691bc#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519L111

Could this be related?
