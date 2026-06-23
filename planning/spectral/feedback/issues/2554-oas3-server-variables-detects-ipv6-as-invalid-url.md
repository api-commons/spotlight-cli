---
number: 2554
title: "oas3-server-variables detects ipv6 as invalid url"
state: "open"
labels: ["t/bug", "triaged", "OpenAPI"]
author: "mapero"
created: "2023-11-24T12:38:39Z"
updated: "2024-05-31T12:34:32Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2554"
---

# oas3-server-variables detects ipv6 as invalid url

**Describe the bug**
When using ipv6 as default value of a server variable. spectral issues an error:
`error  oas3-server-variables  A few substitutions of server variables resulted in invalid URLs: https://%5Bfe80::dcad:beff:fe00:0001%5D/api/v1  servers[1].variables`

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document '...'

```
servers:
  - url: '/api/v1'
  - url: 'https://{host}/api/v1'
    variables:
      host:
        default: '[fe80::dcad:beff:fe00:0001]'
        description: Hostname or ip address
```

3. Run this CLI command '....'
`spectral lint api.yaml`
5. See error
`error  oas3-server-variables  A few substitutions of server variables resulted in invalid URLs: https://%5Bfe80::dcad:beff:fe00:0001%5D/api/v1  servers[1].variables`

**Expected behavior**
Accept the ip v6 address as valid variable

**Screenshots**

**Environment (remove any that are not applicable):**
 - Library version: 6.11.0
 - OS: Ubuntu
