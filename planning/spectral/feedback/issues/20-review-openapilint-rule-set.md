---
number: 20
title: "Review OpenAPILint rule set"
state: "closed"
labels: []
author: "rossmcdonald"
created: "2018-10-02T13:51:52Z"
updated: "2018-12-11T06:06:16Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/20"
---

# Review OpenAPILint rule set

Below is a sample rule set provided by Aspect, who are using [this](https://github.com/braintree/openapilint). We should review the rules and identify any areas where our rule format may be insufficient:

```
{
  "rules": {
     "responses-custom": [
        {
        "rule": "Response definition names should not have an http method in them",
        "whenField": "$key",
        "whenPattern": "^(201|200)$",
        "thenField": "schema.$ref",
        "thenPattern": "^((?!([pP]ost|[gG]et|[pP]atch|[pP]ut|[dD]elete)).)*$"
        },
        {
        "rule": "Responses that are references must be of type object so they can easily be added to in the future",
        "whenField": "type",
        "whenPattern": "^((?!undefined).)*$",
        "thenField": "type",
        "thenPattern": "^object$"
        },
        {
        "rule": "Successful responses that are references must include a kind property and it must be non-empty",
        "whenField": "$key",
        "whenPattern": "^2*$",
        "thenField": "properties.kind",
        "thenPattern": "^(?!undefined).*$"
        },
        {
        "rule": "Non-empty responses must be of type object so they can easily be added to in the future",
        "whenField": "schema.type",
        "whenPattern": "^((?!undefined).)*$",
        "thenField": "schema.type",
        "thenPattern": "^object$"
        },
        {
        "rule": "Non-emtpy responses must include a kind property and it must be non-empty",
        "whenField": "schema.type",
        "whenPattern": "^((?!undefined).)*$",
        "thenField": "schema.properties.kind",
        "thenPattern": "^(?!undefined).*$"
        }
    ],
    "info-custom": [
        {
        "rule": "The info object must have a version property set to a specific value",
        "whenField": "version",
        "whenPattern": ".*",
        "thenField": "version",
        "thenPattern": "^2.0.0$"
        },
        {
        "rule": "License object must exist and contain a specific name value",
        "whenField": "license",
        "whenPattern": ".*",
        "thenField": "license.name",
        "thenPattern": "^License: Creative Commons Attribution 4.0 International Public License$" 
        },
        {
        "rule": "License object must exist and contain a specific url value",
        "whenField": "license",
        "whenPattern": ".*",
        "thenField": "license.url",
        "thenPattern": "^https://creativecommons.org/licenses/by/4.0/legalcode$" 
        },
        {
        "rule": "The info object must exist and contain a specific title property value and no trademark characters",
        "whenField": "title",
        "whenPattern": ".*",
        "thenField": "title",
        "thenPattern": "^Aspect Via .* REST API$"
        }
    ],
    "path-style":
        {
        "rule": "All paths must adhere to camel case.",
        "case": "camel"
        },
    "tags-style": {
        "rule": "All paths must have a tag and the tag name must follow a specific format"
        },
    "properties-style": {
		"rule": "All properties must adhere to camel case.",
		"case": "camel"
		},
    "properties-custom": [
        {
        "rule": "All id properties must be of type string",
        "whenField": "$key",
        "whenPattern": ".*[iI]d$",
        "thenField": "type",
        "thenPattern": "^(string)$"
        },
        {
        "rule": "All time properties must have a format of type date-time specified",
        "whenField": "$key",
        "whenPattern": ".*Time$",
        "thenField": "format",
        "thenPattern": "date-time"
        },
        {
        "rule": "All properties must have a non-empty example",
        "whenField": "type",
        "whenPattern": "^(?!(array|items|object)).*$",
        "thenField": "example",
        "thenPattern": "^(?!undefined).*$" 
        },
        {
        "rule": "All id properties must have a similar description format",
        "whenField": "$key",
        "whenPattern": "^.*[iI]d$",
        "thenField": "description",
        "thenPattern": "^Aspect-generated unique identifier for the .*$" 
        },
        {
        "rule": "Property names cannot be OpenAPI reserved words",
        "whenField": "description",
        "whenPattern": "^(?!.*\\b(deprecated)\\b).*$",
        "thenField": "$key",
        "thenPattern": "^(?!.*\\b(name|names|description|example|default|schema|response|responses|type|summary|parameters|format|items|array|object|string|integer|boolean|enum|required)\\b).*$"
        },
        {
        "rule": "All properties must exist in the API property dictionary",
        "whenField": "description",
        "whenPattern": "^(?!.*\\b(deprecated)\\b).*$",
        "thenField": "$key",
        "thenPattern": "^(acceptParms|account|accountControlItem|accountControlItems|accountControlQueryItems|acdInstanceId|acdInstanceIds|acdInstances|acdLogins|activeGreetingId|activateParms|active|agentFormulaSetIds|agentFormulaSets|allowAssignment|allowLeader|ani|apFormulaId|api|aps|artifacts|attach|attachmentCount|attemptTrackerEvents|bmp|body|callBackTime|callLegId|callType|callbackFlag|calldata|callsBusy|cancelParms|cancelType|channel|channelType|channels|chat|childObjectKeys|code|codes|color|conferenceInteractionId|conferenceParms|connectParms|consultParms|consultType|consultationInteractionId|contactAddress|contactDataCollection|contactDataKey|contactDataValue|contactEmail|contactList|contactListName|contactLists|contactName|contactRecords|contactType|content|contents|continuationToken|createdBy|creationTime|currentSize|customFieldsStringCollection|customInformation|customer|customerId|customers|datasetName|datasets|datasetType|dataType|date|dateRanges|days|defaultDate|defaultDateTime|defaultDuration|defaultFloat|defaultInteger|defaultString|delayStartDuration|deploymentId|detailStatuses|dialParms|dialType|digits|digitsParms|disconnectParms|displayName|disposeParms|dispositionId|dnis|duration|dynamicFilterName|eMailAddress|effectiveHireDate|ehubSessionId|email|emailAddress|emailTemplates|employeeExtraFieldTabs|employeeExtraFields|employeeFilter|employeeGroupClass|employeeGroupClassId|employeeGroupClassIds|employeeGroupClasses|employeeGroupFilter|employeeGroupId|employeeGroupIds|employeeGroupTreeId|employeeGroups|employeeIdentifier|employeeIdentifiers|employeeIds|employeeSelector|employeeSkill|employeeSkillIds|employeeSkills|employeeSuperGroupIds|employeeSuperGroups|employees|enabled|endPattern|endTime|entityName|entityType|error|errors|events|exclusionFilter|exclusionStartTime|exclusionType|executionStatus|exists|expirationTimeForAttemptTracker|externalRouteId|extraFieldFilter|extraFieldId|extraFieldIds|extraFieldTabId|extraFields|fastPathPostResponseCollection|fastPathRecord|fastPathRecordCollection|fastPathRecords|field|fieldKey|fieldValue|fields|filterName|firstName|fontColor|forwardCountAction|forwardProperties|forwardToMailbox|friendlyName|from|geoCode|greetingActive|greetingType|group|handle|hideInactiveEmployees|hireDateFilter|hitRate|holdCount|holdParms|htmlColor|id|ids|image|inactivityDelay|includeAcdLogins|includeAssociatedEmployeeGroups|includeEmployeeGroups|includeExtraFields|includeSkills|includeStates|initialState|initialWorkType|instantMessageAddress|interactionDataCollection|interactionId|interactionType|isAuthenticated|isMasked|jobName|jobs|jobStatus|jobType|key|keyHash|keyName|keyType|kind|label|lastBuildTime|lastExecutionTime|lastModifiedBy|lastModifiedTime|lastName|leader|list|listPenetration|listSaturation|listType|locale|location|logging|login|lookupKey|lookupValue|mailboxLimit|mailboxNumber|maximum|maximumDuration|maximumHoldTime|memo|message|messageCount|messageId|messageParms|messageSize|messageTime|minimum|minimumDuration|model|monitorParms|monitorType|monitoringId|monitoringStationId|multitaskingParms|newMessageCount|nextValidRecallTime|notReadyParms|notReadyType|notes|numberType|objectKeys|operator|orgId|organizationId|packages|parent|parentEmployeeGroupId|parentRecordingId|partialCodes|passcountPenetration|passcountSaturation|payload|penetration|perspectiveIds|perspectives|phone|phoneDialed|phoneNumber|pictureMask|pin|playMessageType|png|precision|preferredName|priority|priorityRange|progressStatus|projects|propertyName|propertyValue|publishedTime|purposeName|pushUrlParms|rank|readMessageCount|readyParms|reason|reasonId|recordFields|recordingId|recordingReasons|records|recordsAttempted|recordsAvailable|recordsInActive|rejectParms|relatedRecordingIds|replaceExisting|requestId|requireWrap|requiresMemo|respectFilterProfile|responseStatus|result|retrieveParms|routeaccessId|rows|rule|salesFlag|saturation|schedule|schemaVersion|scope|screenCaptureFileStatus|segmentDefinitionId|segmentDefinitionIds|segmentDefinitions|segmentFilter|selector|sendTextParms|sender|seniority|sentTime|sequenceNumber|service|services|sessionId|settings|shortName|signatureId|signedDownloadUrl|signedUploadUrl|site|size|skillFilter|skillId|skillIds|skills|sms|sortName|sortOrderType|speedDial|ssn|start|startDate|startDateTime|startTime|state|stateId|states|station|status|statusDescription|stop|stopDate|stopDateTime|stopTime|strategy|stream|subject|switch|systemExternal|systemExternals|takenWorkType|teamId|teamMembers|teamOwners|teamReference|teams|templateType|termDateFilter|terminateParms|terminationDate|text|timeOfAttempt|timeZoneId|timeZones|to|totalHoldTime|totalItems|totalMessagesForwarded|transactionId|transferParms|transferType|umId|unit|url|user|userDefined|userId|users|value|version|view|voiceFileStatus|voicemails|warningParms|warningType|windowsColor|workHandlers|workType|workTypeId|workTypes|wrapRequired)$"
        }
    ],
    "parameters-custom": [
        {
        "rule": "All non-header parameter names must be camel case",
        "whenField": "in",
        "whenPattern": "^(?!.*(header)).*$",
        "thenField": "name",
        "thenPattern": "(x-api-key|Authorization|^[a-z.]+([0-9]|([A-Z.0-9][a-z.0-9]+))*([A-Z.])?$)"
        },
        {
        "rule": "Only headers in the API header dictionary are allowed",
        "whenField": "in",
        "whenPattern": "header",
        "thenField": "name",
        "thenPattern": "^(Authorization|x-api-key|via-client-sessionid)$" 
        },
        {
        "rule": "Authorization header must have specific description",
        "whenField": "name",
        "whenPattern": "Authorization",
        "thenField": "description",
        "thenPattern": "^Authentication token with the value: 'Bearer {accessToken}', where\\n{accessToken} was returned from a call to the authorization endpoint.*$" 
        },
        {
        "rule": "Organization parameter must have specific description",
        "whenField": "name",
        "whenPattern": "organization",
        "thenField": "description",
        "thenPattern": "Name of a customer organization" 
        },
        {
        "rule": "x-api-key parameter must have specific description",
        "whenField": "name",
        "whenPattern": "x-api-key",
        "thenField": "description",
        "thenPattern": "Aspect-provided value used to track API endpoint usage" 
        },
        {
        "rule": "via-client-sessionid parameter must have specific description",
        "whenField": "name",
        "whenPattern": "^via-client-session[iI]d$",
        "thenField": "description",
        "thenPattern": "Identifier representing a long-lived HTTP interchange between Aspect Via&reg; and an entity when the entity is a contact, external client application, or authenticated user. This interchange is called the streaming session. Streaming sessions are used for operations such as exchanging text messages and retrieving events related to user activity." 
        },
        {
        "rule": "Request definition names should not have an http method in them",
        "whenField": "in",
        "whenPattern": "body",
        "thenField": "schema.$ref",
        "thenPattern": "^((?!([pP]ost|[gG]et|[pP]atch|[pP]ut|[dD]elete)).)*$"
        },
        {
        "rule": "maxResults parameter must have specific description",
        "whenField": "name",
        "whenPattern": "maxResults",
        "thenField": "description",
        "thenPattern": "Maximum results. This is used to specify the maximum number of records to return in the result set. You can use this to set a result set limit that is less than the system/API-specific limit." 
        },
        {
        "rule": "All id parameters must be of type string",
        "whenField": "name",
        "whenPattern": ".*[iI]d$",
        "thenField": "type",
        "thenPattern": "string"
        }
    ],
    "no-query-operations": [
        {
        "rule": "Query parameters are not allowed in POST/PUT/PATCH operations",
        "whenField": "$key",
        "whenPattern": "^(post|patch|put)$",
        "thenField": "in",
        "thenPattern": "^((?!(query)).)*$"
        }
    ],
    "operation-response-codes": [
        {
        "rule": "GET response codes must not include update and delete codes",
        "whenHttpMethod": "get",
        "thenResponseCodePattern": "^((?!(409|204|201)).)*$"
        },
        {
        "rule": "DELETE response codes must not include GET/POST/PATCH codes",
        "whenHttpMethod": "delete",
        "thenResponseCodePattern": "^((?!(200|201)).)*$"
        }
    ],
    "operation-response-put": {
        "rule": "The PUT response payload must match the GET response payload"
    },
    "operation-response-post": {
        "rule": "The POST response payload must match the GET response payload"
    },
    "operation-response-patch": {
        "rule": "The PATCH response payload must match the GET response payload"
    }
  }
}

```
