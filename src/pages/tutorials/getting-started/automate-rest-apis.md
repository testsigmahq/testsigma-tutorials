---
title: "Get Started with REST API Testing"
order: 1.5
page_id: "Get Started with REST API Testing"
search_keyword: "Get started, Rest APIs, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "API resources and routes"
  url: "#api-resources-and-routes"
- type: link
  name: "Demo Test"
  url: "#demo-test"
- type: link
  name: "Test the Expected Response Status Code for a GET request"
  url: "#1-test-the-expected-response-status-code-for-a-get-request"
- type: link
  name: "Test the Expected Response Header for a GET request"
  url: "#2-test-the-expected-response-header-for-a-get-request"
- type: link
  name: "Test the Expected Response Body for a GET request"
  url: "#3-test-the-expected-response-body-for-a-get-request"
- type: link
  name: "Create a post using POST request and test the Expected Status Code, Header, and Body"
  url: "#4-create-a-post-using-post-request-and-test-the-expected-status-code-header-and-body"
- type: link
  name: "Update a post using PUT request and test the Expected Status Code, Header, and Body"
  url: "#5-update-a-post-using-put-request-and-test-the-expected-status-code-header-and-body"
- type: link
  name: "Delete a user using DELETE request and test the Expected Response"
  url: "#6-delete-a-user-using-delete-request-and-test-the-expected-response"
---
---

In this tutorial, we will demonstrate how RESTful APIs or web services can be tested using Testsigma. In this demo, we are going to use **JSONPlaceholder** which is a free online REST service that you can use whenever you need some mock data.

---
## [API resources and routes](#api-resources-and-routes)

### Resources

