---
number: 717
title: "Support resolving JSON refs relative to the initial root"
state: "closed"
labels: ["enhancement"]
author: "disposedtrolley"
created: "2019-10-30T01:03:20Z"
updated: "2019-11-27T01:50:16Z"
comments: 6
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/717"
---

# Support resolving JSON refs relative to the initial root

**User story.**
As a user, I want to specify all of my `$ref` values as relative paths from the root of the collection of my OAS files, so I don't need to use relative paths and backtracking (i.e. `../../`) on very deeply nested OAS files.

**Is your feature request related to a problem?**
The `ResolveRunner` treats all `$ref`s as being relative to the directory of the file where it's declared.

In the structure below, `paths/v2/greetings/greetings.yaml` needs to reference `schemas/GreetingsObject.yaml`. If the reference is declared as

    $ref: /schemas/GreetingsObject.ymal

the resolve fails as it tries to target `/paths/v2/greetings/schemas/GreetingsObject.yaml` as it considered the `paths/v2/greetings` folder to be the parent.

```
├── paths
│   └── v2
│       └── greetings
│           ├── greetings.yaml
│           └── greetings_by_id.yaml
├── root.yaml
├── schemas
│   └── GreetingsObject.yaml
```

**Describe the solution you'd like**
Spectral should allow for `$ref` values to be resolved as relative paths where the parent is the directory at the root of the OAS collection. The root is the parent folder of the input file to the `lint` CLI command:

    spectral lint project/root.yaml

which results in `project` as the parent for all relative `$ref` paths.

CC @nogates @davidlopezre
