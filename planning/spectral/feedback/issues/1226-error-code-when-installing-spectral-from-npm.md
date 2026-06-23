---
number: 1226
title: "Error code when installing spectral from npm"
state: "closed"
labels: ["t/bug"]
author: "rmerceragari"
created: "2020-06-12T19:32:51Z"
updated: "2020-06-26T13:27:48Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1226"
---

# Error code when installing spectral from npm

**Describe the bug**
When I install spectral via npm I get a nonzero return code from the npm install

**To Reproduce**

1. docker run --rm -it ubuntu:20.04 /bin/bash
2. apt-get update && apt-get install npm -y
3. npm install -g @stoplight/spectral
4. echo $? <--- non zero

Oddly; if i rerun the npm install after this it works... idk weird.

**Expected behavior**
Get zero from echo $?

**Screenshots**
Here's what I get:
/usr/local/bin/spectral -> /usr/local/lib/node_modules/@stoplight/spectral/dist/cli/index.js

> core-js@3.6.5 postinstall /usr/local/lib/node_modules/@stoplight/spectral/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

**Additional context**
Add any other context about the problem here.
