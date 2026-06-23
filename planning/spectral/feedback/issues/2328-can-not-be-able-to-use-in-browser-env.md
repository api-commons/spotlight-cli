---
number: 2328
title: "can not be able to use in browser env"
state: "open"
labels: ["triaged", "chore"]
author: "shixiaobao17145"
created: "2022-11-04T03:05:45Z"
updated: "2024-05-31T12:34:38Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2328"
---

# can not be able to use in browser env

I'm trying to build the demo in doc for the browser following this example: https://meta.stoplight.io/docs/spectral/eb68e7afd463e-spectral-in-java-script#browser, but just can't be able to make it pass the build process. 

The error says:
> ERROR in ./node_modules/@stoplight/json-ref-readers/file.js 3:13-26
Module not found: Error: Can't resolve 'fs' in '/home...

>ERROR in ./src/test.mjs 2:0-87
Module not found: Error: Default condition should be the last one

I've made the simplest example online project here to reproduce these errors: https://stackblitz.com/edit/github-r4qodx , run `npm run build` will see the errors.


Since we have this example in the docs, it supposes to work in the browser, could you help to identify these issues? Thanks a lot!

The second probably can be fixed by referring to this articel:https://issueantenna.com/repo/bcakmakoglu/revue-draggable/issues/223
