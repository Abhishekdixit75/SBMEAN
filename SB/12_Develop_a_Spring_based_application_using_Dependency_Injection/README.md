# Dependency Injection in Spring

This practical explores the core concept of **Dependency Injection (DI)** and **Inversion of Control (IoC)** by demonstrating the three primary injection techniques within a single enterprise application.

---

## 🏗️ What is Dependency Injection?

Dependency Injection is a design pattern where an object's dependencies are provided by the Spring Container rather than being created manually using the `new` keyword.

### Comparison of DI Techniques
| Technique | Method | Recommended? | Practical Example in Project 1 |
| :--- | :--- | :--- | :--- |
| **Constructor Injection** | Via Constructor | ✅ **Best** | `StudentService` ← `StudentRepository` |
| **Setter Injection** | Via Setter Method | ⚠️ **Sometimes** | `StudentService` ← `MockEmailService` |
| **Field Injection** | Direct @Autowired | ⚠️ **Beginner** | `StudentController` ← `StudentService` |

---

## 💉 Live Examples from Project 1

We have implemented all three techniques in the **[1_Design_a_3-tier_enterprise_application_architecture_for_a_given_system](https://github.com/Abhishekdixit75/SBMEAN/tree/main/SB/1_Design_a_3-tier_enterprise_application_architecture%20for%20a%20given_system)** folder:

### 1. Constructor Injection ✅ (Preferred)
In **[StudentService.java](./../1_Design_a_3-tier_enterprise_application_architecture%20for%20a%20given_system/src/main/java/com/example/demo/service/StudentService.java)**:
The `StudentRepository` is injected through the constructor. This ensures that the service is always initialized with its required dependencies and allows the dependency to be `final`.

### 2. Setter Injection
In **[StudentService.java](./../1_Design_a_3-tier_enterprise_application_architecture%20for%20a%20given_system/src/main/java/com/example/demo/service/StudentService.java)**:
The `MockEmailService` is injected using the `setEmailService()` method. This is useful for optional dependencies that might not be required for the primary function of the class.

### 3. Field Injection
In **[StudentController.java](./../1_Design_a_3-tier_enterprise_application_architecture%20for%20a%20given_system/src/main/java/com/example/demo/controller/StudentController.java)**:
The `StudentService` is injected directly into the private field using `@Autowired`. While simple, this is the least recommended method for production code because it makes unit testing without Spring more difficult.

---

## 🔗 Why use these techniques?
Using these DI patterns allows our enterprise application to be **loosely coupled**. We can easily swap implementations or mock dependencies during testing without changing the core business logic.
