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
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Step 1: Associate data profile with a test case"
  url: "#step-1-associate-data-profile-with-a-test-case"
- type: link
  name: "Step 2: Use parameter names in test case"
  url: "#step-2-use-parameter-names-in-test-case"
- type: link
  name: "Step 3: Run data driven test case"
  url: "#step-3-run-data-driven-test-case"
---

---

Instead of hard-coding different values to test the same scenario with different test data, you can use Data Driven testing. In Testsigma, you can

1. Import or read the test data and/or expected output data from external files or data sources, then

2. Feed this data into your automated test cases so that you don't need to hard-code the test data into the Test Steps definition.

The test steps iterates itself and subsequent rows of data are fed to the test steps as input.

---

> ## [Prerequisites:](#prerequisites)

> 1. You should know [how to create a test data profile](https://testsigma.com/docs/test-data/create-data-profiles/).
> 2. You should know [how to create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## [Step 1: Associate data profile with your test case](#step-1-associate-data-profile-with-you-test-case)

1. In **Create** or **Edit** test case form and click on **Show additional options**.

2. Select the **Test data profile** you want to add to your test cases and enable the toggle **Data Driven** as shown below:

![Toggle to enable data driven testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/data-driven-testing/test_data_profile_associate.png)

Enabling the data-driven toggle will enable the test to run multiple times based on the number of rows available in Test Data Profile. For. If the data profile has 5 rows(sets) the test will run 5 times automatically using each data set(row) everytime.

[[info | Note:]]
| You can also select a specific data set if you want to run only once using data from a specific data set in the profile.

If you enable the data driven testing in your test case you can narrow and customize the various data sets from your test data profile that are being used in your test case using the filters *iteration*, *parameter*, *set name*.

* Iteration: This type of filtering is applicable only to sequential data sets. The data sets can be filtered using the filter operations greater than,less than, or between.

* Set name: This type of filtering is applicable for non sequential data sets. Here the data sets are filtered by data set names using the operations between, equals, contains, starts with, ends with. Any data set names containing the set name or part of it are used in the test case.

* Parameter:This type of filtering is applicable for non sequential data sets. Here the data sets are filtered using parameters used in data sets.

![parameter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/data-driven-testing/filter_test_case_list.png)

Refer to the below GIF on how to associate a test data profile to a test case

![test case data driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/data-driven-testing/create_data_driven_test_case.gif)


---

## [Step 2: Use parameter names in test case](#step-2-use-parameter-names-in-test-case)

1. Back in your test cases, while creating test steps, click on *test data*  and  select *@|Parameter|* from the drop down as shown below:

![Choose the test data parameter to use in your test step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/data-driven-testing/select_parameter.png)

2. Now an overlay will open with all available parameters in the data profile.

![Replace with parameter values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/data-driven-testing/associate_parameter_name.png)

Now, your test case will use the parameter value from your test data profile.

Refer to the below GIF on how to use parameter names in test cases
![using parameter names in test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/data-driven-testing/using_data_profile.gif)

---

## [Step 3: Run Data Driven Test Case](#step-3-run-data-driven-test-case)

1. Click on Run Now on the top right corner and select the test machine/device details

2. Once the test run is complete you will get results for each of the data sets. Like in the screenshot below:

![run result status of your test dat sets](https://docs.testsigma.com/images/tutorials/data-driven-testing/run-status-test-data-profiles.png)
