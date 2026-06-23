---
number: 1984
title: "Disabling Rules and JSON Path"
category: "Q&A"
author: "yordis"
created: "2021-12-02T18:53:02Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1984"
---

# Disabling Rules and JSON Path

Hey folks, I am trying to follow: https://github.com/stoplightio/spectral/pull/939/files which I can't find the documentation for it (probably I missed it for the nth time)

I have the following linter error:

```bash
  40:24   error  upper-case-enums  Enums must be written in uppercase separated by underscores.  paths./compliance/v1/notifications/entities.get.parameters[0].schema.enum[0]
```

I am trying to figure out how to add the `except` rule for such error:

```yml
rules:
  upper-case-enums:
    description: Enums must be written in uppercase separated by underscores.
    type: validation
    recommended: true
    severity: error
    given: '$..enum.*'
    then:
      function: casing
      functionOptions:
        type: macro

except:
  "my-file.json#/paths/compliance/v1/notifications/entities/get/parameters[0]/schema/enum[0]":
    - upper-case-enums
```

Code snippet about the spec

```json
{
  "paths": {
    "/compliance/v1/notifications/entities": {
      "parameters": [],
      "get": {
        "parameters": [
          {
            "name": "accountType",
            "in": "query",
            "allowEmptyValue": false,
            "schema": {
              "type": "string",
              "enum": [
                "Credit",
                "Debit"
              ]
            }
          }
        ]
      }
    }
  }
}
```

But at this point, I can't tell what is the format in the JSON Path since I tried multiple things, and doesn't work. 

I would appreciate some help on it, 

Thanks in advance.

## ✅ Accepted answer — @P0lip

Hey!
First of all, `exceptions` were superseded by a more powerful feature called `overrides`. You can find some documentation on them here https://github.com/stoplightio/spectral/blob/develop/docs/guides/4-custom-rulesets.md#overrides
They still work in JSON/YAML rulesets, because ruleset-migrator (the project we use to translate the rulesets into a more native format Spectral can operate on) transforms `exceptions` into`overrides`.
Answering your initial question - I think you might need to escape things more properly.
The value after the filepath / glob, has to be a valid JSON Pointer (https://datatracker.ietf.org/doc/html/rfc6901), so I suspect the following should work fine `my-file.json#/~1paths/~1compliance~1v1~1notifications~1entities/get/parameters/0/schema/enum/0`.
