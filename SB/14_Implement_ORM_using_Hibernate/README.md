# Object-Relational Mapping (ORM) using Hibernate

This practical demonstrates the concept of **ORM** and how **Hibernate** is used in a Spring Boot application to bridge the gap between Java objects and relational database tables.

---

## 🏗️ What is ORM?

Object-Relational Mapping (ORM) is a programming technique for converting data between incompatible type systems in object-oriented programming languages and relational databases.

### Key Benefits:
*   **Abstraction**: You work with Java objects instead of SQL queries.
*   **Productivity**: Automates the "boilerplate" code for database operations.
*   **Portability**: Allows switching between different databases (MySQL, H2, PostgreSQL) with minimal code changes.

---

## 🍃 Hibernate in Spring Boot

**Hibernate** is the most popular implementation of the **JPA (Java Persistence API)**. Spring Boot uses Hibernate as its default ORM provider via the `spring-boot-starter-data-jpa` dependency.

### Core Annotations:
1.  **@Entity**: Marks a Java class as a persistent data entity.
2.  **@Table**: Specifies the name of the database table to be used for mapping.
3.  **@Id**: Specifies the primary key of the entity.
4.  **@GeneratedValue**: Provides the strategy for generating primary key values.

---

## 🔗 Implementation in this Project

The implementation of ORM using Hibernate is fully demonstrated in the main project:

**[1_Design_a_3-tier_enterprise_application_architecture_for_a_given_system](https://github.com/Abhishekdixit75/SBMEAN/tree/main/SB/1_Design_a_3-tier_enterprise_application_architecture%20for%20a%20given_system)**

### Specific Examples:
*   **The Entity**: **[Student.java](./../1_Design_a_3-tier_enterprise_application_architecture%20for%20a%20given_system/src/main/java/com/example/demo/model/Student.java)**
    *   This class is annotated with `@Entity`. 
    *   Hibernate automatically creates the `STUDENTS` table in the H2 database based on this class structure.
*   **The Repository**: **[StudentRepository.java](./../1_Design_a_3-tier_enterprise_application_architecture%20for%20a%20given_system/src/main/java/com/example/demo/repository/StudentRepository.java)**
    *   By extending `JpaRepository`, Spring Data JPA (via Hibernate) provides all CRUD methods like `save()`, `findAll()`, and `deleteById()` without writing a single line of SQL.

### Configuration:
In **[application.properties](./../1_Design_a_3-tier_enterprise_application_architecture%20for%20a%20given_system/src/main/resources/application.properties)**, we configure Hibernate to automatically update the schema:
```properties
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
The `show-sql=true` property allows you to see the actual SQL queries Hibernate generates in the console.
