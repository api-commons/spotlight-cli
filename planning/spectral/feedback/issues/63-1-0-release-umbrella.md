---
number: 63
title: "1.0 Release Umbrella"
state: "closed"
labels: []
author: "marbemac"
created: "2018-12-07T04:57:25Z"
updated: "2018-12-11T05:53:45Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/63"
---

# 1.0 Release Umbrella

These are the primary breaking changes that we have identified to get in before public release, if possible.

The goal with these changes is to significantly smooth over the end user DX, and simplify the internals while we're at it.

When all is said and done, almost every rule in #20 should be possible without too much effort.

@casserni need a quick sanity check that making rules enabled by default is OK for our use cases. I still don't quite understand why we made the decision to disable by default, which feels odd.

## Changes

0. Update readme examples (Marc has done this).
1. remove:
    - Spectral constructor argument
    - `IRuleset`
    - `IRuleEntry.format`
2. update `Spectral.run` signature

    ```ts
    public run(target: object, opts?: IRunOpts): IRunResult;

    // returning an object is better than an array, so that we can add properties later without breaking API
    interface IRunResult {
      results: types.IRuleResult[];
    }
    ```

3. simplify `IRunOpts`
  
    ```ts
    interface IRunOpts {
      /**
       * The fully-resolved version of the target object.
       *
       * Some functions require this in order to operate.
       */
      resolvedTarget?: object;
    }
    ```

4. move spectral class to `spectral.ts`
5. move the types defined in `spectral.ts` to the types folder
6. rename `IRuleStore` to `IRuleCollection` (or `IRuleset` now that that name is open?)
7. rename `Spectral.setRules` to `Spectral.addRules`, update signature to take `IRuleCollection`. This does an Object.assign, overwriting existing rules with the same key.
8. rename `Spectral.updateRules` to `Spectral.mergeRules`, update signature to take `IRuleCollection`. This does a deep merge, modifying existing rules with the same key.
9. add `Spectral.addFunctions`
10. update `IRule`

    ```ts
    export interface IRule<O = any> {
      // Defaults to RuleType.STYLE
      type?: RuleType;

      // A short summary of the rule and its intended purpose
      summary: string;

      // The severity of results this rule generates
      severity?: ValidationSeverity;
      severityLabel?: ValidationSeverityLabel;

      // A long-form description of the rule formatted in markdown
      description?: string;

      // Tags attached to the rule, which can be used for organizational purposes
      tags?: string[];

      // set to false to disable the rule (enabled by default)
      enabled?: boolean;

      // Filter the target down to a subset[] with a JSON path
      given: string;

      when?: {
        // the `path.to.prop` to field, or special `@key` value to target keys for matched `given` object
        // EXAMPLE: if the target object is an oas object and given = `$..responses[*]`, then `@key` would be the response code (200, 400, etc)
        field: string;

        // a regex pattern
        pattern: string;
      };

      then: {
        // the `path.to.prop` to field, or special `@key` value to target keys for matched `given` object
        // EXAMPLE: if the target object is an oas object and given = `$..responses[*]`, then `@key` would be the response code (200, 400, etc)
        field?: string;

        // a regex pattern
        pattern?: string;

        // name of the function to run
        function?: string;

        // Options passed to the function
        functionOptions?: O;
      };
    }
    ```

11. rules should be enabled by default

12. update custom function signature. no more `ensureRule` needed, functions should return void or an array of result objects that will be transformed into complete result objects by spectral internally.

    ```ts
    export type IFunction<O = any> = (targetValue: any, options: O, paths: IFunctionPaths, otherValues: IFunctionValues) => void | IFunctionResult[];

    export interface IFunctionPaths {
      given: Path;
      target: Path;
    }    

    export interface IFunctionValues {
      original: any;
      resolved?: any;
      given: any;
    }

    export interface IFunctionResult {
      message: string;
      path?: Path; // NOTE: Path should come from @stoplight/types
    }
    ```

13. remove Pattern rule. QUESTION: can we? The current function takes options `omit` and `split` - are those needed, is there another way to accomplish whatever they do?

14. Final pass through codebase to simplify! The above changes should allow us to simplify a lot of the internals and organization of oas rulesets. The included "rulesets" are now really just a collection of rules and functions that anybody can import and add to their spectral instance via `Spectral.addRules` and `Spectral.addFunctions`. See suggested export structure for rulesets in `## Linting an OAS 2 document:` section of readme.
