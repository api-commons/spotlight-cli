---
number: 2487
title: "Numbers in message also show colon between the two number by default"
state: "open"
labels: ["t/bug", "triaged", "c/spectral"]
author: "EPKLISN"
created: "2023-06-14T09:19:19Z"
updated: "2024-05-31T12:34:26Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2487"
---

# Numbers in message also show colon between the two number by default

If having numbers in message from a function, it will always put in a ":" between the two first numbers by default.

The function:
module.exports = (targetVal) => {
	var str = "0 1 2 3 4 5";
	return [{ message: `${str}`}];
};

The rule:
  numbers:
    description: " "
    message: "{{error}}"
    given:
      - $
    severity: error
    then:
      function: numbers

The result:
 1:1        error  numbers             0:1 2 3 4 5


**Environment (remove any that are not applicable):**
 - Spectral version 6.7.0 (and older)

Expectation:
The colon should not be shown.
