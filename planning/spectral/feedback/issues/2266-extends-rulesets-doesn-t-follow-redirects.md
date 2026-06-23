---
number: 2266
title: "extends rulesets doesn't follow redirects"
state: "open"
labels: ["triaged"]
author: "philsturgeon"
created: "2022-09-06T15:26:07Z"
updated: "2024-05-31T12:36:36Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2266"
---

# extends rulesets doesn't follow redirects

**Describe the bug**

When using Unpkg (which I need to do to use my NPM-based style guide in CLI, VS Code, and Studio) I am getting Not Found if I use a version alias, possiibly because it's not following redirects.

```
pectral lint api/openapi.yaml --verbose
Error running Spectral!
Error #1: Could not load https://unpkg.com/@apisyouwonthate/style-guide@1.1.4/dist/@stoplight/types (imported by https://unpkg.com/@apisyouwonthate/style-guide@1.1.4/dist/ruleset.js): Error fetching https://unpkg.com/@apisyouwonthate/style-guide@1.1.4/dist/@stoplight/types: Not Found
          at 4/dist/
          at load                  …t/plugins/url.js:34  throw Error(`Error …
          at processTicksAndReje…  …cess/task_queues:96
          at                       …red/rollup.js:22271
          at work                  …red/rollup.js:21855  const result = awai…
```

This will let me set a version requirement that I am happy with, instead of having to update the patch number every time a bug fix is made.

**To Reproduce**

1. Make a `.spectral.yaml` with `extends: ["https://unpkg.com/@apisyouwonthate/style-guide@1.1/dist/ruleset.js"]
2. Run this CLI command 'spectral lint foo.yaml'
3. See error

**Expected behavior**

I would expect it to follow the redirect.

```
http GET https://unpkg.com/@apisyouwonthate/style-guide@1.1/dist/ruleset.js
HTTP/1.1 302 Found
CF-Cache-Status: MISS
CF-RAY: 746836d25edb1ead-AMS
Connection: keep-alive
Content-Type: text/plain; charset=utf-8
Date: Tue, 06 Sep 2022 15:24:54 GMT
Server: cloudflare
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Transfer-Encoding: chunked
X-Content-Type-Options: nosniff
access-control-allow-origin: *
cache-control: public, s-maxage=600, max-age=60
content-encoding: gzip
fly-request-id: 01GC9PEZWAT9JTNVGQ3ACEFBMK-ams
location: /@apisyouwonthate/style-guide@1.1.4/dist/ruleset.js
vary: Accept, Accept-Encoding
via: 1.1 fly.io

Found. Redirecting to /@apisyouwonthate/style-guide@1.1.4/dist/ruleset.js
```
