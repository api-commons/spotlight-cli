---
number: 608
title: "Spectral should generate paths for unresolved documents"
state: "closed"
labels: ["t/bug"]
author: "P0lip"
created: "2019-09-29T22:13:08Z"
updated: "2019-12-19T00:09:12Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/608"
---

# Spectral should generate paths for unresolved documents

The case described in https://github.com/stoplightio/spectral/issues/572#issuecomment-536019623 got me me thinking.
Spectral strives to generate path pointing to an actual value
The caveat here is that we operate on a *resolved* document, so the produced path reflects the state of the resolved document, rather than the initial input.
In most cases this is not a big deal, since we still provide *fairly* accurate location of the error (we traverse the document up until the closest match is found), and the path itself is likely to be reasonable either, as it's the result of $ref resolving.

Now, if we take the ruleset provided in the comment and run it against the portion of document, the reported error has the following path: `["paths",  "/agreements", "get", "responses", "200", "headers"]` (note, the output path might be slightly vary in your case, as I modified the code a bit, and haven't pushed/released it yet, but should be quite similar). Looks reasonably, no?
Well, true, but the faulty part of the spec can be accessed under this path `["responses",  "GetAgreementsOk", "headers"]`, so shall we report it?
I'd say so, but providing such a path might be slightly misleading for some.
That said, I'm not really sure whether or not to address that potential quirk.
Both approaches have their pros and cons.
