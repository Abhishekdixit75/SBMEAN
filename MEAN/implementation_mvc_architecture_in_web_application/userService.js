// About: Service layer that reads data from the user model.
// Run: Open index.html via a local server (ES modules required).

export default class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  fetchAllUsers() {
    return this.userModel.getAllUsers();
  }

  fetchUser(id) {
    return this.userModel.getUserById(id);
  }
}
