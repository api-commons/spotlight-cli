const { truthy } = require('@api-commons/spotlight-functions');
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
