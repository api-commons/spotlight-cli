import { truthy } from '@api-commons/spotlight-functions';

export default {
  rules: {
    'valid-rule': {
      given: '$.info',
      then: {
        function: truthy,
      },
    },
  },
};
