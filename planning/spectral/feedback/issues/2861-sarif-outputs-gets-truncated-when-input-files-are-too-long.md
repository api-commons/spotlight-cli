---
number: 2861
title: "SARIF outputs gets truncated when input files are too long"
state: "closed"
labels: ["released"]
author: "sidneyamani"
created: "2025-10-29T04:25:00Z"
updated: "2026-04-13T12:57:17Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2861"
---

# SARIF outputs gets truncated when input files are too long

**Problem**
When linting multiple or large files (~2MB input), the output gets truncated. I was able to demonstrate this using SARIF output and the following scripts.

**To Reproduce**

cat generate-large-openapi.py 
```python
#!/usr/bin/env python3
"""Generate large OpenAPI spec to test stdout backpressure bug."""
import json

spec = {
    'openapi': '3.0.0',
    'info': {'title': 'Large API', 'version': '1.0.0'},
    'paths': {}
}

for i in range(200):  # 200 paths = 400 operations = ~1MB SARIF output
    spec['paths'][f'/resource_{i}/{{id}}'] = {
        'get': {
            'summary': f'Get {i}',
            'parameters': [{'name': 'id', 'in': 'path', 'required': True, 'schema': {'type': 'string'}}],
            'responses': {'200': {'description': 'OK'}}
        },
        'post': {
            'summary': f'Create {i}',
            'requestBody': {'content': {'application/json': {'schema': {'type': 'object'}}}},
            'responses': {'201': {'description': 'Created'}}
        }
    }

print(json.dumps(spec, indent=2))
```

$ cat test-backpressure-bug.sh 
```bash
#!/bin/bash
# Test stdout backpressure fix: large SARIF output piped to jq should not truncate

set -e

CLI="$(cd "$(dirname "$0")" && pwd)/packages/cli/dist/index.js"

# Generate test files
python3 "$(dirname "$0")/generate-large-openapi.py" > /tmp/large-api.json
echo '{"extends":["spectral:oas"],"rules":{}}' > /tmp/test-ruleset.json

# Test: pipe large SARIF output to jq (would fail before fix with "Unfinished string at EOF")
if node "$CLI" lint /tmp/large-api.json -r /tmp/test-ruleset.json --format sarif 2>&1 | jq -e . > /dev/null 2>&1; then
    echo "✅ PASS: SARIF output pipes correctly ($(node "$CLI" lint /tmp/large-api.json -r /tmp/test-ruleset.json --format sarif 2>&1 | wc -c | tr -d ' ') bytes)"
else
    echo "❌ FAIL: SARIF output truncated"
    exit 1
fi
```
$ ./test-backpressure-bug.sh 
❌ FAIL: SARIF output truncated


**Expected behavior**

✅ PASS: SARIF output pipes correctly (975296 bytes)

Specifically, the problem is the JSON ouput gets truncated and running:
`node path/to/spectral/packages/cli/dist/index.js lint /tmp/large-api.json -r /tmp/test-ruleset.json --format sarif 2>&1 | jq` fails because the JSON is invalid.

**Environment:**
 - Library version: 6.15.0 (CLI), 1.20.0 (Core)
 - OS: macOS 15.7.1 (Sequoia)
 - Node.js: v20.14.0
 - Runtime: CLI (not browser-based)
