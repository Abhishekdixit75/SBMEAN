# Practical 5: Create a JSP page to display dynamic data

## Objective
To understand how JavaServer Pages (JSP) technology is used to create dynamic web content by embedding Java code within HTML.

## Key Concepts
- **JSP (JavaServer Pages)**: A technology that helps software developers create dynamically generated web pages based on HTML, XML, or other document types.
- **Scriptlets (`<% ... %>`)**: Used to insert Java code into the JSP.
- **Expressions (`<%= ... %>`)**: Used to output data directly to the client.
- **Directives (`<%@ ... %>`)**: Used to provide global information about an entire JSP page (e.g., imports, content type).

## Code Explanation
The `index.jsp` file demonstrates:
1. **Importing Classes**: Using the `page` directive to import `java.util.Date`.
2. **Implicit Objects**: Using `request` to get the client's IP address and server name.
3. **Dynamic Logic**: A Java block calculates a sum and determines a time-based greeting.
4. **Dynamic Output**: The current time and calculated values are rendered within the HTML structure.

## How to Run
1. Place the `index.jsp` file in the root directory of a web application folder.
2. Deploy the folder to a JSP-capable server like Tomcat.
3. Access the page at `http://localhost:8080/YourContextPath/index.jsp`.
