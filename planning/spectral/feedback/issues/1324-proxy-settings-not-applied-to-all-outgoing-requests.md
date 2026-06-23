---
number: 1324
title: "Proxy settings not applied to all outgoing requests"
state: "closed"
labels: ["t/bug", "help wanted", "p/medium"]
author: "dlouzan"
created: "2020-09-02T15:33:46Z"
updated: "2021-03-31T11:56:29Z"
comments: 9
reactions_total: 3
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1324"
---

# Proxy settings not applied to all outgoing requests

**Describe the bug**

While using spectral on a corporate network, our lints are taking a long time (hitting a network timeout) because not all outgoing connections are honouring the proxy settings.

After initiating a lint, spectral seemed to hang and we tracked this to an outgoing connection to <http://json-schema.org> on startup:

```sh
NET 338: createConnection [
  {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'json-schema.org',
    port: 80,
    hostname: 'json-schema.org',
    hash: null,
    search: null,
    query: null,
    pathname: '/draft-04/schema',
    path: null,
    href: 'http://json-schema.org/draft-04/schema',
    method: 'GET',
    headers: [Object: null prototype] {
      Accept: [Array],
      'User-Agent': [Array],
      'Accept-Encoding': [Array],
      Connection: [Array]
    },
    agent: undefined,
    servername: 'json-schema.org',
    _agentKey: 'json-schema.org:80:',
    encoding: null
  },
  [Function: oncreate],
  [Symbol(normalizedArgs)]: true
]

...

TIMER 304: process timer lists 136415
TIMER 304: timeout callback 1000
TIMER 304: 1000 list wait because diff is 0
TIMER 304: process timer lists 137416
TIMER 304: timeout callback 1000
TIMER 304: 1000 list wait because diff is 0
TIMER 304: process timer lists 138417
TIMER 304: timeout callback 1000
TIMER 304: 1000 list wait because diff is 0
TIMER 304: process timer lists 139418
TIMER 304: timeout callback 1000
TIMER 304: 1000 list wait because diff is 0
TIMER 304: process timer lists 140419
TIMER 304: timeout callback 1000

...
```

Looks like this is triggered from one of the libraries (ajv?), and it is not respecting the proxy settings. The net effect is that on startup spectral will hang for a big while until the timeout hits and then the lint continues.

On top of this, the standard environment variables `HTTP(S)_PROXY` are not used to configure the proxy settings, the CLI will only recognize `PROXY`. This is documented in <https://meta.stoplight.io/docs/spectral/docs/guides/2-cli.md#proxying>, but it is non-standard behaviour.

**Environment**
 - Spectral: 5.5.0 via CLI
 - OS: Observed both on macOS 10.15.6 with node 12.10.0 and gitlab-ci running latest image node:erbium
