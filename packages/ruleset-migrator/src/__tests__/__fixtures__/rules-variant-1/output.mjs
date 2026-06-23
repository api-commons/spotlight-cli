import { oas2 } from '@api-commons/spotlight-formats';
import { truthy } from '@api-commons/spotlight-functions';
export default {
  rules: {
    'oas3-schema': 'error',
    'oas2-operation-formData-consume-check': {
      description:
        'Operations with an `in: formData` parameter must include `application/x-www-form-urlencoded` or `multipart/form-data` in their `consumes` property.',
      recommended: true,
      formats: [oas2],
      type: 'validation',
      given:
        "$.paths.*[?( @property === 'get' || @property === 'put' || @property === 'post' || @property === 'delete' || @property === 'options' || @property === 'head' || @property === 'patch' || @property === 'trace' )]",
      then: {
        function: truthy,
        functionOptions: null,
      },
    },
  },
};
