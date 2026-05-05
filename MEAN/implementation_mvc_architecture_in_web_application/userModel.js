// About: In-memory user data model for the MVC demo.
// Run: Open index.html via a local server (ES modules required).

export default class UserModel {
  constructor() {
    this.users = [
      { id: 1, name: "Asha", email: "asha@example.com" },
      { id: 2, name: "Ravi", email: "ravi@example.com" },
    ];
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find(function (user) {
      return user.id === id;
    });
  }
}
