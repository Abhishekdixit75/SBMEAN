# Practical: Install and Configure IDE and Application Server for Enterprise Development

This practical focuses on setting up the core enterprise development environment required for modern Java applications using **Spring Boot**.

---

## 🎯 Aim
To install and configure the Integrated Development Environment (IDE) and application server for enterprise application development using Spring Boot.

---

## 💡 What this Practical is about
Unlike traditional Java EE development where you must install a standalone Application Server (like Tomcat, JBoss, or WebLogic) separately, **Spring Boot** uses an **Embedded Server**.

The goal of this experiment is to demonstrate that you can:
1.  **Install** the required software (JDK, IDE).
2.  **Configure** Spring Boot development tools.
3.  **Run** an enterprise application successfully using the embedded server.

---

## 🛠️ Software Requirements
| Software | Version (Recommended) |
| :--- | :--- |
| **Java JDK** | 17 or 21 |
| **IDE** | IntelliJ IDEA / Spring Tool Suite (STS) / VS Code |
| **Spring Boot** | 3.x |
| **Maven** | 3.x |

---

## 📝 Procedure

### Step 1: Install and Configure JDK
1.  Download and install **JDK 17/21**.
2.  Set the `JAVA_HOME` environment variable.
3.  Verify the installation in the terminal:
    ```bash
    java -version
    javac -version
    ```

### Step 2: Install and Configure IDE
1.  Install **IntelliJ IDEA** (Recommended), **STS**, or **VS Code**.
2.  Ensure the **Spring Boot** and **Java** plugins are installed.
3.  Set the **Project SDK** to Java 17/21 in the IDE settings.

### Step 3: Create a Spring Boot Project
1.  Use [Spring Initializr](https://start.spring.io) or the IDE's project wizard.
2.  Select **Maven** as the build tool.
3.  Add the **Spring Web** dependency.

### Step 4: Configure the Application Server
In Spring Boot, the server is embedded. You can demonstrate server configuration by changing the default port in `src/main/resources/application.properties`:
```properties
server.port=8081
```

### Step 5: Run and Verify
1.  Run the `main` method in your `Application.java` file.
2.  Check the console output for: `Tomcat started on port 8081 (http)`.
3.  Open your browser and navigate to `http://localhost:8081`.

---

## 🎓 Examination Guide: What to do if this comes in the Exam

If this practical appears in your examination, follow these steps to secure full marks:

1.  **Objective**: State the aim clearly—emphasize that you are setting up an environment for *enterprise* development.
2.  **Demonstrate Configuration**: Show the examiner your `application.properties` file with the `server.port` setting. This proves you know how to configure the server.
3.  **Create a Simple Endpoint**: Don't just run an empty project. Create a small controller to show a "Running" message:
    ```java
    @RestController
    public class HelloController {
        @GetMapping("/")
        public String hello() {
            return "Spring Boot Server is Running Successfully!";
        }
    }
    ```
4.  **Mention Embedded Tomcat**: Explicitly mention in your write-up and to the examiner: *"External application server installation is optional because Spring Boot provides an embedded Tomcat server."* This shows deep understanding.

---

## 🗣️ Viva Questions & Answers

**Q1. What is an IDE?**
> An Integrated Development Environment used for coding, debugging, and running applications in one place.

**Q2. Which application server does Spring Boot use by default?**
> It uses an **Embedded Apache Tomcat** server.

**Q3. Why is an embedded server useful?**
> It eliminates the need for a separate server installation, makes the application "portable" as a JAR, and simplifies the deployment process.

**Q4. What is Spring Initializr?**
> A web-based tool used to bootstrap the structure and dependencies of a Spring Boot project.

---

## 🏗️ Architecture Diagram
```text
IDE (IntelliJ/STS) 
       ↓
Spring Boot Application
       ↓
Embedded Tomcat Server (Application Server)
       ↓
Browser Client (Verify Output)
```
