---
number: 2336
title: "Error #1: Invalid ruleset provided"
state: "closed"
labels: []
author: "ppoetsma"
created: "2022-11-10T16:56:04Z"
updated: "2022-11-16T11:06:48Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2336"
---

# Error #1: Invalid ruleset provided

**Describe the bug**
I'm trying to run Spectral in Windows Powershell but I cannot make it work.

**To Reproduce**

I followed the **npm** installation instruction at https://meta.stoplight.io/docs/spectral/b8391e051b7d8-installation

I created a `.spectral.yaml` file:

```
PS C:\Users\Me\Projects\repo> cat .spectral.yaml
extends: "spectral:oas"
```

Next run the command:

```
PS C:\Users\Me\Projects\repo> spectral lint myapi.yaml --verbose
Error running Spectral!
Error #1: Invalid ruleset provided
          at assertRuleset         …idation/index.js:14  throw new Error('In…
          at read                  …or/dist/index.js:22  (0, validation_1.as…
          at async migrateRuleset  …or/dist/index.js:33  const ruleset = awa…
          at async getRuleset      …ls/getRuleset.js:44  const migratedRules…
          at async lint            …linter/linter.js:16  const ruleset = awa…
```

**Expected behavior**
A report about my API file.

**Screenshots**
none

**Environment**
Windows 10

```
PS C:\Users\Me\Projects\repo> $PSVersionTable

Name                           Value
----                           -----
PSVersion                      7.3.0
PSEdition                      Core
GitCommitId                    7.3.0
OS                             Microsoft Windows 10.0.19043
Platform                       Win32NT
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0…}
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
WSManStackVersion              3.0
```

While troubleshooting this I installed more npm packages than needed (according to the install docs):

```
PS C:\Users\Me\Projects\repo> npm list -g --depth=0
C:\Users\Me\AppData\Roaming\npm
+-- @stoplight/spectral-cli@6.6.0
+-- @stoplight/spectral-core@1.15.1
+-- @stoplight/spectral-functions@1.7.1
+-- @stoplight/spectral-parsers@1.0.2
`-- @stoplight/spectral-rulesets@1.14.1
```

```
PS C:\Users\Me\Projects\repo> node.exe --version
v18.12.1
```
