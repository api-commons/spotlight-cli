---
number: 153
title: "Add docker image to readme"
state: "closed"
labels: ["released"]
author: "rossmcdonald"
created: "2019-04-18T16:28:33Z"
updated: "2019-05-11T07:21:17Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/153"
---

# Add docker image to readme

We have a public Docker image available for Spectral available on [Docker hub](https://hub.docker.com/r/stoplight/spectral) as:

```
stoplight/spectral
```

We might want to add that to the installation section with a little snippet, like:

```
docker run --rm -it stoplight/spectral lint "${URL}"
```
