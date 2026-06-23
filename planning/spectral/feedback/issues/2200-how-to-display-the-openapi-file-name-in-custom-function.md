---
number: 2200
title: "How to display the openapi file name in custom function?"
state: "closed"
labels: ["chore"]
author: "JGPrakash"
created: "2022-07-06T11:53:10Z"
updated: "2022-07-06T15:09:04Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2200"
---

# How to display the openapi file name in custom function?

If I implement some custom function in spectral linter, that works fine.

Now I want to show the openapi file name in the custom function return message. How to do it?

Example:
~~~~~~

"openapi-custom function.json" is the name of an OpenAPI file.

The Spectral lint command is "spectral lint openapi-custom-function.json"

Now I want to show the output to be like:

"This function works successfully in the openapi-custom-function.json file."

How can I achieve this?
