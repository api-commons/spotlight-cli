const { jsonSchemaDraft2019_09, jsonSchemaDraft2020_12 } = require('@api-commons/spotlight-formats');
const { truthy } = require('@api-commons/spotlight-functions');
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
