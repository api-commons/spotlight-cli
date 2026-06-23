const { truthy } = require('@spotlight-rules/spotlight-functions');
module.exports = {
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
