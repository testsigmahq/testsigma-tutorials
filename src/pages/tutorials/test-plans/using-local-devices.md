---
title: "How to Create a Test Plans to run on Local Devices"
order: 4.1
page_id: "How to Create a Test Plans to run on Local Devices"
search_keyword: "Test Plans, Local devices, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "What is Testsigma Agent?"
  url: "#what-is-testsigma-agent"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Create A Test Plan For Execution on Local Devices"
  url: "#create-a-test-plan-for-execution-on-local-devices"
- type: link
  name: "Run Test Plans in Local Mobile Devices(iOS/Android)"
  url: "#run-test-plans-in-local-mobile-devicesiosandroid"
---

---

## [What is Testsigma Agent?](#what-is-testsigma-agent)

Testsigma Agent is a java utility program that lets you execute your test cases/test plans on different browsers such as Windows/ Linux/ Mac, either on the Testsigma Lab or on your local devices. [See how to set up Testsigma Agent on your local device/machine](https://testsigma.com/tutorials/agent/how-to-setup-agents-to-run-tests-on-local-mobile-devices/).

---
> ## [Pre-requisites](#pre-requisites)
> You should know how to
> 1. [Set up an Agent.](https://support.testsigma.com/support/solutions/articles/32000023401-quick-setup-guide-setup-testsigma-agent-windows-mac-linux-)
> 2. [Create a Test Suite](https://support.testsigma.com/support/solutions/articles/32000016704-how-to-add-edit-delete-test-suite-)
> 3. [Create a Test Plan.](https://support.testsigma.com/support/solutions/articles/32000022111-how-to-add-edit-delete-test-plan-configuration-)

---

## [Create A Test Plan For Execution on Local Devices](#create-a-test-plan-for-execution-on-local-devices)

**Navigation: Test development > Test Plan.** Click on  **+ Test Plan** button as shown in the screenshot below:

![Create a test plan for execution](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/create-test-plan.png)

The **Create Test Plan** screen will appear:

![Enter details to create a test plan](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/create-test-plan-settings.png)

Enter the **Test Plan Name** in the Text box and select **Test Lab** as **Local Devices**. Click on **Next**.

![Add a new test plan name](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/add-test-plan-name.png)

Once you click on the Next button, you will be asked to select the test machines. Here in the Test Machine field, you need to select the device on which you have set up the Testsigma Agent. See [how to set up Testsigma Agent on your local device/machine.](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/)

![Select test machine for execution](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/test-plan-select-test-machine.png)

You can also select the browser on which you want to run your test plan.

![Select test machine and browser settings](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/test-plan-select-test-machine.png)

Click on the Add button.

![Add test machine](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/add-button-test-machne.png)

Click on the **+ add test suites** and add test suites as you like. In this example, we have two test suites. Select the test suites you want test plan execution and click on the **add** button.

![Select test suites to add](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/select-test-suites.png)

Click on the **next** button.

![Add a new test machine](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/add-test-machine.png)

The Test Plan Settings page will come up, as shown below.

![Create a new test plan](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/create-test-plan.png)

Select **notifications** and **additional settings** and **recovery actions**. Click on **create** button.

![Test plan settings to add new](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/add-test-plan-settings.gif)

Click on the **Run Now** button.

![Start by clicking on Run button](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/start-execution-click-run.png)

To verify the execution, go to **Agents** and search for your localhost machine like this:

![Look for the agent using the Agent name](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/search-agent-name.gif)

You can also check the same under **Test development > Run Results.**

![Click to view the run results](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/view-run-results-testsigma.png)

[[info | NOTE:]]
| Test plan execution results will be displayed under Run Results and Test Case results will be put under the dry runs tab.

---
## [Run Test Plans in Local Mobile Devices(iOS/Android)](#run-test-plans-in-local-mobile-devicesiosandroid)

To run tests on local Android or iOS devices, you will need to know the following:

1. [How to set up Testsigma agent to run tests in local Android devices?](https://testsigma.com/tutorials/test-cases/mobile-apps/build-tests-using-local-android-devices/)

2. [How to set up Testsigma agent to run tests in local iOS devices?](https://testsigma.com/tutorials/test-cases/mobile-apps/build-tests-using-local-ios-devices/)

If you are unable to start your mobile test recorder click here for the fix.

[[info | NOTE:]]
| This walkthrough covers local device execution for Android, but you can follow the same steps for iOS devices as well.

Once you have connected your mobile to your laptop device via USB cable and enabled the USB debugging toggle, go to the Agent tab in Testsigma and see if your device is displayed in Testsigma inspector and is ready for test execution as shown in the GIF below:

[[info | NOTE:]]
| **Make sure you have selected an Android application under your project.**

![Make sure to select an Android app project](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/android-app-project.gif)

Now go to the test case you want to run on your device and click on Run.

![run-test-case](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/run-test-case.png)

Select **Local devices** under **Select Test Lab**.  Your device will appear in **Select Test Device**. Upload an APK file under **uploads** then click on the **Run Now** button.

![select-test-environment](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/select-test-environment.gif)

You can observe your mobile screen to see the test running once the execution begins. In the Testsimga app, you can see the page below:

![Test execution is in progress](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/execution-in-progress.png)

To verify your runs, click on the dry runs tab where all your test results are displayed.

![dry-run-test-result](https://docs.testsigma.com/images/tutorials/run-tests-on-local-devices/dry-run-test-result.png)

In the walkthrough, we executed a single test case on a local mobile device, but you can bunch multiple test cases into a test suite and run them in the test plan. Once your Test Plan is ready, you can follow the steps as shown in the web application local device at the beginning of this article and select your mobile device for execution. 

[[info | NOTE:]]
|  Sometimes there can be an error at the server side during the execution, so you can click on the Re-Run button shown at the corner to retry the test execution.

If the executions are not running as expected in local devices refer to [this troubleshooting documentation](https://testsigma.com/docs/agent/troubleshooting/setup-issues/) for more details


**If the issue persists, [connect with Testsigma Support on Discord](https://discord.com/invite/5caWS7R6QX)** or reach out to support@testsigma.com. 

