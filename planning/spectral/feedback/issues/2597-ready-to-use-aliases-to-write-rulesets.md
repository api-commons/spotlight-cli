---
number: 2597
title: "Ready to use Aliases to write rulesets"
state: "open"
labels: ["enhancement", "triaged"]
author: "mnaumanali94"
created: "2024-03-12T14:15:30Z"
updated: "2024-05-31T09:24:22Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2597"
---

# Ready to use Aliases to write rulesets

**User story.**
As a user creating spectral rulesets, I should have a list of aliases that I can use within my rulesets to target common components within OpenAPI, AsyncAPI and JSON Schema. I should be able to use these aliases within JS, JSON/YAML rulesets. 

Updates to these aliases shouldn't result in my rulesets breaking i.e. these aliases should be versioned. These aliases should also be used in the default rulesets.

**Describe the solution you'd like**
List of Aliases to potentially add:
```
  "aliases": {
    "API_Document": {
      "id": "0rzUh4l7bXVzuttMP9ZEy",
      "description": "The complete API specification document. This can be used to target any part of the OpenAPI document using **field**.\n\n*Use this if you don't find specific targets that cater to your usecase.* ",
      "name": "API_Document",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$"
        }
      ]
    },
    "API_Description": {
      "id": "g-EJW9WTmubKVPPC3Z4Mj",
      "description": "The top level description in an API document",
      "name": "API_Description",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$.info.description"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.info.description"
        }
      ]
    },
    "Operation_Object": {
      "id": "ujD9z8-5gphabwHK-9_xC",
      "description": "The complete operation object. Use it in combo with field object.",
      "name": "Operation_Object",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "#Path_Item[get,put,post,delete,options,head,patch,trace]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "#Path_Item[get,put,post,delete,options,head,patch,trace]"
        }
      ]
    },
    "Operation_Responses": {
      "id": "PNLU94FR2qPWhocd6SxYe",
      "description": "Responses for all operations including get, put, post, delete, options, head, patch, trace.",
      "name": "Operation_Responses",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "#Operation_Object.responses"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "#Operation_Object.responses"
        }
      ]
    },
    "Path_Item": {
      "id": "6PAFw1PIN0h2biP_UoGK1",
      "name": "Path_Item",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$.paths[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.paths[*]"
        }
      ]
    },
    "API_Contact": {
      "id": "judZ1l74GUZ9Z83qfP3Gd",
      "description": "The top level description in an API document",
      "name": "API_Contact",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$.info.contact"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.info.contact"
        }
      ]
    },
    "API_License": {
      "id": "thWRStUJy4jIdO2Mtpph9",
      "description": "The top level description in an API document",
      "name": "API_License",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$.info.license"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.info.license"
        }
      ]
    },
    "All_Markdown": {
      "id": "-celtGPCYUtXEagYUfFem",
      "description": "All markdown descriptions across the document.",
      "name": "All_Markdown",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..[description,title]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..[description,title]"
        }
      ]
    },
    "API_Tags": {
      "id": "FWAiVK6u-qpZUXmpzx5oC",
      "description": "Tags on an API object",
      "name": "API_Tags",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "#Operation_Object.tags"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "#Operation_Object.tags"
        }
      ]
    },
    "All_Servers": {
      "id": "erZqJKUMa87baFiI03rkA",
      "description": "API hosts defined in the API specification",
      "name": "All_Servers",
      "targets": [
        {
          "formats": [
            "oas3"
          ],
          "given": "$.servers[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "#Path_Item.servers[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "#Operation_Object.servers[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "#Link_Object.server"
        },
        {
          "formats": [
            "oas2"
          ],
          "given": "$.host"
        }
      ]
    },
    "Response_All_Object": {
      "id": "7zKqjxdm7foEXURXsX1gP",
      "description": "All responses (object) in an API",
      "name": "Response_All_Object",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$.responses"
        },
        {
          "formats": [
            "oas2"
          ],
          "given": "#Operation_Responses"
        },
        {
          "formats": [
            "oas2"
          ],
          "given": "$..responses"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.components.responses"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "#Operation_Responses"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..responses"
        }
      ]
    },
    "API_Server_URL": {
      "id": "c3zfwJb0oVwSaK81_VJnt",
      "description": "API host urls defined in the API specification",
      "name": "API_Server_URL",
      "targets": [
        {
          "formats": [
            "oas3"
          ],
          "given": "$.servers[*].url"
        },
        {
          "formats": [
            "oas2"
          ],
          "given": "$.host"
        }
      ]
    },
    "All_Ref": {
      "id": "QwcySnyXlL5octQs-r5c5",
      "description": "All references throughout the API",
      "name": "All_Ref",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..[?(@property === '$ref')]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..[?(@property === '$ref')]"
        }
      ]
    },
    "All_Enum_Object": {
      "id": "KWcQqqdktFSVNCdSBWV29",
      "description": "All references throughout the API",
      "name": "All_Enum_Object",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..[?(@ && @.enum)]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..[?(@ && @.enum)]"
        }
      ]
    },
    "Request_Parameter_All": {
      "id": "mqBwsGvRyPr2kQRD2NfJF",
      "description": "All request parameters",
      "name": "Request_Parameter_All",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..parameters[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..parameters[*]"
        }
      ]
    },
    "Request_Parameter_Query": {
      "id": "U6-_abYC1nCNJ26A-TGoG",
      "description": "All request query parameters",
      "name": "Request_Parameter_Query",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..parameters[?(@ && @.in==\"query\")]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..parameters[?(@ && @.in==\"query\")]"
        }
      ]
    },
    "Request_Parameter_Header": {
      "id": "1NxRPDP5T54Trkbs98r2m",
      "description": "All request header parameters",
      "name": "Request_Parameter_Header",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..parameters[?(@ && @.in==\"header\")]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..parameters[?(@ && @.in==\"header\")]"
        }
      ]
    },
    "Request_Parameter_Cookie": {
      "id": "OHDE17IypTbFodoeHN5vj",
      "description": "All request cookie parameters",
      "name": "Request_Parameter_Cookie",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..parameters[?(@ && @.in==\"cookie\")]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..parameters[?(@ && @.in==\"cookie\")]"
        }
      ]
    },
    "Request_Parameter_Path": {
      "id": "st8kVjKFeGCaxsoqaZ15P",
      "description": "All request path parameters",
      "name": "Request_Parameter_Path",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..parameters[?(@ && @.in==\"path\")]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..parameters[?(@ && @.in==\"path\")]"
        }
      ]
    },
    "Path_Object": {
      "id": "8B4Wyk1V7I96SuY6Ck8bS",
      "description": "Path object. Usually used to target the Path key e.g. `/users/{userId}`",
      "name": "Path_Object",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$.paths"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.paths"
        }
      ]
    },
    "All_Example_Schema": {
      "id": "P1doxCJSxHKqnluT560Xd",
      "description": "All examples for schemas",
      "name": "All_Example_Schema",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..definitions..[?(@property !== 'properties' && @ && (@.example !== void 0 || @['x-example'] !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]"
        },
        {
          "formats": [
            "oas2"
          ],
          "given": "$..parameters..[?(@property !== 'properties' && @ && (@.example !== void 0 || @['x-example'] !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]"
        },
        {
          "formats": [
            "oas2"
          ],
          "given": "$..responses..[?(@property !== 'properties' && @ && (@.example !== void 0 || @['x-example'] !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.components.schemas..[?(@property !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..content..[?(@property !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..headers..[?(@property !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..parameters..[?(@property !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]"
        }
      ]
    },
    "API_Document_RecursiveSearch": {
      "id": "ReA4eTdOwwMrqh5xM_QgK",
      "description": "The complete API specification document. This can be used to target any part of the OpenAPI document using **field**.\n\n*Use this if you don't find specific targets that cater to your usecase.* ",
      "name": "API_Document_RecursiveSearch",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$.."
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.."
        }
      ]
    },
    "All_Example": {
      "id": "ygfEHB8hSfFoB_6YPVJ8f",
      "description": "All examples across the API document",
      "name": "All_Example",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..examples[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.components.examples[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.paths[*][*]..content[*].examples[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.paths[*][*]..parameters[*].examples[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.components.parameters[*].examples[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.paths[*][*]..headers[*].examples[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.components.headers[*].examples[*]"
        }
      ]
    },
    "All_Example_Media": {
      "id": "20Q2y1DxjG4yXQluH8pdJ",
      "description": "All examples for schemas",
      "name": "All_Example_Media",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..responses..[?(@ && @.schema && @.examples)]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..content..[?(@ && @.schema && (@.example !== void 0 || @.examples))]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..headers..[?(@ && @.schema && (@.example !== void 0 || @.examples))]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..parameters..[?(@ && @.schema && (@.example !== void 0 || @.examples))]"
        }
      ]
    },
    "API_Tags_Item": {
      "id": "euwPJFQ3n-AFCKZXRtr5y",
      "description": "Tags on an API object",
      "name": "API_Tags_Item",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$.tags[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$.tags[*]"
        }
      ]
    },
    "All_Enum_Value": {
      "id": "L_tecRzgHnCigGjbekUwp",
      "description": "All enum values throughout the API",
      "name": "All_Enum_Value",
      "targets": [
        {
          "formats": [
            "oas2"
          ],
          "given": "$..[?(@ && @.enum)].enum[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "$..[?(@ && @.enum)].enum[*]"
        }
      ]
    },
    "Link_Object": {
      "id": "KQ213BAVTStTjW2jw5E-y",
      "name": "Link_Object",
      "targets": [
        {
          "formats": [
            "oas3"
          ],
          "given": "$.components.links[*]"
        },
        {
          "formats": [
            "oas3"
          ],
          "given": "#Response_All_Object.links[*]"
        }
      ]
    },
    "API_Server": {
      "id": "uldWLoaxpSpyZVovTaCkC",
      "description": "API hosts defined in the API specification",
      "name": "API_Server",
      "targets": [
        {
          "formats": [
            "oas3"
          ],
          "given": "$.servers"
        },
        {
          "formats": [
            "oas2"
          ],
          "given": "$.host"
        }
      ]
    }
  },
  ```
