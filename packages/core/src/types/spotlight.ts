import { IDiagnostic, JsonPath } from '@stoplight/types';
import type { JSONSchema7 } from 'json-schema';
import type { Resolver } from '@spotlight-rules/spotlight-ref-resolver';

export interface IConstructorOpts {
  resolver?: Resolver;
}

export interface IRunOpts {
  ignoreUnknownFormat?: boolean;
}

export interface ISpotlightDiagnostic extends IDiagnostic {
  path: JsonPath;
  code: string | number;
  documentationUrl?: string;
}

export type IRuleResult = ISpotlightDiagnostic;

export interface ISpectralFullResult {
  resolved: unknown;
  results: IRuleResult[];
}

export interface IGivenNode {
  path: JsonPath;
  value: unknown;
}

export type JSONSchema = JSONSchema7;
