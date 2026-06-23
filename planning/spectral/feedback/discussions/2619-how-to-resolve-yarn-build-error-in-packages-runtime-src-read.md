---
number: 2619
title: "how to resolve yarn build error in packages/runtime/src/reader.ts ?"
category: "General"
author: "DavidBiesack"
created: "2024-05-06T20:52:56Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2619"
---

# how to resolve yarn build error in packages/runtime/src/reader.ts ?

I've cloned this repo (`develop` branch) and I'm trying to build (on macOS) as per `CONTRIBUTING.md`:
```
4. Install the dependencies: `yarn`
5. Build Spectral: `yarn build`
```


but I get a compile error

```
$ yarn
...
$ yarn build
Done in 9s 961ms
packages/runtime/src/reader.ts:32:9 - error TS2739: Type 'AbortSignal' is missing the following properties from type 'AbortSignal': reason, throwIfAborted

32         requestOpts.signal = controller.signal;
           ~~~~~~~~~~~~~~~~~~


Found 1 error.

```

I'm using:

```bash
$ node --version
v16.19.1
$ yarn --version
3.5.0
```

How can I resolve this compiler error?

Thanks in advance
