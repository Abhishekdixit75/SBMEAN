# 3-Tier Enterprise Application Architecture

This project is a demonstration of a **3-Tier Architecture** implemented using **Spring Boot** and an **H2 In-Memory Database**. It provides a Student Management System with a simple HTML/JavaScript frontend.

---

## 🏛️ What is 3-Tier Architecture?

3-tier architecture is a software design pattern where the application is organized into three logical and physical computing tiers. This separation allows for better scalability, security, and maintainability.

### 1. Presentation Tier (UI)
*   **Definition**: The topmost level of the application which the user interacts with. It translates tasks and results to something the user can understand.
*   **In this project**: The [index.html](./src/main/resources/static/index.html) and [script.js](./src/main/resources/static/script.js) files form the presentation layer. They communicate with the backend using RESTful API calls.

### 2. Logic Tier (Service Layer)
*   **Definition**: This layer controls an application's functionality by performing detailed processing. It coordinates the application, processes commands, makes logical decisions, and performs calculations.
*   **In this project**: The [StudentService.java](./src/main/java/com/example/demo/service/StudentService.java) class contains the business logic, and the [StudentController.java](./src/main/java/com/example/demo/controller/StudentController.java) handles the routing of requests to the service.

### 3. Data Tier (Persistence Layer)
*   **Definition**: The data tier includes the data persistence mechanisms and the data access layer that encapsulates the persistence mechanisms.
*   **In this project**: The [StudentRepository.java](./src/main/java/com/example/demo/repository/StudentRepository.java) interface (using Spring Data JPA) and the **H2 In-Memory Database** represent this layer.

---

## 📚 Supporting References

Here are high-quality, exact-match resources to help you understand this architecture in depth:

*   **IBM Guide**: [What is three-tier architecture?](https://www.ibm.com/topics/three-tier-architecture) - A comprehensive breakdown of the tiers and their benefits.
*   **Baeldung**: [Spring Boot Architecture Best Practices](https://www.baeldung.com/spring-boot-architecture) - A technical guide on how Spring Boot fits into N-tier patterns.
*   **Microsoft Azure Docs**: [N-tier architecture style](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) - Explains the structural benefits of separating concerns into tiers.
*   **GeeksforGeeks**: [3-Tier Architecture in Java](https://www.geeksforgeeks.org/3-tier-architecture-in-java/) - A specific look at implementing this pattern in Java-based systems.

---

## 🚀 How to Run the Project (Step-by-Step)

If you have cloned this repository, follow these steps to get it running on your local machine.

### 1. Prerequisites
Ensure you have the following installed:
*   **Java Development Kit (JDK) 17**
*   **Apache Maven**
*   **A Web Browser** (Chrome, Firefox, Edge, etc.)

### 2. Clone and Build
Open your terminal/command prompt and run:
```bash
# Clone the repository
git clone <repository-url>

# Navigate into the project directory
cd "1_Design_a_3-tier_enterprise_application_architecture for a given_system"

# Build the project using Maven
mvn clean install
```

### 3. Run the Application
Start the Spring Boot server using given command (or else you can do the same using VS code GUI or IntelliJ GUI):
```bash
mvn spring-boot:run
```

### 4. Using the System
Once the application starts (usually in about 5-10 seconds), you can use it as follows:

#### **A. Web Interface (The UI)**
Open your browser and navigate to:
**[http://localhost:8080](http://localhost:8080)**
*   Use the form to **Register Students**.
*   View the **Student List** which updates in real-time.
*   Use the **Delete** button to remove records.

#### **B. H2 Database Console (Behind the Scenes)**
To see the actual database tables:
1.  Go to: **[http://localhost:8080/h2-console](http://localhost:8080/h2-console)**
2.  Use these settings:
    *   **JDBC URL**: `jdbc:h2:mem:testdb`
    *   **User Name**: `user`
    *   **Password**: `12345678`
3.  Click **Connect** to run SQL queries like `SELECT * FROM STUDENTS;`.

#### **C. API Endpoints (For Developers)**
You can test the backend directly using tools like Postman:
*   `GET /api/students` - Retrieve all students.
*   `POST /api/students` - Add a student (JSON body).
*   `DELETE /api/students/{id}` - Remove a student by ID.

---

## 📁 Project Structure (Quick Links)
- **Frontend**: [index.html](./src/main/resources/static/index.html), [script.js](./src/main/resources/static/script.js)
- **Controller Layer**: [StudentController.java](./src/main/java/com/example/demo/controller/StudentController.java)
- **Service Layer**: [StudentService.java](./src/main/java/com/example/demo/service/StudentService.java)
- **Repository Layer**: [StudentRepository.java](./src/main/java/com/example/demo/repository/StudentRepository.java)
- **Entity/Model**: [Student.java](./src/main/java/com/example/demo/model/Student.java)
- **Configuration**: [application.properties](./src/main/resources/application.properties), [pom.xml](./pom.xml)
