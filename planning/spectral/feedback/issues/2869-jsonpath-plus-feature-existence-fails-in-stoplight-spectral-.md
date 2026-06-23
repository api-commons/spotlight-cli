---
number: 2869
title: "JSONPath Plus feature existence fails in Stoplight Spectral but works in JSONPath Plus"
state: "open"
labels: []
author: "Laavanja19"
created: "2025-12-08T17:16:37Z"
updated: "2025-12-08T17:17:33Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2869"
---

# JSONPath Plus feature existence fails in Stoplight Spectral but works in JSONPath Plus

**Describe the bug**
Consider the given JSONPath expression:
```
$.store.book[?(@property)]
```
When this is used inside a Spectral ruleset, Spectral throws an error.
```
Error #1: '@property' is not defined
```
However, `@property` is a valid JSONPath Plus feature and in  JSONPath Plus  this expression  does not throw an error. Instead, it returns all the elements whose property is truthy.

To make this work in Spectral, the above JSONPath expression must be written as a function 
```
$.store.book[?(@property())]
```
Here, `book` is an array, so  the property value for each array element corresponds to its array index. However in  JavaScript, the condition if(0) evaluates to  **false**.

Because, JSONPath Plus features are implemented in JavaScript, the first element of the book array has a property value of 0, which is considered **falsy**. As a result,

- First array element is excluded.
- Only the remaining array elements are returned.
But the expected behavior is that all array elements should be returned, because each element does have a property (its index), and the filter is meant to check for the existence of a property—not its truthiness.

**To Reproduce**

1. JSON Document
```
{
    "store": {
        "book": [{
            "category": "reference",
            "author": "Nigel Rees",
            "title": "Sayings of the Century",
            "price": 8.95
        },
        {
            "category": "fiction",
            "author": "Evelyn Waugh",
            "title": "Sword of Honour",
            "price": 12.99
        },
        {
            "category": "fiction",
            "author": "Herman Melville",
            "title": "Moby Dick",
            "isbn": "0-553-21311-3",
            "price": 8.99
        },
        {
            "category": "fiction",
            "author": "J. R. R. Tolkien",
            "title": "The Lord of the Rings",
            "isbn": "0-395-19395-8",
            "price": 22.99
        }],
        "bicycle": {
            "color": "red",
            "price": 19.95
        }
    }
}
```
2. Ruleset
```
rules:
  price-not-greater-than-20:
    description: Price must not be greater than 20
    message: "The price '{{value}}' is greater than 20"
    severity: error
    given: "$.store.book[?(@property())]"
    then:
      function: falsy


```
3. Run this CLI command 
```
spectral lint data.json --ruleset ruleset.yaml
```
4.**Actual result**
```
 error  price-not-greater-than-20  The price '[object Object]' is greater than 20  store.book[1]
 error  price-not-greater-than-20  The price '[object Object]' is greater than 20  store.book[2]
 error  price-not-greater-than-20  The price '[object Object]' is greater than 20  store.book[3]

```
4. **Expected result**
```
 error  price-not-greater-than-20  The price '[object Object]' is greater than 20  store.book[0]
 error  price-not-greater-than-20  The price '[object Object]' is greater than 20  store.book[1]
 error  price-not-greater-than-20  The price '[object Object]' is greater than 20  store.book[2]
 error  price-not-greater-than-20  The price '[object Object]' is greater than 20  store.book[3]

```
**Environment (remove any that are not applicable):**
 - Spectral Version : 6.15.0
 - OS: [Ubuntu (Linux)]
