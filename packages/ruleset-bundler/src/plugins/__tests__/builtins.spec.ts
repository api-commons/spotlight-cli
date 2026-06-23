import * as fs from 'fs';
import { serveAssets } from '@api-commons/spotlight-test-utils';
import * as runtime from '@api-commons/spotlight-runtime';
import * as functions from '@api-commons/spotlight-functions';

import { BundleOptions, bundleRuleset } from '../../index';
import type { IO } from '../../types';
import { virtualFs } from '../virtualFs';
import { builtins } from '../builtins';

describe('Builtins Plugin', () => {
  let io: IO;
  let randomSpy: jest.SpyInstance;

  beforeEach(() => {
    io = {
      fs,
      fetch: runtime.fetch,
    };

    randomSpy = jest
      .spyOn(Math, 'random')
      .mockReturnValueOnce(0.8229275205939697)
      .mockReturnValueOnce(0.7505242801973444)
      .mockReturnValueOnce(0.5647855410879519);
  });

  afterEach(() => {
    randomSpy.mockRestore();
  });

  describe.each<BundleOptions['target']>(['browser', 'node', 'runtime'])('given %s target', target => {
    it('should inline Spectral packages & expose it to the runtime', async () => {
      serveAssets({
        '/tmp/input.js': `import { schema } from '@api-commons/spotlight-functions';
import { oas } from '@api-commons/spotlight-rulesets';

export default {
  extends: [oas],
  rules: {
    'my-rule': {
      given: '$',
      then: {
        function: schema,
        functionOptions: {
          schema: {
            type: 'object',
          },
        },
      },
    },
  },
};`,
      });

      const code = await bundleRuleset('/tmp/input.js', {
        format: 'esm',
        target,
        plugins: [builtins(), virtualFs(io)],
      });

      expect(code)
        .toEqual(`const alphabetical = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['alphabetical'];
const casing = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['casing'];
const defined = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['defined'];
const enumeration = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['enumeration'];
const falsy = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['falsy'];
const length = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['length'];
const pattern = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['pattern'];
const schema = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['schema'];
const truthy = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['truthy'];
const undefined$1 = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['undefined'];
const unreferencedReusableObject = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['unreferencedReusableObject'];
const xor = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['xor'];
const or = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions']['or'];

const oas = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-rulesets']['oas'];
const asyncapi = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-rulesets']['asyncapi'];
const arazzo = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-rulesets']['arazzo'];

var input = {
  extends: [oas],
  rules: {
    'my-rule': {
      given: '$',
      then: {
        function: schema,
        functionOptions: {
          schema: {
            type: 'object',
          },
        },
      },
    },
  },
};

export { input as default };
`);

      expect(
        globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-functions'],
      ).toStrictEqual(functions);
    });

    it('should support overrides', async () => {
      serveAssets({
        '/tmp/input.js': `import { readFile } from '@api-commons/spotlight-runtime';

readFile();`,
      });

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      function readFile(): void {}

      const code = await bundleRuleset('/tmp/input.js', {
        format: 'esm',
        target,
        plugins: [
          builtins({
            '@api-commons/spotlight-runtime': {
              readFile,
            },
          }),
          virtualFs(io),
        ],
      });

      expect(code)
        .toEqual(`const fetch = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['fetch'];
const DEFAULT_REQUEST_OPTIONS = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['DEFAULT_REQUEST_OPTIONS'];
const decodeSegmentFragment = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['decodeSegmentFragment'];
const printError = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['printError'];
const PrintStyle = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['PrintStyle'];
const printPath = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['printPath'];
const printValue = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['printValue'];
const startsWithProtocol = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['startsWithProtocol'];
const isAbsoluteRef = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['isAbsoluteRef'];
const traverseObjUntilRef = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['traverseObjUntilRef'];
const getEndRef = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['getEndRef'];
const safePointerToPath = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['safePointerToPath'];
const getClosestJsonPath = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['getClosestJsonPath'];
const readFile = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['readFile'];
const readParsable = globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime']['readParsable'];

readFile();
`);

      expect(
        globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime'],
      ).toStrictEqual({
        ...runtime,
        readFile,
      });
    });

    it('should isolate each instance', async () => {
      serveAssets({
        '/tmp/input.js': `import { readFile } from '@api-commons/spotlight-runtime';

readFile();`,
      });

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      function readFile(): void {}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      function readFile2(): void {}

      await bundleRuleset('/tmp/input.js', {
        format: 'esm',
        target,
        plugins: [
          builtins({
            '@api-commons/spotlight-runtime': {
              readFile,
            },
          }),
          builtins({
            '@api-commons/spotlight-runtime': {
              readFile: readFile2,
            },
          }),
          virtualFs(io),
        ],
      });

      expect(
        globalThis[Symbol.for('@stoplight-spectral/builtins')]['822928']['@api-commons/spotlight-runtime'],
      ).toStrictEqual({
        ...runtime,
        readFile,
      });

      expect(
        globalThis[Symbol.for('@stoplight-spectral/builtins')]['750524']['@api-commons/spotlight-runtime'],
      ).toStrictEqual({
        ...runtime,
        readFile: readFile2,
      });
    });
  });
});
