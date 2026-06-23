import { truthy } from '@spotlight-rules/spotlight-functions';

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
