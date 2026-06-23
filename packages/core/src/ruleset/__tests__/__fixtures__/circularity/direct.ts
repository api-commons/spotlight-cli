import { falsy } from '@spotlight-rules/spotlight-functions';

const ruleset = {
  get extends() {
    return ruleset;
  },
  rules: {
    'foo-rule': {
      given: '$',
      then: {
        function: falsy,
      },
    },
  },
};

export { ruleset as default };
