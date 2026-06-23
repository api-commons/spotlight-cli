---
number: 2875
title: "How to use in code?"
category: "Q&A"
author: "tresorama"
created: "2026-01-19T10:59:37Z"
upvotes: 1
comments: 2
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2875"
---

# How to use in code?

How we can use it non in CLI but in code?  
Is there a quick start example copy-pastable?

I want to "pack" the validation/linting in a javascript function and be able to call it.

I expect something like this pseudo code
```ts
import {validate} from "@stoplightio/???"
import firstRuleset from "@stoplightio/XXX"

function validateMyDocument(document) {
  const result = validate(
    document,
    {
       ruleset: [
         firstRuleset
       ],
    }
   );
  console.log(result);
}
```

## ✅ Accepted answer — @tresorama

Replying to myself...

---

This validate an OpenAPI spec with ruleset `oas` from `@stoplight/spectral-rulesets`.  

**NOTE**: I tried using ruleset from `@stoplight/spectral-documentation` but my bundler (vite) cannot import it.

```bash
# install deps
pnpm add @stoplight/spectral-core @stoplight/spectral-rulesets

# this combo worked
@stoplight/spectral-core 1.20.0
@stoplight/spectral-rulesets 1.22.0
```

```ts
import Spectral from "@stoplight/spectral-core";
import { oas } from "@stoplight/spectral-rulesets";

type SpecJson = Record<string, any>;
type ValidateSpecOptions = {
  specJson: SpecJson,
};

export async function validateWithSpectral(options: ValidateSpecOptions) {
  try {
    const spectral = new Spectral.Spectral();
    spectral.setRuleset(new Spectral.Ruleset(oas));

    const result = await spectral.run(options.specJson);

    return {
      status: 'success',
      data: result
    };

  } catch (error) {
    return {
      status: 'error',
      data: {
        code: 'SPEC_VALIDATION_ERROR',
        errorObject: error,
      }
    };
  }
}
```
