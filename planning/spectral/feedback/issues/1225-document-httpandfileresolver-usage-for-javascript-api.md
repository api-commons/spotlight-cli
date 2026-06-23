---
number: 1225
title: "Document httpAndFileResolver usage for JavaScript API"
state: "closed"
labels: []
author: "DavidBiesack"
created: "2020-06-12T13:51:08Z"
updated: "2020-06-12T17:29:03Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1225"
---

# Document httpAndFileResolver usage for JavaScript API

**User story.**
As a developer, I can reuse the same Resolver used by Spectral CLI when using the JavaScript API, so that I can validate OpenAPI documents which `$ref` schemas via https/http schemas.

**Is your feature request related to a problem?**
When embedding Spectral JavaScript API, the default resolver does not resolve http/http schemas. I get
```
 {
    code: 'invalid-ref',
    path: [ ... ],
    message: "No resolver defined for scheme 'https' in ref https://production.api.apiture.com/schemas/mySchema/v1.0.0/model.json",
    severity: 0,
    range: { start: [Object], end: [Object] }
  }
```

**Describe the solution you'd like**

The default Resolver used when using `new Spectral()` (not passing in an explicit `resolver` in the options) should be the same `httpAndFileResolver` used in the CLI.

If you choose to not change the default for `new Spectral()`, please export `httpAndFileResolver` from the module, or add a constructor `static httpAndFileResolver(): Resolver` from the `Spectral` or other class so I can access it, for example via `new Spectral({resolver: Spectral:httpAndFileResolver()})`. (Also update the docs as necessary.)

I know work is underway to migrate off `@stoplight/json-ref-resolver`. If that takes priority, please provide equivalent functionality to `httpAndFileResolver` for the JavaScript API in that refactor

**Additional context**
I'm using 5.4.0
See [the guide](https://community.stoplight.io/t/how-to-specify-http-https-resolver-from-spectral-typescript-api/1328).
Thus, I need to recreate `httpAndFileResolver` and `httpResolver` and `fileResolver` (by copying code from Spectral).
