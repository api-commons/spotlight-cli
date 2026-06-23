---
number: 2436
title: "Create rule for flagging query parameters in paths as invalid"
category: "Rulesets"
author: "rossmcdonald"
created: "2021-01-06T15:45:58Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2436"
---

# Create rule for flagging query parameters in paths as invalid

While not technically in violation of the OpenAPI specification, including a query parameter in a path should be flagged as an error in Spectral:

> A path has specific meaning in HTTP as a part of a URL that comes after the host name and before the query string or fragment. A "path item" key must be only a path, it cannot have a query string or a fragment.

For example, the following when defined as a path in an OAI specification should be flagged as an error:

```
/auth/user?token={token}
```
