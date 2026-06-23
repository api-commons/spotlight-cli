---
number: 2774
title: "spectral-core: lodash.toPath security vulnerabilities?"
state: "open"
labels: ["dependencies", "triaged"]
author: "W0nderMuffin"
created: "2025-02-03T16:31:41Z"
updated: "2025-09-29T08:44:27Z"
comments: 7
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2774"
---

# spectral-core: lodash.toPath security vulnerabilities?

Hey there is there any reason for using lodash.topath 4.5.2 despite newer lodash version is included in the spectral-core package?

```
...
    "lodash": "~4.17.21",
    "lodash.topath": "^4.5.2",
...
```

Blackduck detects that the lodash.topath dependency has some critical security findings because the version is lower than 4.17.21:

https://nvd.nist.gov/vuln/detail/CVE-2018-16487
https://nvd.nist.gov/vuln/detail/CVE-2018-3721
https://nvd.nist.gov/vuln/detail/CVE-2019-10744
https://nvd.nist.gov/vuln/detail/CVE-2019-1010266
https://nvd.nist.gov/vuln/detail/CVE-2020-8203
https://nvd.nist.gov/vuln/detail/CVE-2020-28500
https://nvd.nist.gov/vuln/detail/CVE-2021-23337


Best regards
