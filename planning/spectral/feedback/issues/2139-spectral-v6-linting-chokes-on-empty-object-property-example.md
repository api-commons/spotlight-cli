---
number: 2139
title: "spectral v6 linting chokes on empty object property example"
state: "closed"
labels: []
author: "hjoukl"
created: "2022-04-27T16:00:10Z"
updated: "2022-05-02T06:43:00Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2139"
---

# spectral v6 linting chokes on empty object property example

**Describe the bug**
spectral-cli linting raises

```
Error running Spectral!
Error #1: Cannot read property 'properties' of null
          at properties)]   …js/core/index.js:66  _rollupPluginBabelH…
          at eval           …js/core/index.js:66  _rollupPluginBabelH…
          at _traverseBody  …time/traverse.js:13  cb(scope);          
          at _traverse      …time/traverse.js:41  _traverseBody(key, …
          at _traverseBody  …time/traverse.js:17  _traverse(value, sc…
```

when an object property carries an empty example attribute.

**To Reproduce**

1. Given stripped-down & modified petstore.yaml (see below) with `Pet.name` property having an empty example value

    ```
    # ...
    components:       
      schemas:        
        Pet:          
          type: object
          required:
            - id
            - name
          properties: 
            id:
              type: integer
              format: int64
            name:     
              type: string
              example:                                                             
            tag:      
              type: string
        Pets:  # ...  
    ```

3. Run this CLI command

    ```
    $ $(npm bin)/spectral lint --version
    6.3.0
     $ $(npm bin)/spectral lint --verbose /var/tmp/petstore.yaml 
    ```

4. See error

    ```
    Found 51 rules (40 enabled)
    Linting /home/lb54320/pydev/research/api/oas-yamls/petstore.yaml
    Error running Spectral!
    Error #1: Cannot read property 'properties' of null
              at properties)]   …js/core/index.js:66  _rollupPluginBabelH…
              at eval           …js/core/index.js:66  _rollupPluginBabelH…
              at _traverseBody  …time/traverse.js:13  cb(scope);          
              at _traverse      …time/traverse.js:41  _traverseBody(key, …
              at _traverseBody  …time/traverse.js:17  _traverse(value, sc…
    ```

Btw, the error message is very unhelpful as it provides absolutely no hints as to what might have caused the problem.

**Expected behavior**
Normal linting happens - this worked without any problem with e.g. spectral 5.9.1:

```
$ $(npm bin)/spectral lint --version
5.9.1
$  $(npm bin)/spectral lint --verbose petstore.yaml 
Found 57 rules (46 enabled)
Linting /var/tmp/petstore.yaml
OpenAPI 3.x detected

/var/tmp/petstore.yaml
  1:1   warning  openapi-tags               OpenAPI object should have non-empty `tags` array.
  2:6   warning  info-contact               Info object should contain `contact` object.                             info
  2:6   warning  info-description           OpenAPI object info `description` must be present and non-empty string.  info
  11:9  warning  operation-description      Operation `description` must be present and non-empty string.            paths./pets.get
 15:11  warning  operation-tag-defined      Operation tags should be defined in global tags.                         paths./pets.get.tags[0]
 55:19    error  oas3-valid-schema-example  `example` property type should be string                                 components.schemas.Pet.properties.name.example
 60:13    error  oas3-valid-schema-example  `example` property type should be string                                 components.schemas.Pets.items

✖ 7 problems (2 errors, 5 warnings, 0 infos, 0 hints)
```

Setting a proper example value makes it work with spectral 6.3.0:

```
$(npm bin)/spectral lint --verbose /var/tmp/fixed_petstore.yaml 
Found 51 rules (40 enabled)
Linting /var/tmp/fixed_petstore.yaml

/var/tmp/fixed_petstore.yaml
  2:6   warning  info-contact           Info object must have "contact" object.                        info
  2:6   warning  info-description       Info "description" must be present and non-empty string.       info
  11:9  warning  operation-description  Operation "description" must be present and non-empty string.  paths./pets.get
 15:11  warning  operation-tag-defined  Operation tags must be defined in global tags.                 paths./pets.get.tags[0]

✖ 4 problems (0 errors, 4 warnings, 0 infos, 0 hints)
```

(of course, lesser findings - 5.9.1 correctly treats the absent string property example as an error)

**Environment**
 - Library version: spectral 6.3.0
 - OS: Linux (RHEL7)
 - node: node-v14.15.0-linux-x64

**Additional context**

Modified petstore.yaml (gracefully adapted from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml):

```
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
servers:
  - url: http://petstore.swagger.io/v1
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time (max 100)
          required: false
          schema:
            type: integer
            format: int32
      responses:
        '200':
          description: A paged array of pets
          headers:
            x-next:
              description: A link to the next page of responses
              schema:
                type: string
          content:
            application/json:    
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    Pet:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
          example:
        tag:
          type: string
    Pets:
      type: array
      items:
        $ref: "#/components/schemas/Pet"
    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string
```


Spectral ruleset used (I don't actually think this is relevant wrt the bug):

```
$ cat .spectral.yaml 
---
extends: "spectral:oas"
rules:
  properties-type-object:
    description: "Objects with properties must have type: object."
    given: "$..[?(@.properties)]"
    severity: error
    # must not be resolved because $ref-defined objects shall have its type
    # defined in the referenced schema, not the referencing field (and $ref 
    # must be the only property, anyway)
    resolved: false
    # type field must be defined and contain the value object
    then:
      - field: "type"
        function: defined
      - field: "type"
        function: enumeration
        functionOptions:
          values:
            - object
```

Thanks for providing spectral - it's great!

Best, 
Holger
