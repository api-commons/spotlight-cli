---
number: 2518
title: "Stop including vm2 as a dependency"
state: "closed"
labels: ["chore"]
author: "pvcresin"
created: "2023-07-27T07:46:01Z"
updated: "2023-07-27T08:02:03Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2518"
---

# Stop including vm2 as a dependency

**Chore summary**

spectral-cli is connected to vm2 deep in the dependencies.

- spectral-cli -> proxy-agent -> pac-proxy-agent -> pac-resolver -> degenerator -> vm2

vm2 has security issues and is no longer maintained.
- https://github.com/patriksimek/vm2
- Officials recommend switching to [isolated-vm](https://www.npmjs.com/package/isolated-vm).

Even if the dependent libraries support the update, it may take some time for spectral-cli to reflect the changes.
So, is there any way to prevent vm2 from being included as a dependency on the spectral-cli side?


**Tasks**
- [ ] Stop including vm2 as a dependency

**Additional context**
