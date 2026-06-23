---
number: 2678
title: "Spectral overrides will not match a path with a parameter"
state: "closed"
labels: []
author: "nrutman"
created: "2024-09-10T15:37:36Z"
updated: "2025-01-13T19:39:10Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2678"
---

# Spectral overrides will not match a path with a parameter

**Describe the bug**
I am using Spectral to enforce the [URL Style Guidelines](https://apistylebook.stoplight.io/docs/url-guidelines) against my OpenAPI spec. Overall, I want to enforce the (`resource-names-plural`)[https://apistylebook.stoplight.io/docs/url-guidelines/#resource-names-plural] rule, but I do have a few exceptions that I'm trying to use overrides for.

One example is the `/v1/user/me` endpoint. This is simple, as I added the following to my Spectral configuration and get the desired result:

```yaml
overrides:
  - files:
      - "**#/paths/~1v1~1users~1me"
    rules:
      resource-names-plural: "off"

```

But I have another endpoint that is `/v1/comments/{uuid}/context` (notice the parameter with the brackets). I cannot get the override to match. I've tried:

```yaml
overrides:
  - files:
      - "**#/paths/~1v1~1users~1me"
      - "**#/paths/~1v1~1comments~1{uuid}~1context"
    rules:
      resource-names-plural: "off"
```

…but it won't suppress the rule for that endpoint. The problem seems to be with the brackets. If I remove them in both the OpenAPI file and my rule (changing the rule to match `**#/paths/~1v1~1comments~1uuid~1context`), it matches correctly and I get the desired result.

Is there a trick to matching the brackets? My guess is that this is a pretty common flow and I'm just missing something.

Thanks!

**To Reproduce**

1. Generate an OpenAPI document with a path that includes brackets
2. Enable the `resource-names-plural` rule
3. Add an override to suppress the rule for the path with brackets
4. Run the CLI

**Expected behavior**
Should pass without any warnings or errors

**Screenshots**
<img width="784" alt="Screenshot 2024-09-10 at 11 37 14 AM" src="https://github.com/user-attachments/assets/bc3c719c-0ce0-4c74-b1ec-4bde285d375c">\
