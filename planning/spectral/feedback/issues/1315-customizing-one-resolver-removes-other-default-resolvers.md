---
number: 1315
title: "Customizing One Resolver Removes Other Default Resolvers"
state: "closed"
labels: ["t/bug", "json-refs"]
author: "dillonredding"
created: "2020-08-26T16:41:47Z"
updated: "2023-03-23T16:01:59Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1315"
---

# Customizing One Resolver Removes Other Default Resolvers

**Describe the bug**
In an attempt to work around #1314, I found that when overriding only the `file` `$ref` resolver, the default `http` and `https` `$ref` resolvers are not used and are replaced with the provided `file` `$ref` resolver.

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
        '400':
          $ref: https://gist.githubusercontent.com/dillonredding/4b3792af17a7335bca325b64cbf74e74/raw/4e450ed7b12c87f99245ee0bf20db08497130508/openapi-components.yaml#/BadRequest
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
import path from 'path';
import { Resolver } from '@stoplight/json-ref-resolver';
import { isOpenApiv3, Spectral } from '@stoplight/spectral';
import { DiagnosticSeverity } from '@stoplight/types';

const openApi = fs.readFileSync('C:/api/openapi.yaml', 'utf-8');

const resolver = new Resolver({
    resolvers: {
        file: {
            resolve: ref =>
                fs.promises.readFile(path.join('C:/api', ref.path()), 'utf-8')
        }
    }
});

const spectral = new Spectral({ resolver });
spectral.registerFormat('oas3', isOpenApiv3);
spectral.run(YAML.safeLoad(openApi) as string)
    .then(results => {
        results.filter(result => result.severity === DiagnosticSeverity.Error)
            .forEach(result => console.log(result.message))
    });
```

```sh
$ ts-node C:\dev\script.ts
ENOENT: no such file or directory, open 'C:\api\dillonredding\4b3792af17a7335bca325b64cbf74e74\raw\4e450ed7b12c87f99245ee0bf20db08497130508\openapi-components.yaml'
```

**Expected behavior**
According to the [documentation](https://meta.stoplight.io/docs/spectral/docs/guides/3-javascript.md#using-a-custom-resolver):

> If you'd like [to ...] _adjust the resolution_, you are absolutely fine to do it. In order to achieve that, you need to create a custom json-ref-resolver instance. [Emphasis mine]

I interpret this as being able to customize specific resolvers. Customizing the `file` `$ref` resolver shouldn't require reimplementing the others.

**Environment:**
- TypeScript: v3.9.6
- Spectral: v5.5.0
- Node: v12.15.0
- Windows: 10 Enterprise
