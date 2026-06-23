---
number: 2361
title: "Tyepscript spectral Rule definition import thowing error"
state: "open"
labels: ["triaged", "chore"]
author: "karpagavinayagamthangavelu"
created: "2022-12-05T15:41:57Z"
updated: "2024-05-31T12:34:42Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2361"
---

# Tyepscript spectral Rule definition import thowing error

### **Chore summary**
I am trying spectral ruleset validation with custom set of rules in expressJS with Typescript. When etending oas ruleset getting type error in extends. Getting the below error  


### code sample:
```
 import { oas } from "@stoplight/spectral-rulesets";
export const ruleset = {
    extends : [oas],
    formats: [oas3],
    rules: {
    "operation-operationId": "warn",
    "operation-operationId-unique":  "warn",
    "operation-description" :  "warn",
   ...
}


const spectral = new Spectral();
spectral.setRuleset(ruleset);
```
### type errors in vscode:
```
 type 'Readonly<{ documentationUrl?: string | undefined; description?: string | undefined; formats?: Format<void>[] | Formats<Format<void>> | undefined; parserOptions?: Partial<...> | undefined; overrides?: RulesetOverridesDefinition | undefined; aliases?: RulesetAliasesDefinition | undefined; } & Readonly<...>>'.ts(2345)
types.d.ts(65, 5): 'extends' is declared here.
```

### Run time error
When running via node, getting below error.

```
spectral.setRuleset(ruleset);
                      ~~~~~~~

  node_modules/@stoplight/spectral-core/dist/ruleset/types.d.ts:65:5
    65     extends: RulesetExtendsDefinition;
           ~~~~~~~
    'extends' is declared here.
```
### Findings:
I could see that the imported oas from spectral ruleset is a oas type definition and not a ruleset definition. Can anyone suggest which URL have the defined oas ruleset with typescript.

Thanks in advance
