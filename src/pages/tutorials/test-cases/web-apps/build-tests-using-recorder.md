---
title: "Web: How to build Test Cases using Recorder"
order: 2.11
page_id: "Web: How to build Test Cases using Recorder"
search_keyword: "Web Application, Recorder, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "We cover"
  url: "#we-cover"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Setting the stage to Record your first test"
  url: "#setting-the-stage-to-record-your-first-test"
- type: link
  name: "Test scenario"
  url: "#test-scenario"
- type: link
  name: "Creating a step group"
  url: "#creating-a-step-group"
- type: link
  name: "Recording the test case"
  url: "#recording-the-test-case"
- type: link
  name: "Running your test"
  url: "#running-your-test"
- type: link
  name: "Analyzing results"
  url: "#analyzing-results"
- type: link
  name: "Next Steps"
  url: "#next-steps"
---

---

Recording user actions is an effective way to simplify test creation and enable everyone in your team to contribute to building tests. In this tutorial we are going to show you how to use the step recorder to create a readable and editable test case for an end-to-end scenario

---
## [We cover]()

* Prerequisites for getting started

* Creating a step group

* Recording a test case

* Running the test

* Analyzing results

---
> ## [Pre-requisites]()
> 1. **You have a Testsigma account :** If you haven't already, sign up for a [free trial](https://testsigma.com/signup)
>     The trial includes all product features and free support (always!) via the in-app chat or email to [support@testsigma.com](mailto:support@testsigma.com)
> 2. **You have added the Test recorder :** The extension will automatically render steps(in readable natural language) based on how you interact with the application under test.
>      You can add Testsigma’s extension from the Chrome webstore by visiting [this](https://chrome.google.com/webstore/detail/testsigma/epmomlhdjfgdobefcpocockpjihaabdp) link.
>      For a detailed overview, check [here](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).

---
## [Setting the stage to Record your first test]()

**Workflow: Create a Project > Add a Test Case > Create a step Group -> Record Test Steps**

Let’s understand these in detail.

* **Project** - Can be your web application for instance

* **Test Case** - specific scenario that has to be tested, say, login functionality

* **Test Steps** - the actual set of instructions/steps required to test the functionality

* **Step Group** - A group of test steps that can be used across other test cases

[[info | NOTE:]]
| _By default, 4 Projects will be readily available on your account. These projects (here, Web application) will also have a few sample Test Cases and Test Steps ready for your reference._

1. Start by creating a Project first.
   For a detailed overview, check [here](https://testsigma.com/docs/projects/overview).


2. Create a Test Case
   For a detailed overview, check [here](https://testsigma.com/docs/test-cases/manage/add-edit-delete).


3. Record Test Steps
   Once you create a Test Case, you will be redirected to the page where you can record all your Test Steps.

---
## [Test scenario]()

We’ll be using our ‘Simply Travel’ web Application to demonstrate the step recorder functionality. The test scenario in this case will be **“Booking a flight using multiple filters”**

[[info | NOTE:]]
| _Before you start make sure you’ve referred to the **‘Setting the stage to write your first test’** ‘section in [this tutorial](https://testsigma.com/tutorials/getting-started/automate-web-applications/) and your are currently in the **‘Test Case Details’** Page_ 

---

## [Creating a step group]()

To create a step group from the test case details navigate to the step groups tab that's present right next to the test cases page. Here we’ll be performing the following steps:

**Step 1.** The first step is to navigate to the login screen of the application which in this case is the travel testsigma website. Since this is always the first step, a default “Navigate to test data” action will be added by default.

**Test data** is a [terminology](https://testsigma.com/docs/getting-started/terminology/) in Testsigma which refers to the input values you wish to provide.

So, you only need to paste the website address (URL) you are testing. In this case, the Simply Travel web application URL which is [https://travel.testsigma.com/login](https://travel.testsigma.com/login)

Paste this link in place of test data.

**Step 2:** Add the following action statements to complete the login portion of the test scenario. To learn more about writing test cases manually [refer to this document](https://testsigma.com/docs/test-cases/create-steps-nl/overview/):

1. Enter admin in the User Name field

2. Enter 12345 in the Password field

3. Click on Login

![step_group_recorder](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/step_group_recorder.png)

Once you’re done adding the test steps you’ve completed the required login scenario for the step group. Go back to the test cases page.

---

## [Recording the test case]()

**Step 1:**  Navigate to the test case details page. Now we need to add the Step group you just created as the first step in this test scenario. Click on the NLP symbol on the left of your test step. From the drop down select the Step Group option. 

![step_options](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/step_options.png)

**Step 2:** Click on the **Record** button at the top right to start recording your interactions.

You will see that a new window appears that will navigate you to the URL you just entered.

Here, you can start performing your desired actions on your web application. Note that each click, keystroke will be recorded as steps. The corresponding simple English tests will be automatically created and added below the first step you just created (Step 1).

To enter some value, click on any text field in the form, enter a name (say, John Doe). The input you entered and its address will all be automatically captured by the smart recorder.

Perform the following user actions on screen while the recorder is running. You can click on the little red button at the bottom at any time to pause your recording.

1. Select the checkbox Non Stop

2. Check the checkbox Before 6AM

![web_recorder_Tutorial_2](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/web_recorder_tutorial_2.png)

3. Click on More Filters
   
4. Click on Apply

![web_recorder_Tutorial_3](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/web_recorder_tutorial_3.png)

5. Click on Sort By

6. Click on Book Now for any of the flight options

![web_recorder_Tutorial_4](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/web_recorder_tutorial_4.png)

7. Click on Continue

8. Select the Mobile No field

9. Enter 8884587765 or any other valid phone number in the Mobile No field

10. Enter admin@gmail.com in the Email field

11. Click on Continue

![web_recorder_Tutorial_5](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/web_recorder_tutorial_5.png)

12. Click on Net Banking or any other option you prefer

13. Select Axis Bank or any bank you prefer

14. Click on Finish Payment once you’re done

**Step 3:** Once you are done recording all your user actions we will add an assertion step manually within the recorder itself. We use the **Verify** action to add assertions in Testsigma. Here the test step is:

**‘Verify that the current page displays text Booked’**

This statement ensures that we’ve executed all the steps successfully and the ‘Booking a flight’ scenario reached the final page.

![web_recorder_Tutorial_6](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/web_recorder_tutorial_6.png)

**Step 4:** After recording all the actions and adding the required step, click on the finish button in the recorder and you’ll be redirected to the test case screen.  In the test case screen you’ll find all your test steps recorded with the elements you’ve interacted with.

![web_recorder_Tutorial_7](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/web_recorder_tutorial_7.png)


---
## [Running your test]()

Once you’ve completed writing all your test steps, click on the Run button on the top right hand side of your screen.

![run_web_recorder](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/run_web_recorder.png)

You can run your tests locally on your own machine or on the devices on the cloud (that you may not necessarily own!)

---
## [Analyzing results]()

After running the test case you’ll be able to view the results of your test run for each step by clicking on each of them.

![web_recorder_Tutorial_8](https://docs.testsigma.com/images/tutorials/build-tests-using-recorder-web/web_recorder_tutorial_8.png)

You can also view screenshots of each test step execution as well as watch a video of the entire test run.

To view detailed results of all your test cases you can navigate to: Test development -> Run Results where can use several filters to fetch detailed reports

---
## [Next Steps]()

* Practice in your account. If you don't have an account [Try out!](https://testsigma.com/signup).

* Try all options in Test Recorder. [Try it out!](https://testsigma.com/docs/test-cases/create-steps-recorder/web-applications/overview/)

* Create Test Plans and Schedule. Head over to [this link!](https://testsigma.com/docs/test-management/plans/schedule-plans/)

* Try out more advanced capabilities. Check out our detailed [documentation](https://testsigma.com/docs/).

Reach out to us through in app chat for a walkthrough or if you have any questions!

**JoinTestsigma’s [Discord Server](https://discord.com/invite/5caWS7R6QX) for support**

**More tutorials [here](https://testsigma.com/tutorials/).**
