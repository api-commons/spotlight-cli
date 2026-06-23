---
number: 2630
title: "Invalid JSON + invalid OAS is not recognized as such"
category: "Q&A"
author: "bereg2k"
created: "2024-06-02T17:58:30Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2630"
---

# Invalid JSON + invalid OAS is not recognized as such

Hello! 

I have an **invalid JSON** which is **invalid OAS** too, but linting it doesn't report any errors:

`invalid_spec.json`

```json
{
  "openap": "3.0.3",
  "info": {
    "title": "",
    "version": ""
  },
}
```

- there's trailing `,` without any other members (invalid JSON)
- `"openap"` instead of `"openapi"` (invalid OAS)
- no `"paths"` (invalid OAS).

My ruleset is...

`.spectral.yaml`
```yaml
extends: [[spectral:oas, all]]
```

The output is:

```bash
% spectral lint path/to/file/invalid_spec.json  -v -D    

Found 52 rules (52 enabled)
Linting /path/to/file/invalid_spec.json
No results with a severity of 'error' found!
```

What am I doing wrong here?
