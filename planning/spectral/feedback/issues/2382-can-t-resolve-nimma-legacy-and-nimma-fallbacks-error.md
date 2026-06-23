---
number: 2382
title: "Can’t resolve nimma/legacy and nimma/fallbacks error"
state: "closed"
labels: []
author: "gituserjava"
created: "2023-01-13T03:42:52Z"
updated: "2023-01-13T14:26:41Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2382"
---

# Can’t resolve nimma/legacy and nimma/fallbacks error

I am getting the same error (for nimma/legacy and nimma/fallbacks) as reported on #2002, however I am getting it while starting the application using ‘npm run dev’ and it is not related to jest in anyway. How do I fix it? Please advise.

I use babel and webpack and Spectral version   is 6.6.0.

````
ERROR in /node_modules/@stoplight/spectral-core/dist/runner/runner. js
Module not found: Error: Can't resolve 'nimma/fallbacks' in 'C: \MySpace\workspaces\projects-dir\XXX\node_modules \@stop light\spectral-core\dist\runner'
/node_modules /@stoplight/spectral-core/dist/runner/runner. js 8:20-46
/node_modules/@stoplight/spectral-core/dist/runner/index. js
/node_modules/@stoplight/spectral-core/dist/spectral. js
/node_modules/@stoplight/spectral-core/dist/index. js ./src/plugins/vc/index. js
/src/index.js
multi . /src/index.js

````
