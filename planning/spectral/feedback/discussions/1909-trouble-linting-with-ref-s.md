---
number: 1909
title: "Trouble linting with $ref's"
category: "Q&A"
author: "dwhayduk"
created: "2021-10-20T18:46:50Z"
upvotes: 3
comments: 2
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1909"
---

# Trouble linting with $ref's

We've been having some trouble applying custom rules to API's that have several $ref's in them. Our linter still has an internal path to the true error that it can use for all other intents and purposes (like for use inside the rule functions), but in the message that prints to the console, the location is presented on an incomplete path. This is sometimes eliminating errors when there are multiple problems on similar deep paths. Below are a few examples that I hope can help illustrate our problem.
 
# Example 1
 
We made a rule function to enforce camel case on several words in an API. Below is a snippet from an API that we used to test it:
 
```yaml
38.               schema:
39.                 $ref: '#/Location1'
40. 
41. Location1:
42.   BadCamelCase:
43.     type: string
```
 
On line 42, the word "BadCamelCase" is not written in proper camel case, so the our rule is written to flag it as an error. It will be found by following the reference on line 39 and reaching the word in the object "Location1" on line 41. This is the terminal output when the camel case rule is run on the above API:
 
```
 42:16  error  field-names-camel-case  BadCamelCase field is not lowerCamelCase
Location1.BadCamelCase
 
✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```
 
This correctly references line 42, the actual location in the document of the erroneous word. The entire path through the object to find this word is much lengthier, but the path has been successfully converted into one the human can follow to find the word in the document, since a $ref is involved.
 
# Example 2
 
The next example is similar to the first example, but the path to the erroneous word will involve two references using the $ref keyword. The example snippet is below:
 
```yaml
38.               schema:
39.                 $ref: '#/Location1'
40. 
41. Location1:
42.   $ref: '#/Location2'
43. 
44. Location2:
45.   BadCamelCase:
46.     type: string
```
 
The internal path to the word "BadCamelCase" does not change, since references are not part of the internal path name and the human path to the word goes directly from a reference to Location1 to a reference to Location2. Below is the terminal output when the rule is run against this API:
 
```
45:16  error  field-names-camel-case  BadCamelCase field is not lowerCamelCase
Location2.BadCamelCase
 
✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```
 
This correctly references Line 45 and the path "Location2.BadCamelCase", exactly where the human is expected to find the erroneous word.
 
# Example 3
 
Example 3 will introduce a more problematic API:
 
```yaml
38.               schema:
39.                 $ref: '#/Location1'
40. 
41. Location1:
42.   anObjectName:
43.     $ref: '#/Location2'
44. 
45. Location2:
46.   BadCamelCase:
47.     type: string
```
 
On Line 42, the object "anObjectName" is introduced. This complicates the path to the word "BadCamelCase", as the linter must first pass through schema (Line 38), follow the reference to Location1, look in the object "anObjectName", then follow the reference to Location2. Below is the terminal output when the word is run on this API:
 
```
 42:16  error  field-names-camel-case  BadCamelCase field is not lowerCamelCase 
 Location1.anObjectName
 
✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```
 
The internal path still points all the way to "BadCamelCase", but when generating a human-readable path, our linter stops at "anObjectName" and does not follow the second reference.
 
# Example 4
 
Example 4 will demonstrate why this inability to follow references to objects with references is a problem for us:
 
```yaml
38.               schema:
39.                 $ref: '#/Location1'
40. 
41. Location1:
42.   anObjectName:
43.     $ref: '#/Location2'
44. 
45. Location2:
46.   BadCamelCase:
47.     type: string
48.   ReallyBadCamelCase:
49.     type: string
```
 
In this example, Location2 contains two words with bad camel case. Both need to be flagged by the linter. Below is our terminal output when the rule is run against the above API:
 
```
 42:16  error  field-names-camel-case  BadCamelCase field is not lowerCamelCase
 Location1.anObjectName
 
✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```
 
This seems to be caused by optimization behavior that only allows one error to be returned for a given location. Since this $ref situation causes both BadCamelCase and ReallyBadCamelCase to be perceived as being in the same location (Location1.anObjectName), only is ever flagged during the same run of the linter.
 
This is leading to problems with some of our larger API's where not nearly enough errors are being printed. But we've noticed that some of the built-in Spectral rules (like "parser" for ensuring response codes are written as strings) are able to successfully lint through nested $ref's and point to the correct location in a yml document. Is there a setting within Spectral or in custom rules that controls how $ref's are handled?
