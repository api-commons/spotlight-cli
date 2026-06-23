import { jsonSchemaDraft2019_09, jsonSchemaDraft2020_12 } from '@spotlight-rules/spotlight-formats';
import { truthy } from '@spotlight-rules/spotlight-functions';
export default {
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
