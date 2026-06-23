---
number: 1796
title: "Running `spectral` 6.0.0 command without ` --ruleset` CLI option fails"
state: "closed"
labels: ["documentation"]
author: "DavidBiesack"
created: "2021-08-31T12:27:46Z"
updated: "2021-09-15T07:01:13Z"
comments: 8
reactions_total: 4
thumbs_up: 4
url: "https://github.com/stoplightio/spectral/issues/1796"
---

# Running `spectral` 6.0.0 command without ` --ruleset` CLI option fails

**Describe the bug**

Using 6.0.0 installed from the installation page, running lint returns an error `No ruleset has been found`


**To Reproduce**
```bash
# Assuming user has write access to /usr/local/bin ....
$ curl -L https://raw.github.com/stoplightio/spectral/master/scripts/install.sh | sh
$ spectral --version
6.0.0
$ head -1 openapi.yaml
openapi: 3.1.0
$ type spectral
spectral is a tracked alias for /usr/local/bin/spectral
$ spectral lint openapi.yaml
spectral lint openapi.yaml
No ruleset has been found. Please provide a ruleset using the --ruleset CLI argument, or make sure your ruleset file matches .?spectral.(js|ya?ml|json)
```

**Expected behavior**

As per the [doc page](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg1-spectral-cli#using-a-ruleset-file) , use the default ruleset (i.e. `spectral:oas` in this case)

> **Using a Ruleset File**
>If you don't specify a ruleset file with the --ruleset parameter, the Spectral CLI will look for a ruleset file called .spectral.yml, .spectral.yaml, or .spectral.json in the current working directory. If no ruleset is specified and no default ruleset file is found, the built-in rulesets will be used.

**Environment:**

 - spectral CLI 6.0.0
 - OS: Mac OS
