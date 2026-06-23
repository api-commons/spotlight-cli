const { asyncapi, oas } = require('@api-commons/spotlight-rulesets');
module.exports = {
  extends: [oas, asyncapi],
};
