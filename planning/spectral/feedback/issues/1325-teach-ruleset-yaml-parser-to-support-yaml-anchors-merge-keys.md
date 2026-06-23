---
number: 1325
title: "Teach ruleset yaml parser to support yaml anchors/merge keys"
state: "closed"
labels: ["enhancement"]
author: "ioggstream"
created: "2020-09-03T12:48:18Z"
updated: "2020-09-28T15:04:22Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1325"
---

# Teach ruleset yaml parser to support yaml anchors/merge keys

**Describe the bug**
The following yaml  rule with anchor does not validate correctly

**To Reproduce**

1. Go to online spectral parser
2. paste the content of the following rules

```
rules:
  no-x-headers-request: &no-x-headers
    description: "All 'HTTP' headers SHOULD NOT include 'X-' headers (https://tools.ietf.org/html/rfc6648)."
    severity: warn
    given:
      - "$..parameters[?(@.in == 'header')].name"
    message: |-
      HTTP header '{{value}}' SHOULD NOT include 'X-' prefix in {{path}}
    recommended: true
    type: style
    then:
      function: pattern
      functionOptions:
        notMatch: "/^[xX]-/"
  no-x-headers-response:
    <<: *no-x-headers
    given:
      - $.[responses][*].headers.*~
    message: |-
      HTTP header '{{value}}' SHOULD NOT include 'X-' prefix in {{path}}

```

3. See error

```
/rules/no-x-headers-response should have required property 'then'
```

**Expected behavior**
No errors

**Environment (remove any that are not applicable):**
 - Version: spectral 5.1.0
