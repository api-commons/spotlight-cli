---
number: 1455
title: "[Proposal] Refactor schema to accept both required and x-example parameter in all -in (header, query param, uri param etc) parameter"
state: "closed"
labels: ["t/bug", "released", "p/longterm", "triaged", "OpenAPI"]
author: "singhtejpal11"
created: "2021-01-05T11:13:03Z"
updated: "2021-08-28T12:16:43Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1455"
---

# [Proposal] Refactor schema to accept both required and x-example parameter in all -in (header, query param, uri param etc) parameter

This refactor will help us to allow below schema:
	- name: customerId
          in: query
          description: customer id
          required: false
          type: number
          x-example: 10		  

As of now when we try with both, we are getting below exception:
Error: schema is invalid: data/required should be array
    at Ajv.validateSchema (/*/node_modules/ajv/lib/ajv.js:178:16)
    at Ajv._addSchema (/*/node_modules/ajv/lib/ajv.js:307:10)
    at Ajv.compile (/*/node_modules/ajv/lib/ajv.js:113:24)
    at WeakMap.get (/*/dist/functions/schema.js:69:29)
    at Object.exports.schema (/*/dist/functions/schema.js:89:87)
    at Object.oasExample (eval at exports.evaluateExport (/*/dist/rulesets/evaluators.js:89:80), <anonymous>:3:1163)
    at Object.exports.lintNode (/*/dist/runner/lintNode.js:30:33)
    at callback (/*/dist/runner/runner.js:38:32)
    at JSONPath._handleCallback (/*/node_modules/jsonpath-plus/dist/index-umd.js:626:7)
    at JSONPath._trace (/*/node_modules/jsonpath-plus/dist/index-umd.js:658:12)
