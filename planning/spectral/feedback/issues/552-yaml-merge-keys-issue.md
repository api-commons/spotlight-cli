---
number: 552
title: "Yaml merge keys issue"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2019-09-15T08:54:27Z"
updated: "2019-09-17T07:50:55Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/552"
---

# Yaml merge keys issue

**Describe the bug**
Linting a doc that leverages merge keys screams with 'duplicate keys' parsing error where it shouldn't (as far of my understanding of the [spec](http://www.yamllint.com/) goes).

> If the value associated with the key is a single mapping node, each of its key/value pairs is inserted into the current mapping, **unless the key already exists in it**. If the value associated with the merge key is a sequence, then this sequence is expected to contain mapping nodes and each of these nodes is merged in turn according to its order in the sequence. Keys in mapping nodes earlier in the sequence **override keys specified in later mapping nodes**. 


**To Reproduce**

1. Given this OpenAPI document '...'

**merge.yaml:**
```yaml
openapi: 3.0.0

x-format-version: "1.0"

info:
  title: Merge key issue
  description: https://yaml.org/type/merge.html
  version: 1.0.0

x-center: &CENTER
  x: 1
  y: 2

x-left: &LEFT
  x: 0
  y: 2

x-big: &BIG
  r: 10

x-small: &SMALL
  r: 1

x-one:
  <<: *CENTER
  r: 10
  label: center/big
x-two:
  <<: [*CENTER, *BIG]
  label: center/big
x-three:
  <<: [*BIG, *LEFT, *SMALL]
  x: 1
  label: center/big

paths: {}
```

2. Run this CLI command '....'

```bash
$ yarn spectral lint ./repro/merge.yaml
```

3. See error
```bash
c:/[REDACTED]/repro/merge.yaml
  1:1  warning  api-servers   OpenAPI `servers` must be present and non-empty array.
  5:6  warning  info-contact  Info object should contain `contact` object.
 33:3    error  parser        Duplicate key: x
```

**Expected behavior**
No error and a resolved output the expected result.

x-one, x-two & x-three members should contain:
```
  x: 1
  y: 2
  r: 10
  label: center/big
```

**Environment (remove any that are not applicable):**
 - Library version: 4.1.1
 - OS: Windows 7

/cc @P0lip
