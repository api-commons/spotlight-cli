---
number: 2604
title: "Misbehaviour with Regex and numbers"
state: "closed"
labels: ["triaged", "team/bad-news-bears"]
author: "jpdias"
created: "2024-03-27T17:42:06Z"
updated: "2024-05-03T20:46:02Z"
comments: 2
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2604"
---

# Misbehaviour with Regex and numbers

**Describe the bug**
When trying to create a custom rule using the built-in pattern function we faced some issues as it is not able to validate number values correctly. More concretely, if we have an regex like '^-1$|^[1-9]\\d*$' should not allow the numeric value -2 or bellow nor 0, and it accepts it. This problem does not happen if the value is set as string.

**To Reproduce**

If you create the unit test for this same regex you will get a pass while you should get a fail:
```
  it('given value matching the given match string regex without slashes, should return no error message', async () => {
    expect(await runPattern(-2, { match: '^-1$|^[1-9]\\d*$' })).toEqual([]);
  });
```

If you want you can also reproduce the same behaviour with a ruleset for any given value in a spec:

```
  function: pattern
  functionOptions:
    match: "^-1$|^[1-9]\\d*$"
```


**Expected behavior**
The pattern should work as expected and fail to validate negative values other than 1.


**Environment (remove any that are not applicable):**
 - Library version: Tested on both the develop branch as well as with version 1.18.0
 - OS: Tested on Ubuntu 22.04 and Mac OS 14.4

**Additional context**
I tried to understand the issue by running the validator code manually and change the tests but couldn't create a solution for the issue. I suspect something about expecting the entry value to be a String as it just does not work with numbers, but RegExp should handle both the same as in the following snippet in plain JS which works correctly as expected:
```
const regexPattern = '^-1$|^[1-9]\\d*$';
const regex = new RegExp(regexPattern);
const testStrings = [-1, "0", 1, "10", 100, -2, "abc"];
testStrings.forEach(testStr => {
    if (regex.test(testStr)) {
        console.log(`"${testStr}" matches the pattern.`);
    } else {
        console.log(`"${testStr}" does not match the pattern.`);
    }
});
```
