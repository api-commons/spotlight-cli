import { truthy } from '@spotlight-rules/spotlight-functions';
import { oas } from '@spotlight-rules/spotlight-rulesets';
export default {
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
