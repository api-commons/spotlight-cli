---
number: 989
title: "The sample validation does not support null in samples"
state: "closed"
labels: []
author: "john-doe-2016"
created: "2020-02-05T09:47:11Z"
updated: "2020-04-02T05:43:49Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/989"
---

# The sample validation does not support null in samples

The new sample validation does not support null values, that are perfectly legitimate for non required attributes.
Thus, many errors are now reported, which greatly complicates the use of this validation.

For example :
* model
![image](https://user-images.githubusercontent.com/20415788/73830442-fb375d00-4804-11ea-8990-44fc2f8f3314.png)
* sample
![image](https://user-images.githubusercontent.com/20415788/73830203-8bc16d80-4804-11ea-9f92-e0955539a1f5.png)
* invalid reported issue in sample: 
![image](https://user-images.githubusercontent.com/20415788/73830245-a09e0100-4804-11ea-9673-a64eb1fa1bed.png)

The problem is only with the 'standard' OAS samples, not with the Spotlight extension:
![image](https://user-images.githubusercontent.com/20415788/73830341-d17e3600-4804-11ea-8186-d7564d942b40.png)
No error reported here.
