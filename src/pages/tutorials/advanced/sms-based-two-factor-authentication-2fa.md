---
title: "How to automate SMS based two factor authentication(2FA)"
metadesc: "Coming soon..."
noindex: false
order: 5.2
page_id: "How to automate SMS based Two Factor Authentication(2FA)"
search_keyword: "Web Application, Recorder, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to automate SMS based OTP verification"
  url: "#steps-to-automate-sms-based-otp-verification"

---

---

## **Prerequisites**

<li>A Testsigma account. If you do not have one already, <a href="https://testsigma.com/signup">sign up for a free trial</a></li>
<li>Understanding of creating and running test cases.</li>
<li>Provisioned phone numbers.</li>
<li>Familiarity with regular expressions. If not, refer to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regex guide - MDN Docs.</a></li>
<br>


## **Steps to automate SMS based OTP verification**


### **Step 1: Record elements** 

<p>

Before moving on to the test case, you must capture elements on the login screen of your application. <em>For more information on how to record elements using Testsigma chrome recorder extension, refer to</em>
<li><a href="https://testsigma.com/docs/elements/web-apps/record-multiple-elements/">Web application </a></li>
<li><a href="https://testsigma.com/docs/elements/android-apps/record-multiple-elements/">Android</a> </li>
<li><a href="">iOS</a></li>
</p>

### **Step 2: Configuring your phone number**
<p>
Testsigma provides you with a valid mobile phone number on request, with which you can author any test case that requires a valid phone number.</p>

[[info | NOTE:]]
| The 2FA testing (email and phone number) is offered as part of the enterprise plan. The feature is available for the below mentioned countries & supported for SMS OTP.<br>Australia, Canada, USA, Czech Republic, Denmark, Hungary, Indonesia, Mexico, Netherlands, Romania, Slovakia, Sweden, United Kingdom. For other regions, contact sales.

To view the phone numbers allocated to your account, navigate to **Settings> Phone numbers**.
<br>

### **Step 3: Create a test case**

If you are not familiar on how to create a simple test case, refer to <a href="https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case">create a testcase</a>.
<br>

### **Step 4: Create a test step to enter the phone number to which the OTP will be sent**

We will enter the phone number provided by Testsigma using the Phone Number test data type, using a test step.
<ol>
<li>In your test case, add a test step to enter the phone number in the phone number field on your application page.</li>
<li>Clear the <kbd>< test data > </kbd> placeholder and select the <kbd>%|Phone Number| </kbd> test data type from the suggestions list. An overlay showing the list of available phone numbers (allocated to your account) would open up.</li>
<li>Select one of the numbers from the list. This is the number where the OTP SMS will be sent.</li>
<li>Next, use the NLP <em>Click on SendOTP</em></li>
</ol><br>


### **Step 5: Create a test step to fetch the OTP from the SMS received on the Phone number**

We will use the test data generators available in Testsigma to fetch the OTP from the phone number selected in the previous step.
<ol>
<li>Add a test step to enter the OTP code in the OTP Field</li>
<li>Clear the <kbd>< test data > </kbd>placeholder and select the <kbd>!|Function|</kbd> test data type </li>
<li>Search and select the test data generator function !|PhoneNumberFunctions - getOTP|</li>
<li>Enter the following arguments for the function and create the test step.
<ul>
<li><strong>Regex</strong>:  The Regex command specifies the format of the OTP i.e alphanumeric or pure number or pure alphabetical etc. For example: for an OTP which is a number with a length of 4 to 8, we can use the regular expression <kbd>\d{4,8}</kbd>.</li>
<li><strong>Phone number</strong>: This field specifies one of the pre-configured phone numbers, in this case its +12082045810</li>
<li><strong>Timeout</strong>: Duration of the wait time for the OTP to be generated</li>
</ul>
</li>
Once these values are passed the PhoneNumberFuntion will use the parameters to read the generated OTP.
The below GIF depicts the method to automate email based OTP verification in real time using a sample application:
</ol>



<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/advanced/sms-based-two-factor-authentication-2fa/sms_automation.gif" alt="sms based 2fa automation">
---