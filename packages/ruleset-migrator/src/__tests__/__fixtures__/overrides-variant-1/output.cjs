const { oas2, oas3 } = require('@spotlight-rules/spotlight-formats');
const { oas } = require('@spotlight-rules/spotlight-rulesets');
module.exports = {
  overrides: [
    {
      files: ["apis/*.json"],
      extends: oas,
      formats: [oas2, oas3],
    },
  ],
};
