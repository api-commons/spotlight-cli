import { truthy } from '@spotlight-rules/spotlight-functions';
export default {
  rules: {
    rule: {
      given: '$',
      then: {
        function: truthy,
      },
    },
  },
};
