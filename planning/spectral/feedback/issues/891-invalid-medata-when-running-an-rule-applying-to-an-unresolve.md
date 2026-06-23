---
number: 891
title: "Invalid medata when running an rule applying to an unresolved document referenced over http"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2020-01-06T22:31:07Z"
updated: "2020-01-13T20:49:41Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/891"
---

# Invalid medata when running an rule applying to an unresolved document referenced over http

**Describe the bug**
It looks like rules applying over unresolved documents (referenced over http) confuses the linter.
Rather than returning references to the local document being scanned, the results contain data pertaining to the remote document.

**To Reproduce**

The following test
```
 it('properly decorates results with metadata pertaining to the document being linted', async () => {
    const s = new Spectral({ resolver: httpAndFileResolver });
    s.registerFormat('oas3', () => true);
    s.setFunctions({ pattern });
    s.setRules({
      'unsecure-remote-reference': {
        message: '$ref must not point at unsecured remotes',
        given: '$..$ref',
        type: RuleType.VALIDATION,
        recommended: true,
        resolved: false,
        then: {
          function: 'pattern',
          functionOptions: {
            notMatch: '^http:',
          },
        },
      },
      'oas3-unused-components-schema': Object.assign(rules['oas3-unused-components-schema'], {
        recommended: true,
        type: RuleType[rules['oas3-unused-components-schema'].type],
      }),
    });

    nock('http://oas3.library.com')
      .get('/defs.json')
      .reply(
        200,
        JSON.stringify({
          openapi: '3.0.0',
          components: {
            schemas: {
              ExternalHttp: {
                type: 'number',
              },
              ExternalUnhooked: {
                type: 'object',
              },
            },
          },
        }),
      );

    const doc = {
      openapi: '3.0.0',
      paths: {
        '/path': {
          post: {
            parameters: [
              {
                $ref: '#/components/schemas/Hooked',
              },
              {
                $ref: 'http://oas3.library.com/defs.json#/components/schemas/ExternalHttp',
              },
            ],
          },
        },
      },
      components: {
        schemas: {
          Hooked: {
            type: 'object',
          },
          Unhooked: {
            type: 'object',
          },
        },
      },
    };

    const targetUri = 'test.json';

    const parsedResult: IParsedResult = {
      source: targetUri,
      parsed: parseWithPointers(JSON.stringify(doc)),
      getLocationForJsonPath,
    };

    const results = await s.run(parsedResult, {
      resolve: {
        documentUri: 'test.json',
      },
    });

    expect(results).toHaveLength(2);

    expect(results).toEqual([
      expect.objectContaining({
        code: 'unsecure-remote-reference',
        path: ['paths', '/path', 'post', 'parameters', '1', '$ref'],
        source: targetUri,
      }),
      expect.objectContaining({
        code: 'oas3-unused-components-schema',
        path: ['components', 'schemas', 'Unhooked'],
        source: targetUri,
      }),
    ]);
  });
```

fails with the following output

```diff
    expect(received).toEqual(expected) // deep equality

    - Expected
    + Received

      Array [
    -   ObjectContaining {
    +   Object {
          "code": "unsecure-remote-reference",
    +     "message": "$ref must not point at unsecured remotes",
          "path": Array [
    -       "paths",
    -       "/path",
    -       "post",
    -       "parameters",
    -       "1",
    -       "$ref",
    +       "components",
    +       "schemas",
    +       "ExternalHttp",
          ],
    -     "source": "test.json",
    +     "range": Object {
    +       "end": Object {
    +         "character": 76,
    +         "line": 0,
    +       },
    +       "start": Object {
    +         "character": 59,
    +         "line": 0,
    +       },
          },
    -   ObjectContaining {
    +     "severity": 1,
    +     "source": "http://oas3.library.com/defs.json",
    +   },
    +   Object {
          "code": "oas3-unused-components-schema",
    +     "message": "Potentially unused components schema has been detected.",
          "path": Array [
            "components",
            "schemas",
            "Unhooked",
          ],
    +     "range": Object {
    +       "end": Object {
    +         "character": 260,
    +         "line": 0,
    +       },
    +       "start": Object {
    +         "character": 243,
    +         "line": 0,
    +       },
    +     },
    +     "severity": 1,
          "source": "test.json",
        },
      ]

      107 | 
      108 |     expect(results).toHaveLength(2);
    > 109 |     expect(results).toEqual([
          |                     ^
      110 |       expect.objectContaining({
      111 |         code: 'unsecure-remote-reference',
      112 |         path: ['paths', '/path', 'post', 'parameters', '1', '$ref'],
```
**Expected behavior**
i would have expected the results related to `unsecure-remote-reference` to expose data describing the source document.

|        | Expected                                              | Actual                                    |
|--------|-------------------------------------------------------|-------------------------------------------|
| Source | test.json                                             | http://oas3.library.com/defs.json         |
| Path   | ['paths', '/path', 'post', 'parameters', '1', '$ref'] | ['components', 'schemas', 'ExternalHttp'] |

Please note that it's completely possible that I wrongly configured Spectral or that I'm misunderstanding the output.

Thoughts?
