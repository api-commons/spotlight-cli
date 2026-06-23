---
number: 1883
title: "Can't install latest release of spectral-cli"
state: "closed"
labels: []
author: "nektru"
created: "2021-10-05T13:13:25Z"
updated: "2021-10-05T13:17:23Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1883"
---

# Can't install latest release of spectral-cli

**Describe the bug**
I get an error trying to install spectral-cli using dockerfile
```
RUN npm install -g @stoplight/spectral-cli@6.0.1
 ---> Running in f07d22f1e989
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/@stoplight%2fspectral-ruleset-bundler - Not found
npm ERR! 404 
npm ERR! 404  '@stoplight/spectral-ruleset-bundler@^1.0.0' is not in the npm registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404 It was specified as a dependency of '@stoplight/spectral-cli'
npm ERR! 404 
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2021-10-05T13_10_41_418Z-debug.log
The command '/bin/sh -c npm install -g @stoplight/spectral-cli@6.0.1' returned a non-zero code: 1
```

And https://www.npmjs.com/package/%40stoplight%2Fspectral-ruleset-bundler redirects me to the login page. It looks like not public.
