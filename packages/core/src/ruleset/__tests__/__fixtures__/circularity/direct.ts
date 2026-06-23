import { falsy } from '@api-commons/spotlight-functions';

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
