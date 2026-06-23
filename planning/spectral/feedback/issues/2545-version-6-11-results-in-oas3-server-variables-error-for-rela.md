---
number: 2545
title: "Version 6.11 results in oas3-server-variables error for relative server URL and variable substitution"
state: "open"
labels: ["t/bug", "p/high", "triaged", "team/bad-news-bears", "jira"]
author: "philipnbbc"
created: "2023-10-13T15:08:13Z"
updated: "2024-05-31T12:34:31Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2545"
---

# Version 6.11 results in oas3-server-variables error for relative server URL and variable substitution

**Describe the bug**
Docker image `stoplight/spectral:6.11` is returning a `oas3-server-variables` error for a relative URL server that has a variable substitution.

**To Reproduce**
Given `spec.yaml`, an OpenAPI document (only `servers: -url` is important and the rest is to avoid errors/warnings):
```
openapi: 3.1.0
info:
  title: title
  description: description
  version: version
  contact:
    name: name
    email: email
servers:
  - url: /example/{version}
    variables:
      version:
        default: version
paths:
  /:
    get:
      description: description
      operationId: get
      tags:
        - tag
      responses:
        '200':
          description: description
tags:
  - name: tag
    description: description
```
and `spectral.yaml` config file,
```
extends: spectral:oas
rules: {}
```

Run `docker run --rm -v $PWD:/data -w /data stoplight/spectral:6.11 lint spec.yaml` and it returns:
```
/data/spec.yaml
 11:15  error  oas3-server-variables  A few substitutions of server variables resulted in invalid URLs: /example/version  servers[0].variables
```

**Expected behavior**
It should pass like it does for version 6.10 (`No results with a severity of 'error' found!`).

Note that it does pass for version 6.11 if the `/{version}` is removed from the `url` or if the `url` is an absolute URL.

**Environment**
Docker image stoplight/spectral version 6.11
