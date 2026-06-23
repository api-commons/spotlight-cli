---
number: 2419
title: "Spectal complains when a openapi pattern uses a Unicode character set"
state: "open"
labels: ["enhancement", "triaged"]
author: "DavidBiesack"
created: "2023-03-14T19:35:43Z"
updated: "2024-05-31T12:34:22Z"
comments: 3
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2419"
---

# Spectal complains when a openapi pattern uses a Unicode character set

**Describe the bug**

spectral incorrectly flags an example corresponding to a valid regexp pattern as invalid.

JSON Schema says that patterns should be processed as Unicode regexp, but it appears that the fix #1787 for #1782 turned off `unicodeRegExp` :
```
unicodeRegExp: false,
```

Thus for the following property

```
openapi: 3.1.0
components:
  schemas:
    label:
      description: The human readable label for the report type.
      type: string
      minLength: 1
      maxLength: 55
      pattern: '^\P{Cc}{1,55}$'
      example:
        Admin User Activity
```

We get

```
 11:9    error  oas3-valid-schema-example  "example" property must match pattern "\P{Cc}{1,55}"      components.schemas.label.example
```

even though this is a valid example that matches the regex

```node
> 'Admin User Activity'.match(/^\P{Cc}{1,55}$/u)
'Admin User Activity'.match(/^\P{Cc}{1,55}$/u)
[
  'Admin User Activity',
  index: 0,
  input: 'Admin User Activity',
  groups: undefined
]
> 
```

**To Reproduce**

1. Save the sample as `openapi.yaml`
3. Run this CLI command 
```
echo 'extends: spectral:oas' > .spectral.yaml
spectral lint openapi.yaml
```

5. See error

```
 11:9    error  oas3-valid-schema-example  "example" property must match pattern "\P{Cc}{1,55}"      components.schemas.label.example
```

**Expected behavior**

no false negative error for a valid pattern that matches a pattern with a charset pattern

Since a bug fix intentionally disables Unicode, and enabling it may break others, I would like an _option_ to enable it, 
either in the CLI options or in the spectral ruleset.

**Environment (remove any that are not applicable):**
 - Library version: spectral cli 6.4.2
 - OS: MacOS 13.2.1
 - Browser: n/a
