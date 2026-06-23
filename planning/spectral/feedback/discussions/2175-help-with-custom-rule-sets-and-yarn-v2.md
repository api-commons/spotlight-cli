---
number: 2175
title: "Help with custom Rule sets and Yarn v2"
category: "Q&A"
author: "rayterrill"
created: "2022-06-04T21:05:12Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2175"
---

# Help with custom Rule sets and Yarn v2

hello! i'm a n00b to spectral and looking for a little help getting going with publishing and consuming specs with yarn. is there a best channels for this?

i tried to publish a yaml ruleset using the npm guide here: https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTky-sharing-and-distributing-rulesets#npm, which didnt quite work in consuming it into a project with yarn v2. backed up and built the actual example from https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTky-sharing-and-distributing-rulesets#npm, and it's basically the same error. publishing seems to work fine - it's consuming where i'm struggling.

in my consuming project, i've got this in my package.json:
```
{
  "name": "go-openapi",
  "packageManager": "yarn@3.2.1",
  "dependencies": {
    "@myco/spectral-test": "^0.0.1"
  }
}
```

and i've got a .spectral.yml in my repo:
```
extends: 
  - @myco/api-standards-linting
```

when i do: `spectral lint openapi.yaml`, i see:
```
Error running Spectral!
Error #1: Invalid ruleset provided
          at assertRuleset         …idation/index.js:14  throw new Error('In…
          at read                  …or/dist/index.js:20  (0, validation_1.as…
          at async migrateRuleset  …or/dist/index.js:31  const ruleset = awa…
          at async getRuleset      …ls/getRuleset.js:47  const migratedRules…
          at async lint            …linter/linter.js:16  const ruleset = awa…
```

## ✅ Accepted answer — @rayterrill

Pretty sure I tracked this down - looks like yarn v2 by default uses PnP mode - not node_modules which spectral seems to expect. Fixed by flipping yarn back into node_modules mode by adding this to my project's .yarnrc.yml:
```
nodeLinker: node-modules
```
