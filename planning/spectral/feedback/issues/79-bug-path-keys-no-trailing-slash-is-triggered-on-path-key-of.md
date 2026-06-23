---
number: 79
title: "Bug: path-keys-no-trailing-slash is triggered on path key of /"
state: "closed"
labels: ["t/bug", "released"]
author: "MikeRalphson"
created: "2019-01-16T15:00:48Z"
updated: "2019-02-21T04:15:06Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/79"
---

# Bug: path-keys-no-trailing-slash is triggered on path key of /

### **I'm submitting a...**
  - [x] bug report

### What is the current behavior?

The linter warning `path-keys-no-trailing-slash` is triggered on a `path` key of `/`which is incorrect as all `path` keys MUST start with a `/` character.

```
src/cli/bin/run lint .minimal.yaml
```

where `minimal.yaml` is:

```yaml
openapi: 3.0.0
info:
  title: ''
  version: ''
paths:
  /: {}
```

Results:

```
 ›   Warning: { name: 'path-keys-no-trailing-slash',
 ›      summary: 'given keys should not end with a slash.',
 ›      message: 'must not match the pattern \'/$\'',
 ›      path: [ 'paths', '/' ],
 ›      severity: 40,
 ›      severityLabel: 'warn' }
```

### What is the expected behavior?

This warning is **not** triggered.

### What is the motivation / use case for changing the behavior?

Eliminating spurious warnings.

### Please tell us about your environment:

  - Version: 0.0.0
  - Language: [TypeScript 3.2.2]


### Other information

`oas-kit` (the source of the default rules in `Speccy`, and hence the inspiration for a number of rules in `spectral`) uses an `omit` parameter to the `pattern` rule to chomp off the leading `/` character before comparison. Doubtless this could be done within the regex by someone with the appropriate skills.
