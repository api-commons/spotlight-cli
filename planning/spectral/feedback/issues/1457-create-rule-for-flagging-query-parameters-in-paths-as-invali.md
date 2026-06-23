---
number: 1457
title: "Create rule for flagging query parameters in paths as invalid"
state: "closed"
labels: ["enhancement", "good first issue", "OpenAPI"]
author: "rossmcdonald"
created: "2021-01-06T15:45:58Z"
updated: "2023-03-23T16:22:13Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1457"
---

# Create rule for flagging query parameters in paths as invalid

While not technically in violation of the OpenAPI specification, including a query parameter in a path should be flagged as an error in Spectral:

> A path has specific meaning in HTTP as a part of a URL that comes after the host name and before the query string or fragment. A "path item" key must be only a path, it cannot have a query string or a fragment.

For example, the following when defined as a path in an OAI specification should be flagged as an error:

```
/auth/user?token={token}
```
