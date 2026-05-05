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
