---
number: 1851
title: "Spectral CLI lint does not emit errors when the linted file does not exist "
state: "closed"
labels: []
author: "hiddewie"
created: "2021-09-28T14:00:38Z"
updated: "2023-04-26T18:57:29Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1851"
---

# Spectral CLI lint does not emit errors when the linted file does not exist 

**Describe the bug**

When a linted file does not exist, no error is emitted, and the CLI exit code is 0.

**To Reproduce**


```
❰ ~/Projects ✔ ❱ mkdir temp
❰ ~/Projects ✔ ❱ cd temp/
❰ ~/Projects/temp ✔ ❱ yarn add @stoplight/spectral-cli
yarn add v1.22.5
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 134 new dependencies.
info Direct dependencies
└─ @stoplight/spectral-cli@6.0.0
info All dependencies
├─ @nodelib/fs.scandir@2.1.5
├─ @nodelib/fs.stat@2.0.5
├─ @nodelib/fs.walk@1.2.8
├─ @stoplight/json-ref-readers@1.2.2
├─ @stoplight/json-ref-resolver@3.1.3
├─ @stoplight/json@3.17.0
├─ @stoplight/lifecycle@2.3.2
├─ @stoplight/spectral-cli@6.0.0
├─ @stoplight/spectral-formats@1.0.1
├─ @stoplight/spectral-functions@1.2.1
├─ @stoplight/spectral-ref-resolver@1.0.1
├─ @stoplight/spectral-ruleset-migrator@1.5.0
├─ @stoplight/spectral-rulesets@1.2.4
├─ @stoplight/yaml-ast-parser@0.0.48
├─ @types/node@16.10.1
├─ @types/urijs@1.19.17
├─ abort-controller@3.0.0
├─ agent-base@6.0.2
├─ ansi-regex@5.0.1
├─ ansi-styles@4.3.0
├─ ast-types@0.14.2
├─ balanced-match@1.0.2
├─ blueimp-md5@2.18.0
├─ brace-expansion@1.1.11
├─ braces@3.0.2
├─ bytes@3.1.0
├─ chalk@4.1.1
├─ cliui@7.0.4
├─ color-convert@2.0.1
├─ color-name@1.1.4
├─ concat-map@0.0.1
├─ core-util-is@1.0.3
├─ data-uri-to-buffer@3.0.1
├─ deep-is@0.1.4
├─ degenerator@2.2.0
├─ depd@1.1.2
├─ dependency-graph@0.11.0
├─ emoji-regex@8.0.0
├─ eol@0.9.1
├─ escalade@3.1.1
├─ escodegen@1.14.3
├─ esprima@4.0.1
├─ estraverse@4.3.0
├─ esutils@2.0.3
├─ event-target-shim@5.0.1
├─ expression-eval@4.0.0
├─ fast-deep-equal@3.1.3
├─ fast-glob@3.2.5
├─ fast-levenshtein@2.0.6
├─ fast-memoize@2.5.2
├─ fastq@1.13.0
├─ file-uri-to-path@2.0.0
├─ fill-range@7.0.1
├─ fs-extra@8.1.0
├─ ftp@0.3.10
├─ get-caller-file@2.0.5
├─ get-uri@3.0.2
├─ glob-parent@5.1.2
├─ graceful-fs@4.2.8
├─ has-flag@4.0.0
├─ http-errors@1.7.3
├─ http-proxy-agent@4.0.1
├─ https-proxy-agent@5.0.0
├─ iconv-lite@0.4.24
├─ immer@9.0.6
├─ inherits@2.0.4
├─ is-extglob@2.1.1
├─ is-fullwidth-code-point@3.0.0
├─ is-glob@4.0.2
├─ is-number@7.0.0
├─ isarray@0.0.1
├─ jsep@0.3.5
├─ json-schema-migrate@2.0.0
├─ json-schema-traverse@1.0.0
├─ json-schema@0.3.0
├─ jsonfile@4.0.0
├─ jsonpath-plus@6.0.1
├─ jsonpointer@4.1.0
├─ leven@3.1.0
├─ levn@0.3.0
├─ lodash.get@4.4.2
├─ lodash.set@4.3.2
├─ lodash.topath@4.5.2
├─ lru-cache@5.1.1
├─ merge2@1.4.1
├─ micromatch@4.0.4
├─ minimatch@3.0.4
├─ ms@2.1.2
├─ netmask@2.0.2
├─ nimma@0.1.3
├─ node-fetch@2.6.5
├─ optionator@0.8.3
├─ pac-proxy-agent@4.1.0
├─ pac-resolver@4.2.0
├─ picomatch@2.3.0
├─ proxy-agent@4.0.1
├─ proxy-from-env@1.1.0
├─ punycode@2.1.1
├─ queue-microtask@1.2.3
├─ raw-body@2.4.1
├─ readable-stream@1.1.14
├─ require-directory@2.1.1
├─ require-from-string@2.0.2
├─ reserved@0.1.2
├─ reusify@1.0.4
├─ run-parallel@1.2.0
├─ safer-buffer@2.1.2
├─ setprototypeof@1.1.1
├─ smart-buffer@4.2.0
├─ socks-proxy-agent@5.0.1
├─ socks@2.6.1
├─ source-map@0.6.1
├─ statuses@1.5.0
├─ string_decoder@0.10.31
├─ supports-color@7.2.0
├─ text-table@0.2.0
├─ to-regex-range@5.0.1
├─ toidentifier@1.0.0
├─ tr46@0.0.3
├─ universalify@0.1.2
├─ unpipe@1.0.0
├─ uri-js@4.4.1
├─ urijs@1.19.7
├─ utility-types@3.10.0
├─ webidl-conversions@3.0.1
├─ whatwg-url@5.0.0
├─ wolfy87-eventemitter@5.2.9
├─ word-wrap@1.2.3
├─ wrap-ansi@7.0.0
├─ xregexp@2.0.0
├─ y18n@5.0.8
├─ yallist@3.1.1
├─ yargs-parser@20.2.9
└─ yargs@17.0.1
Done in 9.02s.
❰ ~/Projects/temp ✔ ❱ echo 'extends: [ spectral:oas ]' > spectral.yaml
❰ ~/Projects/temp ✔ ❱ yarn spectral lint does-not-exist.yaml --ruleset spectral.yaml
yarn run v1.22.5
warning package.json: No license field
$ /home/hidde.wieringa/Projects/temp/node_modules/.bin/spectral lint does-not-exist.yaml --ruleset spectral.yaml
No results with a severity of 'error' or higher found!

Done in 0.62s.
```

**Expected behavior**

An error should be emitted

**Environment (remove any that are not applicable):**
- Library 6.0.0
- OS: Debian Buster
