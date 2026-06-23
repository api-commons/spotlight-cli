---
number: 2640
title: "Lots of $ref to other files leads to random errors due to unprocessed $ref targets"
state: "open"
labels: ["enhancement", "help wanted", "triaged"]
author: "fcolin-odigo"
created: "2024-06-11T14:58:02Z"
updated: "2026-05-22T06:09:48Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2640"
---

# Lots of $ref to other files leads to random errors due to unprocessed $ref targets

[OpenAPI 3+ allows usage `$ref:` with references to other files](https://swagger.io/docs/specification/using-ref/); this allows to split the OpenAPI Description (OAD) in several files.

Main usage is: a root `openapi.yaml` files with objects in other files; all other files have references to `$ref: 'openapi.yaml#/some/object'` (this works as `$ref: '#/some/object'` in a single-file OAD).

**Problem is: when there is more than a few files, some `$ref:` to external files are not processed when Spectral tries to lint them, leading to random false errors.**

The root cause seems to be: parsing an external file appears to be an **async** process; if there is tens+ of external files to read through `$ref:`, some of them are not parsed when the linter comes. Errors happen depending on which files have been parsed or not.
There should be a mechanism to ensure the `$ref:` to an external file is properly handled _before_ running the linter through it.

This is a problem as multi-files OAD are very useful and handled by many IDE (as JetBrains ones).

**To Reproduce**

Due to the nature of the bug, this won’t happen on small OpenAPI files, so I’ve done a a repository here https://github.com/fcolin-odigo/poc-spectral-ref/ with examples.

1. Checkout https://github.com/fcolin-odigo/poc-spectral-ref
2. Run this CLI command : `spectral lint split/openapi.yaml` several times

There is unexpected errors; **and** there errors happen on random parts of the file:

```shell
$ spectral lint split/openapi.yaml 
/home/francois/dev/projects/paas/poc-openapi-ref/split/openapi.yaml
 1:1  warning  oas3-api-servers  OpenAPI "servers" must be present and non-empty array.

/home/francois/dev/projects/paas/poc-openapi-ref/split/paths/sample4-byId.yaml
 1:5  error  path-params  Operation must define parameter "{tenantId}" as expected by path "/tenants/{tenantId}/sample4/{id}".  get
 1:5  error  path-params  Operation must define parameter "{id}" as expected by path "/tenants/{tenantId}/sample4/{id}".        get

✖ 3 problems (2 errors, 1 warning, 0 infos, 0 hints)

$ spectral lint split/openapi.yaml 
/home/francois/dev/projects/paas/poc-openapi-ref/split/openapi.yaml
 1:1  warning  oas3-api-servers  OpenAPI "servers" must be present and non-empty array.

/home/francois/dev/projects/paas/poc-openapi-ref/split/paths/sample2-byId.yaml
 1:5  error  path-params  Operation must define parameter "{tenantId}" as expected by path "/tenants/{tenantId}/sample2/{id}".  get
 1:5  error  path-params  Operation must define parameter "{id}" as expected by path "/tenants/{tenantId}/sample2/{id}".        get

✖ 3 problems (2 errors, 1 warning, 0 infos, 0 hints)

$ spectral lint split/openapi.yaml 
/home/francois/dev/projects/paas/poc-openapi-ref/split/openapi.yaml
 1:1  warning  oas3-api-servers  OpenAPI "servers" must be present and non-empty array.

/home/francois/dev/projects/paas/poc-openapi-ref/split/paths/sample3-byId.yaml
 1:5  error  path-params  Operation must define parameter "{tenantId}" as expected by path "/tenants/{tenantId}/sample3/{id}".  get
 1:5  error  path-params  Operation must define parameter "{id}" as expected by path "/tenants/{tenantId}/sample3/{id}".        get

✖ 3 problems (2 errors, 1 warning, 0 infos, 0 hints)
```

**Expected behaviour**

There should be only one warning, as you can see with the "singlefile" version of the same OAD:

```shell
$ spectral lint singlefile/openapi.yaml 
/home/francois/dev/projects/paas/poc-openapi-ref/singlefile/openapi.yaml
 1:1  warning  oas3-api-servers  OpenAPI "servers" must be present and non-empty array.

✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)
```

**Environment:**
 - Spectral CLI 6.11.1
 - Node v22.2.0
 - npm 10.7.0
 - Ubuntu 22.04 on WSL2 (Windows 10)
 - Intel Core i7-10750H @2.60 GHz with 32 GB RAM

Note: due to the nature  of the bug, you may not see it if your computer is more powerful than mine. You may reproduce it by adding more "samples" stuff.
In the same way, you may see it works with smaller data set by commenting some of these samples.
