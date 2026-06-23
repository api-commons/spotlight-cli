---
number: 2255
title: "Issues validating a yaml file against a schema"
category: "Q&A"
author: "DrakeEsdon"
created: "2022-08-25T19:09:54Z"
upvotes: 3
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2255"
---

# Issues validating a yaml file against a schema

Hi :wave:
Im trying to use spectral to validate/lint a yaml file using a JSON schema I've created. Using the discussion here: https://github.com/stoplightio/spectral/discussions/1409 this should be possible but things haven't been working quiet right.

I created this custom rule set
```
# .spectral.yml
rules:
  schema-rule:
    description: 'Must follow the schema'
    given: '$'
    then:
      function: schema
      functionOptions:
        schema:
          $ref: schema.json
```

 I had originally used ajv directly to see that an error should be returned when linting but when I use spectral with the following command
`spectral lint example.yaml -r .spectral.yaml `
I get
`No results with a severity of 'error' found!%  `

Next I thought something strange might be happening with the resolver so I copied the resolver from here: https://meta.stoplight.io/docs/spectral/eb68e7afd463e-spectral-in-java-script#how-to-use-a-custom-resolver

```
const path = require("path");
const fs = require("fs");
const { Spectral } = require("@stoplight/spectral-cli");
const { Resolver } = require("@stoplight/json-ref-resolver");

const customFileResolver = new Resolver({
  resolvers: {
    file: {
      resolve: ref => {
        return new Promise((resolve, reject) => {
          const basePath = process.cwd();
          const refPath = ref.path();
          fs.readFile(path.join(basePath, refPath), "utf8", (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
      },
    },
  },
});

const spectral = new Spectral({ resolver: customFileResolver });

// ... load document

// ... lint document - $refs and rules will be requested using the proxy
```
according to the page this custom resolver will resolve all remote file refs relatively to the current working directory. I should note here that all the files I'm working with are in the same location in the directory tree.

I then ran `spectral lint example.yaml -r .spectral.yaml --resolver example.cjs` and received an even stranger message:
`Error #1: Invalid value used as weak map key`

next when I added `allErrors: true` to the ruleset I recieved this error message :
`Error #1: must NOT have additional properties`

still confused I tried to add some additional logging to the source code. I tried to patch json-ref-readers and when I did I found that the file.js file is being loaded but it seems none of the code inside of the Promise is executing. this is also true for the http based resolver.

Is this still a feature that is expected to work? from what I can find this should be an option but I feel like I'm using the direct examples and I'm not getting very far. Any help is appreciated. Thanks for reading :slightly_smiling_face:
