---
number: 1676
title: "Linting API documents with $ref lines"
category: "Q&A"
author: "dwhayduk"
created: "2021-06-16T20:52:54Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1676"
---

# Linting API documents with $ref lines

I am trying to make a fairly simple custom linting ruleset that checks an API document against a list of denied buzzwords. The ruleset is defined like so:

```json
{
    "functions": ["noDeniedWordsAnywhere"],
    "rules": {
        "no-denied-words-anywhere": {
            "description": "Won't be used this way for the real linter, but can be used to check an entire API for denied words.",
            "message": "{{error}}",
            "severity": "error",
            "given": "$",
            "then": {
              "function": "noDeniedWordsAnywhere",
              "functionOptions": {
                  "field": "word"
              }
            }
          }
    }
}
```

This example has the root path passed in, but the plan is to extend this to only look in certain API sections. It calls the custom function shown below, which recursively searches every object along the path and checks every key and value against a dictionary of denied words, which is created in another node.

```js
/**
 * The entire API is being passed in, parse through all of it to check for denied words
 * @param {string} targetVal Path to recursively parse
 */
module.exports = function (targetVal, opts, paths) {
  const { field } = opts;
  const rootPath = paths.target !== void 0 ? paths.target : paths.given;
  const results = [];
  
  const deniedWordMap = require('../util/dictionary.js');
  // Comes from another node, but deniedWordMap is a map object that maps denied words to their
  // corresponding correct words. A simple mock map could be created to test this against a sample API

  function recursiveLint(objToLint, path) {
    if (typeof objToLint === 'object') {
      // Lint every path contained in this object
      for (const subObj in objToLint) {
        if (typeof subObj === 'string' || typeof subObj === 'number') {
          const pathCopy = [...path];

          pathCopy.push(subObj);

          // Compare keys to the denied list
          if (deniedWordMap.has(subObj)) {
            results.push({
              message: `The ${ field } ${ subObj } is denied; consider using ${ deniedWordMap.get(subObj) }.`,
              path: [...pathCopy],
            });
          }

          recursiveLint(objToLint[subObj], pathCopy);
        }
      }
    } else if (typeof objToLint === 'string') {
      // Compare value to the denied list
      if (deniedWordMap.has(objToLint)) {
        results.push({
          message: `The ${ field } ${ objToLint } is denied; consider using ${ deniedWordMap.get(objToLint) }.`,
          path: [...path],
        });
      }
    }
  }

  // Pass the root into this recursive function
  recursiveLint(targetVal, [...rootPath]);

  return results;
};
```

Because this function returns multiple error messages, the path to the error in question has to be specified as part of the error message structure. I can usually accomplish this by keeping track of the object names as I lint through each sub-object, but this method does not work whenever a line exists that uses the `$ref` keyword to reference another section of the API document.

The fix I had in mind was to detect whenever a `$ref` line came up and use the string on that line to define the new path. For example, with the line `$ref: "#/components/schemas/users"` the path would be redefined to `["components", "schemas", "users"]`. However, once the root path is passed into the custom rule function, I haven't found any way to specifically refer to the reference string.

Is there any way to retrieve this string from inside the custom function? Or is there any better approach to linting an API and ensuring that paths are properly referenced, even if the linter has to go through a `$ref` line to see certain components? Thanks!

## ✅ Accepted answer — @dwhayduk

Not sure if this is the best solution, but I did find a workaround. In the custom function, one of the parameters can be `otherValues` which contains additional information about the linting process. From that object, you can extract a document input which is basically the entire API document in string form. The beginning of such a function looks like this:

```js
module.exports = function (targetVal, opts, paths, otherValues) {
  const { field } = opts;
  const rootPath = paths.target !== void 0 ? paths.target : paths.given;

  const { documentInventory } = otherValues;
  const docString = documentInventory.document.input;

  // Rest of the function
}
```

With `docString`, I was then able to identify where the `$ref` keywords are before linting the API and plan accordingly. I would still welcome suggestions for a more preferred solution if there is one, because parsing the string of an entire API document during every rule function call doesn't feel very efficient.
