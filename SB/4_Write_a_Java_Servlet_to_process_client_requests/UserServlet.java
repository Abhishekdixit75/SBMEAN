package com.example.practicals;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Practical 4: Write a Java Servlet to process client requests.
 * This servlet demonstrates handling both GET and POST requests.
 */
@WebServlet("/UserServlet")
public class UserServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println("<html><head><title>User Input Form</title></head><body>");
        out.println("<h2>Enter Your Details</h2>");
        out.println("<form action='UserServlet' method='POST'>");
        out.println("Name: <input type='text' name='userName'><br><br>");
        out.println("Email: <input type='email' name='userEmail'><br><br>");
        out.println("<input type='submit' value='Submit'>");
        out.println("</form>");
        out.println("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Processing client request parameters
        String name = request.getParameter("userName");
        String email = request.getParameter("userEmail");
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println("<html><head><title>Request Processed</title></head><body>");
        out.println("<h1>Hello, " + (name != null ? name : "Guest") + "!</h1>");
        out.println("<p>Your request has been processed successfully.</p>");
        out.println("<p>Email registered: " + (email != null ? email : "N/A") + "</p>");
        out.println("<br><a href='UserServlet'>Go Back</a>");
        out.println("</body></html>");
    }
}
