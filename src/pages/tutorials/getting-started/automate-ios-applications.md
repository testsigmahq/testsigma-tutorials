---
title: "Get Started with Automating iOS Apps"
metadesc: ""
noindex: false
order: 1.4
page_id: "Get Started with Automating iOS Apps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "We cover"
  url: "#we-cover-"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Setting the stage to write your first test"
  url: "#setting-the-stage-to-write-your-first-test"
- type: link
  name: "Method 1 : Add/Record Test Steps using the Test Recorder"
  url: "#method-1--addrecord-test-steps-using-the-test-recorder"
- type: link
  name: "Method 2 : Write automated test steps in plain English (manually)"
  url: "#method-2--write-automated-test-steps-in-plain-english-manually"
- type: link
  name: "Run your test case"
  url: "#run-your-test-case"
- type: link
  name: "Debugging Results"
  url: "#debugging-results"
- type: link
  name: "Viewing Results"
  url: "#viewing-results"
- type: link
  name: "Next Steps"
  url: "#next-steps"
---

---

This tutorial helps you create basic tests for an iOS application using Testsigma’s own Mobile Test Recorder.

---

## [We cover :](#we-cover-)

* Prerequisites needed for getting started

* Introduction to Testsigma’s very own mobile test recorder + inspector

* How to use Testsigma mobile test recorder to capture all the element details efficiently

* How to write tests for an iOS app and run it in the cloud

* A sample scenario tested using Testsigma

* How to view the comprehensive test results

