---
number: 2500
title: "Breaking change detected with release of @stoplight/json@3.21.0"
state: "closed"
labels: ["t/bug", "released"]
author: "pavelkornev"
created: "2023-07-07T07:57:50Z"
updated: "2024-11-13T20:48:13Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2500"
---

# Breaking change detected with release of @stoplight/json@3.21.0

**Describe the bug**
Spectral returns different set of messages depending on the transitive dependency version @stoplight/json.

**To Reproduce**

1. Checkout repository - https://github.com/pavelkornev/spectral-example
2. Run `npm ci`
3. Run `npm start`:
![Screenshot 2023-07-07 at 09 46 30](https://github.com/stoplightio/spectral/assets/748043/afa4ee29-a110-4daf-b9b3-1b5a8c397999)
4. Run `npm ls @stoplight/json` (**v3.20.3** is used everywhere):
![Screenshot 2023-07-07 at 09 48 41](https://github.com/stoplightio/spectral/assets/748043/78d331c5-c037-443d-aa07-f890fe9c984f)
5. Remove `node_modules`: `rm -rf node_modules`(!important)
6. Remove `package-lock.json`: `rm package-lock.json`
7. Run `npm install`
8. Run `npm ls @stoplight/json` (now NPM resolves some deps to the new version, some to the old):
![Screenshot 2023-07-07 at 09 52 30](https://github.com/stoplightio/spectral/assets/748043/0222e183-daa3-4c39-8055-7e7cd2a36c33)
9. Run `npm start`
![Screenshot 2023-07-07 at 09 54 07](https://github.com/stoplightio/spectral/assets/748043/1a5d61ff-ed2a-471a-a1ab-a809a89c1b99)

Now we have 2 messages for the same problem instead of 1 as before.

Please note, that the usage of different versions of @stoplight/json at the same time by different packages is not the root issue here. I have enforced all packages to use the latest v3.21.0 and I have the same outcome — 2 messages instead of 1. So, the root cause is most likely related to this PR — https://github.com/stoplightio/json/pull/122.

**Expected behavior**
Spectral must return 1 message as before, not 2.
