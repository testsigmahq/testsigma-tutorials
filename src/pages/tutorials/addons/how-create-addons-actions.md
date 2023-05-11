---
title: "How to create addon for actions"
metadesc: "Extend test automation for complex scenarios with a simple task in Testsigma using add-ons. Learn how to create and use an add-on for a simple PDF action."
noindex: false
order: 6.1
page_id: "How to create addon for actions"
search_keyword: "Addons, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Creating an add-on for an automation action"
  url: "#creating-an-add-on-for-an-automation-action"
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
  name: "Scenario Action 1: Checking the presence of a string in a PDF"
  url: "#scenario-action-1-checking-the-presence-of-a-string-in-a-pdf"
- type: link
  name: "Scenario 1: Code Walkthrough"
  url: "#scenario-1-code-walkthrough"
- type: link
  name: "Uploading & installing your add on"
  url: "#uploading--installing-your-add-on"
---
---

Extending test automation for complex scenarios is a simple task in Testsigma with the use of add-ons. In this tutorial, we’ll be showing you how to create and use an add-on for a simple PDF action.

---

## [We cover](#we-cover)

* Steps for creating an addon

* Add-on Code walkthrough

* Uploading your add-on

* Sample test scenario with add-on

---

> ## [Pre-requisites](#pre-requisites)
> 1. **You have a Testsigma account :** If you haven't already, sign up for [a free trial](https://testsigma.com/signup)
>   The trial includes all product features and free support (always!) via the in-app chat or email to [support@testsigma.com](mailto:support@testsigma.com)
> 2. **Basic understanding of Java programming**
> 3. **An IDE with an integrated build tool**
> 4. **Overview of creating add-ons in Testsigma**
> 5. **Writing a test case**

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
     * pom.xml: Contains all your dependencies needed to code your functionality

     * Src folder: Sample source java files with sample add-on functions.
   
3. From your IDE, import the downloaded Java module as Maven/Gradle.

4. The Template Java module contains all necessary dependencies required to develop an Addon. In case , you need additional dependencies, you can do so by adding to pom.xml. The Java module also contain sample Addon’s for your reference.

5. The next sections will go into detail about the code, syntax and using add-ons in your application.

---

## [Scenario Action 1: Checking the presence of a string in a PDF](#scenario-action-1-checking-the-presence-of-a-string-in-a-pdf)
[[info | NOTE:]]
| _In below Action, we assume the current URL the driver is pointing to will download us a PDF file._

```javascript
import com.testsigma.sdk.ApplicationType;
import com.testsigma.sdk.Result;
import com.testsigma.sdk.WebAction;
import com.testsigma.sdk.annotation.Action;
import com.testsigma.sdk.annotation.RunTimeData;
import com.testsigma.sdk.annotation.TestData;
import lombok.Data;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.testng.Assert;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;


@Data
@Action(actionText
       = "Extract text from PDF and verify if data test-data is present.",
       description = "Extract PDF content and asserts if data is present",
       applicationType = ApplicationType.WEB)
public class ValidatePDFText extends WebAction {


   @TestData(reference = "test-data")
   private com.testsigma.sdk.TestData testdata;

   @Override
   public Result execute() {
       Result result = Result.SUCCESS;
       try{
           URL url = new URL(driver.getCurrentUrl());
           InputStream is = url.openStream();
           BufferedInputStream fileParse = new BufferedInputStream(is);
           PDDocument doc = null;
           doc = PDDocument.load(fileParse);
           String pdfContent = new PDFTextStripper().getText(doc);
           System.out.println(pdfContent);
           Assert.assertTrue(pdfContent.contains(testdata.getValue().toString()));
       }catch(Exception e){
           setErrorMessage("Cause of Exception:" + e.getCause().toString());
           result = Result.FAILED;
       }
       return result;
   }
}

```

---

## [Scenario 1: Code Walkthrough](#scenario-1-code-walkthrough)

1. **Understanding Action properties**

@Action(actionText
= "Extract text from PDF and verify if data test-data is present.",
description = "Extract PDF content and asserts if data is present",
applicationType = ApplicationType.WEB)


@Action annotation confirms that this class is an Action class with defined actionText and the type of test cases where this action can be used.
Once this addon is installed into your account, the action text specified inside @Actioon annotation will be available to create a Test step to verify PDF content.

In above example, the Action text is **“Extract text from PDF and verify if data is present”.**

2. **Defining reference variables:**

@TestData(reference = "test-data")
private com.testsigma.sdk.TestData testdata;

When you use this Action to create a Test step, test-data from action text will be considered as an Input variable from the user. The user can provide expected content in place of test-data during test step creation.

3. **Parsing PDF string**

     URL url= new URL(driver.getCurrentUrl()); : 
    
     InputStream is=url.openStream();
     
     BufferedInputStream fileParse = new BufferedInputStream(is);	
    
     PDDocument doc=null;
 
     doc = PDDocument.load(fileParse);

This is the business logic for Action.

First we use the InputStream class to read the PDF URL from the browser. Then that data is parsed into a Bufferinput stream for better indexing. Finally the stream is converted into a PDF doc format using the PDDocument class.


4. **Verifying string value**

String pdfContent = new PDFTextStripper().getText(doc);

Assert.assertTrue(pdfContent.contains(testdata.getValue().toString()));

The PDFtextstripper gets the string data from the parsed doc file. The assert function checks if the PDF string contains the value entered by the user(in place of test-data).

---
## [Uploading & installing your add on](#uploading--installing-your-add-on)

[info | INFO:]]
| You need to prepare a zip with pom.xml and src folder for upload.

* Once you’ve completed writing and testing your addon, go back to the add-ons screen in Testsigma.

* Select your add-on name and click on the downward arrow head symbol.

* Click on upload and upload the updated add-on project files. Click on save

* Publish the add-on privately in your repository. You can also publish it publicly so the entire community can access it.

### Sample Test Scenario
Now that your addon is ready to go it's time to use it in a sample test scenario. For this we’ll be considering a simple PDF URL and verify if certain text is present.


Next enter these test steps:

1. _Navigate to http://www.africau.edu/images/default/sample.pdf_

2. Extract text from PDF and verify if data test-data is present
test-data= Simple PDF File 2
