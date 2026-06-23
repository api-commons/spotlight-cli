const { oas2, oas3 } = require('@api-commons/spotlight-formats');
const { oas } = require('@api-commons/spotlight-rulesets');
module.exports = {
  overrides: [
    {
      files: ["apis/*.json"],
      extends: oas,
      formats: [oas2, oas3],
    },
  ],
};
