import { jsonSchemaDraft2019_09, jsonSchemaDraft2020_12 } from '@api-commons/spotlight-formats';
import { truthy } from '@api-commons/spotlight-functions';
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
