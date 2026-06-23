---
number: 2767
title: "Equivalent paths are not allowed even though the path + verb combination is different (OpenAPI Rule 'path-params' issue)"
state: "open"
labels: []
author: "dilanka-cacib"
created: "2024-12-30T11:06:04Z"
updated: "2024-12-30T11:08:37Z"
comments: 0
reactions_total: 4
thumbs_up: 4
url: "https://github.com/stoplightio/spectral/issues/2767"
---

# Equivalent paths are not allowed even though the path + verb combination is different (OpenAPI Rule 'path-params' issue)

**The Bug**

My OpenAPI file has 2 endpoint paths with different path + verb combination as below.

1. /path/{id} -> DELETE
2. /path/{source} -> GET

When I validate the OpenAPI file using spectral, I receive policy rule fail from OpenAPI Rule 'path-params' with below error.

`Paths "/path/{id}" and "/path/{source}" must not be equivalent.`


**To Reproduce**

1. Download this zip file: [spectral-path-param-issue.zip](https://github.com/user-attachments/files/18274056/spectral-path-param-issue.zip)
2. Unzip it.
4. Run command `cd spectral-path-param-issue`
5. Run command `spectral lint spectral-path-param-issue.yaml`


**Expected behavior**

Since, verbs are different for each endpoint, I shouldn't receive an error. 


**Screenshots**

![image](https://github.com/user-attachments/assets/5e85e8f3-8b81-4648-aa27-5c9c55555300)


**Environment**

 - Library version: 6.14.2
 - OS: Windows 10 Enterprise

**Findings**

After I debugged the library, I found `oasPathParam` is not considering different verbs when its looking for uniquePaths here.
![image](https://github.com/user-attachments/assets/14fe26f7-56ca-49f7-acd6-b0fab05bb733)


**Additional context**

I found same issue has reported to swagger-editor here: [https://github.com/swagger-api/swagger-editor/issues/1677](https://github.com/swagger-api/swagger-editor/issues/1677) and they have fixed it.
I can see, swagger editor is working fine now with my OpenAPI file. 

![image](https://github.com/user-attachments/assets/fb9bd810-0326-4973-bb19-08bd757a9e44)
