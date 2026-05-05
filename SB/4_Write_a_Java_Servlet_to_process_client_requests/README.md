# Practical 4: Write a Java Servlet to process client requests

## Objective
To understand the Java Servlet lifecycle and how to process client requests (GET and POST) using the `HttpServlet` class.

## Key Concepts
- **Servlet**: A Java class that extends the capabilities of servers that host applications accessed by a request-response programming model.
- **HttpServlet**: Provides methods like `doGet()` and `doPost()` to handle HTTP requests.
- **Request Processing**: Using `request.getParameter()` to retrieve data sent by the client.

## Code Explanation
The `UserServlet.java` file contains:
1. **@WebServlet("/UserServlet")**: Mapping the servlet to a URL pattern.
2. **doGet()**: Displays an HTML form when the user visits the page.
3. **doPost()**: Extracts parameters (`userName`, `userEmail`) from the submitted form and generates a dynamic response.

## How to Run
1. Ensure you have a Servlet Container (like Apache Tomcat) installed.
2. Compile the Java file with the Servlet API in the classpath.
3. Deploy the compiled class to the `WEB-INF/classes` directory of your web application.
4. Access the servlet at `http://localhost:8080/YourContextPath/UserServlet`.
