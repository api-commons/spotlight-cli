---
number: 2269
title: "Strange issue with regex: match() or regex operators"
state: "closed"
labels: ["t/bug"]
author: "philsturgeon"
created: "2022-09-07T09:54:54Z"
updated: "2022-10-24T14:14:04Z"
comments: 5
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2269"
---

# Strange issue with regex: match() or regex operators

**Describe the bug**

When constructing a custom ruleset I've got a rule involving `@.match` and its telling me that match is not a function. It looks like nimma is being used so im trying to use other regex operators, but neither `~=` (from the README) or `=~` from (the draft RFC linked in the README) work, all giving different errors.

**To Reproduce**

1. Clone https://github.com/philsturgeon/spectral-owasp-ruleset
2. CD into the dir and run `npm run build`
3. Run this CLI command `spectral lint https://petstore.swagger.io/v2/swagger.json --ruleset=dist/ruleset.js --verbose`
4. See error for `.match`

**Expected behavior**

I'd expect this function to work, as its copied from another ruleset I made.

```ts
 "owasp:api1:2019-no-numeric-ids": {
      description:
        "OWASP API1:2019 - Use random IDs that cannot be guessed (UUIDs)",
      severity: DiagnosticSeverity.Error,
      given:
        '$.paths..parameters[*].[?(@property === "name" && (@ === "id" || @.match(/(_id|Id)$/)))]^.schema',
      then: {
        function: schema,
        functionOptions: {
          schema: {
            type: "object",
            not: {
              properties: {
                type: {
                  const: "integer",
                },
              },
            },
            properties: {
              format: {
                const: "uuid",
              },
            },
          },
        },
      },
    },
```

**Environment (remove any that are not applicable):**
 - Library version: [e.g. 3.0.0]
 - OS: [e.g. Windows 7]
 - Browser: [e.g. Chrome 61]

**Additional context**

The nimma README says `Support for containments (in) and regex (~=) operators, as taken from draft-ietf-jsonpath-base-01` but that draft RFC says it should look like this: `$.a[?@.b =~ "i.*"]`. Sadly neither work.

I've tried the following JSONPath selectors:

- `'$.paths..parameters[*].[?(@property === "name" && (@ === "id" || @.match(/(_id|Id)$/)))]^.schema'`
- `'$.paths..parameters[*].[?( @property === "name" && ( @ === "id" || @ ~= "(_id|Id)$" ) )]^.schema'`
- `'$.paths..parameters[*].[?( @property === "name" && ( @ === "id" || @ =~ "(_id|Id)$" ) )]^.schema'`

Any tips on whats gone wrong here?
