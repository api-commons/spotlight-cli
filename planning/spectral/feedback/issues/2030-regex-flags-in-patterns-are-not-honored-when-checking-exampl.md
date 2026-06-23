---
number: 2030
title: "RegEx flags in patterns are not honored when checking examples"
state: "closed"
labels: []
author: "wedi"
created: "2022-01-19T17:21:49Z"
updated: "2022-07-06T15:23:45Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2030"
---

# RegEx flags in patterns are not honored when checking examples

**Describe the bug**
The following schema contains a valid ECMA 262 regular expression with a [matching example](https://regex101.com/r/5Mm1uZ/1) which gets rejected by spectral.

```yaml
reference:
  type: string
  pattern: '/\P{Cc}+ [1-9]?[0-9]+/u'
  example: 爱 1
```
```sh
53:14  error  oas3-valid-schema-example  "example" property must match pattern "/\P{Cc}+ [1-9]?[0-9]+/u"  properties.reference.example
```

You fixed this issue for [patterns in rule sets](https://github.com/stoplightio/spectral/issues/242).
Some time ago you rejected to [allow slashes for patterns](https://github.com/stoplightio/spectral/issues/1115).
Spectral does not complain about the flags (or slashes) themselves but does not honor them when checking examples.

**Expected behavior**
Honor [flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) (which you mention as a [comment in spectral](https://github.com/stoplightio/spectral/blob/2f26ed672c98cbd308fc1dd1daff803d36dcd42d/packages/functions/src/pattern.ts#L22)) when checking examples.

My actual use case are the [unicode character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) that require the `u` flag.

**Environment:**
```
$ node ./node_modules/@stoplight/spectral-cli/dist/index.js --version
6.1.0
$ node --version
v17.4.0
```
