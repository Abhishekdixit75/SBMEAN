package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class MockEmailService {

    // this class is created just for the purpose of demonstrating the concept of setter
    // injection for experiment
    // '12_Develop_a_Spring_based_application_using_Dependency_Injection'

    public void sendEmail(String to, String message) {
        System.out.println("Mock email sent to " + to + ": " + message);
    }
}
