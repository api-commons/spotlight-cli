---
number: 2582
title: "Trying to create a custom rule to filter and get extensions starting with x-myextension"
category: "General"
author: "dishatkr"
created: "2024-01-23T21:04:10Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2582"
---

# Trying to create a custom rule to filter and get extensions starting with x-myextension

Created a custom rule to do  the below
1. filter for given: '$..*~', 
2.  custom function to filter and get everything that starts with x-
3.  use core pattern function to match the regex for x-myextension,  match: '\\b(x-myextension-[\\w-]*)\\b',

**Additional context**
I suspect my customFunction is not working as expected, since it doesn't filter anything, and I get error :  Extension Name [openapi] is not prefixed with x-myextension.             

Any suggestions what can be wrong with the below ?             

CustomFunction(extensionMap.js)
import {
    createRulesetFunction,
    IFunctionResult} from "@stoplight/spectral-core";

export default createRulesetFunction(
    {
        input: {
            type: 'object',
        },
        options: null
    },

function extensionMap(input: any): IFunctionResult[]{
        let results= [];
        let extension = input.toString();
            // Check if the extension starts with 'x-'
            if(extension.startsWith('x-')){
                results.push(extension)
            }
        return results;
        }
);

----------------
Rule:
import { pattern} from "@stoplight/spectral-functions";
import {DiagnosticSeverity} from "@stoplight/types";
import extensionMap from "./functions/extensionsMap";

export default {
    rules: {
        "extension-x-myextension": {
            message: "Extension Name [{{property}}] is not prefixed with x-myextension.",
            description:
                "Extensions MUST start with x-myextension",
            given:
                '$..*~',
            then: [
                {
                    function: extensionMap,
                },
                {
                    function: pattern,
                    functionOptions: {
                        match: '\\b(x-myextension-[\\w-]*)\\b',
                    }
                }
            ],
            severity: DiagnosticSeverity.Error,
            resolved: false
        }
    }
};
