export default class UserModel {
  constructor() {
    this.users = [
      { id: 1, name: "Asha", email: "asha@example.com" },
      { id: 2, name: "Ravi", email: "ravi@example.com" }
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
