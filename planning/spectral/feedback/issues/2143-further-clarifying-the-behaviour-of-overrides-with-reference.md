---
number: 2143
title: "Further clarifying the behaviour of `overrides` with referenced schemas"
state: "open"
labels: ["documentation", "triaged"]
author: "liamnichols"
created: "2022-04-29T17:14:50Z"
updated: "2024-08-13T11:49:02Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2143"
---

# Further clarifying the behaviour of `overrides` with referenced schemas

**Describe the bug**

I'm trying to use the `overrides` feature to disable a rule for a set of components that haven't yet been migrated but I appear to be unable to do so. 

**To Reproduce**

Based on the example included as part of #2127:

> **Example:**
> 
>  Given the following 2 YAML documents
> 
>  ```yaml
>  # my-document.yaml
>  openapi: "3.1.0"
>  paths: {}
>  components:
>    schemas:
>      User:
>        $ref: "./User.yaml"
>  ```
> 
>  ```yaml
>  # User.yaml
>  title: ""
>  type: object
>  properties:
>    id:
>      type: string
>  required:
>    - id
>  ```

Configure an override like so:

```yml
overrides:
  - files:
      - my-document.yaml
    rules:
      empty-title-property: off
```

While running, `spectral lint my-document.yaml`, this would work, but if I added any JSONPath expression to the file, it stops working. For example:

```yml
overrides:
  - files:
      - my-document.yaml#/components/schemas
    rules:
      empty-title-property: off
```

**Expected behavior**

Empty title from referenced schema to be ignored

**Environment (remove any that are not applicable):**
 - cli: 6.3.0
 - OS: macOS 12

**Additional context**

I guess this is related to the issue described in the caveat, but it is confusing to me because while `- my-document.yaml` would work, `- my-document.yaml#/` does not.

The problem that we face is that we run spectral on the root document, and not individually, but because our document has a lot of refs, this caveat prevents us from leveraging the override behaviour. 

Are there any other workarounds other than having to run `spectral lint` for every single file? 

Thanks!
