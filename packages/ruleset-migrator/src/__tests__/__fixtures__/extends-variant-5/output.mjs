import { truthy } from '@spotlight-rules/spotlight-functions';
export default {
  extends: [
    {
      rules: {
        'my-rule': {
          given: '$',
          then: {
            function: truthy,
          },
        },
      },
    },
  ],
};
