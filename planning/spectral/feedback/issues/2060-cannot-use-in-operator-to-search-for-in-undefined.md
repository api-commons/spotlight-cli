---
number: 2060
title: "Cannot use 'in' operator to search for '*' in undefined"
state: "closed"
labels: ["t/bug", "released", "p/medium", "triaged", "team/plaid"]
author: "dweber019"
created: "2022-02-14T07:03:40Z"
updated: "2022-02-24T16:56:29Z"
comments: 9
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2060"
---

# Cannot use 'in' operator to search for '*' in undefined

**Describe the bug**
Since version 6.x spectral throws error `Cannot use 'in' operator to search for '*' in undefined` when using some valid JSONPath's.

**To Reproduce**
Use the following valid OpenAPI spec json:
```
{
  "openapi": "3.0.0",
  "info": {
    "x-api-id": "d0184f38-b98d-11e7-9c56-68f728c1ba70",
    "x-audience": "company-internal",
    "version": "1.0.0",
    "title": "API Title",
    "description": "My fancy API",
    "license": {
      "name": "GNU"
    },
    "contact": {
      "name": "team x",
      "url": "www.team-x.com",
      "email": "team@x.com"
    }
  },
  "tags": [
    {
      "name": "foo"
    },
    {
      "name": "bar"
    }
  ],
  "servers": [
    {
      "url": "https://example.com"
    }
  ],
  "paths": {
    "/example": {
      "get": {
        "description": "get an example",
        "operationId": "get-example",
        "tags": [
          "foo"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "query_param_1",
            "schema": {
              "type": "integer"
            }
          },
          {
            "$ref": "#/components/parameters/QueryParamComponent"
          },
          {
            "in": "header",
            "name": "My-Header",
            "schema": {
              "type": "integer"
            }
          },
          {
            "$ref": "#/components/parameters/HeaderParamComponent"
          },
          {
            "$ref": "#/components/parameters/HeaderB3Traceid"
          },
          {
            "$ref": "#/components/parameters/HeaderB3Spanid"
          }
        ],
        "responses": {
          "200": {
            "description": "ok",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Example"
                }
              }
            }
          },
          "404": {
            "description": "not found",
            "content": {
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            }
          },
          "default": {
            "description": "unknown server error",
            "content": {
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            }
          }
        }
      },
      "patch": {
        "description": "update an example",
        "operationId": "update-example",
        "tags": [
          "foo"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "ok",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "Bar": {} 
                  }
                }
              }
            }
          },
          "500": {
            "description": "server error",
            "content": {
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            }
          },
          "default": {
            "description": "unknown server error",
            "content": {
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "parameters": {
      "QueryParamComponent": {
        "in": "query",
        "name": "query_param_from_component",
        "schema": {
          "type": "integer"
        }
      },
      "HeaderParamComponent": {
        "in": "header",
        "name": "Header-Param-From-Component",
        "schema": {
          "type": "integer"
        }
      },
      "HeaderB3Traceid": {
        "in": "header",
        "name": "X-B3-Traceid",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      "HeaderB3Spanid": {
        "in": "header",
        "name": "X-B3-Spanid",
        "required": true,
        "schema": {
          "type": "string"
        }
      }
    },
    "schemas": {
      "Example": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "foo": {
            "properties": {
              "bar": {
                "type": "integer"
              }
            }
          },
          "xenum": {
            "type": "string",
            "x-extensible-enum": [
              "FOO",
              "BAR"
            ]
          }
        }
      },
      "Problem": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "format": "uri",
            "description": "An absolute URI that identifies the problem type.  When dereferenced,\nit SHOULD provide human-readable documentation for the problem type\n(e.g., using HTML).\n",
            "default": "about:blank",
            "example": "https://zalando.github.io/problem/constraint-violation"
          },
          "title": {
            "type": "string",
            "description": "A short, summary of the problem type. Written in english and readable\nfor engineers (usually not suited for non technical stakeholders and\nnot localized); example: Service Unavailable\n"
          },
          "status": {
            "type": "integer",
            "format": "int32",
            "description": "The HTTP status code generated by the origin server for this occurrence\nof the problem.\n",
            "minimum": 100,
            "maximum": 600,
            "exclusiveMaximum": true,
            "example": 503
          },
          "detail": {
            "type": "string",
            "description": "A human readable explanation specific to this occurrence of the\nproblem.\n",
            "example": "Connection to database timed out"
          },
          "instance": {
            "type": "string",
            "format": "uri",
            "description": "An absolute URI that identifies the specific occurrence of the problem.\nIt may or may not yield further information if dereferenced.\n"
          }
        }
      }
    }
  }
}
```

Then create the following rules yaml:
```
rules:
  must-use-camel-case-for-property-names:
    message: Property name has to be ASCII camelCase
    description: MUST property names must be ASCII camelCase [118a]
    documentationUrl: https://github.com/baloise-incubator/spectral-ruleset/blob/main/doc/rules/property-names-must-be-ascii-camel-case.md
    severity: error
    given: $.paths.*.*[responses,requestBody]..content..schema.properties.*~
    then:
      function: pattern
      functionOptions:
        match: ^[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$
```

**Expected behavior**
Should return and match a list like
```
[
  "Bar",
  "name"
]
```
and report error `must-use-camel-case-for-property-names` because of `Bar`
but above error happens.

Validated in http://jsonpath.com/ that the given query was correct.

**Environment (remove any that are not applicable):**
 - Library version: 6.x (tested with 6.1.0 and 6.2.1) works with 5.9.x
 - OS: Mac

**Additional context**
If I update nimma to 0.1.8 or down grade to 0.1.3 the error isn't thrown but no list is selected and there for can't be matched.
