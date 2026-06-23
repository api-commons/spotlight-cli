---
number: 1958
title: "Nested objects within schema properties"
state: "closed"
labels: ["chore"]
author: "tyler-mairose-sp"
created: "2021-11-16T15:07:45Z"
updated: "2021-11-16T15:13:33Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1958"
---

# Nested objects within schema properties

**The Issue**

I have a schema object that looks like the below json structure. I wanted to use the truthy function to make sure that each property in all parts of this object have an example.

I first tried the following rule to access properties at the first level, however when it gets to requesterIdentitySummary that field is a nested object and I want to check those properties as well.

```yaml
rules:
  my-rule-name:
    description: Schema properties must have an example.
    given: $.properties.*
    severity: error
    then:
      field: example
      function: truthy
```
I then thought I could add another given with the second level of properties like so, however to get all properties back to check n level deep this does not seem like the best way to go about it. 

```yaml
rules:
  my-rule-name:
    description: Schema properties must have an example.
    given: 
      - $.properties.*
      - $.properties.[*].properties.*
    severity: error
    then:
      field: example
      function: truthy
```
I then wrote a custom function that takes the whole schema object below and recursively checks if any objects exist in the properties and will call itself again when it finds another object. That code is below: 

``` javascript
// schema-properties-must-have-description:
// message: "{{error}}"
// given: $
// severity: error
// then:
//   function: schema-properties-field-check
//   functionOptions:
//     field: "description"
//     rule: 303

function parseYamlProperties(
  targetYaml,
  field,
  pathPrefix,
  errorResults,
  rule
) {
  if (targetYaml.properties != undefined || targetYaml.properties != null) {
    for (const [key, value] of Object.entries(targetYaml.properties)) {
      if (
        value.properties != undefined &&
        typeof value.properties == "object"
      ) {
        //console.log(`${key} has type object to parse further`)
        if (pathPrefix == null) {
          parseYamlProperties(value, field, key, errorResults, rule);
        } else if (pathPrefix == "properties") {
          parseYamlProperties(
            value,
            field,
            pathPrefix + "." + key,
            errorResults,
            rule
          );
        } else {
          parseYamlProperties(
            value,
            field,
            pathPrefix + ".properties." + key,
            errorResults,
            rule
          );
        }
      } else if (
        value.hasOwnProperty("type") &&
        value.type == "array" &&
        value.hasOwnProperty("items") &&
        value.items.type == "object"
      ) {
        if (pathPrefix == null) {
          parseYamlProperties(value.items, field, key, errorResults, rule);
        } else if (pathPrefix == "properties") {
          parseYamlProperties(
            value.items,
            field,
            pathPrefix + ".items." + key,
            errorResults,
            rule
          );
        } else {
          parseYamlProperties(
            value.items,
            field,
            pathPrefix + ".properties." + key + ".items",
            errorResults,
            rule
          );
        }
      } else {
        // console.log(
        //   `${key} is low level, ready to check for example. ${
        //     pathPrefix + ".properties." + key
        //   }`
        // );
        if (value.type == "array" && value.items != undefined && field == "example" && value.items.hasOwnProperty(field)) {
        } else {
          if (!value.hasOwnProperty(field) && value[field] == null) {
            if (
              pathPrefix.split(".")[pathPrefix.split(".").length - 1] ==
              "properties"
            ) {
              errorResults.push({
                message: `Rule ${rule}: The property ${key} must have a ${field}`,
                path: [...pathPrefix.split("."), key, field],
              });
            } else {
              errorResults.push({
                message: `Rule ${rule}: The property ${key} must have a ${field}`,
                path: [...pathPrefix.split("."), "properties", key, field],
              });
            }
          } else if (value.hasOwnProperty(field) && value[field] == null) {
            // console.log(
            //   `Rule ${rule}: The property ${key} must have a ${field} that is not null: : ${pathPrefix}.properties.${key}.${field}`
            // );

            if (
              pathPrefix.split(".")[pathPrefix.split(".").length - 1] ==
              "properties"
            ) {
              errorResults.push({
                message: `Rule ${rule}: The property ${key} must have a ${field} that is not null`,
                path: [...pathPrefix.split("."), key, field],
              });
            } else {
              errorResults.push({
                message: `Rule ${rule}: The property ${key} must have a ${field} that is not null`,
                path: [...pathPrefix.split("."), "properties", key, field],
              });
            }
          }
        }
      }
    }
  }
}

