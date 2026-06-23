---
number: 2636
title: "Publish arm64 Docker containers to https://hub.docker.com/r/stoplight/spectral"
state: "open"
labels: ["enhancement", "help wanted", "p/medium", "triaged"]
author: "akrabat"
created: "2024-06-08T14:00:32Z"
updated: "2025-05-07T06:30:26Z"
comments: 2
reactions_total: 8
thumbs_up: 8
url: "https://github.com/stoplightio/spectral/issues/2636"
---

# Publish arm64 Docker containers to https://hub.docker.com/r/stoplight/spectral

**User story.**
As a specification writer, I want to validate my spec using a native Docker image on an Apple Silicon Mac so that I can run Spectral more efficiently with no warnings.

**Is your feature request related to a problem?**
Seeing a warning every time I run Spectral isn't a great experience.

**Describe the solution you'd like**
Publish arm64 images to https://hub.docker.com/r/stoplight/spectral

**Additional context**
When I run `stoplight/spectral:latest` on my Apple Silicon Mac, I see: 

```
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
```


Reading https://github.com/stoplightio/spectral/issues/2189, I think that arm64 is now supported by Spectral, so this is a request to publish the linux/arm64 version as a native Docker image as https://hub.docker.com/r/stoplight/spectral/tags shows that only linux/amd64 are published at the moment..
