---
number: 1956
title: "Expose Javascript function to load custom ruleset from file"
state: "closed"
labels: ["enhancement", "released"]
author: "ivangsa"
created: "2021-11-15T15:10:14Z"
updated: "2024-10-17T11:56:41Z"
comments: 33
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/1956"
---

# Expose Javascript function to load custom ruleset from file

**User story.**
As a **developer consuming spectral-core from javascript**, I can **load custom ruselet from yml files**, so that I can use them programatically on a microservice.

**Is your feature request related to a problem?**
I'm trying to use spectral-core 6 from javascript code and I'm not able to programatically load rulesets from yml files.
Loading files as yml files doesn't work as it doesn't resolve functions (like truthy, falsy...) and all I get are string properties...

Digging in spectral-core source code there is a function for reading files is included in spectral-cli but that function is not exported as a type.d.ts (or is it?).

https://github.com/stoplightio/spectral/blob/develop/packages/cli/src/services/linter/utils/getRuleset.ts#L36

Trying to import the function like this doesn't work:
```ts
import { getRuleset } from '@stoplight/spectral-cli/dist/services/linter/utils';
```
(I guess I can not import from _dist_ folder just like that)


**Describe the solution you'd like**

I would like spectral-core to expose `getRuleset` function for other applications to use it programatically
or even update `Spectral.setRuleset` signature so it can receive rules as string urls

```ts
Spectral.setRuleset(ruleset: RulesetDefinition | Ruleset | string): void
```

```ts
const fileUrl = '<local or http file url>';
const spectral = new Spectral();
spectral.setRuleset(fileUrl);
spectral.run(..);
```

**Additional context**
Add any other context or screenshots about the feature request here.
