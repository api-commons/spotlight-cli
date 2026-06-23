---
number: 1950
title: "In-line regex flags don't raise an error"
state: "closed"
labels: ["wontfix"]
author: "fednot-icc"
created: "2021-11-10T07:37:48Z"
updated: "2021-11-12T13:31:15Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1950"
---

# In-line regex flags don't raise an error

**Describe the bug**
In some regex flavours it is possible to use in-line flags:
`  pattern: '^(?i)TEXT$'`
Swagger does not support this according to swagger.io, but Spectral does not indicate an error or warning when patterns use this feature.

**To Reproduce**

Example contract:
```
---
swagger: "2.0"
info:
  title: "Title"
  version: 1.0.2
  description: "description."

basePath: /path/to/v1
schemes:
  - https

tags:
  - name: Tag

paths:
  /vaults/{vaultId}/documents:
    post:
      tags:
        - Tag
      description: 'description'
      parameters:
        - $ref: '#/parameters/Path.VaultId'
        - $ref: '#/parameters/Header.ExternalUserReference'
        - $ref: '#/parameters/Body.FileAndMetadata'
      responses:
        '204':
          description: Success

definitions:
  Themes:
    type: string
    description: 'description'
    enum:
      - "one"
      - "two"
  Label:
    description: description
    type: string
    minLength: 1
    pattern: '^(?!\''.*\''.*)(?!.*;.*)(?i)(?!.*ALTER|.*CREATE|.*SELECT|.*DROP|.*EXEC|.*MERGE|.*SELECT|.*UPDATE|.*INSERT INTO|.*UNION)((?!.*<.*>.*).)[\u0020-\u007E\u00A0-\u02AF\u20A0-\u20BF]{40}$'
    example: 'label'
  FileAndMetadata:
    type: object
    description: description
    properties:
      document:
        description: description
        type: string
        format: "byte"
      documentName:
        description: description
        type: string
        pattern: '^[\w,\s-]+\.[A-Za-z]{3}$'
      pushMessage:
        description: description
        type: string
        maxLength: 300
      themes:
        type: array
        items:
          $ref: '#/definitions/Themes'
      labels:
        type: array
        items:
          $ref: '#/definitions/Label'
    required:
      - document
      - documentName

parameters:
  Path.VaultId:
    in: path
    name: vaultId
    type: string
    required: true
    description: 'description'
  Body.FileAndMetadata:
    in: body
    name: file
    schema:
      $ref: '#/definitions/FileAndMetadata'
  Header.ExternalUserReference:
    in: header
    name: externalUserReference
    required: true
    type: string
    description: "description"
```
I used Visual studio code (1.60.0) with Spectral plugin (v0.2.5) with custom ruleset defined (but none affecting regex pattens)

**Expected behavior**
Line 40 should show an error for unsupported use of in-line flags, but does not show an error.

**Screenshots**
![image](https://user-images.githubusercontent.com/94038660/141068801-8b74eee1-1a13-40f2-834b-72be10247182.png)
![image](https://user-images.githubusercontent.com/94038660/141069992-5773d4eb-4d91-47a0-a30e-6ee4f6e0d285.png)


**Environment (remove any that are not applicable):**
 - Library version: Spectral Plugin v0.2.5
 - OS: Windows 10
 - Browser: Visual Studio Code 1.60.0

**Additional context**
The incorrect regex does sometimes cause an incorrect error to show up later in the contract:
![image](https://user-images.githubusercontent.com/94038660/141069182-a1ddcfb3-deb5-4bfc-a4b4-2c1d16138505.png)
`2` property should have required property `type`.spectral(oas2-schema)
Commenting out the faulty pattern removes the error above, uncommenting the line brings it back.
This seems to be environment-specific however, as I couldn't reproduce this across different setups.
