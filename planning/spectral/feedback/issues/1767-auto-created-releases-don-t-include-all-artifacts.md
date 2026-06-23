---
number: 1767
title: "Auto-created releases don't include all artifacts"
state: "closed"
labels: ["chore"]
author: "tillig"
created: "2021-08-05T19:16:54Z"
updated: "2021-08-31T18:29:00Z"
comments: 26
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1767"
---

# Auto-created releases don't include all artifacts

In the last month or so it appears some work has been going on :tada: but as part of the CI/CD process, `stoplight-bot` is creating a release for each tag 😦  - this [`@stoplight/spectral-ruleset-migrator-v1.3.0` release](https://github.com/stoplightio/spectral/releases/tag/%40stoplight%2Fspectral-ruleset-migrator-v1.3.0) is an example.

These releases **don't include the executables or other artifacts** like in a [fully versioned release](https://github.com/stoplightio/spectral/releases/tag/v6.0.0-alpha2) - it's just a source snapshot. While this isn't a showstopper, it really breaks the interface for https://github.com/stoplightio/spectral/releases/latest and https://api.github.com/repos/stoplightio/spectral/releases/latest, which scripts and build tasks can use to download the latest release of the tooling.

Is there a way to either...

- Stop releasing these `@stoplight/*` tags (and delete the existing incomplete "releases" so they don't show up anymore)? OR
- Make sure these releases also include all of the executables and everything so the `latest` release actually has a complete latest release?
