---
title: "How to do cross-platform end-to-end testing with Testsigma"
metadesc: "This document describes the step-by-step details of how to create a test plan for cross-platform end-to-end testing with Testsigma"
noindex: false
order: 4.2
page_id: "Cross-Platform End-to-End Testing with Testsigma"
search_keyword: "Test Plans, Local devices, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Steps"
  url: "#steps"
---

---

There will be scenarios when you would want to execute certain test cases on one platform and once those test cases are executed, certain other dependent test cases on a different platform.

For example, for a flight booking application, you might book the flight on the desktop web and then could want to modify the bookings on your android application, and then you might want to cancel the bookings on your iPad application.

The flow would look something like the below:

* Book the flight on the desktop web

* Modify the booking done in step 1 on the android application

* Cancel the booking done in step 1 and modified in step 2, on the iPad application.


Today, when applications are made to provide the same experience on multiple different platforms - such a scenario is valid and common. With Testsigma, you can test such cross-platform end-to-end testing scenarios easily.

Let’s see how cross-platform end-to-end test automation can be done with Testsigma:


---
> ## [Pre-requisites](#pre-requisites)
> The test suites containing test cases for the above scenarios should be already there. That is, Test cases to:
> * Book the flight on the desktop web
> * Modify an existing booking on an android application
> * Cancel a booking on an iPad application


For the above, you should know how to:

1. [Automate a test case in Testsigma](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
2. [Create a Test Suite in Testsigma](https://testsigma.com/docs/test-management/test-suites/overview/)
3. [Create a Test Plan in Testsigma](https://testsigma.com/docs/test-management/test-plans/overview/)


---

## [Steps](#steps)

1. Add a Test Plan.

2. Enter the Test Name. For example, below is how we have added the Test Name for our example Test case:

![Step 1 to create a test plan](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/create-test-plan-step-1.png)

3. Click on the Next Button on the ‘Create Test Plan’ Tab, the tab ‘Test Machines & Suites Selection’ Opens Up:

![Step 2 to add test machines and suites for test plan execution](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/test-machines-and-suites-selection-step-2.png)

4. On Tab 2, select the type as ‘Distributed Testing’ and select the Project containing the test suite, select the test suite, and select the test machine you want to execute it on. For our purpose, we chose “Simple Demo(Web)” as project, “Book Flight” as the test suite, and Latest Google Chrome on Windows 11 as the test machine. Below is a screenshot with the mentioned selections, for your reference:

![add first test suite for e2e testing execution](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/add-first-test-suite-e2e-testing.png)

5. Click on the ‘Add’ button to add this selection to test plan execution. Below is what you will see after clicking on the add button.

![UI after adding first test suite for E2E testing on multiple platforms](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/after-adding-first-test-suite-e2e-testing.png)

6. Now click on the big green ‘Add’ Button. Now you are ready to add another test execution combination (test suite + test machine) to the test plan. Below is a screenshot of how the screen appears:

![Add second test execution to the E2E testing test case](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/add-second-test-execution-combination-e2e-testing.png)

7. Here, choose the test suite for modifying booking for android ‘Modify Booking’, and choose the prerequisite as the test execution setting that was added in step 5. The test execution chosen in step 5, would appear as a drop-down for pre-requisites. Below is a screenshot of how the selection looks for our example E2E testing scenario:

![The second test execution settings as selected for the E2E testing scenario](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/second-test-execution-selected.png)

8. Click on the ‘Add’ Button to add this configuration to the test plan execution.

9. Similarly, add another test execution combination (test suite + test machine) to the test plan - ‘Cancel Booking’ Test Suite for iOS. Below is how selection looks for the example E2E test scenario:


![The third test execution settings as selected for the E2E testing scenario](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/third-test-execution-selected.png)

10. Now, click on the ‘Add’ Button to add this configuration to the test plan execution. Below is how all the added test executions look:

![All test executions added for E2E testing scenario](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/final-test-executions-for-E2E-testing-scenario.png)

11. Click on the ‘Next’ Button. On the third tab ‘Test Plan Settings’, you can add the edit the settings to suit your needs and click on the ‘Create’ Button at the bottom as also shown in the screenshot below:

![The test plan settings tab for E2E testing scenario](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/test-plan-settings-E2E-testing-scenario.png)

12. Once the test plan is created, you will be taken to the test plan page, as shown below:

![Created Test Plan page for E2E testing scenario](https://docs.testsigma.com/images/tutorials/test-plans/cross-platform-end-to-end-testing/created-test-plan-page-E2E-testing-scenario.png)

13. On the Test Plan Page, you can click on the ‘Run Now’ button to see the test plan in execution. You can click on the ‘View Reports’ button to go to report. The button is highlighted below:

![Gif to demonstrate test execution of a multi-platform E2E testing scenarios](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/test-plan-executions/e2e-testing-scenario-gif.gif)

Alternatively, below is a gif demonstrating the above steps for configuring a cross-platform end-to-end test scenario with Testsigma:
