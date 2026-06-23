import * as core from '@spotlight-rules/spotlight-core';
import * as formats from '@spotlight-rules/spotlight-formats';
import * as functions from '@spotlight-rules/spotlight-functions';
import * as parsers from '@spotlight-rules/spotlight-parsers';
import * as refResolver from '@spotlight-rules/spotlight-ref-resolver';
import * as rulesets from '@spotlight-rules/spotlight-rulesets';
import * as runtime from '@spotlight-rules/spotlight-runtime';
import type { Plugin, InputOptions } from 'rollup';

type Module = 'core' | 'formats' | 'functions' | 'parsers' | 'ref-resolver' | 'rulesets' | 'runtime';
type GlobalModules = Record<`@spotlight-rules/spotlight-${Module}`, string>;
type Overrides = Record<keyof GlobalModules, Record<string, unknown>>;

const NAME = '@stoplight-spectral/builtins';

function registerModule(
  instanceId: number,
  id: keyof GlobalModules,
  members: Record<string, unknown>,
  overrides: Partial<Overrides>,
): [string, string] {
  const actualOverrides = overrides[id];
  const instances = (globalThis[Symbol.for(NAME)] ??= {}) as Record<string, Partial<Overrides>>;
  const root = (instances[instanceId] ??= {});

  root[id] = actualOverrides ? { ...members, ...actualOverrides } : members;

  const m = `globalThis[Symbol.for('${NAME}')]['${instanceId}']['${id}']`;
  let code = '';
  for (const member of Object.keys(members)) {
    code += `export const ${member} = ${m}['${member}'];\n`;
  }

  return [id, code];
}

export const builtins = (overrides: Partial<Overrides> = {}): Plugin => {
  const instanceId = Math.round(Math.random() * 1_000_000);

  const modules = Object.fromEntries([
    registerModule(instanceId, '@spotlight-rules/spotlight-core', core, overrides),
    registerModule(instanceId, '@spotlight-rules/spotlight-formats', formats, overrides),
    registerModule(instanceId, '@spotlight-rules/spotlight-functions', functions, overrides),
    registerModule(instanceId, '@spotlight-rules/spotlight-parsers', parsers, overrides),
    registerModule(instanceId, '@spotlight-rules/spotlight-ref-resolver', refResolver, overrides),
    registerModule(instanceId, '@spotlight-rules/spotlight-rulesets', rulesets, overrides),
    registerModule(instanceId, '@spotlight-rules/spotlight-runtime', runtime, overrides),
  ]) as GlobalModules;

  return {
    name: NAME,
    options(rawOptions): InputOptions {
      const external = rawOptions.external;

      if (typeof external === 'function') {
        return {
          ...rawOptions,
          external: <typeof external>(
            ((id, importer, isResolved) => !(id in modules) && external(id, importer, isResolved))
          ),
        };
      }

      return rawOptions;
    },
    resolveId(id): string | null {
      if (id in modules) {
        return id;
      }

      return null;
    },
    load(id): string | undefined {
      if (id in modules) {
        return modules[id] as string;
      }

      return;
    },
  };
};
