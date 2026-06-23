---
number: 2156
title: "No results with a severity of 'error' or higher found!"
state: "closed"
labels: ["enhancement", "released", "CLI"]
author: "max-moritz"
created: "2022-05-10T21:18:52Z"
updated: "2022-06-01T12:14:34Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2156"
---

# No results with a severity of 'error' or higher found!

**Describe the bug**

Ok, this is nitpicking :blush: .... but ... `error `is the highest severity so `or higher` does not make sense in console output `No results with a severity of 'error' or higher found!`

**To Reproduce**

Run

`spectral lint -r ruleset.yml api.yml --display-only-failures`

where `api.yml` does not violate any rule defined in `ruleset.yml` with severity `error` (it may produce `warn`, `info`, `hint `results)

**Expected behavior**

`No results with a severity of 'error' found!`

**Environment (remove any that are not applicable):**

 - Library version: 6.3.0
 
**Additional context**

Generally, output should be one of:
`No results with a severity of 'error' found!`
`No results with a severity of 'warn' or higher found!`
`No results with a severity of 'info' or higher found!`
`No results with a severity of 'hint' or higher found!`
