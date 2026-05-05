# Spring Security Authentication & Authorization (JWT)

This project is a Spring Boot application demonstrating the implementation of **Authentication** and **Authorization** using **Spring Security** and **JSON Web Tokens (JWT)**. It provides a secure RESTful API with role-based access control.

## 🚀 Features

- **User Registration**: Create a new user with a specific role (`USER` or `ADMIN`).
- **User Login**: Authenticate user credentials and receive a JWT token.
- **JWT Authentication**: Stateless authentication using tokens for subsequent requests.
- **Role-Based Authorization**:
  - `/user/**`: Accessible only by users with the `USER` role.
  - `/admin/**`: Accessible only by users with the `ADMIN` role.
- **H2 In-Memory Database**: For quick testing and development.
- **Password Encoding**: Uses `BCryptPasswordEncoder` for secure storage.

## 🛠️ Technology Stack

- **Java 17+**
- **Spring Boot 3.x**
- **Spring Security**
- **Spring Data JPA**
- **jjwt (JSON Web Token Library)**
- **H2 Database**
- **Maven**

## 🏃 How to Run

### Prerequisites
- JDK 17 or higher
- Maven installed (or use the provided `mvnw`)

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Spring_Security_Authorization_Authenication
   ```

2. **Build the project**:
   ```bash
   ./mvnw clean install
   ```

3. **Run the application**:
   ```bash
   ./mvnw spring-boot:run
   ```
   The application will start on `http://localhost:8080`.

## 🔌 API Endpoints

### 1. Public Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/register` | Register a new user. |
| `POST` | `/login` | Login and get JWT token. |

### 2. Protected Endpoints
| Method | Endpoint | Required Role | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/user/home` | `USER` | Access user-specific home page. |
| `GET` | `/admin/home` | `ADMIN` | Access admin-specific home page. |

---

## 📝 Usage Examples

### Register a User
**Request:**
`POST http://localhost:8080/register`
```json
{
    "username": "john_doe",
    "password": "password123",
    "role": "USER"
}
```

### Login
**Request:**
`POST http://localhost:8080/login`
```json
{
    "username": "john_doe",
    "password": "password123"
}
```
**Response:** (JWT Token)
`eyJhbGciOiJIUzI1NiJ9...`

### Access Protected Resource
Add the token to the `Authorization` header as a Bearer token:
`Authorization: Bearer <your_token_here>`

---

## 🔍 Database Console
You can access the H2 console at `http://localhost:8080/h2-console`.
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **User**: `sa`
- **Password**: (blank)

## 🔒 Security Flow
1. User registers with a username, password, and role.
2. User logs in; the application validates credentials and returns a JWT.
3. For protected requests, the user includes the JWT in the `Authorization` header.
4. `JwtFilter` intercepts the request, validates the token, and sets the security context.
5. Spring Security checks if the authenticated user has the required role for the endpoint.
