const { oas } = require('@spotlight-rules/spotlight-rulesets');
module.exports = {
  extends: oas,
  overrides: [
    {
      files: ['**#/info'],
      rules: {
        'info-contact': 'off',
        'info-description': 'off',
      },
    },
  ],
};