**API Entry point** - [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

These are the resources or mock data available for inspection via the API. The left column specifies the URL for the request and right column specifies the number of JSON object items returned in the response.

 |  | 
--- | --- |
[/posts](https://jsonplaceholder.typicode.com/posts) | 100 items
[/comments](https://jsonplaceholder.typicode.com/comments) | 500 items
[/albums](https://jsonplaceholder.typicode.com/albums) | 100 items
[/photos](https://jsonplaceholder.typicode.com/photos) | 5000 items
[/todos](https://jsonplaceholder.typicode.com/todos) | 200 items
[/users](https://jsonplaceholder.typicode.com/users) | 10 items

We can append any of the above resource names to the API entry point to form a valid GET request.

### Routes

A few of the available routes are given below:

|  |
--- | --- |
[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts) | will return a response containing 100 posts
[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1) | will return a response containing the posts for userid=1
[https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1) | will return a response containing the post with id=1
[https://jsonplaceholder.typicode.com/posts/1/comments](https://jsonplaceholder.typicode.com/posts/1/comments) | will return a response containing the comments for post with id=1
[https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments) |  will return a response containing 500 comment items
[https://jsonplaceholder.typicode.com/comments?postId=1](https://jsonplaceholder.typicode.com/comments?postId=1) | will return a response containing the comments for post with id=1
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) | will return a response containing 10 users
[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1%C2%A0) | will return a response containing the user details for id=1

All of the most common HTTP verbs such as GET, POST, PUT, PATCH, and DELETE are supported.

Learn more about [Usage of various HTTP requests for REST API Testing in Testsigma](https://testsigma.com/docs/test-cases/create-steps-restapi/methods/)

If you are new to Web Service Testing, see [How to add Test Steps for Web Service/API Testing.](https://testsigma.com/docs/test-cases/step-types/rest-api/)

---
## [Demo Test](#demo-test)

Now, let us test the above API using Testsigma. We will perform a total of 8 tests as given below:

1. Test the Expected Response Status Code for a simple GET request.
2. Test the Expected Response Header for a GET request.
3. Test the Expected Response Body for a GET request.
4. Create a user using POST request and test the Expected Status Code, Header, and Body.
5. Create a user using PUT request and test the Expected Status Code, Header, and Body.
6. Delete a user using DELETE request and test the Expected Response.

---

## [1. Test the Expected Response Status Code for a GET request](#1-test-the-expected-response-status-code-for-a-get-request)

This test checks for the Expected Status Code of the Response for a simple GET request (no request header provided). The following entries are to be made in Testsigma:

**URL:** [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

**HTTP Method:** GET

**Test:** Status Code

**Expected Status Code:** 200

![Create a Rest API Step for a GET request](https://docs.testsigma.com/images/tutorials/automate-rest-api/create-rest-api-steps-get-request-details.png)

![Verify Response Status Code for a GET request](https://docs.testsigma.com/images/tutorials/automate-rest-api/verify-response-status-code.png)

---
## [2. Test the Expected Response Header for a GET request](#2-test-the-expected-response-header-for-a-get-request)

This test checks for the Expected Header of the Response for a simple GET request (no request header provided). The following entries are to be made in Testsigma:

**URL:** [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

**HTTP Method:** GET

**Test:** Header Test

**Expected Header Content:** {"content-type":"application/json; charset=utf-8"}

Please check this article for more details on comparison Types - [Comparison Modes in Web Services Testing](https://testsigma.com/docs/test-cases/create-steps-restapi/comparison-types/)

![Verify Response Header for a GET Request](https://docs.testsigma.com/images/tutorials/automate-rest-api/verify-response-expected-response-header.png)

---
## [3. Test the Expected Response Body for a GET request](#3-test-the-expected-response-body-for-a-get-request)

This test checks for the Expected Body Content of the Response for a simple GET request (no request header provided). The following entries are to be made in Testsigma:

**URL:** [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

**HTTP Method:** GET

**Test:** Validate User data

**Expected Body Content:** {"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz"}

**Body Comparison Type:** Lenient

![Get request to validate user data](https://docs.testsigma.com/images/tutorials/automate-rest-api/get-request-validate-user-data.png)

![Verify Response Body for a GET Request](https://docs.testsigma.com/images/tutorials/automate-rest-api/verify-response-expected-body-content.png)

---
## [4. Create a post using POST request and test the Expected Status Code, Header, and Body](#4-create-a-post-using-post-request-and-test-the-expected-status-code-header-and-body)

This test creates a post using POST request and checks for the Header, Body and Status Code of Expected Response with no request header. The following entries are to be made in Testsigma:

**URL:** [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

**HTTP Method:** POST

**Payload:** {"title":"foo","body":"bar","userId":1}

**Expected Status Code:** 201

**Expected Header:** {"content-type":"application/json; charset=utf-8"}

**Expected Body:** {"id":101,"title":"foo","body":"bar","userId":1}

**Comparison Type:** Lenient

![Create a REST API Step for POST Request](https://docs.testsigma.com/images/tutorials/automate-rest-api/post-request-create-rest-api-step.png)

![Verify Header and Body for POST Request](https://docs.testsigma.com/images/tutorials/automate-rest-api/post-request-verify-header-body.png)

---

## [5. Update a post using PUT request and test the Expected Status Code, Header, and Body](#5-update-a-post-using-put-request-and-test-the-expected-status-code-header-and-body)

This test updates a post using PUT request and checks for the Header, Body and Status Code of Expected Response with no request header. The following entries are to be made in Testsigma:

**URL:** [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

**HTTP Method:** PUT

**Payload:** {"title":"foo","body":"bar","userId":1}

**Expected Status Code:** 200(updated)

**Expected Header:** {"content-type":"application/json; charset=utf-8"}

**Comparison Type:** Lenient

**Expected Body:** {"id":101,"title":"foo","body":"bar","userId":1}

**Comparison Type:** Lenient

![Create a REST API Step for PUT Request](https://docs.testsigma.com/images/tutorials/automate-rest-api/put-request-create-rest-api-step.png)

![Verify Response Header for PUT Request](https://docs.testsigma.com/images/tutorials/automate-rest-api/put-request-verify-response-header.png)

---
## [6. Delete a user using DELETE request and test the Expected Response](#6-delete-a-user-using-delete-request-and-test-the-expected-response)

This test deletes a user and checks the Expected Header Response for a simple DELETE request with no request header. The following entries are to be made in Testsigma:

**URL:** [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

**HTTP Method:** DELETE

**Test:** Status Code

**Expected Status Code:** 200

**Expected Header:** {"content-type":"application/json; charset=utf-8"}

**Comparison Type:** Lenient

![Create a REST API Step for DELETE Request](https://docs.testsigma.com/images/tutorials/automate-rest-api/delete-request-create-rest-api-step.png)

![Verify the Response Status for DELETE Request](https://docs.testsigma.com/images/tutorials/automate-rest-api/delete-request-verify-response-status.png)