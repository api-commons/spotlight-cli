---
number: 1571
title: "duplicated-entry-in-enum complains about enum property in objects"
state: "closed"
labels: ["t/bug"]
author: "m-mohr"
created: "2021-04-07T15:28:36Z"
updated: "2025-06-11T19:06:08Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1571"
---

# duplicated-entry-in-enum complains about enum property in objects

**Describe the bug**

PR https://github.com/stoplightio/spectral/pull/1485 introduced a new rule `duplicated-entry-in-enum` which again has a too broad expression `$..enum` making our tests to fail. If you have your own definition of an object property called enum (in our case for defining a limited set of JSON Schema), the rule fails miserably because it expects an array, but it's just a normal property object.

Example for a schema that fails:

```
openapi: 3.0.2
components:
  schemas:
    schema:
      type: object
      properties:
        enum:
          type: array
          items:
            type: string
```

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document https://github.com/Open-EO/openeo-api/blob/8e898907c5e97328f529550328acfff5bc2dba0c/openapi.yaml
2. Run this CLI command `spectral lint openapi.yaml` (with spectral:oas ruleset)
3. See errors:

```

c:/Dev/openeo-api/openapi.yaml
 3404:30  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.udf_programming_language
 3472:16  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.udf_docker
 3726:32  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.file_format.properties.parameters.additionalProperties
 4344:21  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.dimension_other
 4361:21  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.dimension_bands
 4427:34  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.dimension_spatial_horizontal
 4433:32  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.dimension_spatial_vertical
 4444:24  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.dimension_temporal
 4747:20  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.process.properties.parameters
 4749:17  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.process.properties.returns
 4814:11  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.user_defined_process_meta.allOf[0]
 4884:16  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.process_return_value.properties.schema
 4978:13  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.process_parameters.items
 5018:16  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.parameter.properties.schema
 5028:16  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.process_parameter.properties.schema
 5300:11  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.resource_parameter.allOf[0]
 5356:11  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.data_type_schema.oneOf[0]
 5362:17  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.data_type_schema.oneOf[1].items
 5368:11  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.parameter_schema.oneOf[0]
 5374:17  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.parameter_schema.oneOf[1].items
 5388:17  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.parameter_json_schema.properties.parameters.items
 5399:20  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.parameter_json_schema.properties.returns.properties.schema
 5402:15  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.parameter_json_schema.properties.returns.allOf[0]
 5404:11  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.parameter_json_schema.allOf[0]
 5444:14  warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array  components.schemas.json_schema.properties.enum
 5512:18  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.GeoJsonPoint
 5551:23  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.GeoJsonLineString
 5563:20  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.GeoJsonPolygon
 5577:23  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.GeoJsonMultiPoint
 5589:28  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.GeoJsonMultiLineString
 5603:25  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.GeoJsonMultiPolygon
 5619:31  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                components.schemas.GeoJsonGeometryCollection

✖ 32 problems (0 errors, 32 warnings, 0 infos, 0 hints)
```

**Expected behavior**
I don't expect any of these errors: `warning  duplicated-entry-in-enum       A duplicated entry in the enum was found. Error: `enum` property type should be array`

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 5.9.0
 - OS: Windows 10
 - Browser: n/a

**Additional context**

Takeaway: Never use a `$..xyz` style expressions.
