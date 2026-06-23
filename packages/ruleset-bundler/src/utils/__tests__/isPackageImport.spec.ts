import { isPackageImport } from '../isPackageImport';

describe('isPackageImport util', () => {
  it.each([
    'nimma/legacy',
    'nimma',
    'lodash',
    'lodash/get',
    'lodash/get.js',
    '@stoplight/path',
    '@spotlight-rules/spotlight-core',
    '@spotlight-rules/spotlight-core/dist/file.js',
  ])('given valid %s package import, should return true', input => {
    expect(isPackageImport(input)).toBe(true);
  });

  it.each(['', '/nimma/legacy', 'path', 'https://esm.sh/@spotlight-rules/spotlight-core'])(
    'given invalid %s import, should return false',
    input => {
      expect(isPackageImport(input)).toBe(false);
    },
  );
});
