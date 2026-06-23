---
number: 1097
title: "“Cannot read property 'lastIndexOf' of undefined” when passing filename to spectral lint"
state: "closed"
labels: ["t/bug"]
author: "martinbean"
created: "2020-04-17T14:56:02Z"
updated: "2020-04-21T09:30:20Z"
comments: 16
reactions_total: 9
thumbs_up: 9
url: "https://github.com/stoplightio/spectral/issues/1097"
---

# “Cannot read property 'lastIndexOf' of undefined” when passing filename to spectral lint

**Describe the bug**
When specifying a path (like I have always done) with `spectral lint`, it throws the following error:

> Cannot read property 'lastIndexOf' of undefined

Even with verbose mode, no other information (such as file or line number) is printed.

However, if I run the same command with just a path (i.e. leaving the filename out), it works as intended.

**To Reproduce**

1. Run, i.e. `spectral lint reference/vsapi/openapi.yaml`
2. See error above printed in console
3. Run `spectral lint reference/vsapi`
4. See `No results with a severity of 'error' or higher found!` printed in console.

**Expected behavior**
The help text for `spectral lint` says:

```
Positionals:
  documents  Location of JSON/YAML documents. Can be either a file, a glob or fetchable resource(s) on the web.
```

But, it seems specifying a file breaks it (or at least it does in my case). Am I still supposed to be able to use a file path in Spectral v5? As the error doesn’t happen in Spectral v4.

**Environment:**
 - Library version: 5.3.0
 - OS: macOS Catalina (10.15.4)
