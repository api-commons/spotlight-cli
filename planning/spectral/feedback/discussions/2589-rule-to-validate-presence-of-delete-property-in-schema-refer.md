---
number: 2589
title: "Rule to validate presence of \"delete\" property in schema reference of POST requestBody"
category: "Q&A"
author: "singhkkshitij"
created: "2024-02-21T17:54:18Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2589"
---

# Rule to validate presence of "delete" property in schema reference of POST requestBody

Hello ,
I need help to write a custom Spectral rule which can detect occurence of "delete" keyword in requestBody of POST paths schema reference .
Issue is : some API providers are giving OpenAPI files which allows "delete" in request payload in POST method apart from create & update.
Below is extract of API definition and reference :
I need to define rule to capture "delete" which is defined under "UpdateDocRequest".

```
"/document/api/item": {
      "post": {
        "operationId": "saveOrUpdate",
        "parameters": [
          {
            "name": "x-id",
            "in": "header",
            "description": "blah blah"
          }
        ],
        "requestBody": {
          "content": {
            "application/json;charset=utf-8": {
              "schema": {
                "$ref": "#/components/schemas/UpdateDocRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "default": {
				............
                }
              }
            }
          }
"components": {
    "schemas": {
      "UpdateDocRequest": {
        "required": [
          "requestId"
        ],
        "type": "object",
        "properties": {
          "requestId": {
            "type": "string"
          },
          "create": {
            "$ref": "#/components/schemas/CreateDocSet"
          },
          "update": {
            "$ref": "#/components/schemas/UpdateDocSet"
          },
          "delete": {
            "$ref": "#/components/schemas/DeleteDocSet"
          }
        }
      },
      "DeleteDocSet": {
        "required": [
          "docItemId"
        ],
        "type": "object",
        "properties": {
          "docItemId": {
            "type": "array",
            "items": {
              "type": "string"
            }          }        }     }	  }
}
```

I tried to create this rule abnd many more but no success for now :

```
			"post-delete-rule": {
				"description": "Do not use delete in POST.",
				"given": "$.paths[*][post][requestBody][[schema]]",
				"severity": "error",
				"then": {
					"function": "pattern",
					"functionOptions": {
						"match": "delete"
					}
				}
			}
```
Any help on this will be very much appreciated.

Thanks in advance.

Kind regards,
Kshitij
