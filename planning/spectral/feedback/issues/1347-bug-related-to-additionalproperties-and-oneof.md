---
number: 1347
title: "Bug related to additionalProperties and oneOf"
state: "open"
labels: ["t/bug", "triaged"]
author: "fabioperrella"
created: "2020-09-18T18:42:37Z"
updated: "2024-09-03T07:26:02Z"
comments: 3
reactions_total: 7
thumbs_up: 7
url: "https://github.com/stoplightio/spectral/issues/1347"
---

# Bug related to additionalProperties and oneOf

**Describe the bug**
A clear and concise description of what the bug is.

Spectral is showing the error `oas3-valid-oas-content-example` in a scenario that I didn't expect

**To Reproduce**

1. Given this yaml:
```yaml
openapi: 3.0.0
tags:
  - name: Preview
info:
  version: 1.0.0
  title: lala
  contact:
    name: Team X
    url: 'http://lala.com'
  description: Lala
servers:
  - url: https://lala.com
    description: lala
components:
  schemas:
    Default:
      type: object
      properties:
        url:
          type: string
          nullable: true
    Audio:
      allOf:
        - $ref: '#/components/schemas/Default'
        - type: object
          properties:
            audio_url:
              type: string
              nullable: false

paths:
  '/lala/{id}':
    parameters:
      - schema:
          type: string
        name: id
        in: path
        required: true
        description: lala
    get:
      description: Returns lala
      tags:
        - Preview
      parameters:
        - in: query
          name: id
          description: 'lala'
          schema:
            type: string
          example: 2c0ed7250ea9c8b65c18dfbf4efdff73b9aedf38
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  previews:
                    type: object
                    additionalProperties:
                      oneOf:
                        - $ref: '#/components/schemas/Default'
                        - $ref: '#/components/schemas/Audio'    
              example:
                previews:
                  abc123aa:
                    url: https://example.com/preview1.jpeg
                  sdja6tsj:
                    url: null
                    audio_url: https://example.com/audio.jpeg
      operationId: lala
      summary: lala
```

2. Run this CLI command

```bash
docker run --rm -v $PWD:/tmp -it stoplight/spectral lint -v -F hint "/tmp/openapi.yaml"
```
3. See error

```
67:28  error  oas3-valid-oas-content-example  `abc123aa` property should match exactly one schema in oneOf
```

**Expected behavior**

I'm pretty sure I specified the example correctly and it shouldn't return an error

**Environment (remove any that are not applicable):**
 - Library version: stoplight/spectral:latest (0bca0b3aa66a)
 - OS: MacOS
