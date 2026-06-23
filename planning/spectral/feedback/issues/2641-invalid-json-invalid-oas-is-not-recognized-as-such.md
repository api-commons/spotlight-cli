---
number: 2641
title: "Invalid JSON + invalid OAS is not recognized as such"
state: "open"
labels: ["enhancement", "validation", "s/needs-info"]
author: "bereg2k"
created: "2024-06-13T16:51:18Z"
updated: "2024-08-16T12:20:31Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2641"
---

# Invalid JSON + invalid OAS is not recognized as such

### Discussed in https://github.com/stoplightio/spectral/discussions/2630

<div type='discussions-op-text'>

<sup>Originally posted by **bereg2k** June  2, 2024</sup>
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

What am I doing wrong here?</div>
