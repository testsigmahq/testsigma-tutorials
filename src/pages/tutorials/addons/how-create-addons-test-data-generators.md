---
title: "Create Test data generators in Addons"
order: 4.2
page_id: "Create Test data generators in Addons"
search_keyword: "Addons, Data Generators, Testsigma Tutorials"
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
  name: "Creating your Add-on"
  url: "#creating-your-add-on"
- type: link
  name: "Scenario: Test Data generator that produces a random number"
  url: "#scenario-test-data-generator-that-produces-a-random-number"
- type: link
  name: "Scenario Code walkthrough"
  url: "#scenario-code-walkthrough"
- type: link
  name: "Testing your code"
  url: "#testing-your-code"
---
---

Data generators are very useful utilities to automate scenarios that require several test data values & inputs. In this tutorial we show you how to create a data generator add-on in Testsigma

---

## [We cover](#we-cover)

* Creating an add-on

* Code for a random Test Data generator

* Walkthrough of the logic used

* Test Runner file to test your add-on

* Uploading your add-on

* Sample test scenario with add-on

---
> ## [Pre-requisites](#pre-requisites)
> 1. You have a Testsigma account : If you haven't already, sign up for a [free trial](https://testsigma.com/signup)
>   The trial includes all product features and free support (always!) via the in-app chat or email to [support@testsigma.com](mailto:support@testsigma.com)
> 2. Basic understanding of Java programming
> 3. An IDE with an integrated build tool
> 4. Overview of creating add-ons in Testsigma
> 5. Writing a test case

---

## [Creating your Add-on](#creating-your-add-on)

For an in-depth video tutorial on creating add-ons **click here**

1. **Creating an Addon**
    * Login to your Testsigma account

    * To create an Add-on, Navigate to the Addons tab on your left navigation panel. Click on ‘+New Addon’ and add the following details:
      * Add-on name

      * Package name

      * Description

      * Select build tool(Maven/Gradle)
      
2. Once you’re done click on create and it will download a zipped Java Module(Maven/gradle). This Java module contain the following template files which need to be updated
     * pom.xml: Contains all your dependencies needed to code your functionality

     * Src folder: Sample source java files with sample add-on functions.
     
3. From your IDE, import the downloaded Java module as Maven/Gradle.

4. The Template Java module contains all necessary dependencies required to develop an Addon. In case , you need additional dependencies, you can do so by adding to pom.xml. The Java module also contain sample Addon’s for your reference.

5. The next sections will go into detail about the code, syntax and using add-ons in your application.

---
## [Scenario: Test Data generator that produces a random number](#scenario-test-data-generator-that-produces-a-random-number)

**Code Snippet:**
```javascript
package com.testsigma.testsigma.addons.sample_.generators;

import com.testsigma.sdk.TestDataFunction;
import com.testsigma.sdk.ApplicationType;
import com.testsigma.sdk.TestData;
import com.testsigma.sdk.annotation.TestDataFunctionParameter;
import lombok.Data;

@Data
@com.testsigma.sdk.annotation.TestDataFunction(displayName = "Generate random number within range min and max",
description = "Generates Random Number within range")
public class RandomNumber extends TestDataFunction {

@TestDataFunctionParameter (reference = "min")
private com.testsigma.sdk.TestDataParameter min;
@TestDataFunctionParameter (reference = "max")
private com.testsigma.sdk.TestDataParameter max;

public TestData generate() throws Exception {
logger.info("Initiating execution");
int number = (int) ((Math.random() * (Integer.parseInt(max.getValue().toString()) - Integer.parseInt(min.getValue().toString()))) +
Integer.parseInt(min.getValue().toString()));
TestData testData = new TestData(number);
System.out.println(testData.getValue().toString());
return testData;
}
}

```