---
> ## [Prerequisites](#prerequisites)
> You have a Testsigma account, that’s it! If you don’t have one, sign up for a [free trial](https://testsigma.com/signup).
> The trial includes all product features and free support (always!). Reach out via the in-app chat or email to [support@testsigma.com](mailto:support@testsigma.com)

---


##[Setting the stage to write your first test](#setting-the-stage-to-write-your-first-test)

**Workflow: Create a Project > Add a Test Case > Add Test Steps**

Let’s understand these in detail.

* Project - Can be your iOS application name for instance

* Test Case - specific scenario that has to be tested, say, login functionality

* Test Steps - the actual set of instructions/steps required to test the functionality

[[info | INFO:]]
| _By default, 4 Projects will be readily available on your account._
| _These projects (here, iOS application) will also have a few sample Test Cases and Test Steps ready for your reference._

1. Start by creating a Project first.
   For a detailed overview, [check here](https://testsigma.com/docs/projects/overview/)


2. Create a Test Case
   For a detailed overview, [check here](https://testsigma.com/docs/test-cases/overview/)


3. Add Test Steps
   Once you create a Test Case, you will be redirected to the page where you can add all your Test Steps.

Here’s a video that explains all the steps discussed so far.

<iframe src="https://docs.testsigma.com/videos/tutorials/getting-started-ios/recorded-steps-getting-started-testsigma-new-user-onboarded.mp4" width="600" height="400"></iframe>


The next section explains how you can add steps to test a sample scenario.

**Sample Test Scenario:** In this tutorial we will test create an account feature in _Twitter iOS App_.

There are two ways you can add Test Steps to your Test Case:

1. Add/Record Test Steps using the Test Recorder

2. Writing your tests step by step in simple English language

[[info | INFO:]]
| _Before you start make sure you’ve referred to the **‘Setting the stage to write your first test’** ‘section in this tutorial and your are currently in the **‘Test Case Details’** Page_

---

## [Method 1 : Add/Record Test Steps using the Test Recorder](#method-1--addrecord-test-steps-using-the-test-recorder)

The Testsigma test recorder (web and mobile) is in-built and sits directly on your app, acting as both test recorder and object spy/element inspector, letting you create the most stable tests in a matter of time. No extra setup is required for the same.

### Launch Test Recorder

Step1: To do this, simply click the **Record** option at the top of the test case details page.

![Click record to start recording](https://docs.testsigma.com/images/tutorials/getting-started-ios/recorder-start-record-option.jpg)

Step 2: A new window will appear that has a few options in rows.

![Options to select before you start recording](https://docs.testsigma.com/images/tutorials/getting-started-ios/recorder-window.png)

Let’s break down each row.

**Test Lab Type:** The first row displays the list of test labs supported to select the mobile devices to use from.

   **Testsigma Lab** lets you run your tests on a wide range of real devices on the cloud(that you may not necessarily own). You need not worry about the maintenance of these devices as they are managed by Testsigma.

   In addition to Testsigma Lab, Testsigma offers integrations with Sauce Labs, BrowserStack and more. The complete list can be found under the [Plugins](https://app.testsigma.com/ui/settings/plugs/test_lab) option on your account.

   **Local devices** as the name indicates means you can run the tests you are about to create on your own current/local device. In this case, you need to install Testsigma Agent on your device. Learn how to install Testsigma Agent  [here](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/).

**Select Version** and **Select Device** that you wish to run your tests on (in case you choose cloud option i.e. Testsigma Lab)

   **Select iOS Version :** Select the version of the application of the iOS device you wish to run your tests on.

   **Select Device :**  Opt and run your tests on any iOS device.

   **Choose/Upload App :** Upload the iOS application you wish to test.

   You can upload a new application by uploading its [IPA](https://cellularnews.com/mobile-apps/what-is-an-ipa-file-everything-you-have-to-know/) file.

To familiarize with Testsigma, you may choose any application that is already available on your Testsigma account via the dropdown menu. In this tutorial, a sample app is uploaded to demo how the steps can be recorded.

**Uploading a sample app (Twitter):** In this tutorial, the app under test is _Twitter._

For this, the Twitter app’s ipa file needs to be uploaded as discussed earlier. Click on **Upload**. Wait for the app to be uploaded.

![Options to select before recording](https://docs.testsigma.com/images/tutorials/getting-started-ios/record-steps-ios-app-testing.jpg)

Once done, click **Record**. Upon clicking **Record**, the Testsigma Mobile Recorder will be launched.

New to Testsigma Mobile Recorder? [Here](https://testsigma.com/tutorials/test-cases/mobile-apps/build-tests-using-recorder/) is a detailed walkthrough.

### Let’s record!

By default, the recorder will be in inspection mode (highlighted in yellow when you hover over any element).

![Inspection mode of test recorder](https://docs.testsigma.com/images/tutorials/getting-started-ios/recorder-default-inspection-mode.gif)

Let’s try interacting with the Twitter app we just uploaded.

**Test Step 1.** Perform a Tap action.

To tap on _“Create Account”_ that is displayed on the Twitter app screen, click on the button to keep focus.

You’d see a new pane appear in the centre.

![Clicking a button on the application screen](https://docs.testsigma.com/images/tutorials/getting-started-ios/click-element.png)

At the top, you will find these options : **Tap, Enter Data and Clear.**

Click on **Tap.**

This will perform a click/tap action and will take you to the next screen on the Twitter app. Consecutively, you will notice that this will also generate a test step in natural language automatically.

![Perform a click/tap action](https://docs.testsigma.com/images/tutorials/getting-started-ios/perform-tap-action.png) 

**Test Step 2.** Enter some data

As you see, the next screen on the Twitter app has 2 fields, _Name_ and _Phone_.

In order to enter a name, click to focus the Name field.

Choose **Enter Data** from the actions at the top of the centre pane.

Now all you need to do is type in the Name (here, _John Doe_) you wish to enter in the **Enter data** form that appears.
 
![Template to enter some values](https://docs.testsigma.com/images/tutorials/getting-started-ios/enter-text-field.gif)

**Test Step 3.** Clear data

Let’s say you wish to clear some text. Click to focus on the field you wish to clear values from. 

Click on **Clear**. This will wipe clean the entered value on this field.


**Test Step 4**. Enter data

You guessed it right! This step is the same as Test Step 2.
To enter a phone number, repeat the same process. Click to keep focus and press the **“Enter Data”** button at the top of the centre pane. Now enter the phone number you wish to enter and 
click **Enter Data** to save.


**Test Step 5**. Tap button

This is similar to Test Step 1. Simply click on the field/button you wish to tap on. In this case the Login button. Simply click the Tap option at the top of the pane in the centre.


**Test Step 6**.  Add a verify statement (assertion) manually

Now, let’s verify some text on the app screen.

To verify, start typing Verify on the test step editor (on the left pane).

Since we are verifying a text, choose the **“Verify that the current page displays text test data”** action from the list of actions.

You only need to replace the test data part with the actual text you copied, let’s say, _“Customize your experience”_ from the inspector.

![How to add a verify step](https://docs.testsigma.com/images/tutorials/getting-started-ios/verify-nlp-template.gif)

Paste this in place of “test data”. Click **Create** and you are done!

Here’s a summary of the steps we discussed so far.
<iframe src="https://docs.testsigma.com/videos/tutorials/getting-started-ios/recorded-steps-getting-started-testsigma-new.mp4" width="600" height="400"></iframe>

To learn all other options available in the test recorder [click here](https://testsignma.com/docs/test-cases/create-steps-recorder/ios-apps/overview/).

---

## [Method 2 : Write automated test steps in plain English (manually)](#method-2--write-automated-test-steps-in-plain-english-manually)

[[info | Note:]]
| _Not all steps can be recorded automatically. For advanced cases, you may need to incorporate Testsigma’s manual simple english based test authoring approach to reuse elements and perform verify actions._

In this section you will learn:

1. How to add steps and create a new element on the go
   Learn more about how to add steps manually from the test case details page [here](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/add-steps-manually/).

![Add more steps manually at any time](https://docs.testsigma.com/images/tutorials/getting-started-ios/add-nlp-test-steps-manually.gif)

2. How to add steps using existing elements
   You can reuse them at any time by choosing the element you want to use/reuse in the Test Case. Simply pick the name of the Element.

![Reuse an already created element in any test step easily](https://docs.testsigma.com/images/tutorials/getting-started-ios/reuse-already-added-element-in-test-step.gif)

3. How to add a simple verification steps
   Use the Verify action as used in Test Step 5 in the previous section.

4. Testsigma lets you capture all elements on the go.
   To create multiple elements at once, check [this](https://testsigma.com/docs/elements/ios-apps/record-multiple-elements/) out.
   You can use any of these elements by picking the name and reuse them anywhere in your Test Steps.

---
## [Run your test case](#run-your-test-case)

You can run your tests locally on your own machine or on the devices on the cloud (that you may not necessarily own!)

At the top right of your Test Steps page, click on **Run**.

Choose the device you wish to run your tests on, the device configurations, or how you’d like the screenshots captured, etc. You can choose these options based on your preference.

Click **Run Now**.

Here’s a video that shows you a sample test run done for the test case we created

<iframe src="https://docs.testsigma.com/videos/tutorials/getting-started-ios/dry-test-step-result-details-al-powered-test-automation-platform-testsigma.mp4" width="600" height="400"></iframe>

---
## [Debugging Results](#debugging-results)

From the video, you’d see that the one step failed.

![Drill down to test step failure](https://docs.testsigma.com/images/tutorials/getting-started-ios/debug-test-step-failure.png)

Let’s debug this and try to understand the reason for failure with the help of the suggestion engine.

To know why a test step failed, click on the failed test (marked in red) and view the error message. In this case, the error message is, _“Unable to click on the element with ui identifier”_.

From the screenshot, you will see that the button to submit the form is disabled at the time of performing the Tap action.

Now that the reason for failure is clear, let’s try and fix this.

Add wait time after the mobile number is entered so that there is time for the button to be enabled.

Type **“Wait for test data seconds"**. Replace the test data part with, say, 10 seconds.

Let’s try re-running this test case now.

<iframe src="https://docs.testsigma.com/videos/tutorials/getting-started-ios/ad-hok-run.mp4" width="600" height="400"></iframe>

The test has now passed.

---

## [Viewing Results](#viewing-results)
Testsigma provides simple, accessible and easy to analyze test execution reports.

You would also find all previous run results in the Dry Runs tab. You can also share the results of your test run with your teammates as shown in the screenshot.

Refer to [this](https://testsigma.com/docs/reports/runs/overview/) tutorial to learn how to create test plans and run them.

_This is a basic test that can be recorded by interacting with your app. also [ping us](https://discord.com/invite/5caWS7R6QX) for awesome support!_

---

## [Next Steps](#next-steps)

* Practice in your account. [Try it out!](https://testsigma.com/signup)

* Start creating tests. [Explore Recorder.](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/overview/)

* Automate iOS Apps using your local devices. [Learn more!](https://testsigma.com//tutorials/test-cases/ios-apps/build-tests-using-local-devices/)

* Create Test Plans and Schedule. Head over to [this link!](https://testsigma.com/docs/test-management/test-plans/schedule-plans/)

* Try out more advanced capabilities. Check out our detailed [documentation](https://testsigma.com/docs/).


Reach out to us through in app chat for a walkthrough or if you have any questions!

**Join [Discord Server](https://discord.com/invite/5caWS7R6QX) to learn more about Testsigma.**

