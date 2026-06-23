---
number: 2624
title: "asyncapi asyncApi2SchemaValidation does not allow string examples for other schema types"
state: "closed"
labels: ["released", "triaged", "AsyncAPI"]
author: "timonback"
created: "2024-05-24T16:53:35Z"
updated: "2024-11-12T02:26:53Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2624"
---

# asyncapi asyncApi2SchemaValidation does not allow string examples for other schema types

**Describe the bug**
The spectral rule `asyncApi2SchemaValidation` currently enforces that all `examples` have the same type as the schema `type`. However, we believe that there are cases in AsyncAPI, where it is needed to accept `string` examples regardless of the schema `type`.

**To Reproduce**

1. Use the AsyncAPI document: https://github.com/asyncapi/spec/issues/1038#issuecomment-1969489452
2. Open it in AsyncAPI studio (Or run the cli)
    1. Run `spectral lint --ruleset rule.yaml test.yaml`
    2. With `rule.yaml`: `extends: "spectral:asyncapi"`
    3. We had to change the version to `2.6.0`, as the cli does not support `3.0.0` yet
4. See the error: `66:11    error  asyncapi-schema-examples   "0" property type must be object components.schemas.io.github.springwolf.examples.kafka.dtos.XmlPayloadDto.examples[0]`

**Expected behavior**
No error/validation message

**Screenshots**
N/A

**Environment (remove any that are not applicable):**
 - Library version: develop

**Additional context**
We are embedding xml and/or yaml as string in examples in an AsyncAPI (JSON) document.

Relates to https://github.com/asyncapi/spec/issues/1038
