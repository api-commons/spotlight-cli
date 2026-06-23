---
number: 2144
title: "Peer dependency incorrectly met when using Yarn 3.x"
state: "closed"
labels: ["t/bug", "released", "CLI"]
author: "toymachiner62"
created: "2022-04-29T20:31:53Z"
updated: "2022-10-24T20:55:23Z"
comments: 3
reactions_total: 5
thumbs_up: 5
url: "https://github.com/stoplightio/spectral/issues/2144"
---

# Peer dependency incorrectly met when using Yarn 3.x

**Describe the bug**
I upgraded to yarn 3.x and now I have a project that is showing this error 

```sh
$ yarn install
➤ YN0000: ┌ Resolution step
➤ YN0002: │ @stoplight/spectral-cli@npm:6.3.0 doesn't provide rollup (p8903b), requested by @rollup/plugin-commonjs
➤ YN0000: │ Some peer dependencies are incorrectly met; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code
➤ YN0000: └ Completed
```

**To Reproduce**

Create a project with `@stoplight/spectral-cli` as a devDependency and run `$ yarn install` with the latest version of yarn.

**Expected behavior**
No peer dependency error

**Environment (remove any that are not applicable):**
 - OS: macOS
