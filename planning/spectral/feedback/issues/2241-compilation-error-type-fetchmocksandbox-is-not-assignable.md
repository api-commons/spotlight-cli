---
number: 2241
title: "Compilation error Type 'FetchMockSandbox' is not assignable"
state: "closed"
labels: []
author: "LukeMccon"
created: "2022-08-15T04:35:13Z"
updated: "2022-08-16T03:52:52Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2241"
---

# Compilation error Type 'FetchMockSandbox' is not assignable

**Describe the bug**
When running `yarn test` on the latest develop branch (05ee443) I am receiving the error below

```
ERROR [compiler.karma-typescript]: packages/ruleset-migrator/src/__tests__/ruleset.test.ts(142,9): error TS2322: Type 'FetchMockSandbox' is not assignable to type 'Fetch | undefined'.
  Type 'FetchMockSandbox' is not assignable to type '(uri: string, opts?: RequestInit) => Promise<Response>'.
    Types of parameters 'init' and 'opts' are incompatible.
      Type 'import("/mnt/c/Users/Luke/Documents/Development/spectral/node_modules/@types/node-fetch/index").RequestInit | undefined' is not assignable to type 'RequestInit | undefined'.
        Type 'import("/mnt/c/Users/Luke/Documents/Development/spectral/node_modules/@types/node-fetch/index").RequestInit' is not assignable to type 'RequestInit'.
          Types of property 'body' are incompatible.
            Type 'BodyInit | undefined' is not assignable to type 'BodyInit | null | undefined'.
              Type 'ReadableStream' is not assignable to type 'BodyInit | null | undefined'.

15 08 2022 00:28:37.969:INFO [compiler.karma-typescript]: Compiled 385 files in 16628 ms.
15 08 2022 00:28:37.971:ERROR [karma-server]: Error during file loading or preprocessing
undefined
15 08 2022 00:28:37.972:INFO [karma-server]: Karma v6.4.0 server started at http://localhost:9876/
15 08 2022 00:28:37.972:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
15 08 2022 00:28:37.996:INFO [launcher]: Starting browser ChromeHeadless
15 08 2022 00:28:38.135:INFO [Chrome Headless 104.0.5112.79 (Linux x86_64)]: Connected on socket QJPYGbSzQTZngoupAAAB with id 60342506
Chrome Headless 104.0.5112.79 (Linux x86_64) ERROR
  You need to include some adapter that implements __karma__.start method!
```

**To Reproduce**

1. run `yarn test` on develop (05ee443)
2. Observe compilation error

**Expected behavior**
TS compiles, tests pass

**Environment:**
 - Library version: develop @ (05ee443)
 - OS: Windows 10 (tried with dev container as well)
 - Browser: Chome headless 104.0.5112.79
 - Node: 17.4.0
