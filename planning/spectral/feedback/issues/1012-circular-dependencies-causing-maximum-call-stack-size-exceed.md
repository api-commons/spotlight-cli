---
number: 1012
title: "Circular Dependencies causing \"Maximum call stack size exceeded\""
state: "closed"
labels: []
author: "bzmw"
created: "2020-03-13T15:49:10Z"
updated: "2020-03-27T17:16:17Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1012"
---

# Circular Dependencies causing "Maximum call stack size exceeded"

First noticed this in Studio, I would get a whole bunch of errors about circular dependencies.

Example of the errors I'm seeing in studio:
![image](https://user-images.githubusercontent.com/645758/76636632-c6af7300-651f-11ea-8a07-e04eae259f50.png)

Then I noticed that in studio not all of my `paths` are showing. When digging in deeper it's related to these circular dependencies.
Some of my models in spectral are even showing: "Error: Cannot use 'in' operator to search for '$ref' in [Circular]"

I tried to run my schema through spectral and get the following:
```
➜ spectral lint dist/Public.yaml
OpenAPI 3.x detected
Unable to run rule 'example-value-or-externalValue':
RangeError: Maximum call stack size exceeded

<--- Last few GCs --->

[91906:0x103ed1000]    84118 ms: Scavenge 2044.1 (2049.8) -> 2043.5 (2049.8) MB, 9.9 / 0.0 ms  (average mu = 0.361, current mu = 0.354) allocation failure
[91906:0x103ed1000]    84183 ms: Scavenge 2044.3 (2049.8) -> 2043.6 (2050.3) MB, 9.1 / 0.0 ms  (average mu = 0.361, current mu = 0.354) allocation failure
[91906:0x103ed1000]    84248 ms: Scavenge 2044.5 (2050.3) -> 2043.9 (2050.3) MB, 8.1 / 0.0 ms  (average mu = 0.361, current mu = 0.354) allocation failure


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x10074b079]
Security context: 0x20bcb81c08d1 <JSObject>
    1: _trace [0x20bc174aec49] [/usr/local/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-umd.js:~554] [pc=0x2ac1e7e855f7](this=0x20bc1fef6f71 <JSONPath map = 0x20bc62495fb9>,0x20bcd1a9ba91 <JSArray[0]>,0x20bc9c992b91 <JSArray[1]>,0x20bcd1a9bad1 <JSArray[1191]>,0x20bc299ebc41 <Object map = 0x20bc62484219>,0x20bc1feee839 <String[#8]: ...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x100b9a3fe node::Abort() (.cold.1) [/usr/local/bin/node]
 2: 0x100084a29 node::FatalError(char const*, char const*) [/usr/local/bin/node]
 3: 0x100084b51 node::OnFatalError(char const*, char const*) [/usr/local/bin/node]
 4: 0x1001841ed v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 5: 0x100184197 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 6: 0x10029b9cf v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/usr/local/bin/node]
 7: 0x10029cd54 v8::internal::Heap::MarkCompactPrologue() [/usr/local/bin/node]
 8: 0x10029a90d v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/bin/node]
 9: 0x1002993bf v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
10: 0x10029883e v8::internal::Heap::HandleGCRequest() [/usr/local/bin/node]
11: 0x1002704ab v8::internal::StackGuard::HandleInterrupts() [/usr/local/bin/node]
12: 0x1004d82f0 v8::internal::Runtime_StackGuard(int, unsigned long*, v8::internal::Isolate*) [/usr/local/bin/node]
13: 0x10074b079 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/usr/local/bin/node]
14: 0x2ac1e7e855f7
15: 0x2ac1e7e837c6
16: 0x2ac1e7e8856d
[1]    91906 abort      spectral lint dist/Public.yaml
```
[Public.yaml.zip](https://github.com/stoplightio/spectral/files/4330816/Public.yaml.zip)
