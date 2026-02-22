# 🚀 Contract Generation System: From Manual Process to Code 📄⚖️

Recently, I developed an end-to-end system for **API s.r.l.** to optimize the creation and emailing of corporate contracts. The goal was ambitious: to transform a repetitive and manual bureaucratic task into an instantaneous workflow, reducing the margin of error to almost zero.

## 🔍 Project Overview
The system manages the document's entire lifecycle. The code architecture is lean: a well-structured loop that uses the variable **x** to iterate through the facility data and dynamically insert it into an HTML template. 

The workflow starts with the operator easily filling out a **Google Form**, which automatically stores the responses in a **Google Sheets** database to ensure scalability. Upon form submission, a trigger is fired in **Google Apps Script** that:
1. Retrieves the newly saved data from the database.
2. Automatically populates the HTML contract template.
3. Generates the document in PDF format.
4. Sends a pre-configured and personalized email to the client with the contract attached in real time.

The only manual operation left is the quick initial data entry via the form! This input method is far more convenient than using text boxes in traditional software like Word or PDF.

## ⚙️ Key Features
* **Workflow Automation**: Seamless integration between Google Forms and Google Apps Script for real-time data transfer.
* **Operational Efficiency**: Automatic PDF generation via triggers and simultaneous email dispatch, drastically reducing processing times.
* **Integrated Database**: A Google Sheet automatically collects all client data and contract history, ensuring the project's total scalability.

## 🛠️ Tech Stack
* **Core Logic**: Google Apps Script (JavaScript-based).
* **UI/Templating**: HTML5 and CSS3 for professional layouts optimized for A4 printing.
* **Cloud Integration**: Google Workspace APIs (Forms, Sheets, Drive & Gmail).
* **AI Support**: Leveraging LLM models for code refactoring, adapting to Google services, and optimizing the HTML template.

## ⚙️ Installation and Setup
To make the system operational on a new Google Workspace account, follow these steps:

1. **Form Creation**: Create a Google Form with the necessary fields (User data, email, list of facilities, etc.) and link it to a new Google Sheet.
2. **Editor Access**: From the Google Sheet, click on `Extensions` > `Apps Script` to open the development environment.
3. **File Insertion**:
   * Paste the code found in `trigger.gs` from this repository.
   * Create a new HTML file naming it exactly `modello.html` and paste the developed template code.
4. **Variable Configuration**: Inside `trigger.gs`, ensure that the column indices match those in your spreadsheet.
5. **Trigger Setup**:
   * In the Apps Script editor, click on the **Triggers** icon (the alarm clock icon on the left).
   * Click on **Add Trigger**.
   * Select the main function, set "Event source" to **From form** and "Event type" to **On form submit**.
6. **Authorization**: Manually run any function from the script for the first time to grant the necessary permissions to Google Workspace (Gmail, Drive, Sheets).

> **Technical Note**: During the HTML template configuration, remember that the iteration logic for the list of facilities is set to use the variable **x** in the `for` loop. If the maximum number of rows should change, update the limit of the `totaleRighe` variable inside the `modello.html` file.

## 🏗️ Engineering and Growth
In this project, Artificial Intelligence played a key role as a genuine study tool, greatly assisting me in defining the exact code to refine the HTML template. Starting from real-world problems, I am applying my theoretical knowledge, supported by AI, to expand my capabilities toward challenges that, for now, are bigger than me.

Currently, I am focusing on understanding the overall logic before diving into the trickier details of the code. In the near future, I plan to improve my technical skills by starting with less complex projects, significantly reducing the AI-assisted approach.

While I deepen my study of Full Stack architectures at the Polytechnic University of Bari, being able to test in the field how programming solves concrete business problems brings immense satisfaction.

---

## 👨‍💻 Author

**Giuseppe Fuzio**
*Engineering Student - Polytechnic University of Bari*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/giuseppe-fuzio)
