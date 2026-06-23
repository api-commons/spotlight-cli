---
number: 2523
title: "content Type XML and example not property handle"
state: "open"
labels: ["t/bug", "triaged"]
author: "LasneF"
created: "2023-08-08T15:33:20Z"
updated: "2026-03-25T17:37:03Z"
comments: 5
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2523"
---

# content Type XML and example not property handle

**Describe the bug**
give an API Spec with a return content type set to application/xml  spectral raise an error stating that example must be an object

notice that the file looks correct , and is correctly rendered by editor.swagger.io 


**To Reproduce**
given the API spec below

```
{
    "openapi": "3.0.0",
    "info": {
        "title": "Kitten",
        "version": "1.0.0"
    },
    "paths": {
        "/pet": {
            "get": {
                "responses": {
                    "200": {
                        "description": "cat",
                        "content": {
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/niceCatResult"
                                },
                                "example": "<Cat><nice>true</nice></Cat>"
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "niceCatResult": {
                "type": "object",
                "properties": {
                    "nice" : {
                        "type": "boolean"
                    }
                },
                "xml": {
                    "name": "Cat"
                }
            }
        }
    }
}
```

Error below is raised 
18:44    error  oas3-valid-media-example "example" property type must be object paths./pet.get.responses[200].content.application/xml.example



**Expected behavior**
No Error raised ,
