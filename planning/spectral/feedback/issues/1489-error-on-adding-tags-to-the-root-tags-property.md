---
number: 1489
title: "Error on adding tags to the root tags property"
state: "closed"
labels: ["t/bug"]
author: "wedi"
created: "2021-01-28T20:26:29Z"
updated: "2021-02-19T10:38:50Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1489"
---

# Error on adding tags to the root tags property

**Describe the bug**

I get an error message when I add a global tag (or multiple) to an OpenAPI definition in Spotlight Studio.

This es esspecially annoying as you get a warning if you don't add tags.


**To Reproduce**

Create an API in Spotlight Studio and paste this minimal example:

```yaml
openapi: 3.0.0
info:
  title: My API
  description: My example API.
  version: '1.0'
  contact:
    email: rest@api.example.com
servers:
  - url: 'http://localhost:3000'
tags: ['foo']
paths: {}
```
Issues error: `` `0` property type should be object``

When you remove the tag(s), the problem report states (rightfully) ``OpenAPI object should have non-empty `tags` object``.


**Expected behavior**

No error.

**Screenshots**

Not really needed but here you have it:

![grafik](https://user-images.githubusercontent.com/1466269/106193847-5993e300-61ae-11eb-99c1-75304e32dee3.png)


**Environment:**
 - Library version: 5.8.0 (that's what Spotlight claims)
 - OS: macOS Catalina (10.15.7)
 - Browser: Firefox 85.0


**Additional context**

You cannot select error/warning messages in Spotlight Studio's problem reports. They get unselected as soon as you release the mouse button. This is quite annoying as it makes googling (and bug reporting!) just a bit too tedious.
