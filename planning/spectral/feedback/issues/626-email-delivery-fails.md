---
number: 626
title: "Email delivery fails"
state: "closed"
labels: ["invalid", "sev/dev"]
author: "billiegoose"
created: "2019-10-02T20:56:18Z"
updated: "2019-10-03T16:13:55Z"
comments: 1
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/626"
---

# Email delivery fails

**Describe the bug**
The automated email system doesn't work.

**To Reproduce**

1. Create a test using `toMatchSnapshot`
2. Run the tests
3. A message is printed saying an email was sent, but the email is not delivered

**Expected behavior**
I expect the email to be successfully delivered. Preferably via an AWS message queue with automatic retry and exponential back-off.

**Screenshots**
![image](https://user-images.githubusercontent.com/587740/66080960-1b909b80-e535-11e9-8e49-7cda1e86fbd0.png)

**Additional context**
:trollface: 


<Fire Jakub>
