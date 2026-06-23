const { truthy } = require('@spotlight-rules/spotlight-functions');
const { oas } = require('@spotlight-rules/spotlight-rulesets');
module.exports = {
  extends: [oas],
  aliases: {
    OperationObject: ['#PathItem[get,put,post,delete,options,head,patch,trace]'],
    PathItem: ['$.paths[*]'],
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        'operation-description': {
          given: '#OperationObject',
          then: {
            field: 'summary',
            function: truthy,
          },
          severity: 'warn',
        },
      },
    },
  ],
};
