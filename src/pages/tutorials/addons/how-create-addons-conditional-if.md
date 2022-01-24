---
title: "How to add condition if actions"
order: 4.3
page_id: "How to add condition if actions"
search_keyword: "Addons, Conditional if, Testsigma Tutorials"
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
  name: "Scenario Action 1: If the element has an empty text"
  url: "#scenario-action-1-if-the-element-has-an-empty-text"
- type: link
  name: "Scenario 1: Code Walkthrough"
  url: "#scenario-1-code-walkthrough"
- type: link
  name: "Uploading & installing your add on"
  url: "#uploading--installing-your-add-on"
---
---

In this tutorial, we will build an Action that can be used as a conditional test step. The creation part for the addon, will be similar except we set a conditional property to the Action.

---
## [We cover](#we-cover)

* Steps for creating an addon

* Add-on Code walkthrough

* Uploading your add-on

* Sample test scenario with add-on

---

> ## [Pre-requisites](#pre-requisites)
> 1. You have a Testsigma account: If you haven't already, sign up for a [free trial](https://testsigma.com/signup)
>   The trial includes all product features and free support (always!) via the in-app chat or email to [support@testsigma.com](mailto:support@testsigma.com)
> 2. Basic understanding of Java programming
> 3. An IDE with an integrated build tool
> 4. Overview of creating add-ons in Testsigma
> 5. Writing a test case

---
## [Creating your Add-on](#creating-your-add-on)

For an in-depth video tutorial on creating add-ons click here

1. **Creating an Addon**
     * Login to your Testsigma account

     * To create an Add-on, Navigate to the Addons tab on your left navigation panel. Click on ‘+New Addon’ and add the following details:
        * Add-on name

        * Package name

        * Description

        * Select build tool(Maven/Gradle)
       
2. Once you’re done click on create and it will download a zipped Java Module(Maven/gradle). This Java module contain the following template files which need to be updated
      * **pom.xml:** Contains all your dependencies needed to code your functionality

      * **Src folder:** Sample source java files with sample add-on functions.

3. From your IDE, import the downloaded Java module as Maven/Gradle.

4. The Template Java module contains all necessary dependencies required to develop an Addon. In case, you need additional dependencies, you can do so by adding to pom.xml. The Java module also contains sample Addons for your reference.

5. The next sections will go into detail about the code, syntax and using add-ons in your application.

---

## [Scenario Action 1: If the element has an empty text](#scenario-action-1-if-the-element-has-an-empty-text)

**Code Snippet:**
```javascript
import com.testsigma.sdk.ApplicationType;
import com.testsigma.sdk.Result;
import com.testsigma.sdk.StepActionType;
import com.testsigma.sdk.WebAction;
import com.testsigma.sdk.annotation.Action;
import com.testsigma.sdk.annotation.Element;
import lombok.Data;
import org.openqa.selenium.NoSuchElementException;

@Data
@Action(actionText = "If the element has an empty text",
actionType = StepActionType.IF_CONDITION,
description = "Verifies if the provided element has empty text",
applicationType = ApplicationType.WEB)
public class IfElementHasEmptyText extends WebAction {

private static final String SUCCESS_MESSAGE = "Element has an empty va;ue as expected";
private static final String ERROR_MESSAGE = "Target Element does not have an Empty value";


@Element(reference = "element")
private com.testsigma.sdk.Element element;

@Override
public Result execute() throws NoSuchElementException {
String elementText = element.getElement().getText();
if(elementText == null || elementText.trim().isEmpty()){
setSuccessMessage(SUCCESS_MESSAGE);
return Result.SUCCESS;
}
setErrorMessage(ERROR_MESSAGE);
return Result.FAILED;
}
}
```

---

## [Scenario 1: Code Walkthrough]()

Understanding Action properties


_@Action(actionText = "If the element has an empty text",
**actionType = StepActionType.IF_CONDITION,**
description = "Verifies if the provided element has empty text",
applicationType = ApplicationType.WEB)_

@Action annotation confirms that this class is an Action class with defined actionText and the type of test cases where this action can be used.
The only difference with a regular Action is, we added an additional property(actionType) which denotes where this action text can be used.
In above case, the property **actionType = StepActionType.IF_CONDITION** indicates this action usage is only for an IF conditional step.

Once this addon is installed into your account, the action text specified inside @Action annotation will be available to create an IF conditional Test step.


2. **Defining reference variables:**

     _@Element(reference = "element")
           private com.testsigma.sdk.Element element;_

When you use this Action to create an IF Conditional Test step, the **element** is the input from the user.


3. **Verifying Element’s text**

_String elementText = element.getElement().getText();
if(elementText == null || elementText.trim().isEmpty()){
setSuccessMessage(SUCCESS_MESSAGE);
return Result.SUCCESS;
}
setErrorMessage(ERROR_MESSAGE);_

In the above code, we extract the elements text and verify if the text is empty.

---

## [Uploading & installing your add on](#uploading--installing-your-add-on)

[[info | NOTE:]]
| You need to prepare a zip with pom.xml and src folder for upload.

* Once you’ve completed writing and testing your addon, go back to the add-ons screen in Testsigma.

* Select your add-on name and click on the downward arrow head symbol.

* Click on upload and upload the updated add-on project files. Click on save

* Publish the add-on privately in your repository. You can also publish it publicly so the entire community can access it.

### Sample Test Scenario

We navigate to a login page and use a conditional test step to verify if the UserName field is empty. If it is empty, we will input a userName.

Next enter these test steps:

1. _Navigate to https://travel.testsigma.com/login_

2. IF “If the element has an empty text”
    2.1 Enter userName
