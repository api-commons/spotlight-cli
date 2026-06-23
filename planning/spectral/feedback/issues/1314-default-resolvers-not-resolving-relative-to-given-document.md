---
number: 1314
title: "Default Resolvers Not Resolving Relative to Given Document"
state: "closed"
labels: ["t/bug", "json-refs"]
author: "dillonredding"
created: "2020-08-26T16:25:44Z"
updated: "2023-03-23T16:02:11Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1314"
---

# Default Resolvers Not Resolving Relative to Given Document

**Describe the bug**
The default resolvers don't function as [documented](https://meta.stoplight.io/docs/spectral/docs/guides/3-javascript.md#using-a-custom-resolver).

> By default, http(s) and file protocols are resolved, _relatively to the document Spectral lints against_. [Emphasis mine]

However, when linting with a `new Spectral()` object, the file `$ref`s are resolved relative to where the script runs, not the file being linted.

**To Reproduce**

`C:/api/openapi.yaml`:

```yaml
openapi: 3.0.3
info:
  title: Test API
  version: 1.0.0
paths:
  /test:
    get:
      responses:
        '200':
          $ref: components.yaml#/Ok
```

`C:/api/components.yaml`:

```yaml
Ok:
  description: Success
```

`C:/dev/script.ts`:

```ts
import fs from 'fs';
import YAML from 'js-yaml';
import { isOpenApiv3, Spectral } from '@stoplight/spectral';
import { DiagnosticSeverity } from '@stoplight/types';

const openApi = fs.readFileSync('C:/api/openapi.yaml', 'utf-8');

const spectral = new Spectral();
spectral.registerFormat('oas3', isOpenApiv3);
spectral.run(YAML.safeLoad(openApi) as string)
    .then(results => {
        results.filter(result => result.severity === DiagnosticSeverity.Error)
            .forEach(result => console.log(result.message))
    });
```

```sh
$ ts-node C:\dev\script.ts
ENOENT: no such file or directory, open 'C:\dev\components.yaml'
```

**Expected behavior**
Given the OpenAPI document and script above, there should be no errors and therefore no output. `Spectral`'s default resolvers should be looking for `C:/api/components.yaml`, not `C:/dev/components.yaml`.

**Environment:**
- TypeScript: v3.9.6
- Spectral: v5.5.0
- Node: v12.15.0
- Windows: 10 Enterprise
