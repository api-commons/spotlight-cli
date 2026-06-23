---
number: 1745
title: "Install script is broken"
state: "closed"
labels: ["t/bug"]
author: "carbonin"
created: "2021-07-09T15:32:39Z"
updated: "2021-08-09T19:41:45Z"
comments: 2
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/1745"
---

# Install script is broken

Running the install script on Linux produces an error and does not install spectral

**To Reproduce**
```
11:28:32:~/Source$ git clone git@github.com:stoplightio/spectral.git
Cloning into 'spectral'...
remote: Enumerating objects: 14986, done.
remote: Counting objects: 100% (2574/2574), done.
remote: Compressing objects: 100% (1345/1345), done.
remote: Total 14986 (delta 1457), reused 2067 (delta 1168), pack-reused 12412
Receiving objects: 100% (14986/14986), 11.28 MiB | 7.91 MiB/s, done.
Resolving deltas: 100% (9846/9846), done.
11:28:37:~/Source$ cd spectral/
11:29:04:~/Source/spectral (develop)$ ./scripts/install.sh 
Error requesting. Download binary from https://github.com/stoplightio/spectral/releases/latest/download/spectral-linux
```

**Additional context**

Currently https://github.com/stoplightio/spectral/releases/latest/download/spectral-linux redirects to https://github.com/stoplightio/spectral/releases/download/@stoplight/spectral-rulesets-v1.2.0/spectral-linux which gives a 404. Looks like recent releases may have removed the binaries? Hopefully this wasn't intentional.
