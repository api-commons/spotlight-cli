---
number: 2305
title: "Support for Cloudfomration custom tags or disabling default parser"
state: "open"
labels: ["enhancement", "triaged"]
author: "p0o"
created: "2022-10-09T17:46:23Z"
updated: "2024-05-31T12:34:38Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2305"
---

# Support for Cloudfomration custom tags or disabling default parser

**User story.**
As a developer, I can use spectral to lint Cloudformation YAML files (AWS IaC).

**Is your feature request related to a problem?**
Cloudfomration uses custom tags like !Sub or !GetAtt which currently are not supported by default YAML parser and causes spectral to throw errors. It makes it unusable for this use case because enforcing it using CI causes correct Cloudformation templates to fail.

Sample error:

```
 error  parser                  Unknown tag <!Sub>
```

**Describe the solution you'd like**
I like to be able to turn off the YAML parser error or be able to add YAML custom tags, through config file.

**Additional context**
These are the current tags ([intrinsic functions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html)) AFAIK
```"!And",
        "!And sequence",
        "!If",
        "!If sequence",
        "!Not",
        "!Not sequence",
        "!Equals",
        "!Equals sequence",
        "!Or",
        "!Or sequence",
        "!FindInMap",
        "!FindInMap sequence",
        "!Base64",
        "!Join",
        "!Join sequence",
        "!Cidr",
        "!Ref",
        "!Sub",
        "!Sub sequence",
        "!GetAtt",
        "!GetAZs",
        "!ImportValue",
        "!ImportValue sequence",
        "!Select",
        "!Select sequence",
        "!Split",
        "!Split sequence"```
