# Employee Management System: Mini Enterprise Application

This project is a comprehensive **Mini Enterprise Application** built with Spring Boot. It demonstrates professional architectural patterns, including 3-Tier separation, Object-Relational Mapping (ORM), and loose coupling.

---

## 🏗️ Project Architecture & Components

The system is organized into a modular **3-Tier Architecture** to ensure clean separation of concerns:

### 1. Models ([models/](./src/main/java/com/example/employeemanagement/models/))
*   **Purpose**: Represents the "Data" or "Entity" layer.
*   **Implementation**: Contains Java classes mapped to database tables using Hibernate annotations.
*   **Key Files**:
    *   [Employee.java](./src/main/java/com/example/employeemanagement/models/Employee.java): Represents an employee record (ID, Name, Email, Salary).
    *   [Department.java](./src/main/java/com/example/employeemanagement/models/Department.java): Represents a department (ID, Name).
    *   **Relationship**: Implements a **One-to-Many** relationship (One Department has Many Employees).

### 2. Repository Layer ([repository/](./src/main/java/com/example/employeemanagement/repository/))
*   **Purpose**: Handles all database interactions (DAO Layer).
*   **Implementation**: Interfaces that extend `JpaRepository`, providing built-in CRUD operations without writing SQL.
*   **Key Files**: [EmployeeRepository.java](./src/main/java/com/example/employeemanagement/repository/EmployeeRepository.java), [DepartmentRepository.java](./src/main/java/com/example/employeemanagement/repository/DepartmentRepository.java).

### 3. Controller Layer ([controller/](./src/main/java/com/example/employeemanagement/controller/))
*   **Purpose**: The entry point for all HTTP requests (Presentation Layer).
*   **Implementation**: Annotated with `@RestController`, these classes map incoming JSON requests to service methods and return appropriate responses.
*   **Key Files**: [EmployeeController.java](./src/main/java/com/example/employeemanagement/controller/EmployeeController.java), [DepartmentController.java](./src/main/java/com/example/employeemanagement/controller/DepartmentController.java).

---

## 🔗 Loose Coupling via Service Interfaces

A critical feature of this enterprise application is the use of **Interfaces** in the [service/](./src/main/java/com/example/employeemanagement/service/) folder to achieve **Loose Coupling**.

### How it works:
1.  **The Interface**: We define a contract (e.g., [EmployeeService.java](./src/main/java/com/example/employeemanagement/service/EmployeeService.java)) that lists the required operations.
2.  **The Implementation**: We provide the actual logic in a separate class (e.g., [EmployeeServiceImpl.java](./src/main/java/com/example/employeemanagement/service/EmployeeServiceImpl.java)).
3.  **The Injection**: The Controller only knows about the *Interface*, not the implementation. Spring automatically injects the correct implementation at runtime.

### Why this matters:
*   **Maintainability**: You can swap the implementation logic (e.g., switching from a mock service to a real one) without changing a single line of code in the Controller.
*   **Testability**: It allows us to easily mock the service layer during unit testing.

---

## 📡 REST API Endpoints

The application provides the following endpoints for interacting with the data:

### Department Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/departments` | Registers a new department in the system. |
| **GET** | `/departments` | Retrieves a list of all existing departments. |

### Employee Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/employees` | Adds a new employee and assigns them to a department ID. |
| **GET** | `/employees` | Fetches a full list of all employees and their department details. |
| **GET** | `/employees/{id}` | Finds and returns a specific employee by their unique ID. |
| **DELETE** | `/employees/{id}` | Permanently removes an employee record from the database. |

---

## 🚀 How to run this project ??
1.  **Run the app**: `mvn spring-boot:run`
2.  **Database**: Access the H2 Console at `http://localhost:8080/h2-console`.
    *   **JDBC URL**: `jdbc:h2:mem:testdb`
    *   **User**: `sa` | **Password**: (Empty)
3.  **Testing**: Use Postman to send JSON requests to the endpoints listed above.
