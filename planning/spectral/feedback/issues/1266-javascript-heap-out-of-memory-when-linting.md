---
number: 1266
title: "JavaScript heap out of memory when linting"
state: "closed"
labels: ["t/bug"]
author: "jboxman"
created: "2020-06-30T17:03:45Z"
updated: "2021-04-02T06:40:25Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1266"
---

# JavaScript heap out of memory when linting

**Describe the bug**

spectral lint -v tmp/openshift-openapi-spec-4.5.0-20200629.json
Found 81 rules (65 enabled)
Linting /Users/jasonb/Self/work/gen-api-docs/tmp/openshift-openapi-spec-4.5.0-20200629.json
OpenAPI 2.0 (Swagger) detected

<--- Last few GCs --->

[42586:0x1045ed000]    46966 ms: Scavenge 2041.6 (2050.3) -> 2040.8 (2050.6) MB, 1.5 / 0.0 ms  (average mu = 0.112, current mu = 0.004) allocation failure
[42586:0x1045ed000]    48339 ms: Mark-sweep 2041.7 (2050.6) -> 2040.9 (2050.3) MB, 1370.9 / 0.0 ms  (average mu = 0.060, current mu = 0.004) allocation failure scavenge might not succeed
[42586:0x1045ed000]    48344 ms: Scavenge 2041.8 (2050.3) -> 2041.0 (2050.6) MB, 2.3 / 0.0 ms  (average mu = 0.060, current mu = 0.004) allocation failure


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x10123d725 node::Abort() (.cold.1) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
 2: 0x10009dcd9 node::Abort() [/Users/jasonb/.config/nvm/14.3.0/bin/node]
 3: 0x10009de3f node::OnFatalError(char const*, char const*) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
 4: 0x1001d9d37 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
 5: 0x1001d9cd7 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
 6: 0x10036c805 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
 7: 0x10036e09a v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
 8: 0x100369ff5 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
 9: 0x100367a7e v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
10: 0x100374dba v8::internal::Heap::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
11: 0x100374e41 v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
12: 0x100341227 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationType, v8::internal::AllocationOrigin) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
13: 0x1006a7b68 v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [/Users/jasonb/.config/nvm/14.3.0/bin/node]
14: 0x1009f3819 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/Users/jasonb/.config/nvm/14.3.0/bin/node]
15: 0xe8f80ba3cb4
16: 0xe8f80b89312
fish: 'spectral lint -v tmp/openshift-…' terminated by signal SIGABRT (Abort)

**To Reproduce**

1. spectral lint -v tmp/openshift-openapi-spec-4.5.0-20200629.json

**Expected behavior**

Not explode.

**Environment (remove any that are not applicable):**
 - Library version: 5.4.0
 - OS: OS X 10.15.3

**Additional context**

The OpenShift OpenAPI spec is 11MB, so I need to upload it somewhere so it can be reproduced.
