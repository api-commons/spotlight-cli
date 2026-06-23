---
number: 2446
title: "cannot override based on formats"
state: "open"
labels: ["enhancement", "triaged"]
author: "rittneje"
created: "2023-03-31T15:38:48Z"
updated: "2024-05-31T12:34:24Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2446"
---

# cannot override based on formats

> For support questions, please use the [Stoplight Discord Community](https://discord.com/invite/stoplight). This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, our Discord is a great place to start.
>
> **Please delete this section, any any sections below that you don't use, before creating the issue.**

**Describe the bug**

The docs say you can apply overrides to particular formats. https://docs.stoplight.io/docs/spectral/293426e270fac-overrides

However, there does not seem to be a way to do this properly.

If I create a config like so:
```yaml
extends:
- "spectral:oas"
- "spectral:asyncapi"
overrides:
- formats: ["oas3_0"]
  rules:
    operation-description: "info"
```

I get an error
```
^[[31mError running Spectral!^[[39m
^[[31m^[[39mError #1: ^[[31mmust have required property 'files'^[[39m
^[[31m          at                     …./../../snapshot/project/packages/core/src/ruleset/validation/errors.ts:85      return new RulesetValidationError(inferErrorCode(path, error.keyword), error.message ?? 'unknown error', path)…^[[39m
^[[31m          at flatMa…                                                                                                                                                                                                             ^[[39m
^[[31m          at convertAjvError…    …./../../snapshot/project/packages/core/src/ruleset/validation/errors.ts:79      return filteredErrors.flatMap(error => …                                                                       ^[[39m
^[[31m          at assertValidRulese…  …./../../snapshot/project/packages/core/src/ruleset/validation/assertions.ts:26  throw new AggregateError(convertAjvErrors(validate.errors ?? []))…                                             ^[[39m
^[[31m          at new Rulese…         …./../../snapshot/project/packages/core/src/ruleset/ruleset.ts:64                assertValidRuleset({ extends: [], ...def })…                                                                   ^[[39m
```

As per the error, `files` is required, even though I don't intend to filter by file name.

If I try to add something for `files`, it seems to do a union rather than an intersection.

```yaml
extends:
- "spectral:oas"
- "spectral:asyncapi"
overrides:
- files: ["*"]
  formats: ["oas3_0"]
  rules:
    operation-description: "info"
```

That is, it applies the override to every file, regardless of format.

**To Reproduce**

See above.

**Expected behavior**

There should be a way to override rules for particular formats. Specifying both files and formats should use intersection logic not union logic. (If union logic is desired you should just make two entries.)


**Environment (remove any that are not applicable):**
 - Library version: 6.6.0
