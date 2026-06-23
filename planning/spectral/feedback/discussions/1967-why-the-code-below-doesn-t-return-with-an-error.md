---
number: 1967
title: "Why the code below doesn't return with an error?"
category: "General"
author: "Andras-Csanyi"
created: "2021-11-19T10:36:02Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1967"
---

# Why the code below doesn't return with an error?

We have a validator cli where we provide a list of custom rules. We are at the point where we need to upgrade Spectral from 5.x to 6.x (latest). My task is to make all the necessary changes coming with this upgrade. The rule below doesn't work for reasons I couldn't figure out yet. It worked well in `yaml` format with 5.x. One of the changes we do is transforming our rulesets to javascript format and enjoy the flexibility coming with it.

My assumptions why it doesn't work:
- the multiple `given` values provided as an array can be a problem, however, Spectral code shows that it is either a `string` or `string[]`. As a conclusion, it should be fine this way.
- checking a field which doesn't exist also can be a problem. I couldn't support or deny this theory during my debugging
- other rules I converted are working fine, however I converted only small portion of our rulesets only, so additional issues may arise

I run out of ideas and any help is appreciated at this point.


```javascript
const { Spectral, Document, Ruleset } = require('@stoplight/spectral-core');
const { oas3 } = require('@stoplight/spectral-formats');
const { truthy } = require('@stoplight/spectral-functions');
const { Json } = require('@stoplight/spectral-parsers');
describe('something', () => {
  
  test('asd', async () => {
    
    const spec = {
      openapi: '3.0.0',
      paths: {
        path1: {
          get: {
            responses: {
              '200': {
                $ref: '#/components/responses/GenericResponse'
              }
            }
          }
        }
      },
      components: {
        responses: {
          GenericResponse: {
            content: {
              'application/json': {
                // schema provided
                schema: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    };
    
    const ruleset = {
      formats: [oas3],
      rules: {
        "content-entry-contains-schema": {
          description: 'Content entries must specify a schema',
          message: '{{error}}',
          formats: [oas3],
          given: [
            '$.paths[*].[post,put,patch].requestBody.content[*]',
            '$.paths[*].[get,post,put,patch,delete].[parameters,responses][*].content[*]'
          ],
          severity: 'warn',
          resolved: true,
          then: [
            {
              field: 'schema',
              function: truthy
            }
          ]
        }
      }
    };
    
    const spectral = new Spectral();
    spectral.setRuleset(ruleset);
    const doc = new Document(JSON.stringify(spec), Json);
    
    const result = await spectral.run(doc);
    
    expect(result.length).toBe(1);
    
  });
  
});
```
