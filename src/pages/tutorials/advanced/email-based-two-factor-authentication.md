---
title: "How to automate email based Two Factor Authentication(2FA)"
metadesc: "Coming soon..."
noindex: true
order: 5.3
page_id: "How to automate email based Two Factor Authentication(2FA)"
search_keyword: "Web Application, Recorder, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Prerequisites" 
  url: "#prerequisites"
- type: link
  name: "Steps for email-based 2FA automation"
  url: "#email-based-two-factor-authentication/#steps-for-email-based-2fa-automation"
---
---

## **Prerequisites**

<li>A Testsigma account. If you do not have one already, <a href="https://testsigma.com/signup">sign up for a free trial</a></li>
<li>Understanding of creating and running test cases.</li>
<li>Provisioned mailbox.</li>
<li>Familiarity with regular expressions. If not, refer to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regex guide - MDN Docs.</a></li>
<br>

## **Steps for email-based 2FA automation**

### **Step 1: Record elements**


Before moving on to the test case, you must capture elements on the login screen of your application. For more information on how to record elements using Testsigma chrome recorder extension, refer to
<li><a href="https://testsigma.com/docs/elements/web-apps/record-multiple-elements/">Web application </a></li>
<li><a href="https://testsigma.com/docs/elements/android-apps/record-multiple-elements/">Android</a> </li>
<li><a href="">iOS</a></li>
<br>

### **Step 2: Configure the mailbox**

Testsigma provides you with a valid mailbox on request, with which you can author any test case that requires a valid mailbox connected to an email id.

[[info | NOTE:]]
| The 2FA testing (email and phone number) is offered as part of the enterprise plan. The feature is available for the below mentioned countries & supported for SMS OTP.<br>Australia, Canada, USA, Czech Republic, Denmark, Hungary, Indonesia, Mexico, Netherlands, Romania, Slovakia, Sweden, United Kingdom. For other regions, contact sales.

### **Step 3: Create a test case**

If you are not familiar on how to create a simple test case, refer to <a href="https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case">create a testcase</a>
<br>

### **Step 4: Create a test steps to enter the email address where the OTP is to be sent**

We will enter the email address provided by Testsigma using the Mailbox test data type in the test step.
<ol>
<li>In your test case, add a test step to enter the email in the email field on your application page.</li>
<li>Clear the <kbd>test data</kbd> placeholder and select the <kbd>&|Mailbox| </kbd> test data type from the suggestions list. An overlay showing the list of available Email addresses will open up.</li>
<li>Next, use the NLP <em>Click on SendOTP</em>to generate the OTP.
</li>
</ol>
<br>

### **Step 5: Create a test step to fetch the OTP from the mailbox**

We will use the test data generators available in Testsigma to fetch the OTP from the Mailbox selected in the previous step.
<ol>
<li>Add a test step to enter the OTP Code in the OTP Field. For this, select the NLP <em>Enter test data in the EmailOTP field</em></li>
<li>Clear the <kbd>test data</kbd> placeholder and select the <kbd>!|Function|</kbd> test data type</li>
<li>Search and select the Test Data generator function <kbd>!|MailboxFunctions - getOTP|</kbd></li>
<li>Enter the below arguments for the function and create the test step.
<ol>
<li><strong>Regex</strong>: The Regex command specifies the format of the OTP i.e alphanumeric or pure number or pure alphabetical etc. For example: for an OTP which is a number with a length of 4 to 8, we can use the regular expression \d{4,8}.</li>
<li><strong>Mailbox</strong>: The Mailbox is the pre-configured email ID to which the OTP is sent. In this case it is automation@testsigatech.com</li>
<li><strong>Timeout</strong>: How long should be the wait time for the OTP to be generated</li>
</ol></li>
<li>Once these values are passed the MailBox reader will use the parameters to read the generated OTP.</li>
</ol>
The below GIF depicts the method to automate email based OTP verification in real time using a sample application:
<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/advanced/sms-based-two-factor-authentication-2fa/2FA_automation.gif" alt="email 2fa automation">

 
---
