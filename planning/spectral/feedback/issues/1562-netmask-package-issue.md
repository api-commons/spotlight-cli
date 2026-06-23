---
number: 1562
title: "netmask package issue"
state: "closed"
labels: ["chore"]
author: "dalisoft"
created: "2021-03-30T18:10:41Z"
updated: "2021-04-08T20:50:42Z"
comments: 9
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/1562"
---

# netmask package issue

**Chore summary**
See
- https://github.com/advisories/GHSA-pch5-whg9-qr2r
- https://sick.codes/universal-netmask-npm-package-used-by-270000-projects-vulnerable-to-octal-input-data-server-side-request-forgery-remote-file-inclusion-local-file-inclusion-and-more-cve-2021-28918/

**Log**

```bash
❯ yarn why netmask
yarn why v1.22.10
[1/4] 🤔  Why do we have the module "netmask"...?
[2/4] 🚚  Initialising dependency graph...
[3/4] 🔍  Finding dependency...
[4/4] 🚡  Calculating file sizes...
=> Found "netmask@1.0.6"
info Reasons this module exists
   - "_project_#smartlint#@stoplight#spectral#proxy-agent#pac-proxy-agent#pac-resolver" depends on it
   - Hoisted from "_project_#smartlint#@stoplight#spectral#proxy-agent#pac-proxy-agent#pac-resolver#netmask"
info Disk size without dependencies: "60KB"
info Disk size with unique dependencies: "60KB"
info Disk size with transitive dependencies: "60KB"
info Number of shared dependencies: 0
✨  Done in 0.53s.
```
