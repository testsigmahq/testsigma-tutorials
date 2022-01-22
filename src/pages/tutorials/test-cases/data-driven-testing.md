---
title: "How to do Data Driven Testing "
order: 2.5
page_id: "How to do Data Driven Testing "
search_keyword: "Data Driven Testing, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Step 1: Associate Data Profile with you Test Case"
  url: "#step-1-associate-data-profile-with-you-test-case"
- type: link
  name: "Step 2: Use Parameter names in Test Case"
  url: "#step-2-use-parameter-names-in-test-case"
- type: link
  name: "Step 3: Run Data Driven Test Case"
  url: "#step-3-run-data-driven-test-case"
---

---

Instead of hard-coding different values to test the same scenario with different test data, you can use Data Driven testing. In Testsigma, you can

1. import or read the test data and/or expected output data from external files or data sources, then

2. feed this data into your automated test cases so that you don't need to hard-code the test data into the Test Steps definition.

The Test Steps iterates itself and subsequent rows of data are fed to the Test Steps as input.

---

> ## [Pre-requisites:](#pre-requisites)
> 1. You should know [how to create a Test data profile](https://testsigma.com/docs/test-data/create-data-profiles/).
> 2. You should know [how to add steps using simple English](https://testsigma.com/docs/test-cases/step-types/natural-language/).

---

## [Step 1: Associate Data Profile with you Test Case](#step-1-associate-data-profile-with-you-test-case)

1. In Create/Update Test Case form and click on Show Additional Options.

2. Select the Test Data which you have created as shown below.

![Choose a test data profile from the list](https://docs.testsigma.com/tutorials/videos/data-driven-testing/choose-a-test-data-profile.png)

3. Select the Test data profile you want to add to your test cases and enable Data Driven as shown below:

![Toggle to enable data driven testing](https://docs.testsigma.com/tutorials/videos/data-driven-testing/enable-data-driven-testing.png)

Enabling the data-driven toggle will enable the test to run multiple times based on the number of rows available in Test Data Profile. For. If the data profile has 5 rows(sets) the test will run 5 times automatically using each data set(row) everytime.

[[info | Note:]]
| You can also select a specific data set if you want to run only once using data from a specific data set in the profile.

---

## [Step 2: Use Parameter names in Test Case](#step-2-use-parameter-names-in-test-case)

1. Back in your test cases, while creating test steps, remove “test data”  and  select @|Parameter| from the drop down as shown below:

![Choose the test data parameter to use in your test step](https://docs.testsigma.com/tutorials/videos/data-driven-testing/choose-test-data-type.png)

2. Now delete the “test data“ placeholder and choose Parameter from the drop-down options

![Choose parameter type test data](https://docs.testsigma.com/tutorials/videos/data-driven-testing/choose-test-data-type-parameter-test-data-type.png)

3.  Now an overlay will open with all available parameters in the data profile.

![Replace with parameter values](https://docs.testsigma.com/tutorials/videos/data-driven-testing/add-parameter-test-data-values.gif)

Now, your test case will use the parameter value from your test data profile.

---

## [Step 3: Run Data Driven Test Case](#step-3-run-data-driven-test-case)

1. Click on Run Now on the top right corner and select the test machine/device details

2. Once the test run is complete you will get results for each of the data sets. Like in the screenshot below:

![run result status of your test dat sets](https://docs.testsigma.com/tutorials/videos/data-driven-testing/run-status-test-data-profiles.png)

