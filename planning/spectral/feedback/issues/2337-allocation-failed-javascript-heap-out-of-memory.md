---
number: 2337
title: "Allocation failed - JavaScript heap out of memory"
state: "closed"
labels: ["t/bug", "released", "p/high", "triaged", "c/spectral"]
author: "aerialist7"
created: "2022-11-11T12:28:39Z"
updated: "2023-05-23T23:06:14Z"
comments: 4
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2337"
---

# Allocation failed - JavaScript heap out of memory

**Describe the bug**
"Allocation failed - JavaScript heap out of memory" error occurs if the specification has a circular dependency.

**To Reproduce**

1. Use file **circular.yaml** with next content:
``` 
openapi: 3.0.0
info:
  title: API
  version: "1.1"
  contact: {}
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0
components:
  schemas:
    DictionaryItem:
      title: DictionaryItem
      required: 
        - id
      type: object
      properties:
        type:
          description: "Type of the dictionary items."
        originalName:
          type: string
          description: "Non-localized name of the dictionary item."
          example: "Male"
        status:
          type: string
          description: "Status of the dictionary item."
          example: "Active"
        name:
          type: string
          description: "Localized name of the dictionary item."
          example: "Male"
        id:
          type: string
          format: NCID
          description: "ID of the dictionary item."
          example: "9134308937713187972"
        item:
          type: array
          items:
            $ref: circular.yaml
          description: "List of dictionary items."
```
3. Run `spectral lint circular.yaml`
4. See error
```
<--- Last few GCs --->

[24896:000001C64D10C820]   234891 ms: Mark-sweep 7942.1 (8229.7) -> 7927.4 (8231.2) MB, 9575.6 / 0.0 ms  (average mu = 0.111, current mu = 0.004) allocation failure scavenge might not succeed
[24896:000001C64D10C820]   244411 ms: Mark-sweep 7943.6 (8231.2) -> 7928.9 (8232.7) MB, 9479.2 / 0.0 ms  (average mu = 0.061, current mu = 0.004) allocation failure scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 00007FF6F03A7A1F v8::internal::CodeObjectRegistry::~CodeObjectRegistry+114207
 2: 00007FF6F0336096 DSA_meth_get_flags+65542
 3: 00007FF6F0336F4D node::OnFatalError+301
 4: 00007FF6F0C6B2CE v8::Isolate::ReportExternalAllocationLimitReached+94
 5: 00007FF6F0C558AD v8::SharedArrayBuffer::Externalize+781
 6: 00007FF6F0AF8C7C v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1468
 7: 00007FF6F0B05929 v8::internal::Heap::PublishPendingAllocations+1129
 8: 00007FF6F0B028FA v8::internal::Heap::PageFlagsAreConsistent+2842
 9: 00007FF6F0AF5559 v8::internal::Heap::CollectGarbage+2137
10: 00007FF6F0AF3710 v8::internal::Heap::AllocateExternalBackingStore+2000
11: 00007FF6F0B18296 v8::internal::Factory::NewFillerObject+214
12: 00007FF6F084A765 v8::internal::DateCache::Weekday+1797
13: 00007FF6F0CF8FC1 v8::internal::SetupIsolateDelegate::SetupHeap+494417
14: 000001C64FAB6224
```

**Expected behavior**
Spectral shouldn't crash, Spectral should display **invalid-ref** error.

**Environment (remove any that are not applicable):**
 - Library version: 6.5.1
 - OS: Windows 10
 - Browser: Chrome 107.0.5304.107

**Additional context**
Reproducible in Node.js and any browser.
