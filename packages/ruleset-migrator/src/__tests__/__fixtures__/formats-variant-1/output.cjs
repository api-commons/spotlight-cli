const { jsonSchemaDraft2019_09, jsonSchemaLoose, oas2, oas3_0, oas3_1 } = require('@spotlight-rules/spotlight-formats');
module.exports = {
  formats: [oas2, oas3_1, oas3_0, jsonSchemaLoose, jsonSchemaDraft2019_09],
  rules: {},
};
