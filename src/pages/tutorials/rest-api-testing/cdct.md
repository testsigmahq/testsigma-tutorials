---
title: "Consumer Driven Contract Testing with Testsigma"
metadesc: "This document explain steps to execute consumer driven contract testing with Testsigma application, a no-code test automation tool."
noindex: false
order: 3.3
page_id: "How to do Contract Testing with Testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Successful Retrieval"
  url: "#successful-retrieval"
- type: link
  name: "Invalid App ID"
  url: "#invalid-app-id"
- type: link
  name: "Unauthorized Access"
  url: "#unauthorized-access"
---

<br>

In consumer-driven contract testing, consumers set rules on how a service should work. They define a contract based on their expectations. The service provider then develops its service as per the contract. The process of testing this service by consumers to make sure everything is as per the contract is called consumer-driven contract testing.



![CDCT](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CDCT.png)



Refer to the image above, the provider service is responsible for providing product-related information. It exposes an API allowing consumers to retrieve product info by its ID number. This information typically includes the product's name, type, and description. The Provider service works as a data source for the consumers. The Consumer service consumes the info provided by the Provider service. It interacts with the Provider service's API to fetch the relevant product data based on the ID number.



Let's understand this with an example. Consider a Testsigma application where the consumer is a frontend web application, and the provider is a Testsigma service responsible for managing. The consumer wants to ensure that the service meets their expectations and behaves correctly.




Here's a generic example of an API endpoint for retrieving product information:



**Endpoint:** GET/https://prestaging.testsigma.com/api_private/applications/&ltAppID&gt



The consumer team defines their expectations and requirements for the endpoint to enable consumer-driven contract testing. In this case, the endpoint allows the consumer to retrieve info about a Testsigma sample app by providing the app ID as a parameter. 



The consumer team can then draft the following contract tests as part of their testing process.


<br>

## **Successful Retrieval**

**Prerequisite:** <br>
- An application with the specified &ltAppID&gt exists in the system 
- Valid API key for the specified environment.

**Steps:** <br>
- Create a Test Case<br>
- Send a GET request to https://prestaging.testsigma.com/api_private/applications/&ltAppID&gt.

<br>

**Expected Results:** The request should be successful, and the response must contain the correct info of the app.

<br>

**Verification:**<br>
- Verify the response status code is 200.<br>
- Verify the response body to ensure it contains the expected data.

<br>

![SR](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/200.gif)

<br>

## **Invalid App ID**

**Prerequisite:** There is no application with the specified &ltAppID&gt in the system.<br>

**Steps:**<br>
- Create a Test Case<br>
- Send a GET request to https://prestaging.testsigma.com/api_private/applications/&ltInvalidAppID&gt.<br>

<br>

**Expected Results:** The request should fail with a 404 status code, and the response must mention invalid app ID or the app does not exist.

<br>

**Verification:** <br>
- Verify the response status code is 404.<br>
- Verify the response body with an error message indicating an invalid App ID.

<br>

![404](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/404.gif)

<br>

## **Unauthorized Access**

**Prerequisite:** The API requires right authorization to access the application data.<br>

**Steps:**
- Create a Test Case<br>
- Send a GET request to https://prestaging.testsigma.com/api_private/applications/<AppID> with incorrect authorization.<br>

<br>

**Expected Results:**<br>
The request should fail with a 401 status code, and the response should indicate that the token is missing or the access is unauthorized.

<br>

**Verification:**<br>
- Verify the response status code is 401.<br>
- Verify the response with an error message TOKEN MISSING.

<br>

![UA](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/qna.gif)

<br>

[[info | **NOTE**:]]
|These are just samples of contract tests that can be done with Testsigma. In real time, the consumer team can define API endpoints, and the provider team would then implement the product service to fulfill these contracts and run the contract tests to check compatibility.

