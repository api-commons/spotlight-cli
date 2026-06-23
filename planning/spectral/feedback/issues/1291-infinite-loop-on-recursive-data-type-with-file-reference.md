---
number: 1291
title: "Infinite loop on Recursive Data Type with file reference"
state: "closed"
labels: ["t/bug"]
author: "karaatanassov"
created: "2020-07-28T16:58:09Z"
updated: "2020-09-29T17:25:47Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1291"
---

# Infinite loop on Recursive Data Type with file reference

**Describe the bug**
Spectral falls into infinite loop when the supplied definition contain recursive model e.g. linked list with a file reference. 

The same recursive model processes well with local references

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document (save as "linked_list.yml")

linked_list.yml
```yaml
openapi: 3.0.0
servers:
  - url: http://test.com/linked-list
    description: test service
tags:
  - name: LinkedList
    description: Linked List operations
info:
  title: Linked List DataObject Test
  version: version.version0
  contact: 
    name: Kiril Karaatanassov
  description: test recursive data structures
components:
  schemas:
    Node:
      description: 'Linked list node'
      example: {}
      properties:
        label:
          type: string
        next:
          $ref: 'linked_list.yml#/components/schemas/Node'
      required:
      - label
      type: object
paths:
  /test/linked-list:
    get:
      operationId: getLinkedList
      description: Returns a linked list that can be exception or trust chain
      tags: ["LinkedList"]
      responses:
        '200':
          description: Wow success!!!
          content:
            "application/json":
              schema:
                $ref: '#/components/schemas/Node'
```
2. Run this CLI command './spectral lint linked_list.yml'
3. See error - spectral runs indefinitely, no output is produced

**Expected behavior**
validate the OpenAPI spec in finite time.

The same spec with removed file name from the recursive reference validates in couple of seconds

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 5.4.0
 - OS: Ubuntu 18.04

**Additional notes**

I found the following issue to be possibly related. In my case with 5.4.0 recursive types (i.e. circular reference) within the same file seem to work fine.

https://github.com/stoplightio/spectral/issues/915

One of the comments mentions use of different library for handling JSON schema references

https://github.com/stoplightio/spectral/issues/1054

Again I do not see problems if the file name is removed form the schema. Problem is that to remove all filenames we have to flatten a relatively big API into single file (~8000 schemas and ~1000 operations)
