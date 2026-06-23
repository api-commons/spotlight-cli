---
number: 2180
title: "Range attribute only showing { Start: [object], End: [object] } in JS implementation"
category: "Q&A"
author: "JosephSNewman"
created: "2022-06-09T16:53:33Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2180"
---

# Range attribute only showing { Start: [object], End: [object] } in JS implementation

I wrote a rule in JS and lint through JS code, but when I call the file in the cmd line the range attributes seem to be empty. did I miss something in the rule? Why does this happen? Thank you!

```
  {
    code: 'No-HTML-In-Description',
    message: 'Field descriptions should not inculde HTML Syntax description',
    path: [ 'info', 'description' ],
    severity: 0,
    range: { start: [Object], end: [Object] }
  },
```

## ✅ Accepted answer — @P0lip

If you use `console.log` to print out the result, you need to stringify the result prior to that, as `console.log` doesn't print objects that are deeply nested within other objects.
In other words, the update code could look as follows `console.log(JSON.stringify(results, null, 2));`
