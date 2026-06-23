---
number: 2435
title: "unused-components-schema for discriminator mappings"
category: "Rulesets"
author: "m-mohr"
created: "2020-07-01T11:47:40Z"
upvotes: 1
comments: 6
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2435"
---

# unused-components-schema for discriminator mappings

**Describe the bug**

I'm getting the following warning from Spectral:

> warning  oas3-unused-components-schema  Potentially unused components schema has been detected.

This only happens for Schemas that are only referenced in the discriminator mappings, for example:
```
      discriminator:
        propertyName: type
        mapping:
          spatial: '#/components/schemas/dimension_spatial'
          temporal: '#/components/schemas/dimension_temporal'
          bands: '#/components/schemas/dimension_bands'
          other: '#/components/schemas/dimension_other'
```

**To Reproduce**

Here's the OpenAPI file I'm working on: https://github.com/Open-EO/openeo-api/blob/76ec4a59/openapi.yaml
I'm running: spectral lint openapi.yaml
Ruleset is spectral:oas

**Expected behavior**
No warning.

**Environment (remove any that are not applicable):**
 - Library version: 5.4.0
 - OS: Windows 10
