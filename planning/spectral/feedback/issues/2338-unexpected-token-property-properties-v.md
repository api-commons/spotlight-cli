---
number: 2338
title: "Unexpected token '?': ?(_$_property !== 'properties' && _$_v && (@"
state: "open"
labels: ["enhancement", "triaged"]
author: "philsturgeon"
created: "2022-11-13T19:09:06Z"
updated: "2024-05-31T12:34:40Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2338"
---

# Unexpected token '?': ?(_$_property !== 'properties' && _$_v && (@

**Describe the bug**

Whilst developing my own JS ruleset I am getting an error message that does not contain enough information for me to detect what/where the issue is or how to resolve it.

```
Linting https://raw.githubusercontent.com/digitalocean/openapi/main/specification/DigitalOcean-public.v2.yaml
evalmachine.<anonymous>:1
?(_$_property !== 'properties' && _$_v && (@
^

SyntaxError: Unexpected token '?'
    at new Script (node:vm:100:7)
    at createScript (node:vm:257:10)
    at Object.runInNewContext (node:vm:298:10)
    at JSONPath._eval (/Users/phil/.asdf/installs/nodejs/16.15.1/.npm/lib/node_modules/@stoplight/spectral-cli/node_modules/nimma/node_modules/jsonpath-plus/dist/index-node-cjs.cjs:643:20)
    at /Users/phil/.asdf/installs/nodejs/16.15.1/.npm/lib/node_modules/@stoplight/spectral-cli/node_modules/nimma/node_modules/jsonpath-plus/dist/index-node-cjs.cjs:420:16
    at JSONPath._walk (/Users/phil/.asdf/installs/nodejs/16.15.1/.npm/lib/node_modules/@stoplight/spectral-cli/node_modules/nimma/node_modules/jsonpath-plus/dist/index-node-cjs.cjs:572:7)
    at JSONPath._trace (/Users/phil/.asdf/installs/nodejs/16.15.1/.npm/lib/node_modules/@stoplight/spectral-cli/node_modules/nimma/node_modules/jsonpath-plus/dist/index-node-cjs.cjs:419:10)
    at JSONPath._trace (/Users/phil/.asdf/installs/nodejs/16.15.1/.npm/lib/node_modules/@stoplight/spectral-cli/node_modules/nimma/node_modules/jsonpath-plus/dist/index-node-cjs.cjs:374:17)
    at JSONPath._trace (/Users/phil/.asdf/installs/nodejs/16.15.1/.npm/lib/node_modules/@stoplight/spectral-cli/node_modules/nimma/node_modules/jsonpath-plus/dist/index-node-cjs.cjs:536:17)
    at JSONPath._trace (/Users/phil/.asdf/installs/nodejs/16.15.1/.npm/lib/node_modules/@stoplight/spectral-cli/node_modules/nimma/node_modules/jsonpath-plus/dist/index-node-cjs.cjs:374:17)
Error running Spectral!
Error #1: jsonPath: Unexpected token '?': ?(_$_property !== 'properties' && _$_v && (@
          at Error: jsonPath: Un…
          at _eval                 …ex-node-cjs.cjs:647  throw new Error('js…
          at                       …ex-node-cjs.cjs:420  if (this._eval(l.re…
          at _walk                 …ex-node-cjs.cjs:572  f(i, loc, expr, val…
          at _trace                …ex-node-cjs.cjs:419  this._walk(loc, x, …
```

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document: `https://raw.githubusercontent.com/digitalocean/openapi/main/specification/DigitalOcean-public.v2.yaml`
2. Clone this ruleset: `http://github.com/philsturgeon/spectral-documentation`
3. cd into the repo
4. Run this CLI command: `npm run build && spectral lint https://raw.githubusercontent.com/digitalocean/openapi/main/specification/DigitalOcean-public.v2.yaml --ruleset=dist/ruleset.js --verbose`
5. See error

**Expected behavior**

I would hope Spectral CLI could let me know what I've done wrong so I can fix it.

Something like: 

> Error #1: Rule docs-examples-or-defaults has an invalid jsonPath: Unexpected token '?': ?(_$_property !== 'properties' && _$_v && (@

even then thats not actually what my JSONPath is, so its hard to figure out which rule is broken and what I actually need to do about it.
