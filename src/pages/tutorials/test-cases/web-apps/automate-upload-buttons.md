---
title: "How to create Test Steps for uploading files"
metadesc: "Learn how to automate the file upload action in Testsigma | Upload the file that you want to use in the automated action into Testsigma Storage."
noindex: false
order: 2.12
page_id: "How to create Test Steps for uploading files"
search_keyword: "Web Application, Recorder, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "How to create test steps for testing file upload"
  url: "#how-to-create-test-steps-for-testing-file-upload"
---

---

To automate the file upload action in Testsigma you need to upload the file(that you want to use in the automated action) into Testsigma Storage.

---

> ## [Prerequisites](#prerequisites)
> You should already know how to:
> 1. [Create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
> 2. [Create test steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/)

---

## [How to create test steps for testing file upload](#how-to-create-test-steps-for-testing-file-upload)

1. Go to **Test Development > Uploads.**

2. Click on upload on the top right corner as shown in the image below.

![uploads_testsigma](https://docs.testsigma.com/images/tutorials/automate-file-upload-cases/uploads_testsigma.png)

3. Choose and upload a file. The uploaded file will appear as shown below.

![upload_list](https://docs.testsigma.com/images/tutorials/automate-file-upload-cases/upload_list.png)

4. Click on the blue color box beside the file to copy the file path.

![file_path](https://docs.testsigma.com/images/tutorials/automate-file-upload-cases/file_path.png)

Now let us discuss how we can use these links in our Test Steps.

5. Create a Test Case and navigate to the application with the help of URL.

6. Use NLP:  **Upload file test-data using the element element**.

![upload_test_step](https://docs.testsigma.com/images/tutorials/automate-file-upload-cases/upload_test_step.png)

7. Replace test-data with the file path copied in step 4.

![filepath_add](https://docs.testsigma.com/images/tutorials/automate-file-upload-cases/filepath_add.png)

8. Click Create.

9. Add more steps to complete the Test Case.

10. When you run the Test Case the file will be uploaded in the application.
    That's all we need to perform in order to add a Test Step to upload a file using Testsigma.

