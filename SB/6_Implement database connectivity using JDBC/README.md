# JDBC CRUD Application

A simple Java application to perform CRUD (Create, Read, Update, Delete) operations on a MySQL database using JDBC.

## Prerequisites

1.  **Java Development Kit (JDK)**: Ensure you have JDK installed.
2.  **MySQL Server**: Ensure MySQL is installed and running.
3.  **MySQL JDBC Driver**: The JAR file `mysql-connector-j-9.7.0.jar` is included in this directory.

## Database Setup

1.  Open your MySQL terminal or a tool like MySQL Workbench.
2.  Create the database:
    ```sql
    CREATE DATABASE jdbcexample;
    USE jdbcexample;
    ```
3.  Create the `student` table:
    ```sql
    CREATE TABLE student (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        age INT,
        marks DOUBLE
    );
    ```

## Configuration

In `JdbcCRUD.java`, ensure the following constants match your MySQL setup:

- `url`: `jdbc:mysql://localhost:3306/jdbcexample`
- `user`: Your MySQL username (default is `root`)
- `password`: Your MySQL password (currently set to `MYsql@123`)

## How to Run

### 1. Compile the Code

Open your terminal or command prompt in the project directory and run:

```bash
javac JdbcCRUD.java
```

### 2. Run the Code

To run the application, you need to include the MySQL JDBC driver in the classpath. Use the following command:

**Windows (PowerShell/CMD):**
```bash
java -cp ".;mysql-connector-j-9.7.0.jar" JdbcCRUD
```

**Linux/Mac:**
```bash
java -cp ".:mysql-connector-j-9.7.0.jar" JdbcCRUD
```

## Features

- **Insert**: Add a new student record.
- **View**: List all students in the database.
- **Update**: Update marks for a specific student using their ID.
- **Delete**: Remove a student record using their ID.
- **Exit**: Close the application.

## Troubleshooting

- **ClassNotFoundException**: Ensure the `mysql-connector-j-9.7.0.jar` file is in the same directory as your `.java` file and you are using the correct `-cp` (classpath) syntax.
- **SQLException (Access denied)**: Check your MySQL username and password in the `JdbcCRUD.java` file.
- **Communications link failure**: Ensure your MySQL server is running on `localhost:3306`.
