---
number: 2201
title: "How to display the openapi file name in custom function?"
category: "General"
author: "JGPrakash"
created: "2022-07-06T11:53:10Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2201"
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
