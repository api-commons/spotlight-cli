import type { DocumentInventory } from '../documentInventory';
import type { Ruleset } from '../ruleset/ruleset';
import { ISpotlightDiagnostic } from '../types';

export interface IRunnerInternalContext {
  ruleset: Ruleset;
  documentInventory: DocumentInventory;
  results: ISpotlightDiagnostic[];
  promises: Array<Promise<void>>;
}
