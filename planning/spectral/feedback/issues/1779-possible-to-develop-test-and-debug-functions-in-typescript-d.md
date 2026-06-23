---
number: 1779
title: "Possible to develop, test and debug functions in TypeScript directly?"
state: "closed"
labels: []
author: "Fannon"
created: "2021-08-18T09:35:00Z"
updated: "2024-01-21T18:49:35Z"
comments: 4
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1779"
---

# Possible to develop, test and debug functions in TypeScript directly?

**User story.**
As a ruleset developer, I can use TypeScript to develop, test and debug my custom functions, so that I can benefit from the type safety and still use debug breakpoints in the functions.

**Is your feature request related to a problem?**
It already is possible to use TypeScript for writing functions, but when adding them to my ruleset, I need to include the compiled JavaScript functions in the `./dist` folder instead of the TS `./src` files.

```yaml
functionsDir: '../dist/src/functions/'
```

This has the drawback that I cannot properly test and debug my functions with TypeScript. As soon as I run the functions programmatically, they are not loaded from the TS sources anymore and all debug breakpoints in the TS functions are ignored. This is the case, because the spectral framework loads the ruleset functions from the compiled dist folder as JS files and not the original TypeScript functions.

This also has the downside that I need to continuously compile the TS to JS so the changes in the functions are applied (which is not a big problem, but you need to think of it).

**Describe the solution you'd like**

For development purposes it would be helpful to directly load the TypeScript files, e.g. using [ts-node](https://github.com/TypeStrong/ts-node). Of course, for a final published ruleset, this is not a good option and there we should definitely point to the compiled JS files instead of TS.

Since I don't know much about how the framework works internally, I'm not sure what a good solution could be. 
The framework itself is written in TypeScript, so maybe you already have a good solution in place?

I can also imagine working around this problem by creating unit-tests directly against the TS functions without calling them through spectral. Then debugging should work fine. For testing everything together, there are integration tests which call the functions through spectral.run(), but for those we have to compile first and cannot set debug breakpoints outside of the test-case.

**Additional context**

Here is a snippet out of a jest unit test that we use to run tests and debug the code:

```ts
      const spectral = new Spectral();
      spectral.registerFormat('oas3', isOpenApiv3);
      await spectral.loadRuleset(path.resolve('ruleset/core.yaml'))
      const result = await spectral.run(myOpenApiDocument)
```
