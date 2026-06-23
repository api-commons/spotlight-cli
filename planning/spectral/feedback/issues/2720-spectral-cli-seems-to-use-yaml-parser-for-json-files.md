---
number: 2720
title: "Spectral-cli seems to use yaml parser for json files"
state: "open"
labels: []
author: "rudfoss-rr"
created: "2024-11-06T11:01:22Z"
updated: "2024-11-06T12:33:09Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2720"
---

# Spectral-cli seems to use yaml parser for json files

**Describe the bug**
Simply running the spectral-cli on a json file outputs `warning  parser                 Using tabs can lead to unpredictable results` for every line with indentation even though the [JSON Standard](https://www.json.org/json-en.html) indicates `\t` is valid whitespace.

**To Reproduce**

1. Linting this spec (note \t indentation):

```json
{
	"openapi": "3.0.1",
	"info": {
		"title": "API",
		"version": "v1"
	},
	"paths": {
		"/ping": {
			"get": {
				"tags": ["Ping"],
				"summary": "Simple ping endpoint that returns the server time and a short response.",
				"responses": {
					"200": {
						"description": "Response from a ping request",
						"content": {
							"text/plain": {
								"schema": {
									"$ref": "#/components/schemas/PingDto"
								}
							},
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/PingDto"
								}
							},
							"text/json": {
								"schema": {
									"$ref": "#/components/schemas/PingDto"
								}
							}
						}
					},
					"401": {
						"description": "Unauthorized, a valid JWT-token is required to use this endpoint.",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/DataplatformProblemDetails"
								}
							}
						}
					},
					"403": {
						"description": "Forbidden, user is not allowed to perform this action.",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/DataplatformProblemDetails"
								}
							}
						}
					}
				},
				"security": [
					{
						"Bearer": []
					}
				]
			}
		}
	},
	"components": {
		"schemas": {
			"DataplatformProblemDetails": {
				"type": "object",
				"properties": {
					"title": {
						"type": "string",
						"nullable": true
					},
					"status": {
						"type": "integer",
						"format": "int32",
						"nullable": true
					},
					"detail": {
						"type": "string",
						"nullable": true
					},
					"instance": {
						"type": "string",
						"nullable": true
					},
					"type": {
						"type": "string",
						"description": "The type is dynamically constructed from the base URI/DomainName/ProblemType",
						"nullable": true,
						"readOnly": true
					}
				},
				"additionalProperties": {},
				"description": "A domain specific version of the ProblemDetails class. All controllers that return non-successful (4xx, 5xx) responses should return an instance or subclass of this class."
			},
			"PingDto": {
				"required": ["message", "timestamp"],
				"type": "object",
				"properties": {
					"timestamp": {
						"type": "string",
						"format": "date-time"
					},
					"message": {
						"maxLength": 256,
						"minLength": 1,
						"type": "string"
					}
				},
				"additionalProperties": false,
				"description": "Represents a Ping response."
			}
		},
		"securitySchemes": {
			"Bearer": {
				"type": "http",
				"description": "Use a JWT issued by the environments Identity Provider",
				"scheme": "Bearer",
				"bearerFormat": "JWT"
			}
		}
	}
}
```

2. Run this CLI command `npx spectral lint ./test.json` using this `.spectral.yaml` config produces the unexpected output.

```yaml
extends: ["spectral:oas", "spectral:asyncapi", "spectral:arazzo"]
```

**Expected behavior**
The linter (or parser) should not warn on tab-indentation since it is perfectly valid JSON.

**Environment (remove any that are not applicable):**
 - Library version: 6.13.1
 - OS: Ubuntu 24/WSL (Windows 11)
 - Browser: N/A

**Additional context**
According to [this issue](https://github.com/stoplightio/spectral/issues/2416) it can be solved by changing the internal parser, but there does not seem to be an option for that either in `.spectral.yaml` or as a command-line argument. The CLI should imho also default to the correct parser for the appropriate file format depending on extension or at least some parameter.
