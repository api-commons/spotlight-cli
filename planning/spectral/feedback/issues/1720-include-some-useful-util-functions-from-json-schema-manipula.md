---
number: 1720
title: "Include some useful util functions from JSON Schema manipulation as part of the `@stoplight/spectral` package"
state: "closed"
labels: []
author: "craicoverflow"
created: "2021-07-07T09:14:31Z"
updated: "2021-10-26T10:18:08Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1720"
---

# Include some useful util functions from JSON Schema manipulation as part of the `@stoplight/spectral` package

**User story.**
As a Spectral rule-set creator, I can use the JSON Schema util functions, so that I can create more powerful functions to use in my rule-set.

**Is your feature request related to a problem?**

As Spectral loads published NPM rule-sets as static assets from unpkg.com, I am unable to use external NPM dependencies within my custom functions without having a `package.json` file with those dependencies in my working directory.

A specific use-case where I encountered this need: I want to compare a schema definition to see if it has a specific set of properties - I do not care how it is composed, it could be composed using `allOf`. I wanted to use [json-schema-merge-allof](https://www.npmjs.com/package/json-schema-merge-allof) to merge the composed schema into one so that I could compare the actual structure with what I expect.

**Describe the solution you'd like**

Provide APIs in `@stoplight/spectral` to give users some useful functions to manipulate their schema within custom functions.

Here is a very simple example of how this could work:

```ts
import { mergeAllOf } from '@stoplight/spectral';

function isObject(targetVal: any) {
	const mergedTargetVal = mergeAllOf(targetVal)
	if (mergedTargetVal.type === 'object') {
       return;
    }
}
```
