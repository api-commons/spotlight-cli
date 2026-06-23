---
number: 2912
title: "spectral lint --format json outputs invalid JSON when no results found (informational message appended to stdout)"
state: "open"
labels: []
author: "Pentusha"
created: "2026-03-13T10:12:24Z"
updated: "2026-03-13T10:12:24Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2912"
---

# spectral lint --format json outputs invalid JSON when no results found (informational message appended to stdout)

---                                                                                                                                                                                                                               
  Describe the bug                                                                                                                                                                                                                  
                                                                                                                                                                                                                                    
  When running `spectral lint with --format json` against a valid OpenAPI document that produces no findings, the output is `[]No results with a severity of 'warn' or higher found!` instead of just `[]`. The informational message is  
  appended directly to the JSON array, making the output invalid JSON and breaking any tooling that parses `stdout`.                                                                                                                  
                                                                                                                                                                                                                                    
  To Reproduce                                                                                                                                                                                                                      
                                                                                                                                                                                                                                    
  1. Given this OpenAPI document `valid.yaml`:
  
```yaml                                                                                                                                                                                        
  openapi: "3.0.3"                                                                                                                                                                                                                  
  info:                                                                                                                                                                                                                             
    title: Test                                                                                                                                                                                                                     
    version: "1.0.0"
    description: Test API
    contact:
      name: test
  paths: {}
  servers:
    - url: https://example.com
```

  2. Run:
  `spectral lint valid.yaml --format json --fail-severity warn`

  3. stdout is:
  `[]No results with a severity of 'warn' or higher found!`

  This is not valid JSON.

  Expected behavior

  When `--format json` is used, `stdout` should contain only valid JSON. The informational message `No results with a severity of 'warn' or higher found!` should either be suppressed, written to `stderr`, or not appended to the JSON
  output. Expected `stdout`:

```json
  []
```

  Environment:
  - Library version: 6.15.0
  - OS: Linux
