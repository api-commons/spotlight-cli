---
number: 2947
title: "Siblings of $ref are incorrectly dropped in resolved OAS 3.1 specs"
state: "open"
labels: []
author: "triblondon"
created: "2026-05-05T10:38:08Z"
updated: "2026-05-24T00:34:01Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2947"
---

# Siblings of $ref are incorrectly dropped in resolved OAS 3.1 specs

**Describe the bug**

When validating an OAS 3.1 spec using a custom function, my custom function receives the resolved schema without siblings of the $ref.  The following should be semantically equivalent in OAS 3.1 but they are not:

This works correctly, offering me an object with all the properties of the referenced BaseOrganization, merged with the local `description` and `unevaluatedProperties` properties:

```yaml
components:
  schemas:
    BaseOrganization:
      type: object
      properties:
        name:
          type: string
    OrganizationForCreateOrUpdate:
      allOf:
        - $ref: "#/BaseOrganization"
      description: An organization entity object for create or update operations.
      unevaluatedProperties: false
```

But, in contrast, the following doesn't work, and my custom function receives just BaseOrganization.  The local properties are ignored:

```yaml
components:
  schemas:
    BaseOrganization: # as above
    OrganizationForCreateOrUpdate:
      $ref: "#/BaseOrganization"
      description: An organization entity object for create or update operations.
      unevaluatedProperties: false
```

In OAS 3.1, $refs are supposed to be able to have sibling properties, which are merged with the $ref'ed object.

**To Reproduce**

Write the second of the test schemas above into an OAS spec, and test it with the following rule

```yaml
given: $.components.schemas.OrganizationForCreateOrUpdate
then:
  function: truthy
  field: description
```

**Expected behavior**

The `description` property is expected to be defined and truthy but it's absent.

**Environment (remove any that are not applicable):**
 - Library version: @stoplight/spectral-core@1.21.0
