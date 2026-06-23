---
number: 1516
title: "Find orphaned required properties"
state: "open"
labels: ["triaged"]
author: "Amachua"
created: "2021-02-24T14:45:10Z"
updated: "2024-05-31T12:35:40Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1516"
---

# Find orphaned required properties

**User story.**
As an API Designer, in order to ensure that my specification is properly defined, then I want to have a rule that check if a required property exists in the object.

**Is your feature request related to a problem?**
While we're in the specification process, we often change the name of different properties and we often forget to also update the require constrainst which lead to a specification that doesn't properly defined our business requirements.

**Describe the solution you'd like**
I've the feeling that the solution that should be put in place is somehow fractal since it should covers the following cases:

## Find the orphaned required properties in a simple definition

### Error thrown

As an API designer, when I define the following schema:
```yaml
components:
  schemas:
    DummySchema:
      required: [dummy_property2]
      type: object
      properties:
        dummy_property:
          description: Such dummy property.
          type: string
```

Then an error is thrown as the `dummy_property2` is not defined.


### No error thrown

As an API designer, when I define the following schema:
```yaml
components:
  schemas:
    DummySchema:
      required: [dummy_property]
      type: object
      properties:
        dummy_property:
          description: Such dummy property.
          type: string
```

Then no issue is thrown.

## Find the orphaned required properties in a allOf

N.B. I've the feeling that the anyOf should have the same behavior as the allOf.

### Error thrown

As an API designer, when I define the following schema:
```yaml
components:
  schemas:
    DummySchema:
      required: [dummy_property4]
      type: object
      allOf:
        - $ref: "#/components/schemas/DummySchema2"
        - $ref: "#/components/schemas/DummySchema3"
    DummySchema2:
      type: object
      properties:
        dummy_property2:
          description: Such dummy property.
          type: string
    DummySchema3:
      type: object
      properties:
        dummy_property3:
          description: Such dummy property.
          type: string
```
An error is thrown as the `dummy_property4` is unknown in any of the referenced schema.

### No error thrown

As an API designer, when I define the following schema:
```yaml
components:
  schemas:
    DummySchema:
      required: [dummy_property3]
      type: object
      allOf:
        - $ref: "#/components/schemas/DummySchema2"
        - $ref: "#/components/schemas/DummySchema3"
    DummySchema2:
      type: object
      properties:
        dummy_property2:
          description: Such dummy property.
          type: string
    DummySchema3:
      type: object
      properties:
        dummy_property3:
          description: Such dummy property.
          type: string
```
No error is thrown as the `dummy_property3` is in the `DummySchema3`.

## Find the orphaned required properties in a oneOf

### Error thrown

As an API designer, when I define the following schema:
```yaml
components:
  schemas:
    DummySchema:
      required: [dummy_property2]
      type: object
      oneOf:
        - $ref: "#/components/schemas/DummySchema2"
        - $ref: "#/components/schemas/DummySchema3"
    DummySchema2:
      type: object
      properties:
        dummy_property2:
          description: Such dummy property.
          type: string
    DummySchema3:
      type: object
      properties:
        dummy_property3:
          description: Such dummy property.
          type: string
```

An error is thrown as the `dummy_property2` is unknown in `DummySchema3` schema.

### No error thrown

As an API designer, when I define the following schema:
```yaml
components:
  schemas:
    DummySchema:
      required: [dummy_property]
      type: object
      oneOf:
        - $ref: "#/components/schemas/DummySchema2"
        - $ref: "#/components/schemas/DummySchema3"
    DummySchema2:
      type: object
      properties:
        dummy_property:
          description: Such dummy property.
          type: string
    DummySchema3:
      type: object
      properties:
        dummy_property:
          description: Such dummy property.
          type: string
```
No error is thrown as the `dummy_property` is in both schema.

## Combined case 

### No error thrown

As an API designer, when I define the following schema:
```yaml
components:
  schemas:
    DummySchema:
      required: [dummy_property2]
      type: object
      properties: 
        dummy_property2:
          description: So dummy
          type: string
      oneOf:
        - $ref: "#/components/schemas/DummySchema2"
        - $ref: "#/components/schemas/DummySchema3"
    DummySchema2:
      type: object
      properties:
        dummy_property:
          description: Such dummy property.
          type: string
    DummySchema3:
      type: object
      properties:
        dummy_property:
          description: Such dummy property.
          type: string
```

Then no issue is thrown as the `dummy_property2` is defined in the `properties` of the `DummySchema`.

N.B. Even though this is valid, I wonder if we shouldn't have a rule that prevent the usage at the same time of the keywords `properties`, `oneOf`, `anyOf`, `allOf` (in my perspective it would make the whole parsing a bit simpler).