module.exports = (targetYaml, _opts, context, paths) => {
  const { field, rule } = _opts;
  //console.log(JSON.stringify(targetYaml));

  let results = [];

  // All Of - If the root level yaml contains the key allOf
  if (Object.keys(targetYaml)[0] == "allOf") {
    targetYaml.allOf.forEach((element, index) => {
      if (
        element.type != undefined &&
        element.type == "object" &&
        element.properties != undefined
      ) {
        for (const [key, value] of Object.entries(element.properties)) {
          if (!value.hasOwnProperty(field) && value[field] == null) {
            //console.log(`The property ${key} must have a ${field}`);
            results.push({
              message: `Rule ${rule}: The property ${key} must have a ${field}`,
              path: [`allOf`, parseInt(index), "properties", key, field],
            });
          }
        }
      }
    });
  }

  // Type Object - If the root level yaml is of type object
  if (
    Object.keys(targetYaml).includes("type") &&
    targetYaml.type == "object" &&
    targetYaml.properties != undefined
  ) {
    parseYamlProperties(targetYaml, field, "properties", results, rule);
  }

  // Type String
  if (Object.keys(targetYaml).includes("type") && targetYaml.type != "object") {
    if (!targetYaml.hasOwnProperty(field) || targetYaml[field] == null) {
      results.push({
        message: `Rule ${rule}: This field must have a ${field}`,
        path: [field],
      });
    }
  }

  return results;
};

