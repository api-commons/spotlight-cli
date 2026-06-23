---
number: 2556
title: "OneOf property is failing during OAS Schema Validation"
state: "closed"
labels: []
author: "RPS044"
created: "2023-11-30T05:40:37Z"
updated: "2023-11-30T11:05:41Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2556"
---

# OneOf property is failing during OAS Schema Validation

Hello Team,

Requesting you to please check this issue and help. Performing schema validation with oneOf, discriminator and mapping property in oas3.0.

Error:

{
"fault": {
"faultstring": "OASValidation MAM-EXT-SpecValidation with resource "oas://openapi.yaml": failed with reason: "[ERROR - An error occurred during schema validation - com.google.common.util.concurrent.UncheckedExecutionException: java.lang.NullPointerException.: []]"",
"detail": {
"errorcode": "steps.oasvalidation.Failed"
}
}
}
yaml file looks like:

image

image

Json payload looks like:

--data '{ "billableHeader": { "sourceSystem": "UPSTREAM_APP", "sourceTransactionType": "INVOICE", "eventType": "BATCH", "messageCreationDatetime": "20220811140203", "timeZoneCode": "GMT", "isBulkProcessing": true, "product": "Airlcl" },
