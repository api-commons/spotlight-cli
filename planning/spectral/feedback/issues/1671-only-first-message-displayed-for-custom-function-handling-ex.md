---
number: 1671
title: "Only first message displayed for custom function handling external `$ref` files."
state: "open"
labels: ["triaged", "json-refs"]
author: "ifoukarakis"
created: "2021-06-12T16:35:38Z"
updated: "2024-05-31T12:35:06Z"
comments: 2
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1671"
---

# Only first message displayed for custom function handling external `$ref` files.

**Describe the bug**

Since AVRO validation is not yet supported, I'm trying to build a custom function that perform basic validation for AVRO schemas (i.e. validating schema, checking the casing of records and fields, missing docs etc)

While trying to implement a custom function for validating an external payload defined using `$ref`, I can't manage to report multiple messages. Instead I get the name of the file referenced and only one of the error cases.

**To Reproduce**
A sample project consists of the following files:

AVRO schema file (`user.avsc`):
```
{
    "name": "user",
    "type": "record",
    "namespace": "com.example.users",
    "fields": [
        {"name": "user_name", "type": "string"},
        {"name": "first_name", "type": "string"},
        {"name": "lastName", "type": "string"},
        {
            "name": "address",
            "type": {
                "type" : "record",
                "name" : "AddressUSRecord",
                "fields" : [
                    {"name": "streetaddress", "type": "string"},
                    {"name": "city", "type": "string"}
                ]
            }
        }
    ]
}
```

Async API specification (`user.yaml`)
```
asyncapi: '2.0.0'
info:
  title: User example
  version: '0.0.1'

servers:
  broker:
    url: localhost:9092
    protocol: kafka


# Each topic MUST be mapped to a channel
channels:
  users:
    description: New users are published on this topic
    publish:
      operationId: publish-users
      message:
        schemaFormat: 'application/vnd.apache.avro;version=1.10.1'
        contentType: 'application/vnd.apache.avro'
        payload:
          $ref: './user.avsc'
```

Spectral configuration (`.spectral.yml`):
```
extends: "spectral:asyncapi"
functions:
  [avrolint]

rules:
  my-avro-payload-validation:
    message: "{{error}}"
    given:
      - "$.channels.*.[publish,subscribe].message.payload" # Can be extended to include other cases for payload
    severity: error
    then:
      function: avrolint
      functionOptions:
        fieldType: snake
        recordType: pascal
```
and finally the function (`functions/avrolint.js`):
```
const avro = require('avro-js');
const fs = require('fs');


const RECORD = 'record';
const FIELD = 'field';

/**
 * Parses AVRO schema file (or object) and populate a list of schemas and fields.
 */
const parseAvro = (input) => {
    const schemas = []
    const fields = []
    
    avro.parse(input, {typeHook: function validationHook(schema) {
            schemas.push(schema);
            if(typeof schema === 'object' && schema !== null && schema.hasOwnProperty('fields')) {
                schema.fields.forEach(field => fields.push({field: field, parent: schema.name}));
            }
        }
    });

    return {schemas, fields}
}

module.exports = function (targetVal, opts, paths, ...args) {
    const {fieldType, recordType} = opts;
    const errors = [];
    const rootPath = paths.target !== void 0 ? paths.target : paths.given;

    try {
      const {schemas, fields} = parseAvro(targetVal);
      // Validate record casing
      schemas.filter(s => s !== undefined && s.hasOwnProperty('type') && s.type === 'record')
             .map(s => {
                const res = this.functions.casing(s.name, {type: recordType}, paths, ...args);
                if(res) {
                  return {
                    message: `Record ${s.name} must be in ${recordType} case`,
                    path: [...rootPath, RECORD, s.name]
                  }
                }
              })
             .filter(Boolean)
             .forEach(err => errors.push(err));


      // Validate field casing
      fields.map(item => {
                const {field, parent} = item;
                const res = this.functions.casing(field.name, {type: fieldType}, paths, ...args);
                if(res) {
                  return {
                    message: `Field ${parent.name}.${field.name} must be in ${fieldType} case`,
                    path: [...rootPath, RECORD, parent.name, FIELD, field.name]
                  }
                }
              })
             .filter(Boolean)
             .forEach(err => errors.push(err));

      // TODO: more validations
    } catch(err) {
      errors.push({message: `Invalid AVRO schema: ${err}`, path: [...rootPath]});
    }

    return errors;
};
```

Note that the same folder where I run the project contains a `package.json` with `avro-js` as a dependency. Here's my (really basic) `package.json`.
```
{
  "name": "spectral-issue",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "avro-js": "^1.10.2"
  }
}
```

Note that you have to install the dependency for the execution to work.

After running `spectral lint user.yaml`, I get output similar to 
```
AsyncAPI 2.x detected

/Users/me/spectral-issue/user.avsc
 1:1  error  my-avro-payload-validation  Record user must be in pascal case

/Users/me/spectral-issue/user.yaml
  1:1       warning  asyncapi-tags                              AsyncAPI object should have non-empty `tags` array.
  2:6       warning  asyncapi-info-contact                      Info object should contain `contact` object.                                          info
```


**Expected behavior**
I would expect that all messages are displayed.


**Environment (remove any that are not applicable):**
 - Library version: 5.9.1
 - OS: macOS Catalina 10.15.7

**Additional context**

I feel that the issue is in the value of `path`. I checked `path` value and noticed that it ends on the `payload` element of the YAML file.

I also checked other issues and considered other solutions, especially the ones described [in the documentation](https://meta.stoplight.io/docs/spectral/docs/guides/5-custom-functions.md#returning-multiple-results). However:
- Returning multiple results as a CSV can create a really big CSV list even for a medium-size AVRO schema, making it unreadable in the output.
- Multiple errors are returned, but seems the deduplication logic takes effect. I remember reading about it in #920 .
- Splitting the check into multiple checks won't work as:
   - The internal structure of the AVRO schema seems to not be parsed. Thus a separate rule cannot be used.
   - If I use a separate rules for fields and records, there may be multiple errors for them.
   - Multiple checks might mean parsing the AVRO schema multiple times.
- Returning only the first error will provide the end-user a bad experience.

Another option might be to disable deduplication logic for referenced files. I understand this approach might have side effects.
 
Perhaps there's some simpler approach that I could have taken, but didn't find something that looked matching in the documentation.

Thank you in advance for your time!

P.S. My JS skills are a bit rusty, so please forgive any bad practices in the custom function's code!
