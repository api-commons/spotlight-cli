---
number: 1515
title: "Missing `source` in result object"
state: "closed"
labels: ["t/bug"]
author: "stanleynguyen"
created: "2021-02-23T09:52:44Z"
updated: "2021-03-03T07:11:25Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1515"
---

# Missing `source` in result object

> For support questions, please use the [Stoplight Community Forum](https://community.stoplight.io). This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, the [Community Forum](https://community.stoplight.io) is a great place to start.
>
> **Please delete this section, any any sections below that you don't use, before creating the issue.**

**Describe the bug**
I'm not able to see an error in the list of issues. After a bit of debugging, I found that [this function](https://github.com/stoplightio/spectral/blob/08012e2c6f200b3decd005374bb5a66c800dfc90/src/cli/formatters/stylish.ts#L59) is leaving that error out due to missing source

![Screenshot 2021-02-23 at 17 46 37](https://user-images.githubusercontent.com/12974927/108826557-649c3080-75ff-11eb-8107-97b5abe9db3e.png)

**To Reproduce**

Given this custom function
```js
function errorStructure(schemaToBeTested, _, paths) {
  const results = [];
  if (schemaToBeTested.type !== "object") {
    results.push({
      message: "Error response must be a JSON object",
      path: paths.target,
    });
  }
  return results
}
```

Applied on an empty schema ref
```yaml
schema:
  $ref: ""
```

**Expected behavior**
The error should be displayed

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 5.8.1
 - OS: Mac
 - I'm using Spectral CLI

**Additional context**
Add any other context about the problem here.
