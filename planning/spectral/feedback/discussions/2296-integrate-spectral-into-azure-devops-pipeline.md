---
number: 2296
title: "Integrate Spectral into Azure Devops Pipeline"
category: "Q&A"
author: "blueksy1012"
created: "2022-09-27T19:16:51Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2296"
---

# Integrate Spectral into Azure Devops Pipeline

Hello. I am trying to run Spectral through an Azure Devops pipeline. 
I haven't done any work with pipelines before so not sure if I'm doing something wrong. 

When I run the pipeline in devops I get a message on the "Publish Test Results" step that says "No Result Found to Publish 'D:\a\1\s\LoadShare\test-results\spectral-results.xml'.

Is this something someone could help me with?

This is a snippet of the pipeline.yaml file:

`- stage: team_deployment
  jobs:
    - deployment: deployLoadShareSynthetic
      displayName: 'Deploy LoadShare synthetic'
      environment: TeamSub
      strategy:
        runOnce:
          deploy:
            steps:
            - checkout: self
            - script:
                npm install -g @stoplight/spectral-cli
            - script: 
                spectral lint ./LoadShare/LoadShareOpenApi.yaml -r ./LoadShare/.custom2.yaml -o ./LoadShare/test-results/spectral-results.xml -f junit
              displayName: 'spectral lint'
              continueOnError: true

            - task: PublishTestResults@2
              displayName: Publish Test Results
              inputs:
                testResultsFormat: 'JUnit'
                #testResultsFiles: '\spectral-results.xml'
                testResultsFiles: '$(System.DefaultWorkingDirectory)\LoadShare\test-results\spectral-results.xml' 
                #testResultsFiles: './LoadShare/test-results/spectral-results.xml' 
                failTaskOnFailedTests: false
                testRunTitle: 'LoadShare Linting Results'
`

When I run spectral through command prompt on my local machine it works fine and writes the results to an output file. `spectral lint LoadShareOpenApi.yaml -r .custom2.yaml -o test-results/spectral-results.xml`

## ✅ Accepted answer — @blueksy1012

O.k. I made some progress on this. With my original .custom2.yaml file (ruleset) Spectral was only returning warnings. The warnings were not written to the .xml file in the junit format.  So I would get the "No result found to publish" error message in the pipeline.

However, after I added some more rules to the .custom2.yaml file the new rules returned error messages. These errors were written to the spectral-results.xml file. Then the pipeline published and displayed results.

![image](https://user-images.githubusercontent.com/114090055/192882606-266b8032-aa85-4b06-8092-eb199afda67a.png)


So the problem I have now is how do I get Spectral warnings to display in the test results as well? For example, there is a  Spectral rule in my custom file that say "paths should be plural".  The rule returns severity "warn". So it is not being written in junit format to the spectral-results.xml file. So the pipeline is not displaying it.
