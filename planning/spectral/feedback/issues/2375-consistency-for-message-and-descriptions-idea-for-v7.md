---
number: 2375
title: "Consistency for message and descriptions (idea for v7)"
state: "open"
labels: ["triaged", "breaking", "v7"]
author: "philsturgeon"
created: "2022-12-28T19:59:36Z"
updated: "2024-05-31T12:34:46Z"
comments: 0
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2375"
---

# Consistency for message and descriptions (idea for v7)

**Summary**

Consistency feedback for Spectral and the ruleset creation experience.

**Details**

Whilst working on [spectral-documentation](https://github.com/stoplightio/spectral-documentation), [spectral-owasp](https://github.com/stoplightio/spectral-owasp-ruleset), [spectral-url-versioning](https://github.com/stoplightio/spectral-url-versioning) and [spectral-openapi](https://github.com/philsturgeon/spectral-openapi) I have come across a lot of inconsistency issues, and its lead me to some ideas for v7.0 which can make things a bit more intuative. 

**message and description**

The Spectral team / @jharmn / @pamgoodrich decided that `message` would be short, sweet, and contain a little specific information like `Tag foo is not unique`, then the `description` would be longer, maybe contain some examples, and explain _why_.

I have been trying to use this standard when working on the above rulesets, but there are some decisions laying around that go against that.

1. Message sometimes ended with a `.` and sometimes did not. I have made all new rulesets always have a `.` at the end.

2. Inside `message` you can add `{{description}}` which seems like something we'd never want to do in a world where message is short & sweet, and description contains more information.

3. If you skip message and description, you see a default message from the function. If you then decide to add a description, you suddenly need to add `message: "{{error}}.",` to keep the origional message, otherwise the description is jammed in place of the message (which is never what you want.) It would be better if message and description never crossed streams (i.e. adding a description had no bearing on message).

**message variables**

Sometimes I can make the dynamic message that I want, but sometimes its impossible. It depends heavily on the combination of JSON Path, field, and function.

This works fine:

```
    "operation-operationId-unique": {
      message: 'Multiple operations exist with operationId "{{value}}".',
      description:
        "Unique string used to identify the operation. The id MUST be unique among all operations described in the API. Tools and libraries may use the operationId to uniquely identify an operation, therefore, it is recommended to follow common programming naming conventions.",
      severity: DiagnosticSeverity.Error,
      given: "$",
      then: {
        function: oasOpIdUnique,
      },
    },
```

This does not: 

```
"path-keys-no-trailing-slash": {
      message: "Path {{value}} must not end with slash.",
      // description: "",
      severity: DiagnosticSeverity.Warning,
      given: "$.paths",
      then: {
        field: "@key",
        function: pattern,
        functionOptions: {
          notMatch: ".+\\/$",
        },
      },
    },
```

If you try using value here you get `Path [object Object] must not end with slash."

Perhaps adding a {{field}} or {{key}} property? Or making sure {{value}} works in this instance? 

**message incorrectly suggests severity**

Messages often contain terms like must, e.g.: "info.description property must be truthy", but this message is a warning. For many developers when they see the word **must** they are thinking it means an RFC MUST, which means you absolutely must do the thing. If it's a warning, its basically optional, and SHOULD could be more appropriate.

Could we be factual, and take severity out of the message entirely? We could consistently rewrite rules to simply declare what the issue is: "info description is missing" or "is falsy" or talk about expectations: "info is expected to contain a description, but the property is missing".
