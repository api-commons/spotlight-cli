---
number: 2038
title: "Default \"compute fingerprint\" function removes unique validations"
state: "closed"
labels: ["released"]
author: "dpopp07"
created: "2022-01-25T23:12:31Z"
updated: "2022-02-14T12:10:51Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2038"
---

# Default "compute fingerprint" function removes unique validations

**Describe the bug**

The [`defaultComputeResultFingerprint`](https://github.com/stoplightio/spectral/blob/develop/packages/core/src/utils/prepareResults.ts#L11) function can produce duplicate hashes for different validation instances, causing one or more instances of unique rules to go unreported. This happens when validations come from the same function (code) and deal with the same artifact in the API definition (path). The other fields used (range, source) aren't specific enough to always identify unique instances.

**To Reproduce**

The [`operation-parameters`](https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/oas/functions/oasOpParams.ts) rule in the OAS ruleset is affected by this issue. Given the following API definition:

<details> 
<summary> Sample OpenAPI Document </summary>

```yaml
swagger: "2.0"
info:
  description: "Sample API definition"
  version: "1.0.0"
  title: "Example Document"
  contact:
    email: "support@example.com"
host: "https://example.com/api"
basePath: "/v1"
tags:
- name: "things"
  description: "operations pertaining to things"
paths:
  /thing:
    post:
      tags:
      - "things"
      summary: "Create a new thing"
      description: "Create a new thing"
      operationId: "create_thing"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - in: "body"
        name: "body"
        description: "Thing string"
        schema:
          type: string
      - in: "body"
        name: "body"
        description: "Duplicate thing string"
        schema:
          type: string
      responses:
        400:
          description: "Bad request"
```

</details>

Run `spectral lint test.yaml` and the output will include the following validation:
```
31:9  warning  operation-parameters        A parameter in this operation already exposes the same combination of "name" and "in" values.  paths./thing.post.parameters[1]
```

However, this will be the only validation from the `operation-parameters` rule. In my own tool, which utilizes Spectral, I provided a custom de-duplication strategy and two, separate validations are printed:
```
  Message :   A parameter in this operation already exposes the same combination of "name" and "in" values.
  Rule    :   operation-parameters
  Path    :   paths./thing.post.parameters.1
  Line    :   31

  Message :   Operation must not have more than a single instance of the "in:body" parameter.
  Rule    :   operation-parameters
  Path    :   paths./thing.post.parameters.1
  Line    :   31
```

(As an aside, [the documented method](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg3-spectral-in-java-script#using-a-custom-de-duplication-strategy) for providing a custom de-duplication function appears to be incorrect. Passing a config object with a `computeFingerprint` property doesn't seem to be supported, looking at the source code. I had to directly set `_computeFingerprint` in my own code.)

**Expected behavior**

I expect all unique rules to be printed, even if they are similar and operate on the same OpenAPI artifact. As such, I would expect the `message` field of the rule to be taken into account when de-duplicating. This has come up multiple times in my own custom rules/functions.

I realize this behavior may be intentional, since the validations operating on the same OpenAPI artifact could be thought of as redundant. That said, I feel that the user should see everything that is wrong with an artifact at once to avoid fixing something, only to see a new rule come up that could have been shown the first time. If you want to maintain existing behavior, just let me know and I'll continue using my custom function. I wanted to bring it up because it seems like a bug to me and it affects the current Spectral ruleset.

If you're open to this behavior changing, I'm happy to open a PR that addresses the issue.

**Environment (remove any that are not applicable):**
 - Library version: 1.9.0
 - OS: MacOS Big Sur
