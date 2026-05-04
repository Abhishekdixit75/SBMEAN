package com.example.employeemanagement.service;

import com.example.employeemanagement.models.Department;
import java.util.List;

public interface DepartmentService {
    Department saveDepartment(Department department);

    List<Department> getAllDepartments();

    Department getDepartmentById(Long id);
}
