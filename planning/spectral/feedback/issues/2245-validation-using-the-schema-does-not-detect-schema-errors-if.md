---
number: 2245
title: "Validation using the `schema` does not detect schema errors if the target is a `$ref` reference"
state: "closed"
labels: ["t/bug", "released"]
author: "c-pius"
created: "2022-08-17T07:42:59Z"
updated: "2022-08-22T11:57:39Z"
comments: 2
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2245"
---

# Validation using the `schema` does not detect schema errors if the target is a `$ref` reference

**Describe the bug**
Validation using the [`schema` function](https://meta.stoplight.io/docs/spectral/ZG9jOjExNg-core-functions#schema) does not detect schema errors if the target is a `$ref` reference.

**To Reproduce**

1. Given the following AsyncAPI document:

> note that the `message` of the `light/measured` operation is reference from `components/schemas`

```yaml
asyncapi: "2.4.0"
info:
  title: Streetlights API
  version: "1.0.0"
  description: |
    The Smartylighting Streetlights API allows you
    to remotely manage the city lights.
channels:
  light/measured:
    publish:
      summary: Inform about environmental lighting conditions for a particular streetlight.
      operationId: onLightMeasured
      message:
        $ref: "#/components/schemas/LightMeasured"
components:
  messages: {}
  schemas:
    LightMeasured:
      name: LightMeasured
      payload:
        type: object
        properties:
          id:
            type: integer
            minimum: 0
            description: Id of the streetlight.
```

2. Run the following rule

> note that it enforces a) that the `channel/operation` message is referenced and not defined directly in the channel, b) that the location of the reference's re-use object is `#/components/messages`

```js
"message-defined-in-components-messages": {
      message: "Message defined in '$.components.messages'.",
      resolved: false,
      severity: DiagnosticSeverity.Error,
      given: "$.channels.*.subscribe.message",
      then: {
        function: schema,
        functionOptions: {
          schema: {
            type: "object",
            required: ["$ref"],
            properties: {
              $ref: {
                type: "string",
                pattern: "^#\\/components\\/messages\\/",
              },
            },
            additionalProperties: false,
          },
        },
      },
    }
```

3. See that no validation error is returned, as opposed to returning an error since the content of `$ref: "#/components/schemas/LightMeasured"` does not match the pattern `^#\\/components\\/messages\\/`.


Alternatively, add the following test to [schema.test.ts](https://github.com/stoplightio/spectral/blob/develop/packages/functions/src/__tests__/schema.test.ts) and note that it fails (`result = []`).

```js
  it('validates $ref path', async() => {
    const schema = {
      type: "object",
      required: ["$ref"],
      properties: {
        $ref: {
          type: "string",
          pattern: "^#\\/components\\/messages\\/",
        },
      },
      additionalProperties: false,
    };

    const result = await runSchema({"$ref": "#/components/schemas/LightMeasured"}, {schema})
    expect(result).toHaveLength(1);
  });
```

**Expected behavior**

Validation should return the error that the content of the `$ref` does not match the expected pattern.

**Screenshots**
The [validation using `ajv`](https://github.com/stoplightio/spectral/blob/develop/packages/functions/src/schema/index.ts#L51) does detect the schema error as expected:
<img width="1181" alt="image" src="https://user-images.githubusercontent.com/22994291/185059204-5479fdb0-95ea-4e08-a143-1d14fc0511e9.png">

The problem seems to be within `betterAjvErrors`. Concretely, in the `makeTree` function the `path` is null as the `JSON_POINTERS_REGEX ` does not like the JSONPointer including the `$` char. It may be a simple fix by adding `$` to the [`JSON_POINTERS_REGEX `](https://github.com/stoplightio/better-ajv-errors/blob/master/src/helpers.js#L19), but I cannot judge what side effects this would have.
<img width="803" alt="image" src="https://user-images.githubusercontent.com/22994291/185061128-74d21db5-4743-4517-903a-3b9fe53b0d74.png">


**Environment (remove any that are not applicable):**
 - Library version:
   - "@stoplight/spectral-cli": "6.5.0",
   - "@stoplight/spectral-core": "1.13.0",
   - "@stoplight/spectral-functions": "1.7.0",
   - "@stoplight/spectral-parsers": "1.0.1",
   - "@stoplight/spectral-rulesets": "1.11.1",
   - "@stoplight/types": "13.6.0",
 - OS: OSX 12.5
