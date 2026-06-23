---
number: 394
title: "oas core rule: $ref cannot have siblings"
state: "closed"
labels: ["enhancement"]
author: "philsturgeon"
created: "2019-07-19T14:38:03Z"
updated: "2019-08-27T21:18:15Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/394"
---

# oas core rule: $ref cannot have siblings

**User story.**
As a OpenAPI v2 or v3 user, I am completely unaware of the very subtle mentions that $ref cannot have siblings, and I would like Spectral to let me know about this so I don't write invalid specs.

**Is your feature request related to a problem?**

The OpenAPI v3.0 spec says that any properties sat next to a $ref SHALL be ignored, but some tooling does not ignore them. 

<img width="912" alt="Screen Shot 2019-07-19 at 16 10 55" src="https://user-images.githubusercontent.com/67381/61541476-029d4180-aa40-11e9-98e6-24c1ea476aaa.png">

This can lead to a spooky weird situation, where any tools ignoring those properties seem broken, when really they are abiding the specification. They any tools which do support the sibling properties look like they're working, but are actually going against the spec. 

Relying on accidental undefined behavior is not gonna be a good time.

**Describe the solution you'd like**
The argument could be made for error or warning. 

**error:** technically what you've written goes against the spec, and that is generally what we've been using to classify something as an error, buuuut...

**warn:** those extra properties are being ignored, which _should_ be fine with spec abiding tooling.

Dear Users, please let us know if it should be an error or a warning. 

If no clear winner happens in the comments, this can be implementers choice.

**Additional context**

Some folks think $ref siblings are allowed in OpenAPI v2.0 because the spec does not forbid it, but really I think they just forgot to mention it. OpenAPI v2.0 does say its a JSON Reference, and links to https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03, which also says siblings SHALL be ignored:

<img width="677" alt="Screen Shot 2019-07-19 at 16 19 14" src="https://user-images.githubusercontent.com/67381/61542054-18f7cd00-aa41-11e9-9e67-db05b1ee27b1.png">

Both OpenAPI v2.0 and v3.0 should be treated the same. But, interestingly, if OpenAPI v3.1 gets bumped up to JSON Schema Draft 8, then $ref siblings _will_ be allowed. That's probably another story for another time, but for now lets make both 2.0 and 3.0 do the same thing.
