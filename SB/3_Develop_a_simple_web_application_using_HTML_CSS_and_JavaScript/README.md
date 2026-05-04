# Simple Web Application (HTML, CSS, JS)

This practical demonstrates a basic web application that performs user registration and displays a list of registered users. It highlights the core use of HTML for structure, CSS for styling, and JavaScript for logic (AJAX and LocalStorage).

## 📂 File Explanations

### 1. [index.html](./index.html)
*   **Purpose**: The landing page of the application.
*   **Key Features**:
    *   Contains the **User Registration Form** (`<form id="registrationForm">`).
    *   Links to `style.css` for visual layout.
    *   Links to `app.js` to handle form submission logic.
    *   Provides a navigation link to the list page.

### 2. [list.html](./list.html)
*   **Purpose**: Displays the records stored in the system.
*   **Key Features**:
    *   Contains a **Data Table** (`<table id="userTable">`) which acts as a placeholder for user records.
    *   Links to `app.js`, which dynamically populates the table rows from `localStorage` on page load.

### 3. [style.css](./style.css)
*   **Purpose**: Provides the visual design for the application.
*   **Key Features**:
    *   Uses **Flexbox** for centering the form and table on the screen.
    *   Styles the table with borders and padding for readability.
    *   Standardizes typography and layout across both HTML pages.

### 4. [app.js](./app.js)
*   **Purpose**: The "brain" of the application.
*   **Key Features**:
    *   **Form Submission**: Intercepts the registration form's submit event.
    *   **AJAX (Fetch API)**: Simulates a backend request by sending data to `jsonplaceholder.typicode.com`.
    *   **Data Persistence**: Saves the user data to the browser's **LocalStorage**, ensuring that data persists even after refreshing the page.
    *   **DOM Manipulation**: Reads data from `LocalStorage` and dynamically generates HTML rows to fill the table in `list.html`.

---

## 🚀 How to Run
Simply open **[index.html](./index.html)** in any modern web browser to start the application. No server setup is required for this practical as it uses client-side storage.
