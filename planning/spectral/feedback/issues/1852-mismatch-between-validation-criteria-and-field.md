---
number: 1852
title: "Mismatch between validation criteria and field"
state: "closed"
labels: []
author: "aaronahearne"
created: "2021-09-28T14:07:49Z"
updated: "2023-03-23T15:57:47Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1852"
---

# Mismatch between validation criteria and field

> For support questions, please use the [Stoplight Discord Community](https://discord.com/invite/stoplight). This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, our Discord is a great place to start.
>
> **Please delete this section, any any sections below that you don't use, before creating the issue.**

**Describe the bug**

Validator points to "example" states "required" field must be an array. Conflicting messages and incorrect validation.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document from Transferwise found here: https://api-docs.wise.com/#recipient-accounts-requirements. Mainly regarding structures such as:

```
[
    {
        "type": "aba",
        "title": "Local bank account",
        "fields": [
            {
                "name": "Recipient type",
                "group": [
                    {
                        "key": "legalType",
                        "name": "Recipient type",
                        "type": "select",
                        "refreshRequirementsOnChange": false,
                        "required": true,
                        "displayFormat": null,
                        "example": "",
                        "minLength": null,
                        "maxLength": null,
                        "validationRegexp": null,
                        "validationAsync": null,
                        "valuesAllowed": [
                            {
                                "key": "PRIVATE",
                                "name": "Person"
                            },
                            {
                                "key": "BUSINESS",
                                "name": "Business"
                            }
                        ]
                    }
                ]
            }...
 ```
 
2. Run this CLI command 'spectral lint {{your_openapi.json_file}}' with the spectral.yaml containing "extends: "spectral:oas""

3. See error 

`oas3-valid-schema-example  schema is invalid: data/required must be array example.data[0].attributes.fields[0].group[0].example` 

points to the line number containing the "example" key, which should be valid as a string.

Changing the example field to an array returns the error:

`oas3-valid-schema-example  "example" property type must be string             example.data[0].attributes.fields[0].group[0].example` 

Which is pointing to the same line as the previous error which claimed it should be an array.

There is now no way to overcome this linting error.

**Expected behavior**
Line number points to correct key as stated in the error and validation message makes sense.

**Screenshots**

**Environment (remove any that are not applicable):**

**Additional context**
Add any other context about the problem here.
