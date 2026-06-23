---
number: 2555
title: "Unable to parse results to html report"
state: "closed"
labels: []
author: "mitra0911"
created: "2023-11-27T08:20:42Z"
updated: "2023-11-29T17:03:55Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2555"
---

# Unable to parse results to html report

1. Unable to parse results to html report. 
Steps I have followed
1.  Configure and Run const results = await spectral.run(myDocument);
2.  Pass results in formatOutput() const htmlResults = formatOutput(results, "html", spectral.ruleset)
3. This is the package i'm using
import outputFormatter from '@stoplight/spectral-cli/dist/services/output.js'
const { formatOutput, writeOutput } = outputFormatter

**Const results Output:**
[
  {
    "code": "operation-tags",
    "message": "Operation must have non-empty \"tags\" array.",
    "path": [
      "paths",
      "/health",
      "get",
      "tags"
    ],
    "severity": "warn",
    "range": {
      "start": {
        "line": 15,
        "character": 11
      },
      "end": {
        "line": 15,
        "character": 14
      }
    }
  },
  {
    "code": "operation-tags",
    "message": "Operation must have non-empty \"tags\" array.",
    "path": [
      "paths",
      "/policies",
      "post"
    ],
    "severity": "warn",
    "range": {
      "start": {
        "line": 43,
        "character": 9
      },
      "end": {
        "line": 72,
        "character": 55
      }
    }
  },
  {
    "code": "operation-tags",
    "message": "Operation must have non-empty \"tags\" array.",
    "path": [
      "paths",
      "/policies",
      "get"
    ],
    "severity": "warn",
    "range": {
      "start": {
        "line": 73,
        "character": 8
      },
      "end": {
        "line": 102,
        "character": 58
      }
    }
  }
]
**Const htmlResults Output :**
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;
            font-size:16px;
            font-weight:normal;
            margin:0;
            padding:0;
            color:#333
        }
        #overview {
            padding:20px 30px
        }
        td, th {
            padding:5px 10px
        }
        h1 {
            margin:0
        }
        table {
            margin:30px;
            width:calc(100% - 60px);
            max-width:1000px;
            border-radius:5px;
            border:1px solid #ddd;
            border-spacing:0px;
        }
        th {
            font-weight:400;
            font-size:medium;
            text-align:left;
            cursor:pointer
        }
        td.severity, th span {
            font-weight:700
        }
        th span {
            float:right;
            margin-left:20px
        }
        th span:after {
            content:"";
            clear:both;
            display:block
        }
        tr:last-child td {
            border-bottom:none
        }
        tr td:first-child, tr td:last-child {
            color:#9da0a4
        }
        #overview.bg-success, tr.bg-success th {
            color:#468847;
            background:#dff0d8;
            border-bottom:1px solid #d6e9c6
        }
        #overview.bg-error, tr.bg-error th {
            color:#b94a48;
            background:#f2dede;
            border-bottom:1px solid #eed3d7
        }
        #overview.bg-warning, tr.bg-warning th {
            color:#f0ad4e;
            background:#fcf8e3;
            border-bottom:1px solid #fbeed5
        }
        #overview.bg-information, tr.bg-information th {
            color:#4e95f0;
            background:#deecfb;
            border-bottom:1px solid #d3e3ee
        }
        td {
            border-bottom:1px solid #ddd
        }
        td.clr-error {
            color:#b94a48
        }
        td.clr-warning {
            color:#f0ad4e
        }
        td.clr-information {
            color:#4e95f0
        }
        td.clr-hint {
            color:#5a5a5a
        }
    </style>
    <title>Spectral Report</title>
</head>
<body>
<div id="overview" class="bg-warning">
    <h1>Spectral Report</h1>
    <div>
        <span></span> - Generated on Mon Nov 27 2023 12:19:18 GMT+0530 (India Standard Time)
    </div>
</div>
<table>
    <tbody>
    
    </tbody>
</table>
<script type="text/javascript">
    var groups = document.querySelectorAll("tr[data-group]");
    for (var i = 0; i < groups.length; i++) {
        groups[i].addEventListener("click", function() {
            var inGroup = document.getElementsByClassName(this.getAttribute("data-group"));
            this.innerHTML = (this.innerHTML.indexOf("+") > -1) ? this.innerHTML.replace("+", "-") : this.innerHTML.replace("-", "+");
            for (var j = 0; j < inGroup.length; j++) {
                inGroup[j].style.display = (inGroup[j].style.display !== "none") ? "none" : "table-row";
            }
        });
    }
</script>
</body>
</html>
