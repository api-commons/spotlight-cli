---
number: 1678
title: "rule jsonPath to select properties names containing '@' symbol"
category: "Q&A"
author: "asatarov"
created: "2021-06-17T13:37:06Z"
upvotes: 0
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1678"
---

# rule jsonPath to select properties names containing '@' symbol

I’m trying to create rule for model properties with ‘@’ symbols in name. I use 
given: $.definitions.*.properties[?(@property.match(/@/))]~

but it doesn’t work. It works for some other regexps but not for all. For me it is not clear how it works. And may be ‘@’ symbol has some special meaning here.

Could someone give me some hints how to use it in a right way and is it possible to debug it somehow?

And I use https://extendsclass.com/jsonpath-tester.html for testing.
And may be there is a better tool for test json path ?

Example spec:

```json
{
   "swagger": "2.0",
   "info": {
      "title": "Product API",
      "version": "1.0.0",
      "description": "description"
   },
   "paths": {
      "/PRODUCTS": {
         "get": {
            "summary": "Query Product Catalogue",
            "tags": [],
            "responses": {},
            "operationId": "QUERY-PRODUCTS",
            "description": ""
         }
      },
      "/Products/TYPE": {
         "get": {
            "summary": "Query Product byb type",
            "tags": [],
            "responses": {},
            "operationId": "get-Products-TYPE"
         }
      }
   },
   "definitions": {
      "product": {
         "title": "product",
         "type": "object",
         "properties": {
            "@productId": {
               "type": "string"
            },
            "@baseType": {
               "type": "string"
            },
            "otherPropery": {
               "type": "string"
            }
         }
      }
   }
}

```
