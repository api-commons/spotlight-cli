---
number: 2186
title: "Invalid ruleset gives Error [object Object]"
state: "closed"
labels: ["released"]
author: "philsturgeon"
created: "2022-06-18T12:57:15Z"
updated: "2022-08-03T18:04:37Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2186"
---

# Invalid ruleset gives Error [object Object]

**Describe the bug**

An indentation error in a custom ruleset lead to a confusing error from spectral, leaving the user in an unclear state.

Spectral v6.4.1:

``` shell 
$ spectral lint example.yaml -r apisyouwonthate.yml
Error running Spectral!
Use --verbose flag to print the error stack.
Error #1: [object Object]

$ spectral lint example.yaml -r apisyouwonthate.yml --verbose
Error running Spectral!
Error #1: [object Object]
```

Spectral 6.2.0:

```
$ spectral lint example.yaml -r apisyouwonthate.yml
Error at #/: must NOT have additional properties
```

**To Reproduce**

1. Given any OpenAPI document and this ruleset `.spectral.yml`:

```yaml
rules:
  api-home:
    description: APIs MUST have a root path defined (`/`), to stop forcing all API consumers to visit documentation for basic interactions.
    severity: error
    given: $.paths
    then:
      field: /
      function: truthy

no-global-versioning:
  message: Server URL should not contain global versions
  given: $.servers[*].url
  then:
    function: pattern
    functionOptions:
      notMatch: /v[1-9]
  formats: oas3
  severity: warn
```

2. Run this CLI command `spectral lint https://raw.githubusercontent.com/stoplightio/Public-APIs/master/reference/plaid/openapi.yaml`
3. See error

**Expected behavior**
An error that explains my ruleset is invalid, ideally pointing to what I did wrong and where. 

```
Error #1: Ruleset contained an unexpected key `no-global-versioning:`
```

or 

```
Error #1: Ruleset should only contain `extends`, `formats`, or `rules` at the top level. 
```

Something like that. 

**Environment (remove any that are not applicable):**
 - Library version: Spectral CLI v6.4.1
 - OS: macOS
