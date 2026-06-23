---
number: 1628
title: "`invalid-ref` errors when components use `!!` yaml syntax"
state: "open"
labels: ["triaged"]
author: "barrett-schonefeld"
created: "2021-05-13T21:43:37Z"
updated: "2024-05-31T12:35:42Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1628"
---

# `invalid-ref` errors when components use `!!` yaml syntax

**Describe the bug**

When API definition is a `yaml` document with `!!` syntax to identify the type of the value (`!!bool "false"`, for example), Spectral returns `invalid-ref` errors even when the refs are valid. It is likely that the underlying `yaml` parser does not understand this syntax.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document:

        "openapi": "3.0.0"
        "paths":
            "/":
                "get":
                    "operationId": "getObject"
                    "responses":
                        "200":
                            "$ref": "#/components/responses/Object"
                        "default":
                            "description": "error response"
                            "content":
                                "application/json":
                                    "schema":
                                        "$ref": "#/components/schemas/Error"
                    "summary": "Retrieve object"
        "components":
            "responses":
                "Object":
                    "description": "object response"
                    "content":
                        "application/json":
                            "schema":
                                "$ref": "#/components/schemas/Object"
            "schemas":
                "Error":
                    "additionalProperties": !!bool "false"
                    "description": "Error schema"
                    "properties":
                        "error":
                            "description": "The name of the error."
                            "type": "string"
                    "type": "object"
                "Object":
                    "additionalProperties": !!bool "false"
                    "description": "Object schema."
                    "properties":
                        "prop1":
                            "type": "string"
                    "type": "object"


2. Run `spectral lint`
3. See `invalid-ref` error

**Expected behavior**

I would expect that the refs are resolved properly even when `!!` syntax is used.
