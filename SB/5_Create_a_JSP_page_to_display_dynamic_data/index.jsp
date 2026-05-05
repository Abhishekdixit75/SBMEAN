<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dynamic JSP Page</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .container { max-width: 600px; background: #f4f4f9; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1 { color: #333; }
        .dynamic-info { color: #e74c3c; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Dynamic JSP</h1>
        
        <p>This page demonstrates how JSP can generate dynamic content based on server-side logic.</p>
        
        <hr>
        
        <h3>Server Information:</h3>
        <ul>
            <li>Current Server Time: <span class="dynamic-info"><%= new Date() %></span></li>
            <li>Your IP Address: <span class="dynamic-info"><%= request.getRemoteAddr() %></span></li>
            <li>Server Name: <span class="dynamic-info"><%= request.getServerName() %></span></li>
        </ul>
        
        <h3>Calculation Example:</h3>
        <%
            int a = 10;
            int b = 20;
            int sum = a + b;
        %>
        <p>The sum of <%= a %> and <%= b %> is <strong><%= sum %></strong> (Calculated on server).</p>
        
        <h3>Greeting based on time:</h3>
        <%
            int hour = new java.util.GregorianCalendar().get(java.util.Calendar.HOUR_OF_DAY);
            String greeting;
            if (hour < 12) greeting = "Good Morning!";
            else if (hour < 17) greeting = "Good Afternoon!";
            else greeting = "Good Evening!";
        %>
        <p class="dynamic-info"><%= greeting %></p>
        
        <hr>
        <p><small>Note: This data updates every time you refresh the page.</small></p>
    </div>
</body>
</html>
