package com.example.demo.service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class StudentServiceTest {

    @Mock // this annotation is used to mock the dependencies, i.e. the objects that the class depends on, of the class which we want to test
    private StudentRepository studentRepository;

    @InjectMocks // this annotation is used to create an instance of the class which and inject the mocks into it
    private StudentService studentService;

    @BeforeEach // this annotation is used to specify that the setUp method should be executed before each test method
    void setUp() {
        MockitoAnnotations.openMocks(this); // this method initializes the mocks and injects them into the class
    }

    @Test
    void getAllStudents_shouldReturnListOfStudents() {
        Student s1 = new Student("Alice", "alice@test.com", "CS");
        Student s2 = new Student("Bob", "bob@test.com", "IT");
        
        when(studentRepository.findAll()).thenReturn(Arrays.asList(s1, s2));

        List<Student> result = studentService.getAllStudents();

        assertEquals(2, result.size());
        verify(studentRepository, times(1)).findAll();
    }

    @Test
    void saveStudent_shouldReturnSavedStudent() {
        Student student = new Student("Alice", "alice@test.com", "CS");
        when(studentRepository.save(student)).thenReturn(student);

        Student result = studentService.saveStudent(student);

        assertNotNull(result);
        assertEquals("Alice", result.getName());
    }

    @Test
    void getStudentById_shouldReturnStudent_whenFound() {
        Student student = new Student("Alice", "alice@test.com", "CS");
        when(studentRepository.findById(1L)).thenReturn(Optional.of(student));

        Student result = studentService.getStudentById(1L);

        assertNotNull(result);
        assertEquals("Alice", result.getName());
    }
}
