---
number: 2203
title: "Add \"Objects with properties must have type: object\" rule to builtin spectral:oas ruleset"
state: "open"
labels: ["enhancement", "help wanted", "good first issue", "p/longterm", "triaged"]
author: "hjoukl"
created: "2022-07-07T09:33:31Z"
updated: "2026-05-22T06:04:03Z"
comments: 6
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2203"
---

# Add "Objects with properties must have type: object" rule to builtin spectral:oas ruleset

I still think this is a sensible (opinionated, admittedly) addition to the spectral:oas ruleset.
IMHO if you define properties in an OAS schema ("struct" data) you probably never want to accept data as valid that doesn't even have these properties/attributes.

(I confusingly added that to #2136 so that kind of got mixed up with this separate JSON schema related issue, sorry)

Here goes, again:

As suggested by @P0lip on #2139 I propose to add to such a built-in ruleset:

```
---
extends: "spectral:oas"
rules:
  properties-type-object:
    description: "Objects with properties must have type: object."
    given: "$..[?(@ && @.properties)]"
    severity: error
    # must not be resolved because $ref-defined objects shall have its type
    # defined in the referenced schema, not the referencing field (and $ref 
    # must be the only property, anyway)
    resolved: false
    # type field must be defined and contain the value object
    then:
      - field: "type"
        function: defined
      - field: "type"
        function: enumeration
        functionOptions:
          values:
            - object
```

Reasoning:
The way OpenAPI/JSON Schema validation works wrt to structures with properties but no `type: object` is probably not what most users would expect (I certainly didn't):

Because IIUC a schema like

```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "properties": {
    "number": { "type": "number" },
    "street_name": { "type": "string" }
  },
  "required": ["number"],
}
```

is not a "de facto" restriction on a JSON object i.e. the key-value mapping aka dictionary to carry the given properties. According to [JSON Schema Cort: Assertions and Instance Primitive Types](https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.7.6.1) only those assertions are used for validating a value which belong to the "Validation Keywords" of the data type.

Which means that all of these are valid against the above schema:

Valid:

```
{
  "number": 10
}
```

Valid:
```
""
```

Valid:
```
false
```

(basically, anything - just by accidentally omitting `type: object` for a "struct")

I gather the user will usually expect "struct" data to be only treated as  valid if (required) properties are present in the instance object data model. The proposed rule thus omits an error for OpenAPI object schemas that define properties but not `type: object`.

Best, Holger

_Originally posted by @hjoukl in https://github.com/stoplightio/spectral/issues/2136#issuecomment-1114544997_
