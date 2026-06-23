---
number: 2959
title: "Missing null guard causes \"Cannot read properties of null (reading 'enum')\" "
state: "open"
labels: []
author: "anderaus"
created: "2026-05-21T11:38:37Z"
updated: "2026-05-23T20:12:47Z"
comments: 10
reactions_total: 16
thumbs_up: 16
url: "https://github.com/stoplightio/spectral/issues/2959"
---

# Missing null guard causes "Cannot read properties of null (reading 'enum')" 

I believe a bug was introduced in https://github.com/stoplightio/spectral/pull/2934/, see link below

> Was the `@ &&` null guard removed on purpose? I believe I'm seeing crashes when nimma hits a `null` node.  

 _Originally posted by @anderaus in [#2934](https://github.com/stoplightio/spectral/pull/2934/changes#r3280802340)_

Bug can be reproduced using this input:

```
{
  "openapi": "3.0.2",
  "info": { "title": "Test", "version": "1.0" },
  "paths": {},
  "components": {
    "examples": {
      "test": {
        "value": {
          "foo": null
        }
      }
    }
  }
}
```
