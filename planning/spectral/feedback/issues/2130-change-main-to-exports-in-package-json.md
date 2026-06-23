---
number: 2130
title: "Change #main to #exports in package.json"
state: "closed"
labels: ["t/bug"]
author: "sandro-pasquali"
created: "2022-04-18T18:51:32Z"
updated: "2022-05-01T14:50:52Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2130"
---

# Change #main to #exports in package.json

Getting this error on install of `@stoplight/spectral-core@1.12.0`: `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No "exports" main defined in <path to spectral>package.json`.

Node 17.9.0

I believe this means the package.json file needs to change its entrypoint definition.

v `1.11.1` works fine.

My app is set to `type: "module"`.
