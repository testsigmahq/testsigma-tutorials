---
title: "How to do data-driven testing "
metadesc: "Learn how to perform data driven or parameterized testing in Testsigma"
noindex: false
order: 2.5
page_id: "How to do Data Driven Testing "
search_keyword: "Data Driven Testing, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Enable Data-Driven in test case"
  url: "#enable-data-driven-in-test-case"
- type: link
  name: "Use parameter names in test case"
  url: "#use-parameter-names-in-test-case"
- type: link
  name: "Run data driven test case"
  url: "#run-data-driven-test-case"
---

---

This tutorial walks you through data-driven testing and how to enable it in the test case. This can involve using external test data profiles as a source within the project to drive its behaviour. The goal is to increase the effectiveness and efficiency of testing by automating repetitive tasks and ensuring comprehensive test coverage. In Testsigma, you can


1. The test data and expected output data can be imported or read from external sources.

2. Using this data, you can avoid hardcoding the test data into the Test Steps definition in your automated test cases.

Test steps iterate and feed subsequent rows of data into them as input.

---

### **Prerequisites**

You'll need to know how to create a [test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), [test data profile](https://testsigma.com/docs/test-data/create-data-profiles/#create-a-test-data-profile), and [runtime variable](https://testsigma.com/docs/test-data/types/runtime/#how-to-use-runtime-test-data-in-test-steps).

---

## **Enable Data-Driven in test case**

1. On the **Create** or **Edit** test case page, click on **Show additional options** to unhide the features.
![unhide the feature](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/dd_showhideadvanced.png)

2. Select the **Test data profile** from the drop-down menu and turn on the **Data driven** toggle. 
![Toggle to enable data driven testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/dd_enabledd.png)

Enabling the data-driven toggle will allow the test to run multiple times based on the number of rows in the Test Data Profile. If the data profile has five rows (sets), the test will run five times automatically, using each data set (row) every time.

[[info | Note:]]
| You can also select a specific dataset if you want to run the profile only once, using data from that dataset.

Data-driven testing allows you to narrow and customize your test case using filters like *iteration*, *set name*, and *parameter*.

 * **Iteration:** This type of filtering applies only to sequential data sets. The data sets can be filtered using the filter operations *greater than*, *less than*, and *between*.

 * **Set name:** This type of filtering applies to non-sequential data sets. Here, the data sets are filtered by their names using the operations *between*, *equals*, *contains*, *starts with*, and *ends with*. Any data set names containing the set name, or part of it are used in the test case.

 * **Parameter:** This type of filtering applies to non-sequential data sets. Here, the data sets are filtered using parameters used in the data sets. Here, filter operations are using *Equals*, *Contains*, *Start With*, *Ends With*, *Is Empty*, and *Is Not Empty*.


###

3. Click **Create** or **Update** once the data driven is enabled.
![test case data driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/create_data_driven_test_case.gif)

[[info | NOTE:]]
| You can use **runtime variables** in **filter values** by entering **$|Maharashtra|**, where *Maharashtra* is a stored variable, as shown in the example above.  


---

## **Use parameter names in test case**

1. Click on **test data** and select **@|Parameter|** from the drop-down list when creating test steps in the test case. 
![Choose the test data parameter to use in your test step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/dd_parametertestdata.png)

2. An overlay screen will open, displaying all available parameters in the test data profile.
![Replace with parameter values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/dd_parameters.png)

Now, your test case will use the parameter value from your test data profile.

![using parameter names in test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testdataparameter_dd.gif)

---

## **Run Data Driven Test Case**

1. Click on **Run Now** in the top right corner, and the **Ad-hoc Run** screen will appear. Select the **test machine/device** and click **Run Now**.

2. Once the test run is complete you will get results for each of the data sets.
![run result status of your test dat sets](https://docs.testsigma.com/images/tutorials/data-driven-testing/run-status-test-data-profiles.png)

---