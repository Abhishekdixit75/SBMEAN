package com.example.demo.service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    // 1. Constructor Injection
    // The dependency is final and provided via the constructor.
    private final StudentRepository studentRepository;
    
    private MockEmailService emailService;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // 2. Setter Injection
    // The dependency is provided via a public setter method.
    @Autowired
    public void setEmailService(MockEmailService emailService) {
        this.emailService = emailService;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student saveStudent(Student student) {
        Student savedStudent = studentRepository.save(student);
        if (emailService != null) {
            emailService.sendEmail(student.getEmail(), "Welcome to the system!");
        }
        return savedStudent;
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
