---
number: 2669
title: "Schema Validation Error for Example in OpenAPI 3.0.0 Document"
state: "open"
labels: []
author: "sandeep2rawat"
created: "2024-08-16T14:13:36Z"
updated: "2024-08-16T14:14:37Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2669"
---

# Schema Validation Error for Example in OpenAPI 3.0.0 Document

**Description**:
I'm encountering an issue with Spectral when validating an OpenAPI 3.0.0 document. The error is raised in the `example` section of a schema definition. The issue seems to be related to the presence of the `type: HEADER` property within the example, which causes Spectral to throw a validation error. However, when the `type` property is removed from the example, the validation passes without any errors.

**OpenAPI Document**:
Here's a minimal reproducible example of the OpenAPI document that triggers the issue:

```yaml
openapi: 3.0.0
info:
  title: ''
  version: '1.0'
paths: {}
components:
  schemas:
    Template:
      type: object
      title: ''
      description: Message Template
      properties:
        components:
          type: array
          items:
            type: object
            properties:
              type:
                type: string
                enum:
                  - HEADER
                  - BODY
                  - BUTTONS
                  - FOOTER
                example: BODY
              text:
                type: string
                example: >-
                  hello {{var_1}}, we have an upcoming mega sale event at {{var_2}},
                  please check attached location
              example:
                type: object
                properties:
                  month:
                    type: string
      example:
        components:
          - text: '{{month}} Sale Offer'
            type: HEADER
            example:
              month: June
```

**Error Message**:
When running Spectral, I receive the following error:
```
schema is invalid: data/type must be equal to one of the allowed values, data/type must be array, data/type must match a schema in anyOf
```

**Steps to Reproduce**:
1. Create an OpenAPI 3.0.0 document with the schema definition provided above.
2. Run the Spectral linter on the document (Or paste it in stoplight app).
3. Observe the validation error reported by Spectral.

**Additional Context**:
- The error appears to be associated with the `type: HEADER` field within the example.
- If the `type: HEADER` is removed from the example, the validation passes without any errors.

**Expected Behavior**:
The example should be considered valid by Spectral, or the error message should clearly explain why the example is invalid according to the OpenAPI specification.

**Environment**:
- Spectral version: Using stoplight app
- OpenAPI version: 3.0.0

Attaching the screenshot for reference.

With error
<img width="649" alt="image" src="https://github.com/user-attachments/assets/2c341d59-b806-4b1d-85e6-411a489e6487">
Without error (commented type)
<img width="659" alt="image" src="https://github.com/user-attachments/assets/6aaa4725-8d74-47a4-8787-b595cf396f63">
