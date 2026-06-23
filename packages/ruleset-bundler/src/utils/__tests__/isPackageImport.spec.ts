import { isPackageImport } from '../isPackageImport';

describe('isPackageImport util', () => {
  it.each([
    'nimma/legacy',
    'nimma',
    'lodash',
    'lodash/get',
    'lodash/get.js',
    '@stoplight/path',
    '@api-commons/spotlight-core',
    '@api-commons/spotlight-core/dist/file.js',
  ])('given valid %s package import, should return true', input => {
    expect(isPackageImport(input)).toBe(true);
  });

  it.each(['', '/nimma/legacy', 'path', 'https://esm.sh/@api-commons/spotlight-core'])(
    'given invalid %s import, should return false',
    input => {
      expect(isPackageImport(input)).toBe(false);
    },
  );
});
