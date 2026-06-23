---
number: 2562
title: "Erroneous 'invalid-ref' reported when linting glob patterns and some schemas have a recursive ref"
state: "open"
labels: ["enhancement", "triaged"]
author: "pwils33"
created: "2023-12-15T21:19:56Z"
updated: "2024-05-31T09:24:16Z"
comments: 0
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2562"
---

# Erroneous 'invalid-ref' reported when linting glob patterns and some schemas have a recursive ref

Created a simple repo that helps explain the bug can be found [here](https://github.com/cvent/spectral-bug-example)

**Describe the bug**
Say you have the following structure
```
├── src
│   ├── folder-a
│   │   ├── schema-a.json
│   │   ├── schema-b.json
│   ├── folder-b
│   │   ├── schema-c.json
└── yourrules.spectral.yaml
```
If `schema-b` has a reference to `schema-a` and `schema-a` has a reference to `schema-c` and `schema-c` has a reference to itself, then if you were to run
```
spectral lint src/**/*.json
```
 you would have an `invalid-ref` error reported for `schema-b`, but if you were to instead run
 ```
 spectral lint src/folder-a/schema-b.json
 ```
no errors would be reported

**To Reproduce**
1. Given file structure above, with references as described
2. Run this CLI command `spectral lint src/**/*.json`
3. See error

OR

1. Clone https://github.com/cvent/spectral-bug-example
2. Follow installation instructions
3. run `npm run lint`
4. See error

**Expected behavior**
No errors to be reported

**Environment (remove any that are not applicable):**
Spectral: 6.11.0

**Additional context**
See https://github.com/cvent/spectral-bug-example/blob/main/README.md for more details and thoughts on why bug is happening
