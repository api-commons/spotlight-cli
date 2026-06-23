/*eslint-env node*/
import { ConfigSet, pathsToModuleNameMapper } from 'ts-jest';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { compilerOptions } = JSON.parse(fs.readFileSync('./tsconfig.json', 'utf8'));

const projectDefault = {
  moduleNameMapper: {
    ...Object.fromEntries(
      Object.entries(pathsToModuleNameMapper(compilerOptions.paths)).map(([k, v]) => [k, path.join(__dirname, v)]),
    ),
    '^@api\\-commons/spotlight\\-test\\-utils$': '<rootDir>/test-utils/node/index.ts',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['@swc/jest'],
  },
};

const config = {
  workerIdleMemoryLimit: '1024MB',
};

export default {
  projects: [
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-cli',
        color: 'greenBright',
      },
      testMatch: ['<rootDir>/packages/cli/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-core',
        color: 'magenta',
      },
      testMatch: ['<rootDir>/packages/core/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-formats',
        color: 'redBright',
      },
      testMatch: ['<rootDir>/packages/formats/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-functions',
        color: 'blueBright',
      },
      testMatch: ['<rootDir>/packages/functions/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-ruleset-bundler',
        color: 'blueBright',
      },
      setupFilesAfterEnv: ['<rootDir>/packages/ruleset-bundler/jest.setup.mjs'],
      testMatch: ['<rootDir>/packages/ruleset-bundler/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-ruleset-migrator',
        color: 'blueBright',
      },
      testMatch: ['<rootDir>/packages/ruleset-migrator/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: '@api-commons/spotlight-parsers',
      testMatch: ['<rootDir>/packages/parsers/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-ref-resolver',
        color: 'yellow',
      },
      testMatch: ['<rootDir>/packages/ref-resolver/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-rulesets',
        color: 'cyanBright',
      },
      setupFilesAfterEnv: ['<rootDir>/packages/rulesets/jest.setup.mjs'],
      testMatch: ['<rootDir>/packages/rulesets/src/**/__tests__/**/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-runtime',
        color: 'blue',
      },
      testMatch: ['<rootDir>/packages/runtime/src/**/__tests__/*.{test,spec}.ts'],
    },
    {
      ...projectDefault,
      displayName: {
        name: '@api-commons/spotlight-formatters',
        color: 'magenta',
      },
      testMatch: ['<rootDir>/packages/formatters/src/**/__tests__/*.{test,spec}.ts'],
    },
  ],
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.ts', '!<rootDir>/packages/*/src/**/__*__/**/*.ts'],
  ...config,
};

