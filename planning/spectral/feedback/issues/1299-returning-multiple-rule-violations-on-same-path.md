---
number: 1299
title: "Returning multiple rule violations on same path"
state: "closed"
labels: ["t/bug"]
author: "radicarl"
created: "2020-08-03T12:59:05Z"
updated: "2020-09-04T12:46:59Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1299"
---

# Returning multiple rule violations on same path

**Describe the bug**
We have a custom rule checking the naming convention in paths. The function checks if a path segment is 

- a fixed value like /my-resource
- a variable like {myVariable}
- or mixed like /my-resource-{myVariable}

We implemented a custom function and not just a complex regex to provide the developer with a exact error message. In Spectral 4.5.0 we could return the following messages for the path `/total_invalid/Path/{WithInvalid}/{pathPARAMS}`:

1. `total_invalid` must be in lower-kebab-case.
2. `Path` must be in lower-kebab-case.
3. `{WithInvalid}` must be in lowerCamelCase.
4. `{pathPARAMS}` must be in lowerCamelCase.

With 5.4.0 we get only the first message because of the elemination of violations of the same type on the same element. 

I read Issue #1030 and #920 and also read https://github.com/stoplightio/spectral/blob/develop/docs/guides/5-custom-functions.md#returning-multiple-results, but could not getting it work. 

The problem I have, is that rule and path (`/total_invalid/Path/{WithInvalid}/{pathPARAMS}`) is always the same, only the message changes. I tried to use only partial parts like `paths./total_invalid/`, `paths./total_invalid/Path/`, `paths./total_invalid/Path/{WithInvalid}` and `paths./total_invalid/Path/{WithInvalid}/{pathPARAMS}`. When I do this, I get the first and the forth expected message. 
I also tried random paths, but in this case I get only the first message. Looks like the path i proivde in the result of the function must exists in the oas document? Could not find anything about that in the documentation.

**To Reproduce**
.spectral.yml
```yaml
extends: spectral:oas

functions:
  - pathNaming

rules:
  naming-paths:
    description: "Path must be named in lower-kebab-case and path variables must be lowerCamelCase."
    message: "{{error}}"
    severity: 0
    given: $.paths
    then:
      field: "@key"
      function: pathNaming
```

funtions/pathNaming.js
```js
module.exports = (path, opts) => {
    const regexPathVariable = "\\{_?[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?\\}";
    const regexPath = "[a-z0-9]+(-[a-z0-9]+)*";
    const regexMixed = "^" + regexPath + "(-" + regexPathVariable + ")?$";
    let pathParts = path.split("/");
    pathParts.shift();

    let messages = [];
    let pathRebuild = "";
    for (let part of Object.values(pathParts)) {
        pathRebuild += "/" + part;
        if (part === "") {
            continue;
        }
        if (part.startsWith("{") && part.endsWith("}")) {
            if (!part.match("^" + regexPathVariable + "$")) {
                messages.push({
                    message: "`" + part + "` must be in lowerCamelCase",
                    path: ["paths", pathRebuild] },
                );
            }
        } else if (part.endsWith("}")) {
            if (!part.match(regexMixed)) {
                messages.push({
                    message: "In `" + part + "` the path part mus be lower-kebab-case and the path variable must be lowerCamelCase.",
                    path: ["paths", pathRebuild] },
                );
            }
        } else if (!part.match("^" + regexPath + "$")) {
            messages.push({
                message: "`" + part + "` must be in lower-kebab-case.",
                path: ["paths", pathRebuild] },
            );
        }
    }

    // if I return this, the message contains all four messages with different path array
    //return [{message: JSON.stringify(messages)}];
    return messages;
};
```

openapi.yml
```yaml
openapi: 3.0.2
info:
  title: My Title
  version: 0.1.0
  description: Lorem Impsum

servers:
  - url: https://example.org/api/

tags:
  - name: MyTag

paths:
   /total_invalid/Path/{WithInvalid}/{pathPARAMS}: {}
```
