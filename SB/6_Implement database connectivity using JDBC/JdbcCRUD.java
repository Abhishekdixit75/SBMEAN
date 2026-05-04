import java.sql.*;
import java.util.Scanner;

public class JdbcCRUD {

    private static final String url = "jdbc:mysql://localhost:3306/jdbcexample";
    private static final String user = "root";
    private static final String password = "MYsql@123";

    // 🔹 CREATE (INSERT)
    public static void insertStudent(Connection conn, Scanner sc) throws SQLException {
        String query = "INSERT INTO student (name, age, marks) VALUES (?, ?, ?)";
        PreparedStatement ps = conn.prepareStatement(query);

        System.out.print("Enter name: ");
        String name = sc.nextLine();

        System.out.print("Enter age: ");
        int age = sc.nextInt();

        System.out.print("Enter marks: ");
        double marks = sc.nextDouble();
        sc.nextLine(); // clear buffer

        ps.setString(1, name);
        ps.setInt(2, age);
        ps.setDouble(3, marks);

        int rows = ps.executeUpdate();

        System.out.println(rows > 0 ? " Student Inserted" : " Insert Failed");
    }

    // 🔹 READ (SELECT)
    public static void viewStudents(Connection conn) throws SQLException {
        String query = "SELECT * FROM student";
        PreparedStatement ps = conn.prepareStatement(query);
        ResultSet rs = ps.executeQuery();

        System.out.println("\n--- Student Records ---");
        while (rs.next()) {
            System.out.println(
                    rs.getInt("ID") + " | " +
                            rs.getString("name") + " | " +
                            rs.getInt("age") + " | " +
                            rs.getDouble("marks")
            );
        }
    }

    // 🔹 UPDATE
    public static void updateStudent(Connection conn, Scanner sc) throws SQLException {
        String query = "UPDATE student SET marks = ? WHERE ID = ?";
        PreparedStatement ps = conn.prepareStatement(query);

        System.out.print("Enter student ID: ");
        int id = sc.nextInt();

        System.out.print("Enter new marks: ");
        double marks = sc.nextDouble();
        sc.nextLine();

        ps.setDouble(1, marks);
        ps.setInt(2, id);

        int rows = ps.executeUpdate();

        System.out.println(rows > 0 ? " Updated Successfully" : "Update Failed");
    }

    // 🔹 DELETE
    public static void deleteStudent(Connection conn, Scanner sc) throws SQLException {
        String query = "DELETE FROM student WHERE ID = ?";
        PreparedStatement ps = conn.prepareStatement(query);

        System.out.print("Enter student ID to delete: ");
        int id = sc.nextInt();
        sc.nextLine();

        ps.setInt(1, id);

        int rows = ps.executeUpdate();

        System.out.println(rows > 0 ? " Deleted Successfully" : " Delete Failed");
    }

    //  MAIN METHOD
    public static void main(String[] args) {

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Scanner sc = new Scanner(System.in)) {

            while (true) {
                System.out.println("\n===== MENU =====");
                System.out.println("1. Insert");
                System.out.println("2. View");
                System.out.println("3. Update");
                System.out.println("4. Delete");
                System.out.println("5. Exit");
                System.out.print("Enter choice: ");

                int choice = sc.nextInt();
                sc.nextLine(); // clear buffer

                switch (choice) {
                    case 1 -> insertStudent(conn, sc);
                    case 2 -> viewStudents(conn);
                    case 3 -> updateStudent(conn, sc);
                    case 4 -> deleteStudent(conn, sc);
                    case 5 -> {
                        System.out.println("Exiting...");
                        return;
                    }
                    default -> System.out.println("Invalid choice!");
                }
            }

        } catch (SQLException e) {
            System.out.println("Database Error: " + e.getMessage());
        }
    }
}