---
number: 990
title: "Unable to install npm package"
state: "closed"
labels: ["t/bug"]
author: "zeke"
created: "2020-03-01T06:16:10Z"
updated: "2020-03-04T02:46:17Z"
comments: 3
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/990"
---

# Unable to install npm package

Hi @P0lip, @rossmcdonald, and the rest of the maintainers 👋 

I'm unable to install this package from npm:

```
$ npm i @stoplight/spectral
npm ERR! Unexpected end of JSON input while parsing near '...bbUxpr2zZ5vL4G5HpDno5'
```

The log indicates it's actually an issue with the transitive `immer` dependency, which is a dependency of `@stoplight/json-ref-resolver@3.0.8`.

I've opened an issue here: https://github.com/immerjs/immer/issues/546
