---
number: 2362
title: "Error when handling formats if json rulesets are extended"
state: "closed"
labels: ["t/bug", "released", "p/medium", "triaged", "c/spectral", "reviewed-medium"]
author: "jnsppp"
created: "2022-12-05T16:37:56Z"
updated: "2024-09-13T10:21:20Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2362"
---

# Error when handling formats if json rulesets are extended

**Error when handling formats if json rulesets are extended**

When using extended json rulesets, spectral is running into a type error. Running rulesets without the `extends` keyword individually works perfectly fine. This is a bug report for json rulesets only. YAML rulesets are working as expected.

**To Reproduce**

We are running spectral from nodejs as described in here: https://meta.stoplight.io/docs/spectral/eb68e7afd463e-spectral-in-java-script#load-rulesets-and-api-specification-files. 

```typescript
export const runSpectral = async (spec: any, ruleSetPath: string, ruleSetName: string): Promise<LintingResult> => {
    let result = LintingResult.OK;
    const contract = new Document(JSON.stringify(spec), parsers.Json);
    const spectral = new Spectral();
    const ruleset = await bundleAndLoadRuleset(path.join(__dirname, ruleSetPath), { fs, fetch });
    spectral.setRuleset(ruleset as Ruleset);

    await spectral.run(contract).then(results => {
        result = checkResults(results);
        if (result === LintingResult.ERROR) {
            console.log(`${ruleSetName} linting not successful\n`);
        } else if (result === LintingResult.WARNING) {
            console.log(`${ruleSetName} linting identified some warning. Please check manually\n`);
        } else {
            console.log(`${ruleSetName} linting successful\n`);
        }
    });
    return result;
};
```

When running rulesets individually, spectral runs and return the expected results. If extending a rulesets with a custom ruleset, e.g.:

`oas-spectral.json`

```json
{
    "extends": ["spectral:oas"],
    "rules": {
        "operation-tag-defined": "off",
        "info-contact": "off",
        "oas3-unused-component": "info",
        "oas3-valid-media-example": "off",
        "openapi-tags": "off"
    }
}
```

and `mqc-spectral.json` (this is the one, that is failing ❗️❗️❗️)

```json
{
   "extends": [
      "./oas-spectral.json"
   ],
    "rules": {
       ...
    }
}
```

we are running into the following error:


![spectral-type-error](https://user-images.githubusercontent.com/62057124/205689383-4d79fcb0-485c-480c-9868-ce9a13b7b54f.png)



**Expected behavior and how to fix**

When running spectral from JavaScript, it should be possible to use the `extends` keyword in custom json rulesets.

I invested some time to go through your code and I think I found the lines that are not correct. When changing https://github.com/stoplightio/spectral/blob/develop/packages/core/src/ruleset/rule.ts#L163-L167 to the following:

```javascript
       for (const format of this.formats) {
            if (formats.has(format)) {
                return true;
            }
        }
```

everything works as expected. (Changed the usage of `this` keyword) 👍🏻

**Screenshots**

![Screenshot 2022-12-03 at 11 16 03](https://user-images.githubusercontent.com/62057124/205691044-96da23b8-736e-4434-a469-acebc7ba9ba1.png)
![Screenshot 2022-12-03 at 11 18 00](https://user-images.githubusercontent.com/62057124/205690907-e57f5d2d-991d-4a52-b3b0-62ad6a00b178.png)


**Environment:**
 - Library versions:
 
    "@stoplight/spectral-core": "^1.15.2",
    "@stoplight/spectral-parsers": "^1.0.2",
    "@stoplight/spectral-ruleset-bundler": "^1.5.0",
    "@stoplight/spectral-runtime": "^1.1.2",
 
 - OS: macOS 12.2.1
 - Node version: any
 
 If you need further information, please let me know. 🚀
