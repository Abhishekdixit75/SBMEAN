package com.example.employeemanagement.service;

import com.example.employeemanagement.models.Employee;
import java.util.List;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Employee getEmployeeById(Long id);

    void deleteEmployee(Long id);
}