**Code for Test Runner**
```javascript
package com.testsigma.testsigma.addons.sample_.generators.test;

import com.testsigma.sdk.TestDataParameter;
import com.testsigma.sdk.runners.TestDataFunctionRunner;
import com.testsigma.testsigma.addons.sample_.generators.RandomNumber;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.testsigma.sdk.TestData;


public class TestCustomTestDataFunction {
private TestDataFunctionRunner testDataFunctionRunner;

    @BeforeClass
    public void setup() throws Exception {
        testDataFunctionRunner = new TestDataFunctionRunner();
    }

    @Test
    public void generateRandomNumberInRange() throws Exception {
        RandomNumber testDataFunction = new RandomNumber();
        testDataFunction.setMin(new TestDataParameter(100));
        testDataFunction.setMax(new TestDataParameter(200));
        TestData testData = testDataFunctionRunner.run(testDataFunction);
        Assert.assertTrue((Integer)testData.getValue() > 100);
        Assert.assertTrue((Integer)testData.getValue() < 200);
    }

    @AfterClass
    public void teardown() {
    }
}

```

---

## [Scenario Code walkthrough](#scenario-code-walkthrough)

1. Testsigma packages: Let's first understand the different Testsigma classes being used
     * **com.testsigma.sdk.TestDataFunction:** Any instance of this class is treated as a Data Generator type. All Data generator classes must extend this class.

     * **com.testsigma.sdk.TestData:** Instance of this holds the generated Test data .

     * **com.testsigma.sdk.annotation.TestDataFunctionParameter:** This class provides ability to accept values as parameters to be used in generating random values

2. **TestDataFunction Annotation:
com.testsigma.sdk.annotation.TestDataFunction(displayName = "Generate random number with min and max"**
The above class annotation confirms that this class is a Test data generator. DisplayName is the string that will be displayed to choose for generating a Random number between min and max inputs.

3. **Reference variables:**
@TestDataFunctionParameter (reference = "min")

private com.testsigma.sdk.TestDataParameter min;

@TestDataFunctionParameter (reference = "max")

private com.testsigma.sdk.TestDataParameter max;

The above code first tells the Test Runner that min and max are parameter values provided by the user and then stores them in two variables

4. **Random number generator logic**

public TestData generate() throws Exception {

logger.info("Initiating execution");

int number = (int) ((Math.random() * (Integer.parseInt(max.getValue().toString()) - Integer.parseInt(min.getValue().toString()))) +

Integer.parseInt(min.getValue().toString()));

TestData testData = new TestData(number);

System.out.println(testData.getValue().toString());

return testData;

The data generator in this scenario provinces a random number within a given range set by the user in the test scenario. Let's look at it line by line to understand what action each piece of code performs:

* **logger.info("Initiating execution"):** Logger adds this information provided to the log files for later reference

* **int number = (int) ((Math.random() * (Integer.parseInt(max.getValue().toString()) - Integer.parseInt(min.getValue().toString()))) + Integer.parseInt(min.getValue().toString()));**

The logic here is to first subtract the minimum value provided from the maximum multiplied by a number between 0 & 1 & finally add that to the minimum value once again to give you a number within the range specified.

* **TestData testData = new TestData(number);
System.out.println(testData.getValue().toString());
return testData;**

Storing the test data value generated with above business logic in an object of TestData class. Then printing the value and returning the object as a parameter to the test runner file

---
## [Testing your code](#testing-your-code)

The Test runner file shown above can be run in your local workstation to check if your code works correctly.

* **RandomNumber testDataFunction = new RandomNumber();
testDataFunction.setMin(new TestDataParameter(100));
testDataFunction.setMax(new TestDataParameter(200));**

First we’re creating a new object of the class testDataFunction, and setting the min and max values as 100 and 200.

* **TestData testData = testDataFunctionRunner.run(testDataFunction);
Assert.assertTrue((Integer)testData.getValue() > 100);
Assert.assertTrue((Integer)testData.getValue() < 200);**

Next using the runner, we call the generate function in our  class and send the class reference object as a parameter.
The two assert statements then check if the value generated is within the specified range.

### Sample test scenario
To use the test data generator we’re going to enter a random number that is generated into the mobile number field in the ‘Simply Travel’ application.

Elements to be captured:

Enter the following test steps using NLP grammar in a new test case.

1. Navigate to https://travel.testsigma.com/login

2. Click on **Username**

3. Enter {test-data} into UserName field.
    * In place of testdata, we use a test data generator “Generate random number with 8000000000 and 9000000000”

4. Verify random number 
