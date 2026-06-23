---
number: 2815
title: "Validate OAS specification extensions"
category: "Ideas"
author: "DavidBiesack"
created: "2025-04-30T21:51:36Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2815"
---

# Validate OAS specification extensions

Does anyone know of a JSON Schema to describe specification extensions, so that Spectral could ingest such descriptions and validate any specification extensions in an OAS document

i.e. 
1. if the extension definition includes a JSON schema, validate that all instances adhere to such a schema, or 
2. if the metadata about `x-my-ext:` says it is only valid within a Path Object, verify that that the extension is only used in the declared locations in the OAS document
