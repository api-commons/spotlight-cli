---
number: 21
title: "Update rule structure"
state: "closed"
labels: ["enhancement"]
author: "rossmcdonald"
created: "2018-10-02T16:22:43Z"
updated: "2018-10-02T21:59:26Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/21"
---

# Update rule structure

Change rule structure slightly:

* `type` -> `function`
* `category` -> `type`
* `description` -> `summary`
* add optional `description` field which is long-form, markdown-formatted text describing the rule and it's functionality
* adding `input`, which is always an object with the parameters required by the corresponding `function`
* add an optional tags field, with type string[]

So this:

```
"some-rule": {
        "category": "style",
        "type": "truthy",
        "path": "$..paths.*.*.parameters",
        "enabled": true,
        "description": "parameter objects should have a description",
        "truthy": "description"
}
```

To this:

```
"some-rule": {
        "type": "style",
        "path": "$..paths.*.*.parameters",
        "enabled": true,
        "summary": "parameter objects should have a description",
        "function": "truthy",
        "input": { "property": "description" }
        "tags": [ "parameters" ]
}
```
