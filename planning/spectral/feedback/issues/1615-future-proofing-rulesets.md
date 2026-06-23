---
number: 1615
title: "Future-proofing rulesets"
state: "closed"
labels: ["enhancement", "breaking", "v6"]
author: "P0lip"
created: "2021-05-11T15:39:08Z"
updated: "2021-06-18T09:59:56Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1615"
---

# Future-proofing rulesets

The current design of rulesets is slightly troublesome.
The list of user-facing problems includes, but not limits itself to:

- no feature parity between CLI <-> browser usage of Spectral
- if custom functions are in use, the distribution becomes very tricky, as there's no way to generate a single file Spectral could import. This will likely become important for shared style guides
- versioning is somewhat troublesome
- they're vulnerable to breaking changes because there's no way they could lock a version of Spectral util, etc.
- difficult/impossible to use external libraries in a browser env
- not being able to specify your own format (if you're a CLI user)

The other side is us, engineers, that have quite a bit of burden to deal with:

- separate flows for CLI / browsers
- shenanigans needed to load a custom function

Moreover, current rulesets have a set of features that are very uncommonly used, but do add a notable amount of complexity:

- $refs (we do use them internally, but I doubt others do)
- `functionOptions` can be validated using a JSON schema

I could probably find more issues and flaws with the current state of things, but these are all that come to my mind at this very moment.

I'd like to propose a revision of the current design, that would address most of the issues described above, and at the same time would reduce the burden we have to deal with.

```json
{
  "rules": {
    "foo": {
      "then": {
        "function": "truthy"
      }
    }
  }
}
```

```json
{
  "extends": ["https://stoplight.com/spectral-rulesets/oas2.json"]
}
```

```js
import { isObject } from "https://cdn.jsdelivr.net/npm/lodash-es/+esm";
// obviously we could serve these from our own server / tenant server (on-prem installations)
import { truthy, schema } from "https://cdn.jsdelivr.net/npm/@stoplight/spectral-functions/+esm";
import { alphabetical } from "https://cdn.jsdelivr.net/npm/@stoplight/spectral-functions@1.0.4/+esm"; // you can stick to an older version if you want to for some reason. That's fine
import { oasRuleset } from "https://cdn.jsdelivr.net/npm/@stoplight/spectral-rulesets/+esm";
import { oas2 } from "https://cdn.jsdelivr.net/npm/@stoplight/spectral-formats/+esm";

import { verifyType } from './verifyType.mjs';

const $SCHEMA_DRAFT_2020_XX_REGEX = /^https?:\/\/json-schema.org\/draft\/2020-\d\d\/(?:hyper-)?schema#?$/;

const JSONSchemaDraft2020_XX = document => isObject(document) && "$schema" in document && $SCHEMA_DRAFT_2020_XX_REGEX.test(document.$schema);

export default {
  formats: [oas2, oas3],
  // this would no longer accept functions & functionOptions, but the rest would be almost the same (with the exception it does not support $refs, and functions have to be provided)
  extends: [oasRuleset],
  rules: {
    "valid-rule": {
      given: "$.info",
      then: {
        function: truthy, // instead of 'truthy'
      },
    },
    "only-new-json-schema": {
      formats: [JSONSchemaDraft2020_XX],
      given: "$..type",
      then: {
        function: verifyType,
      },
    }
  },
};
```

As you can see, the syntax is pretty much the same.
What's different is that you need to explicitly load formats or rulesets, but thanks to that you get control over versioning.
All the inheritance rules would be kept untouched, so `all/off/recommended`, etc. would all stay the same

Proposed file extension: `/^\.?spectral\.mjs$/`. `mjs` cause of Node.js.

##### Breaking Changes

- no custom functions in JSON/YAML rulesets
- custom functions need to be valid ESM

#### Benefits

With such an approach, any time we make a change to a ruleset or/and a function, we can quite easily roll it out to everyone.
If someone does want to stick to a particular version, it's as easy as specifying a version in the import.
Furthermore, most of the issues I listed above are solved.

#### Potential Challenges

Adjusting Studio Spectral ruleset form - I'll be able to do without any issues by working on ESTree rather than trying to dispatch JSON patches.
So basically, the flow would be:
- parse JS file with acorn
- work on the tree
- use `astring` and write contents to disk

Some migration for existing users.

#### Links

https://github.com/stoplightio/spectral/issues/845
https://github.com/stoplightio/spectral/issues/1329
https://github.com/stoplightio/spectral/issues/1561
