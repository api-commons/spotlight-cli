---
number: 335
title: "Path mangling when resolving references"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2019-07-07T11:57:00Z"
updated: "2019-08-22T17:26:56Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/335"
---

# Path mangling when resolving references

**Describe the bug**
Following #171 and the wonderful work in #245 (Thanks @marbemac !), here's another reference resolving relating issue.

**To Reproduce**

From a Windows platform, create the following tree structure
```
C:\test\repo
        |_ package.json # referencing "@stoplight/spectral": "4.0.0-beta.6"
        |_ repro
             |_ another_library.yaml
             |_ nested
                  |_ a_library.yaml
                  |_ three.yaml
```

With the following content

**repro/another_library.yaml**
```
swagger: '2.0'

info:
  title: Repro three
  description: External definitions
  version: "1.0.0"
  contact:
    name: toto
host: not-example.com
schemes:
  - https

paths: { }

definitions:
  other_email:
    type: string
    format: email
```

**repro/nested/a_library.yaml**
```
swagger: '2.0'

info:
  title: Repro three
  description: External definitions
  version: "1.0.0"
  contact:
    name: toto
host: not-example.com
schemes:
  - https

paths: { }

definitions:
  email:
    type: string
    format: email
```
**repro/nested/three.yaml**
```
swagger: '2.0'

info:
  title: Repro three
  description: Endpoint definition
  version: "1.0.0"
  contact:
    name: toto
host: not-example.com
schemes:
  - https
basePath: /repro/nested/three

paths:
  /test:
    post:
      summary: Gets nothing
      operationId: "17"
      tags: [ one ]
      description: Cf. summary
      parameters:
        - name: body
          description: Content
          in: body
          schema:
            $ref: '#/definitions/TheDefinition'
          required: true
        - name: test
          in: query
          schema:
            $ref: '#/definitions/AnotherDefinition'
          required: true
      responses:
        204:
          description: No content

definitions:
  TheDefinition:
    type: object
    properties:
      email_one:
        description: One email address.
        example: "one@above.com"
        allOf:
        -  $ref: '../another_library.yaml#/definitions/other_email'
      email_two:
        description: Another mail address.
        example: "one@local.com"
        allOf:
        -  $ref: '../another_library.yaml#/definitions/other_email'

  AnotherDefinition:
    type: string
    example: "one@two.com"
    allOf:
    - $ref: './a_library.yaml#/definitions/email'
```

Then run the following commands

```
nulltoken@somewhere MINGW64 /c/test/repo (em/spectral)
$ yarn spectral lint -q  ./repro/another_library.yaml
yarn run v1.15.2
$ C:\test\repo\node_modules\.bin\spectral lint -q ./repro/another_library.yaml
Done in 1.45s.

nulltoken@somewhere MINGW64 /c/test/repo (em/spectral)
$ yarn spectral lint -q  ./repro/nested/a_library.yaml
yarn run v1.15.2
$ C:\test\repo\node_modules\.bin\spectral lint -q ./repro/nested/a_library.yaml
Done in 1.41s.

nulltoken@somewhere MINGW64 /c/test/repo (em/spectral)
$ yarn spectral lint -q  ./repro/nested/three.yaml
yarn run v1.15.2
$ C:\test\repo\node_modules\.bin\spectral lint -q ./repro/nested/three.yaml
Encountered error when running rule 'oas2-schema' on node at path '$':
Error: Couldn't find property ~1test of /paths/~1test/post/parameters/1

repro/nested/three.yaml
 25:18  warning  valid-example  "email_one" property can't resolve reference ../another_library.yaml#/definitions/other_email from id #
 25:18  warning  valid-example  "email_two" property can't resolve reference ../another_library.yaml#/definitions/other_email from id #
 30:18  warning  valid-example  "schema" property can't resolve reference ./a_library.yaml#/definitions/email from id #
 41:17  warning  valid-example  "email_one" property can't resolve reference ../another_library.yaml#/definitions/other_email from id #
 45:18    error  invalid-ref    ENOENT: no such file or directory, open 'C:\repro\another_library.yaml'
 46:17  warning  valid-example  "email_two" property can't resolve reference ../another_library.yaml#/definitions/other_email from id #
 52:21  warning  valid-example  "AnotherDefinition" property can't resolve reference ./a_library.yaml#/definitions/email from id #
 56:13    error  invalid-ref    ENOENT: no such file or directory, open 'C:\repro\nested\a_library.yaml'

✖ 8 problems (2 errors, 6 warnings, 0 infos)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

nulltoken@somewhere MINGW64 /c/test/repo (em/spectral)
$
```

**Expected behavior**

1. This log message seems a bit weird:
    ```
    Error: Couldn't find property ~1test of /paths/~1test/post/parameters/1
    ```

1. The error messages seems to put under the light some kind of path mangling
    ```
    ENOENT: no such file or directory, open 'C:\repro\another_library.yaml'
    ```
    
    Which, given the directory structure, should rather be `'C:\test\repo\repro\another_library.yaml'`


**Environment (remove any that are not applicable):**
 - Library version: @stoplight/spectral 4.0.0-beta.6
 - OS: Windows 7
