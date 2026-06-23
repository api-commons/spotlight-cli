const { asyncapi, oas } = require('@spotlight-rules/spotlight-rulesets');
module.exports = {
  extends: [oas, asyncapi],
};
