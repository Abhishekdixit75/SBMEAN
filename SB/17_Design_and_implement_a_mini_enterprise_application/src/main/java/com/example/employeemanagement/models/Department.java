package com.example.employeemanagement.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "department")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    @JsonIgnore // Prevent infinite recursion in JSON
    private List<Employee> employees;
}
