---
number: 1591
title: "Include support for alpine linux in the install script"
category: "Q&A"
author: "doshidhaval"
created: "2021-04-30T17:03:35Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1591"
---

# Include support for alpine linux in the install script

Sometime in Feb, I had created a PR to support installation on alpine https://github.com/stoplightio/spectral/pull/1512. When can this be included in the release?

## ✅ Accepted answer — @P0lip

Ooops, I forgot to include it. My apologies.
I'll cherry-pick the commit when cutting the new release.
In the meantime, I'll create a build manually and attach it to the release.
The script is still available here https://raw.githack.com/stoplightio/spectral/develop/scripts/install.sh.

---
Done, attached the build to the latest release.
LMK if that's okay for you.
The next releases will obviously include the alpine build.
