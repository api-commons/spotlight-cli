---
number: 1690
title: "--fail-severity option not working"
state: "closed"
labels: []
author: "DavidBiesack"
created: "2021-06-23T19:54:32Z"
updated: "2021-06-24T08:55:57Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1690"
---

# --fail-severity option not working

**Describe the bug**

```
spectral lint --fail-severity warning asyncapi.yaml
```

fails, as if it is an undefined option. Other options like `--format json --output /tmp/spectral-report.json` work.

**To Reproduce**

1. Given any valid OpenAPI or AsyncAPI doc
2. Run this CLI command `spectral lint --fail-severity warning asyncapi.yaml`
3. See error

```
spectral lint [documents..]

lint JSON/YAML documents from files or URLs

Positionals:
  documents  Location of JSON/YAML documents. Can be either a file, a glob or fetchable resource(s) on the web.                                              [array] [default: []]

Options:
      --version                  Show version number                                                                                                                     [boolean]
      --help                     Show help                                                                                                                               [boolean]
  -e, --encoding                 text encoding to use                                                                                                   [string] [default: "utf8"]
  -f, --format                   formatter to use for outputting results           [string] [choices: "json", "stylish", "junit", "html", "text", "teamcity"] [default: "stylish"]
  -o, --output                   output to a file instead of stdout                                                                                                       [string]
      --resolver                 path to custom json-ref-resolver instance                                                                                                [string]
  -r, --ruleset                  path/URL to a ruleset file                                                                                                               [string]
  -F, --fail-severity            results of this level or above will trigger a failure exit code            [string] [choices: "error", "warn", "info", "hint"] [default: "error"]
  -D, --display-only-failures    only output results equal to or greater than --fail-severity                                                           [boolean] [default: false]
      --ignore-unknown-format    do not warn about unmatched formats                                                                                    [boolean] [default: false]
      --fail-on-unmatched-globs  fail on unmatched glob patterns                                                                                        [boolean] [default: false]
  -v, --verbose                  increase verbosity                                                                                                                      [boolean]
  -q, --quiet                    no logging - output only                                                                                                                [boolean]
```

**Expected behavior**

not exit with help, but process the option

Note that this is also returning a 0 status code to the console, and also returns 0 if you pass another unknown option:

```
$ spectral lint --whoops src/asyncapi/asyncapi.yaml 
spectral lint [documents..]

lint JSON/YAML documents from files or URLs

Positionals:
  documents  Location of JSON/YAML documents. Can be either a file, a glob or fetchable resource(s) on the web.                                              [array] [default: []]

Options:
...
$ echo $?
0

**Environment (remove any that are not applicable):**
 - Library version: Spectal 5.9.1
 - OS: MacOS
 - Browser: n/a

**Additional context**
Add any other context about the problem here.
