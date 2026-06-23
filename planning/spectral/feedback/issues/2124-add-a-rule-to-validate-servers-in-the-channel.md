---
number: 2124
title: "Add a rule to validate servers in the channel"
state: "closed"
labels: ["enhancement", "released", "AsyncAPI"]
author: "magicmatatjahu"
created: "2022-04-12T18:04:33Z"
updated: "2022-06-30T12:26:33Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2124"
---

# Add a rule to validate servers in the channel

**User story.**
As a user I want to know if the servers defined in the `channels.*.servers` array exist in the `servers` object.

**Is your feature request related to a problem?**
The following AsyncAPI document is invalid and Spectral should throw errors:

```yaml
asyncapi: "2.0.0"
info:
  title: Awesome API
  description: A very well defined API
  version: "1.0"
servers:
  production:
    url: "stoplight.io"
    protocol: "https"
channels:
  hello:
    servers:
      - development
```

**Additional context**
Part of #2100
