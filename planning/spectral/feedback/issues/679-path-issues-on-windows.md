---
number: 679
title: "Path issues on Windows"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2019-10-13T08:57:14Z"
updated: "2019-11-06T17:35:03Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/679"
---

# Path issues on Windows

**Describe the bug**

Spectral doesn't seem to cope well with backslashes in paths on Windows.

**To Reproduce**

1. Given this OpenAPI document '...'

**lib.yaml**
```yaml
openapi: 3.0.0

paths: 17

components:
  schema:
    Test:
      type: number
```

2. Run this CLI command '....'

**Powershell (Take 1)**
```ps1
PS C:> yarn spectral lint .\repro\lib.yaml
No results with a severity of 'hint' or higher found!

Done in 1.52s.
```

**Bash**
```bash
$ C:\node_modules\.bin\spectral lint ./repro/lib.yaml
OpenAPI 3.x detected

c:/repro/lib.yaml
 1:1  warning  api-servers       OpenAPI `servers` must be present and non-empty array.
 1:1    error  oas3-schema       should have required property 'info'
 1:1  warning  info-contact      Info object should contain `contact` object.
 1:1  warning  info-description  OpenAPI object info `description` must be present and non-empty string.

✖ 4 problems (1 error, 3 warnings, 0 infos, 0 hints)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

**Powershell (Take 2** _typing the full path, using forward slashes and fighting to not rely on shell auto completion (which would revert every slashes to backward ones)_ **)**
```ps1
PS C:\> yarn spectral lint ./repro/lib.yaml
yarn run v1.15.2
$ C:\node_modules\.bin\spectral lint ./repro/lib.yaml
OpenAPI 3.x detected

c:/repro/lib.yaml
 1:1  warning  api-servers       OpenAPI `servers` must be present and non-empty array.
 1:1    error  oas3-schema       should have required property 'info'
 1:1  warning  info-contact      Info object should contain `contact` object.
 1:1  warning  info-description  OpenAPI object info `description` must be present and non-empty
string.

✖ 4 problems (1 error, 3 warnings, 0 infos, 0 hints)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

**Expected behavior**
Current default Spectral user experience for a guy working on a Windows computer is pretty poor (not everyone use `bash` as his/her default shell on Windows).

Spectral should properly parse paths, even the ones that look weird to a *nix user :wink:

Although the issue is shown with Powershell, standard Windows cmd also exposes the same behavior.

**Environment (remove any that are not applicable):**
 - Library version: 4.2.0
 - OS: Windows 7
