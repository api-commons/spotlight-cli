const { truthy } = require('@spotlight-rules/spotlight-functions');
module.exports = {
  rules: {
    rule: {
      given: '$',
      then: {
        function: truthy,
      },
    },
  },
};
