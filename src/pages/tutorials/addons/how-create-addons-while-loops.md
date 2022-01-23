---
title: "How to add While actions "
order: 4.4
page_id: "How to add While actions "
search_keyword: "Addons, While Actions, Testsigma Tutorials"
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
  name: "Scenario Action 1: While element count is greater than"
  url: "#scenario-action-1-while-element-count-is-greater-than-test-data"
- type: link
  name: "Scenario 1: Code Walkthrough"
  url: "#scenario-1-code-walkthrough"
- type: link
  name: "Uploading & installing your add on"
  url: "#uploading--installing-your-add-on"
---
---

In this tutorial, we will build an Action that can be used as a conditional test step. Addon creation part will be similar except we set a conditional property to the Action.

---

## [We cover](#we-cover)

* Steps for creating an addon

* Add-on Code walkthrough

* Uploading your add-on

* Sample test scenario with add-on

---

> ## [Pre-requisites](#pre-requisites)
> 1. **You have a Testsigma account:** If you haven't already, sign up for [a free trial](https://testsigma.com/signup)
>   The trial includes all product features and free support (always!) via the in-app chat or email to [support@testsigma.com](mailto:support@testsigma.com)
> 2. **Basic understanding of Java programming**
> 3. **An IDE with an integrated build tool**
> 4. **Overview of creating add-ons in Testsigma**
> 5. **Writing a test case**

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
     * **pom.xml:** Contains all your dependencies needed to code your functionality

     * Src folder: Sample source java files with sample add-on functions.
   
3. From your IDE, import the downloaded Java module as Maven/Gradle.

4. The Template Java module contains all necessary dependencies required to develop an Addon. In case, you need additional dependencies, you can do so by adding to pom.xml. The Java module also contains sample Addons for your reference.

5. The next sections will go into detail about the code, syntax and using add-ons in your application.

---

## [Scenario Action 1: While element count is greater than <test-data>](#scenario-action-1-while-element-count-is-greater-than-test-data)

**Code Snippet:**
```javascript
import com.testsigma.sdk.ApplicationType;
import com.testsigma.sdk.Result;
import com.testsigma.sdk.StepActionType;
import com.testsigma.sdk.WebAction;
import com.testsigma.sdk.annotation.Action;
import com.testsigma.sdk.annotation.Element;
import com.testsigma.sdk.annotation.TestData;
import lombok.Data;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;

import java.util.List;

@Data
@Action(actionText = "While element count is greater than test-data in current page",
actionType = StepActionType.WHILE_LOOP,
description = "Performs actions while current page contains the provided text",
applicationType = ApplicationType.WEB)
public class WhileElementContainsText extends WebAction {

private static final String SUCCESS_MESSAGE = "elements count is greater than given testdata as expected";
private static final String ERROR_MESSAGE = "Elements count is not greater than the given test-data";
private static final String DISPLAY_NONE_ERROR_MESSAGE = "The Element is not displayed";
private static final String VISIBILITY_NONE_ERROR_MESSAGE = "The Element is not visible";
@TestData(reference = "test-data")
private com.testsigma.sdk.TestData testData;
@Element(reference = "element")
private com.testsigma.sdk.Element element;
private List<WebElement> elements;

@Override
public Result execute() throws NoSuchElementException {
elements = driver.findElements(element.getBy());
int elementsCount = elements.size();
int expectedCount = Integer.parseInt(testData.getValue().toString());
if (elementsCount > expectedCount) {
setSuccessMessage(SUCCESS_MESSAGE);
return Result.SUCCESS;
}
setErrorMessage(ERROR_MESSAGE);
return Result.FAILED;

}
}

```

---

## [Scenario 1: Code Walkthrough](#scenario-1-code-walkthrough)

1. **Understanding NLP Grammar**

_@Action(actionText = "While element count is greater than test-data in current page",
**actionType = StepActionType.WHILE_LOOP,**
description = "Performs actions while current page contains the provided text",
applicationType = ApplicationType.WEB)_



@Action annotation confirms that this class is an Action class with defined actionText and the type of test cases where this action can be used.
The only difference when compared to a regular Action is that we added an additional property(actionType) which denotes where this action text can be used.
In the above case, the property **actionType = StepActionType.WHILE_LOOP** indicates that the action usage is limited to the WHILE loop condition.

Once this addon is installed into your account, the action text specified inside within **@Action annotation** will be available using which you can create a condition for WHILE Loop.

2. **Defining reference variables:**

_@TestData(reference = "test-data")
private com.testsigma.sdk.TestData testData;
@Element(reference = "element")
private com.testsigma.sdk.Element element;_

When you use this Action to create a WHILE Loop condition Test step, **element** is the  input from the user to locate an element in the page, **test-data** is the input number against which element count is compared.


3. Verifying Element’s text

      _elements = driver.findElements(element.getBy());
       int elementsCount = elements.size();
       int expectedCount = Integer.parseInt(testData.getValue().toString());
       if (elementsCount > expectedCount) {
           setSuccessMessage(SUCCESS_MESSAGE);
           return Result.SUCCESS;
       }
       setErrorMessage(ERROR_MESSAGE);
       return Result.FAILED;_


In the above code, we get the elements from the page and compare them against the expected  number.

---
## [Uploading & installing your add on](#uploading--installing-your-add-on)

[[info | NOTE:]]
| _You need to prepare a zip with pom.xml and src folder for upload._


Once you’ve completed writing and testing your addon, go back to the add-ons screen in Testsigma.
Select your add-on name and click on the downward arrow head symbol.
Click on upload and upload the updated add-on project files. Click on save
Publish the add-on privately in your repository. You can also publish it publicly so the entire community can access it.

### Sample Test Scenario

We navigate to a page where the delete button is present on multiple table rows. We create a test case to delete all the rows except 2. We achieve this using a WHILE Loop with the condition as given in the above action.

1. Navigate to _https://examples.testsigma.com/tables_

2. WHILE _“While element count is greater than test-data in current page”_
    2.1 Click on element

For the above test steps we'll use the below values in the attributes we’ve used

1. Element XPATH = //button//i[@class='fas fa-trash']

2. test-data=2
