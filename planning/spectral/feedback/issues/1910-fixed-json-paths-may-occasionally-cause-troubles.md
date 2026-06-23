---
number: 1910
title: "\"Fixed\" JSON Paths may occasionally cause troubles"
state: "closed"
labels: ["t/bug", "released", "p/medium"]
author: "EmmetZC"
created: "2021-10-21T08:17:42Z"
updated: "2021-11-04T12:11:21Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1910"
---

# "Fixed" JSON Paths may occasionally cause troubles

> For support questions, please use the [Stoplight Discord Community](https://discord.com/invite/stoplight). This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, our Discord is a great place to start.
>
> **Please delete this section, any any sections below that you don't use, before creating the issue.**

**Describe the bug**
JsonPath for `given` is not working properly when `resolved` set to `false`

**To Reproduce**

1. Given this OpenAPI document 
```
{
    "openapi": "3.0.0",
    "info": {
        "version": "0.0.1",
        "title": "Any Title"
    },
    "servers": [
        {
            "url": "https://example.com"
        }
    ],
    "security": [
        {
            "ApiKeyAuth": []
        }
    ],
    "tags": [
        {
            "name": "Orders",
            "description": "no desc"
        }
    ],
    "paths": {
        "/orders": {
            "get": {
                "tags": [
                    "Orders"
                ],
                "summary": "List All Orders (with empty operationId)",
                "operationId": "",
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "example": 5,
                            "type": "integer"
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "example": 10,
                            "type": "integer"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Success",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/OrdersListResponse"
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Orders"
                ],
                "summary": "CreateOrder",
                "operationId": "insert",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/OrdersCreateRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/OrdersEntity"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "securitySchemes": {
            "ApiKeyAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "Authorization"
            }
        },
        "schemas": {
            "OrdersCreateRequest": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "string"
                    }
                }
            },
            "OrdersEntity": {
                "type": "object",
                "properties": {
                    "transaction_id": {
                        "type": "string"
                    },
                    "data": {
                        "type": "string"
                    }
                }
            },
            "OrdersListResponse": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/OrdersEntity"
                        }
                    }
                }
            }
        }
    }
}
```
2. Given this rule
```
  my-operationid:
    description: All OperationIds should not be empty
    given: $.paths.*[?( @property === 'get' || @property === 'put' || @property === 'post' || @property === 'delete' || @property === 'options' || @property === 'head' || @property === 'patch' || @property === 'trace' )].operationId
    severity: error
    resolved: false
    then:
      function: truthy
```
3. Run spectral-cli with custom rule. Obviously, spectral-cli should report one error based on rule `my-operationid`, since `get /orders`'s `operationId` is empty. While in fact there'll be no error reported instead. If you have printed any log in function `truthy`, you'll see no log printed, which means jsonpath of `given` matches nothing.
5. Now remove/comment out `resolved: false` from the rule and run spectral-cli again. Now you see the error, which matches our expectation.

**Expected behavior**
`resolved` should affect the `$ref`s only, the rule `my-operationid` should work properly no matter what is set to `resolved`.

**Environment (remove any that are not applicable):**
 - Library version: spectral-cli@6.1.0, spectral@6.1.0
 - OS: macos 11.6
