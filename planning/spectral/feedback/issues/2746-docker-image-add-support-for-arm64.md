---
number: 2746
title: "Docker image: add support for arm64"
state: "open"
labels: ["chore"]
author: "Martin-happy"
created: "2024-11-22T12:33:03Z"
updated: "2025-02-21T13:32:58Z"
comments: 2
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2746"
---

# Docker image: add support for arm64

**Chore summary**
AFAI can see there is no docker-image available for `linux/amd64`.
Running `spectral lint` in our cicd pipeline (in docker) hits a blocker when the job runs in an `arm64` arch node.

**Tasks**
- extend docker build process to also build and push image for arm64 and potential others

**Additional context**
docker multi arch build: https://www.docker.com/blog/multi-arch-build-and-images-the-simple-way/
current available tags on dockerhub: https://hub.docker.com/r/stoplight/spectral/tags

Docker trying to auto-match an image for the host platform on an `linux/arm64/v8` machine:
```bash
Status: Downloaded newer image for stoplight/spectral:latest
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
exec /usr/local/bin/spectral: exec format error
```
