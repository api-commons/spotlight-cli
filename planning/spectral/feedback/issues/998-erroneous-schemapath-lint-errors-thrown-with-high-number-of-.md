---
number: 998
title: "Erroneous schemaPath lint errors thrown with high number of routes"
state: "closed"
labels: ["t/bug"]
author: "kylesykes"
created: "2020-03-02T19:00:12Z"
updated: "2021-08-12T17:39:03Z"
comments: 1
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/998"
---

# Erroneous schemaPath lint errors thrown with high number of routes

**Describe the bug**
We've been trying to figure out what's causing this behavior with our spec (which is pretty large, >400 nontrivial routes) and I _think_ I finally have a minimal example that reproduces it with Spectral 5.1.0.  

I think the underlying problem comes back around to the ref resolver that Spectral uses.  We've encountered other issues that all point back to the resolver from [intermittent failures being thrown](https://github.com/stoplightio/spectral/issues/870#issuecomment-576863976) to [failure to resolve circular references](https://github.com/stoplightio/spectral/issues/915) (both file references and object references) correctly.

It's worth noting that we haven't seen this issue with other rules (around 100~ custom rules defined at the moment) but it first started rearing it's head when we used the `schemaPath` function for the first time (using the exact rule that's in the example below).

The attached example has 99 different routes defined, and the file structure mimics references as they are done in our larger spec.  Each path object points to a response object which points at both `schema` and `examples` objects.  There is a single rule in `.spectral.yml` that lints the response example against it's schema.  The rule actually _does_ work (comment out the `name` field in one fo the examples and see what I mean), so I'm confident it's defined correctly.  However once the number of routes reaches some threshold, things bork out and I start seeing this error:
```
/Users/kyle.sykes/repos/contrib/stoplight_scale_schemaPath_issue/paths.yaml
 13:15  error  examples-response-stubs-are-valid-against-schema  "200" property does not exist
```
...which clearly isn't true when looking at `paths.yaml`.  For my machine, commenting out all but 59 of these simple routes is the threshold when the error starts being thrown, but that number likely varies for your machines.  With our real spec, the error occurs with the 30th route being uncommented.

**To Reproduce**
1. Download the attached example here: [stoplight_scale_schemaPath_issue.zip](https://github.com/stoplightio/spectral/files/4277304/stoplight_scale_schemaPath_issue.zip)
2. From the root of the example, run `spectral lint openapi.yaml`.  There are enough routes that it _should_ throw the error right away, but if it doesn't for some reason then continue to copy/increment the routes until the error is thrown.
3. Comment out some number of routes (it's probably different for each computer) until the error stops being thrown.

**Expected behavior**
I would expect Spectral to behave the same regardless of the number of routes being linted.  While we have a large number of routes, I wouldn't call it an absurd number of routes.

**Screenshots**
Error being thrown:
![image](https://user-images.githubusercontent.com/3663141/75707461-85e46e00-5c84-11ea-89bd-87db7b41ac6f.png)
After commenting out a number of the routes:
![image](https://user-images.githubusercontent.com/3663141/75707549-aad8e100-5c84-11ea-9789-b5a4e8534089.png)


**Environment (remove any that are not applicable):**
 - Library version: 5.1.0
 - OS: Mac OS Mojave

I actually wrote this example on a brand new laptop with everything (node, spectral) installed fresh this morning so I feel pretty confident it's not something specific to my machine (because I know there are caching issues with the underlying resolver also).

**Additional context**
We really appreciate all the work ya'll do, and we wanted to make sure we had an example that both a) helped you debug the issue and b) represented what our true spec looks like in practice to make sure our use case is considered when testing.  I hope this helps you debug the problem and figure out what's happening.

Thank you for everything!
