const { truthy } = require('@api-commons/spotlight-functions');
module.exports = {
  rules: {
    rule: {
      given: "$",
      then: {
        function: truthy,
      },
    },
    "valid-length": {
      given: "$",
      then: {
        function: truthy,
      },
    },
  },
};
