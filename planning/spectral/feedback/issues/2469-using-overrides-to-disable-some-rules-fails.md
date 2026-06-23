---
number: 2469
title: "Using overrides to disable some rules fails"
state: "closed"
labels: ["chore"]
author: "antusus"
created: "2023-05-15T15:12:04Z"
updated: "2023-05-18T10:02:05Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2469"
---

# Using overrides to disable some rules fails

**Chore summary**
I'm using spectral as a JS dependency in version `5.9.2`. I'm validating output json file and some paths have lots of errors that I must postpone addressing. I wanted to use overrides to disable rules but it is not working and I have no idea what I'm doing wrong.

In my root folder I have

## `.spectral.yml`

```yaml
extends: [[spectral:oas, all]]

overrides:
  - files:
      - "**#/components/schemas/Activity/properties/tags/example"
    rules:
      oas3-valid-schema-example : "info"
```

## `openapi.json`

I'm including only very small portion of my file
```json
{
  "openapi": "3.0.2",
  "info": {
    "title": "Test",
    "version": "1.0.0"
  },
  "paths": {
  },
  "components": {
    "schemas": {
      "Activity": {
        "title": "Activity",
        "type": "object",
        "properties": {
          "tags": {
            "type": "array",
            "example": "1"
          }
        }
      }
    }
  }
}

```

The example is not a proper array so the validation fails as expected with:
```
 17:24    error  oas3-valid-schema-example      `example` property type should be array                                  components.schemas.Activity.properties.tags.example
```

But I specified that this should be reported as `info` and should not fail my test.

I'm using command
```
spectral lint openapi.json -F error --fail-on-unmatched-globs -v
```

Can you tell me what I'm doing wrong? 
Can I disable the `oas3-valid-schema-example` rule?
I was trying with path: `"openapi.json#/components/schemas/Activity/properties/tags/example"` and it also fails.

**Additional context**
If needed I've created sample project here: https://github.com/antusus/spectral-test and you should be able to use any node version.
