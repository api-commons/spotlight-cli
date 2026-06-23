import { oas } from '@spotlight-rules/spotlight-rulesets';
export default {
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
