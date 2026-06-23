---
number: 2314
title: "no-script-tags-in-markdown fenced code block false positive?"
category: "Q&A"
author: "jbend"
created: "2022-10-20T13:34:17Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2314"
---

# no-script-tags-in-markdown fenced code block false positive?

This OpenAPI rule flags a <script> tag in a fenced code block in our documentation as a warning, for example:

```html <script src=\"https://unpkg.com/xdomain@0.8.2/dist/xdomain.min.js\" slave=\"https://api.example.com/v1/proxy.html\"></script>```

This generates a "Markdown descriptions must not have "<script>" tags."

I have tried using &lt;script&gt; but they do not seem to render correctly, they show the actual "&lt;". 

It is certainly not unreasonable to think a <script></script> example would be used in a code block...

https://www.w3schools.com/tags/tag_script.asp

https://html.spec.whatwg.org/review-drafts/2020-01/#common-pitfalls-to-avoid-when-using-the-scripting-apis

Is this a bug in the rule?
