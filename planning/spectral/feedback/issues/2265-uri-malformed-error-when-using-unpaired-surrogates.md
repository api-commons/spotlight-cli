---
number: 2265
title: "URI malformed error when using unpaired surrogates"
state: "closed"
labels: ["t/bug", "released", "p/medium"]
author: "andrecedik"
created: "2022-09-06T11:24:46Z"
updated: "2022-10-24T19:50:57Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2265"
---

# URI malformed error when using unpaired surrogates

**Describe the bug**
I was trying to create a rule to check the names of JSON properties for the use of unpaired surrogates in UTF-8 (see https://unicodebook.readthedocs.io/issues.html#strict-utf8-decoder) and when I ran spectral it failed checking them because of an error within the md5 package.

**To Reproduce**

1. Given this OpenAPI component:
  ```yaml
    components:
      schemas:
        DummyResponse:
          type: object
          properties:
            "\uD87E\uDC04-WORKS":
              type: string
            "\uD83D-DOESNT-WORK":
              type: string
  ```
2. Run spectral to validate the schema
3. See error: 
  ![Screenshot 2022-09-02 at 16 47 00](https://user-images.githubusercontent.com/5707341/188613724-1bdfbd2b-669b-4f50-9b96-c65eaee2b42b.png)

**Expected behavior**
Not sure what the best handling/output would be. 
To confirm this locally I've added a try-catch-block around the statement that calls the md5 function. 
```javascript
const decorateResultsWithFingerprint = (
  results: IRuleResult[],
  computeFingerprint: ComputeFingerprintFunc,
): IRuleResult[] => {
  for (const r of results) {
    try {
      Object.defineProperty(r, 'fingerprint', {
        value: computeFingerprint(r, md5),
      });
    } catch (error) {
      if(error instanceof URIError) {
        console.log(error.stack);
        continue;
      }
    }
  }

  return results;
};
```

This way spectral will finish testing all the (other) rules and outputs a stack trace for users to see where the problem lies. 

At this point, I'm not sure if this is the best handling of this use case. Maybe it's better to add a rule for returning an error message to the user. For this, a new function would need to be introduced that checks properties for the use of unpaired surrogates. 🤷 

I'm already adding a function to achieve this, so if this is the preferred way, just let me know.

**Environment (remove any that are not applicable):**
 - Library version: 6.5.0
 - OS: Mac OS Monterey (12.5.1)

**Additional context**
The bug stems from the fact that the md5 library uses the [encodeURIComponent-function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) to encode the strings and they clearly state on their website:
> Note that a [URIError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError) will be thrown if one attempts to encode a surrogate which is not part of a high-low pair
