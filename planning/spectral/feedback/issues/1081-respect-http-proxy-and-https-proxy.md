---
number: 1081
title: "Respect HTTP_PROXY and HTTPS_PROXY"
state: "closed"
labels: []
author: "adanilev"
created: "2020-04-13T08:58:57Z"
updated: "2020-06-24T23:30:59Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1081"
---

# Respect HTTP_PROXY and HTTPS_PROXY

**User story.**
As a user running behind a corporate proxy, I can use Spectral from JS, so that I can reap its benefits.

**Is your feature request related to a problem?**
Spectral doesn't work behind a corporate proxy if you're not using the CLI.

**Describe the solution you'd like**
Spectral should try to use a proxy when it is instantiated [from code](https://github.com/stoplightio/spectral/blob/b893654856f3e222678806070128c12dedc66003/src/spectral.ts#L50) as documented [here](https://stoplight.io/p/docs/gh/stoplightio/spectral/docs/guides/javascript.md) and not only when it's called [via CLI](https://github.com/stoplightio/spectral/blob/b893654856f3e222678806070128c12dedc66003/src/cli/index.ts#L10).

AFAIK, HTTPS_PROXY, HTTP_PROXY and their lowercase cousins are standard environment variables for setting proxies. Many people will already have them set if they are using a proxy. In order, Spectral should try to use:
- HTTPS_PROXY
- https_proxy
- HTTP_PROXY
- http_proxy
- PROXY
- proxy

**Additional context**
I'm calling Spectral within a TS project and calls to loadRuleset were taking > 2 minutes because requests to http://json-schema.org were timing out when I extended the `spectral:oas` ruleset.

Happy to try my hand at a PR if you agree with the proposed solution?
