const { falsy, truthy } = require('@spotlight-rules/spotlight-functions');
const pascalCase = _interopDefault(require('/.tmp/spotlight/extends-variant-8/assets/shared/functions/pascalCase.js'));
module.exports = {
  extends: [
    {
      extends: [
        {
          rules: {
            "my-rule": {
              message: "ruleset 2",
              given: "$",
              then: {
                function: falsy,
              },
            },
          },
        },
        {
          rules: {
            "my-rule": {
              message: "ruleset 3",
              given: "$",
              then: {
                function: pascalCase,
              },
            },
          },
        },
      ],
      rules: {
        "my-rule": {
          message: "ruleset",
          given: "$",
          then: {
            function: truthy,
          },
        },
      },
    },
  ],
};
function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
