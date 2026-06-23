---
number: 2054
title: "YAML Merge Key not implemented to Spec"
state: "open"
labels: ["t/bug", "triaged", "p/documented"]
author: "tarquin-the-brave"
created: "2022-02-08T11:31:37Z"
updated: "2024-05-31T12:35:14Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2054"
---

# YAML Merge Key not implemented to Spec

**Describe the bug**

The [merge key spec](https://yaml.org/type/merge.html) states:

> If the value associated with the key is a single mapping node, **each of its key/value pairs is inserted into the current mapping, unless the key already exists in it.**

The merge key implementation in Spectral will always include key/value pairs even if the key already exists.  

As later repeated keys override the earlier key in the mapping we get a situation where if you include the merge key at the beginning of a mapping, later key/value pairs in the mapping can override keys that are imported from the anchor.  Whereas if the merge key is at the end of the mapping, it imports key/value pairs that override key that already exist in the mapping.

**To Reproduce**

Given this ruleset, `ruleset.yaml`:

```yaml
rules:
  my-rule:
    given: $.bar
    severity: error
    then:
      field: baz
      function: length
      functionOptions:
        max: 3
```

(single rule that says "`bar.baz` must have a length less than or equal to 3").

And this document to lint, `test.yaml`:

```yaml
foo: &foo
  baz: two

bar:
  <<: *foo
  baz: three
```

we see:

```
$ spectral lint --ruleset ruleset.yaml test.yaml

/src/test.yaml
 6:8  error  my-rule  "baz" property must be shorter than 3  bar.baz

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)

$ echo $?
1
```

However if we change that document to, `test2.yaml`:

```yaml
foo: &foo
  baz: two

bar:
  baz: three
  <<: *foo
```

we see the error disappear:

```
$ spectral lint --ruleset ruleset.yaml test2.yaml
No results with a severity of 'error' or higher found!

$ echo $?
0
```

There is an issue of interpretation with "already exists in the mapping".  I can see this meaning "exists as an earlier key" or "exists anywhere in the mapping when the merge key syntax is resolved" - this is in reality elided by the fact that later repeated keys override their previous counter parts so with the former interpretation, keys appearing after the merge key will override any instance of the same key being imported from the anchor to get the same result.

But by either interpretation of "already exists", Spectral is not getting this right.  Here the `baz` key already exists, and yet it is being overwritten by the key in the `*foo` anchor that the merge key is importing.

**Expected behaviour**

The expected behaviour would be to not overwrite existing keys in a mapping with keys imported from merging in the mapping referenced in the merge key.

I.e: both `test.yaml` and `test2.yaml` above should resolve to:

```yaml
foo:
  baz: two
bar:
  baz: three
```

and thus would both fail linting by the `ruleset.yaml` above.

**Environment:**
 - Library version: observed on `6.1.0` & `6.2.0` (`spectral --version`)
 - OS: Linux

**Additional context**

While this is a minimal example, this issue makes the use of merge keys in much larger YAML documents tricky, such as an Open API Spec.  Those used to using merge keys now how to remember to put them at the top of mappings to get the desired parsing from Spectral.  If they don't Spectral can give errors that don't appear to relate to the data.  If they checked their merge key and anchor usage by using a tool like [`yq`](https://kislyuk.github.io/yq/) to parse their document, the rendered form they see won't include the values which the Spectral lint is erroring on, i.e. values wrongly merged in from anchors.