```
I get the results I expect, I am wondering if there is a better way to get what I am looking for with JSONPath. I just recently started working with spectral/JSON Path so I am looking to the community to see if what I created is what is considered best practice?

The Schema Object File that I call the linter on:

```json
{
	"type": "object",
	"properties": {
		"id": {
			"type": "string",
			"description": "Id of the account activity itself",
			"example": "2c9180835d2e5168015d32f890ca1581"
		},
		"name": {
			"type": "string",
			"example": "2c9180835d2e5168015d32f890ca1581"
		},
		"created": {
			"type": "string",
			"format": "date-time",
			"example": "2017-07-11T18:45:37.098Z"
		},
		"modified": {
			"type": "string",
			"format": "date-time",
			"example": "2018-06-25T20:22:28.104Z"
		},
		"completed": {
			"type": "string",
			"format": "date-time",
			"nullable": true,
			"example": "2018-10-19T13:49:37.385Z"
		},
		"completionStatus": {
			"nullable": true,
			"type": "string",
			"enum": ["SUCCESS", "FAILURE", "INCOMPLETE", "PENDING"]
		},
		"type": {
			"type": "string",
			"example": "appRequest"
		},
		"requesterIdentitySummary": {
			"type": "object",
			"nullable": true,
			"properties": {
				"id": {
					"type": "string",
					"description": "ID of this identity summary",
					"example": "ff80818155fe8c080155fe8d925b0316"
				},
				"name": {
					"type": "string",
					"description": "Human-readable display name of identity",
					"example": "Identity Services"
				},
				"identityId": {
					"type": "string",
					"description": "ID of the identity that this summary represents",
					"example": "c15b9f5cca5a4e9599eaa0e64fa921bd"
				},
				"completed": {
					"type": "boolean",
					"description": "Indicates if all access items for this summary have been decided on"
				}
			}
		},
		"targetIdentitySummary": {
			"type": "object",
			"nullable": true,
			"properties": {
				"id": {
					"type": "string",
					"description": "ID of this identity summary",
					"example": "ff80818155fe8c080155fe8d925b0316"
				},
				"name": {
					"type": "string",
					"description": "Human-readable display name of identity",
					"example": "Identity Services"
				},
				"identityId": {
					"type": "string",
					"description": "ID of the identity that this summary represents",
					"example": "c15b9f5cca5a4e9599eaa0e64fa921bd"
				},
				"completed": {
					"type": "boolean",
					"description": "Indicates if all access items for this summary have been decided on"
				}
			}
		},
		"errors": {
			"nullable": true,
			"type": "array",
			"items": {
				"type": "string"
			},
			"example": ["identity.connector.ConnectorException: java.lang.InterruptedException: Timeout waiting for response to message 0 from client 57a4ab97-ab3f-4aef-9fe2-0eaf15c73d26 after 60 seconds."]
		},
		"warnings": {
			"nullable": true,
			"type": "array",
			"items": {
				"type": "string"
			},
			"example": ["Some warning, another warning"]
		},
		"items": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string",
						"description": "Item id",
						"example": "2725138ee34949beb0d6cc982d2d4625"
					},
					"name": {
						"type": "string",
						"description": "Human-readable display name of item"
					},
					"requested": {
						"type": "string",
						"format": "date-time",
						"description": "Date and time item was requested",
						"example": "2017-07-11T18:45:37.098Z"
					},
					"approvalStatus": {
						"type": "string",
						"enum": ["FINISHED", "REJECTED", "RETURNED", "EXPIRED", "PENDING", "CANCELED"]
					},
					"provisioningStatus": {
						"type": "string",
						"enum": ["PENDING", "FINISHED", "UNVERIFIABLE", "COMMITTED", "FAILED", "RETRY"],
						"description": "Provisioning state of an account activity item"
					},
					"requesterComment": {
						"type": "object",
						"nullable": true,
						"properties": {
							"commenterId": {
								"type": "string",
								"description": "Id of the identity making the comment",
								"example": "2c918084660f45d6016617daa9210584"
							},
							"commenterName": {
								"type": "string",
								"description": "Human-readable display name of the identity making the comment",
								"example": "Bobby Axelrod"
							},
							"body": {
								"type": "string",
								"description": "Content of the comment",
								"example": "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat."
							},
							"date": {
								"type": "string",
								"format": "date-time",
								"description": "Date and time comment was made",
								"example": "2017-07-11T18:45:37.098Z"
							}
						}
					},
					"reviewerIdentitySummary": {
						"type": "object",
						"nullable": true,
						"properties": {
							"id": {
								"type": "string",
								"description": "ID of this identity summary",
								"example": "ff80818155fe8c080155fe8d925b0316"
							},
							"name": {
								"type": "string",
								"description": "Human-readable display name of identity",
								"example": "Identity Services"
							},
							"identityId": {
								"type": "string",
								"description": "ID of the identity that this summary represents",
								"example": "c15b9f5cca5a4e9599eaa0e64fa921bd"
							},
							"completed": {
								"type": "boolean",
								"description": "Indicates if all access items for this summary have been decided on"
							}
						}
					},
					"reviewerComment": {
						"type": "object",
						"nullable": true,
						"properties": {
							"commenterId": {
								"type": "string",
								"description": "Id of the identity making the comment",
								"example": "2c918084660f45d6016617daa9210584"
							},
							"commenterName": {
								"type": "string",
								"description": "Human-readable display name of the identity making the comment",
								"example": "Bobby Axelrod"
							},
							"body": {
								"type": "string",
								"description": "Content of the comment",
								"example": "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat."
							},
							"date": {
								"type": "string",
								"format": "date-time",
								"description": "Date and time comment was made",
								"example": "2017-07-11T18:45:37.098Z"
							}
						}
					},
					"operation": {
						"type": "string",
						"enum": ["ADD", "CREATE", "MODIFY", "DELETE", "DISABLE", "ENABLE", "UNLOCK", "LOCK", "REMOVE"],
						"description": "Represents an operation in an account activity item"
					},
					"attribute": {
						"type": "string",
						"description": "Attribute to which account activity applies",
						"nullable": true,
						"example": "detectedRoles"
					},
					"value": {
						"type": "string",
						"description": "Value of attribute",
						"nullable": true,
						"example": "Treasury Analyst [AccessProfile-1529010191212]"
					},
					"nativeIdentity": {
						"nullable": true,
						"type": "string",
						"description": "Native identity in the target system to which the account activity applies",
						"example": "Sandie.Camero"
					},
					"sourceId": {
						"type": "string",
						"description": "Id of Source to which account activity applies",
						"example": "2c91808363ef85290164000587130c0c"
					},
					"accountRequestInfo": {
						"type": "object",
						"nullable": true,
						"properties": {
							"requestedObjectId": {
								"type": "string",
								"description": "Id of requested object",
								"example": "2c91808563ef85690164001c31140c0c"
							},
							"requestedObjectName": {
								"type": "string",
								"description": "Human-readable name of requested object",
								"example": "Treasury Analyst"
							},
							"requestedObjectType": {
								"type": "string",
								"enum": ["ACCESS_PROFILE", "ROLE"],
								"description": "Enum represented the currently supported requestable object types. Additional values may be added in the future without notice.",
								"example": "ACCESS_PROFILE"
							}
						},
						"description": "If an account activity item is associated with an access request, captures details of that request."
					},
					"clientMetadata": {
						"nullable": true,
						"type": "object",
						"additionalProperties": {
							"type": "string"
						},
						"description": "Arbitrary key-value pairs, if any were included in the corresponding access request item"
					},
					"removeDate": {
						"nullable": true,
						"type": "string",
						"description": "The date the role or access profile is no longer assigned to the specified identity.",
						"format": "date-time",
						"example": "2020-07-11T00:00:00Z"
					}
				}
			}
		},
		"executionStatus": {
			"type": "string",
			"enum": ["EXECUTING", "VERIFYING", "TERMINATED", "COMPLETED"]
		},
		"clientMetadata": {
			"nullable": true,
			"type": "object",
			"additionalProperties": {
				"type": "string"
			},
			"description": "Arbitrary key-value pairs, if any were included in the corresponding access request"
		}
	}
}
```
