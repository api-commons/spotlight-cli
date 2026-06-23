---
number: 1209
title: "Unexpected result while linting an empty document"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2020-06-04T17:37:36Z"
updated: "2020-06-08T14:31:44Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1209"
---

# Unexpected result while linting an empty document

**Describe the bug**
Discovered while working on `vscode-spectral`.

**To Reproduce**

```
    test('x', async () => {
      const s = new Spectral({ resolver: httpAndFileResolver });

      for (const [format, lookup] of KNOWN_FORMATS) {
        // Each document type that Spectral can lint gets registered with detectors.
        s.registerFormat(format, document => lookup(document));
      }

      s.setRuleset(await readRuleset('spectral:oas'));

      const file = '/tmp/file.yaml';
      const doc = new Document('', Parsers.Yaml, file);

      const results = await s.run(doc, { ignoreUnknownFormat: true, resolve: { documentUri: file } })

      expect(results).toEqual([]);
    });
  });
```

Fail with
```
    - Array []
    + Array [
    +   Object {
    +     "code": "invalid-ref",
    +     "message": "'undefined' does not exist @ '/tmp/file.yaml'",
    +     "path": Array [
    +       "$ref",
    +     ],
    +     "range": Object {
    +       "end": Object {
    +         "character": 0,
    +         "line": 0,
    +       },
    +       "start": Object {
    +         "character": 0,
    +         "line": 0,
    +       },
    +     },
    +     "severity": 0,
    +     "source": "/tmp/file.yaml",
    +   },
    + ]
```

**Expected behavior**
Don't fail? :wink:
