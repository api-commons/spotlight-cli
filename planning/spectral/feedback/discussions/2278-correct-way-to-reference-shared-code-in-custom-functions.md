---
number: 2278
title: "Correct way to reference shared code in custom functions?"
category: "Q&A"
author: "rtkcthomson"
created: "2022-09-15T17:04:54Z"
upvotes: 2
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2278"
---

# Correct way to reference shared code in custom functions?

Hello,

Is there a correct way to reference shared Javascript code between custom Spectral rule functions? We have some shared functions used in multiple custom Spectral rule functions that is in the `functions` directory beside the `.js` functions they are used in, normal `import ... from` statement. This works fine when we use the spectral-cli to execute the validation. However when we use the Visual Studio Code Spectral plugin (https://github.com/stoplightio/vscode-spectral) it fails to load the supporting `.js` files successfully producing an error of the form:

```
An error occurred while validating document <file_being_validated>: Unable to read ruleset at <path_to_ruleset_directory>/<spectral_ruleset_filename>. Error: Could not load <path_to_ruleset_directory>/functions/validationUtils (imported by <path_to_ruleset_directory>/functions/<custom_function_filename>): ENOENT: no such file or directory, open '<path_to_ruleset_directory>/functions/validationUtils'
```

There is a <path_to_ruleset_directory>/functions/validationUtils.js file.

Thanks in advance!
