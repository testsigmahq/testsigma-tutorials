---
title: "Contract Testing with Testsigma"
metadesc: "This document describes the step-by-step details on how to execute contract testing with Testsigma application, a no-code test automation tool."
noindex: false
order: 3.2
page_id: "How to do Contract Testing with Testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Pre-requisite:"
  url: "#pre-requisite"
- type: link
  name: "Steps"
  url: "#steps"
---

---

Contract testing is done to ensure that two endpoints (eg. two microservices) are compatible and are able to communicate with each other. This is different from integration testing as here both the endpoints can be tested in isolation. Contract testing is done by issuing a contract to both endpoints and ensuring that they honor it. 


In this document, we will discuss how Testsigma does it. 

---
> ## [Pre-requisite:](#pre-requisite)
> In order to automate a test case for contract testing, you will need:
> * A REST API that is supposed to communicate with another endpoint
> * A JSON Schema to validate the response from the REST API in point  

---

To add the test case in Testsigma, you should know:

1. [How to add a test case in Testsigma.](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) 

2. [How to add a REST API test step to a test case in Testsigma](https://testsigma.com/docs/test-cases/step-types/rest-api/)

3. [How to automate REST APIs with Testsigma](https://testsigma.com/tutorials/getting-started/automate-rest-apis/)

4. [How to execute tests on Testsigma](https://testsigma.com/docs/runs/adhoc-runs/)


---

## [Steps](#steps)

* Create a test case in Testsigma.

*  In the test case created in step 1, add a REST API test step.

* In the REST API test step > Request Details, add the REST API endpoint that you want to test. For the purpose of this document, we will test a GET API, as also shown in the screenshot below:

![Request Details while adding a Get API to execute contract testing via Testsigma](https://docs.testsigma.com/images/tutorials/rest-api-testing/json-schema-validation/get-api-request-details-contract-testing-testsigma.png)

* Under the Test step added in step 2, go to the “Verify Response” tab and add the “Expected Status Code” for the REST API’s response. For our example, we have added the Expected Status Code as 200, which is a code for “completed”, meaning the test was a success.

![expected status code under verify response tab to execute contract testing via Testsigma](https://docs.testsigma.com/images/tutorials/rest-api-testing/json-schema-validation/expected-status-code-under-verify-response-contract-testing-testsigma.png)

* On the same “Verify Response“ tab, select “Body Compare Type” as “JSON schema”, and under “Expected Content” add the JSON Schema to validate the REST API response. This JSON Schema will be the contract for testing your REST API. The added JSON Schema for our example is as seen in the screenshot below:

![Expected body content under Verify Response Tab to execute contract testing with Testsigma](https://docs.testsigma.com/images/tutorials/rest-api-testing/json-schema-validation/expected-body-content-under-verify-response-contract-testing-testsigma.png)

* When you execute the test case, the response from the added REST API will be validated against the added schema. If the response matches the JSON schema, the test case will be reported as “Passed”, else it would be reported as “Failed”.

* If the test case fails, the failed criteria would be reported to you. For our example test case - when the required key “firstName” was not found in the response, the test case failed with the error “required key [firstName] not found”. As also shown in the screenshot below:

![Error message, as reported in Testsigma, when a contract testing test case failed](https://docs.testsigma.com/images/tutorials/rest-api-testing/json-schema-validation/error-message-when-a-contract-testing-test-case-failed.png)
