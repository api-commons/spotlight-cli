---
number: 2043
title: "Paths are not reported correctly after multiple recursions of resolution"
state: "closed"
labels: ["t/bug", "released", "json-refs"]
author: "hudlow"
created: "2022-01-31T20:17:11Z"
updated: "2022-07-21T17:56:41Z"
comments: 5
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2043"
---

# Paths are not reported correctly after multiple recursions of resolution

**Describe the bug**

It appears that the path of an error is reported correctly if resolve goes through a single `$ref` resolution, but not if it goes through more than one.

**To Reproduce**

Given this set of schemas:

<details>
<summary>Example grandparent, parent, and child schemas</summary>

```yaml
openapi: 3.0.3
components:
  schemas:
    Grandparent:
      type: object
      description: Grandparent resource
      properties:
        child:
          $ref: '#/components/schemas/Parent'
    Parent:
      type: object
      description: Parent resource
      properties:
        child:
          $ref: '#/components/schemas/Child'
    Child:
      type: object
      properties:
        name:
          type: string
          description: Name for a child
```
</details>

...only the `Child` schema violates this rule:

```yaml
rules:
  object-schema-description-defined:
    description: Object schemas must have a description
    severity: error
    formats: [oas3]
    given: $.components.schemas..[?(@.type == 'object')]
    then:
      field: description
      function: truthy
```

...but Spectral reports a violation in redundant locations:

```bash
$ spectral lint dedup.yaml

/experiments/dedup.yaml
 14:15  error  object-schema-description-defined  Object schemas must have a description  components.schemas.Parent.properties.child
 16:11  error  object-schema-description-defined  Object schemas must have a description  components.schemas.Child

✖ 2 problems (2 errors, 0 warnings, 0 infos, 0 hints)
```

This doesn't happen if the `Grandparent` schema doesn't exist, so it seems to be an artifact of Spectral looking "through" the `Grandparent` schema. The result makes _sense_ to me in that if `components.schemas.Parent.properties.child` is "resolved" then it's the location of a second error.

But things get even stranger if I add a `GreatGrandparent`:

<details>
  <summary>Example schemas with <b>great grandparent</b></summary>

```yaml
openapi: 3.0.3
components:
  schemas:
    GreatGrandparent:
      type: object
      description: Great grandparent resource
      properties:
        child:
          $ref: '#/components/schemas/Grandparent'
    Grandparent:
      type: object
      description: Grandparent resource
      properties:
        child:
          $ref: '#/components/schemas/Parent'
    Parent:
      type: object
      description: Parent resource
      properties:
        child:
          $ref: '#/components/schemas/Child'
    Child:
      type: object
      properties:
        name:
          type: string
          description: Name for a child
```
</details>

Now the same Spectral rule reports three errors:

```bash
$ spectral lint dedup.yaml

/experiments/dedup.yaml
 14:15  error  object-schema-description-defined  Object schemas must have a description  components.schemas.Grandparent.properties.child
 20:15  error  object-schema-description-defined  Object schemas must have a description  components.schemas.Parent.properties.child
 22:11  error  object-schema-description-defined  Object schemas must have a description  components.schemas.Child

✖ 3 problems (3 errors, 0 warnings, 0 infos, 0 hints)
```

The error at `components.schemas.Grandparent.properties.child` seems to exist because of the presence of the `GreatGrandparent` schema, but it doesn't really make sense to me at all, because even if one fully "resolved" the schema, there wouldn't be an error at that location. Rather, there would be one at "`components.schemas.Grandparent.properties.child.properties.child`", I think.

In any case, it seems like Spectral isn't able to keep track of the "real" path of an error as it recurses through a resolved document.

**Expected behavior**

Any number of errors caused by the same problem in the same place should report the same path.

**Environment (remove any that are not applicable):**
 - Library version: `spectral --version` reports `6.2.0`
 - OS: macOS 12.1 Monterey
