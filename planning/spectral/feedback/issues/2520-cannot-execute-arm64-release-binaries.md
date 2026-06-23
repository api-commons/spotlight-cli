---
number: 2520
title: "Cannot execute arm64 release binaries"
state: "closed"
labels: ["t/bug"]
author: "klaude"
created: "2023-08-01T14:28:58Z"
updated: "2024-01-09T10:26:51Z"
comments: 3
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2520"
---

# Cannot execute arm64 release binaries

**Describe the bug**

Hello, Spectral folks. 👋 I receive the error "Error: Cannot find module '/snapshot/project/node_modules/tslib/tslib.js'" when executing the macos-arm64 binary at https://github.com/stoplightio/spectral/releases/tag/v6.10.0 . The full error is:

```
$ ./spectral-macos-arm64
pkg/prelude/bootstrap.js:1876
      throw error;
      ^

Error: Cannot find module '/snapshot/project/node_modules/tslib/tslib.js'
1) If you want to compile the package/file into executable, please pay attention to compilation warnings and specify a literal in 'require' call. 2) If you don't want to compile the package/file into executable and want to 'require' it from filesystem (likely plugin), specify an absolute path in 'require' call using process.cwd() or process.execPath.
    at createEsmNotFoundErr (node:internal/modules/cjs/loader:967:15)
    at finalizeEsmResolution (node:internal/modules/cjs/loader:960:15)
    at resolveExports (node:internal/modules/cjs/loader:488:14)
    at Module._findPath (node:internal/modules/cjs/loader:528:31)
    at Module._resolveFilename (node:internal/modules/cjs/loader:932:27)
    at Function._resolveFilename (pkg/prelude/bootstrap.js:1955:46)
    at Module._load (node:internal/modules/cjs/loader:787:27)
    at Module.require (node:internal/modules/cjs/loader:1012:19)
    at Module.require (pkg/prelude/bootstrap.js:1855:31)
    at require (node:internal/modules/cjs/helpers:102:18) {
  code: 'MODULE_NOT_FOUND',
  path: '/snapshot/project/node_modules/tslib/package.json',
  pkg: true
}

Node.js v18.5.0
```

The error happens on releases for 6.8.0 and 6.9.0 as well. I have also run into this error when running `spectral-alpine-arm64` from an Alpine container. I suspect the problem has been here since arm64 releases were published starting with the 6.8.0 release.

Also to note, I had to sign the macOS release via `codesign --sign - ./spectral-macos-arm64` to prevent my kernel from killing the program.

Thanks for looking and for the help!

**To Reproduce**

1. Download an arm64 release binary
2. Run `codesign` if you're on a mac
3. Execute the program
4. See error

**Expected behavior**

I expect to receive a usage statement since I'm not passing in any command arguments:

```
spectral <command>

Commands:
  spectral lint [documents..]  lint JSON/YAML documents from files or URLs

Options:
  --version  Show version number                                                                                                                                                                                     [boolean]
  --help     Show help
```

**Environment**

```
$ # My OS
$ sw_vers
ProductName:		macOS
ProductVersion:		13.5
BuildVersion:		22G74

$ # My kernel
$ uname -a
Darwin tome.local 22.6.0 Darwin Kernel Version 22.6.0: Wed Jul  5 22:22:52 PDT 2023; root:xnu-8796.141.3~6/RELEASE_ARM64_T8103 arm64

$ # My shell
$ zsh --version
zsh 5.9 (arm-apple-darwin21.3.0)
```

**Additional context**

I originally introduced arm64 builds in #2492. `pkg` execution worked fine locally on my macOS laptop. Looking at e9edd2efa0532d62de11a5cd7ebc95ec6bd139f4's [build](https://app.circleci.com/pipelines/github/stoplightio/spectral/9793/workflows/f8e6af01-eb87-4982-ba98-bcc33671a77f/jobs/37879), `pkg` executed with no error, but there are a large number of warnings in the build's [output](https://circleci.com/api/v1.1/project/github/stoplightio/spectral/37879/output/106/0?file=true&allocation-id=64c121f21b6c9428350a3d07-0-build%2FC71D872):

```
> Warning Entry 'main' not found in %1
  %1: /home/circleci/project/node_modules/@stoplight/spectral-formatters/package.json
  %2: /home/circleci/project/packages/cli/dist/services/output.js
> Warning Cannot find module '@stoplight/spectral-ruleset-bundler/presets/node' from '/home/circleci/project/packages/cli/dist/services/linter/utils'  in /home/circleci/project/packages/cli/dist/services/linter/utils/getRuleset.js
> Warning Cannot find module '@stoplight/spectral-ruleset-bundler/plugins/commonjs' from '/home/circleci/project/packages/cli/dist/services/linter/utils'  in /home/circleci/project/packages/cli/dist/services/linter/utils/getRuleset.js
> Warning Cannot find module '@stoplight/spectral-ruleset-bundler/plugins/stdin' from '/home/circleci/project/packages/cli/dist/services/linter/utils'  in /home/circleci/project/packages/cli/dist/services/linter/utils/getRuleset.js
> Warning Cannot find module '@stoplight/spectral-ruleset-bundler/plugins/builtins' from '/home/circleci/project/packages/cli/dist/services/linter/utils'  in /home/circleci/project/packages/cli/dist/services/linter/utils/getRuleset.js
> Warning Failed to make bytecode node18-arm64 for file /snapshot/project/packages/cli/dist/index.js
> Warning Failed to make bytecode node18-arm64 for file /snapshot/project/packages/cli/dist/commands/lint.js error (write EPIPE)
> Warning Failed to make bytecode node18-arm64 for file /snapshot/project/packages/cli/dist/errors/index.js
<snip>
```

There are 5,472 instances of these "Failed to make bytecode node18-arm64" warnings. I suspect this is the problem.

I was unable to reproduce the same build warnings following the same build steps in docker locally with CircleCI's `cimg/node:lts` container. The only differences between my setup and CircleCI's are the container runtime and that I don't have yarn dependencies cached. 

I can see if I can reproduce the same warnings and debug `pkg`, but if y'all have seen this before and know a quick fix then I'd be grateful. Thanks again for checking this out!
