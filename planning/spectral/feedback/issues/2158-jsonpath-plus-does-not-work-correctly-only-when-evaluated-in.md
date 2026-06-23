---
number: 2158
title: "jsonpath-plus does not work correctly only(?) when evaluated in Spectral rule."
state: "closed"
labels: ["t/bug", "released"]
author: "Qbaloz"
created: "2022-05-16T11:32:14Z"
updated: "2022-06-29T12:14:08Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2158"
---

# jsonpath-plus does not work correctly only(?) when evaluated in Spectral rule.

**Describe the bug**
There are some jsonpath-plus paths which are not correctly evaluated in Spectral. According to https://jsonpath.com/ site both versions of my paths should work, but unfortunately one of them could not be found in document.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document:
```
{
  "openapi": "3.0.2",
  "info": {
    "title": "Swagger Petstore - OpenAPI 3.0",
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "apiteam@swagger.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.11"
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  },
  "servers": [
    {
      "url": "/api/v3"
    }
  ],
  "tags": [
    {
      "name": "pet",
      "description": "Everything about your Pets",
      "externalDocs": {
        "description": "Find out more",
        "url": "http://swagger.io"
      }
    }
  ],
  "paths": {
    "/pet/findByStatus": {
      "get": {
        "tags": [
          "pet"
        ],
        "summary": "Finds Pets by status",
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": [
          {
            "name": "status",
            "in": "query",
            "description": "Status values that need to be considered for filter",
            "required": false,
            "explode": true,
            "schema": {
              "type": "string",
              "default": "available",
              "enum": [
                "available",
                "pending",
                "sold"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/xml": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid status value"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    }
  },
  "components": {
    "schemas": {
      "Tag": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "tag"
        }
      },
      "Pet": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "$ref": "#/components/schemas/Tag"
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        }
      }
    },
    "requestBodies": {
      "Pet": {
        "description": "Pet object that needs to be added to the store",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Pet"
            }
          },
          "application/xml": {
            "schema": {
              "$ref": "#/components/schemas/Pet"
            }
          }
        }
      }
    },
    "securitySchemes": {
      "petstore_auth": {
        "type": "oauth2",
        "flows": {
          "implicit": {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          }
        }
      }
    }
  }
}
```
2. Given this rules:
```
    "test-working-jsonpath": {
      "formats": [
        "oas3"
      ],
      "given": "$.paths.*.*.responses.401,404",
      "severity": "error",
      "then": [
        {
          "field": "content",
          "function": "falsy"
        }
      ]
    },
    "test-not-working-jsonpath": {
      "formats": [
        "oas3"
      ],
      "given": "$.paths.*.*.responses[401,404]",
      "severity": "error",
      "then": [
        {
          "field": "content",
          "function": "falsy"
        }
      ]
    }
```
3. After running Spectral Validation only the first rule with given:
```
 "given": "$.paths.*.*.responses.401,404",
```
will throw error. Second rule with given:
```
"given": "$.paths.*.*.responses[401,404]",
```
will say that everything is ok.
According to https://jsonpath.com/ boths paths are good, so I'm not really sure why it is not working correctly with "[...].

**Expected behavior**
Jsonpaths with square brackets should be correctly interpreted in Spectral.

**Used Spectral libraries:**
```
    "@stoplight/spectral-core": "^1.12.1",
    "@stoplight/spectral-ruleset-bundler": "^1.2.1"
```

**Additional context**
I found some other paths for example:
```
$.components.[?(@.enum)]~
```
which I had to convert to:
```
$...components.[?(@.enum)]~
```
to make them work in Spectral.
