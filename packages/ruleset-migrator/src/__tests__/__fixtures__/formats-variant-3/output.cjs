const { jsonSchemaDraft2019_09, jsonSchemaDraft2020_12 } = require('@spotlight-rules/spotlight-formats');
const { truthy } = require('@spotlight-rules/spotlight-functions');
module.exports = {
  formats: [jsonSchemaDraft2019_09, jsonSchemaDraft2020_12],
  rules: {
    test: {
      given: '$',
      then: {
        function: truthy,
      },
    },
  },
};
