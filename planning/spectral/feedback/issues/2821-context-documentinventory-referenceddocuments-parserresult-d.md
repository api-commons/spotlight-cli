---
number: 2821
title: "context.documentInventory.referencedDocuments[*].parserResult.data is not resolved"
state: "open"
labels: []
author: "fenuks"
created: "2025-05-30T12:21:59Z"
updated: "2025-05-30T12:26:45Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2821"
---

# context.documentInventory.referencedDocuments[*].parserResult.data is not resolved

**Describe the bug**
I'm not sure if it's a bug or intended behaviour, but in rule with `resolved:
true`, referenced documents data is not resolved, that is
`context.documentInventory.referencedDocuments[*].parserResult.data` is not
resolved. There seem to be no referenced representation of referenced documents
in whole `context` object.

**Expected behavior**
If `resolved` option is enabled, referenced documents should be resolved, just
like main document.

If referenced documents can't be resolved for some reason by default, is there
a way to resolve it manually (e.g. by using `context.documentInvertory.resolver`)?

**Environment (remove any that are not applicable):**
 - Library version: 6.14.2 (via ibtm-openapi-validator v1.35.2)
 - OS: Linux
