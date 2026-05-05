import UserModel from "./userModel.js";
import UserService from "./userService.js";
import UserView from "./userView.js";

export default class UserController {
  constructor(outputEl, userIdInput, showAllBtn, showOneBtn) {
    const userModel = new UserModel();
    this.userService = new UserService(userModel);
    this.userView = new UserView(outputEl);
    this.userIdInput = userIdInput;
    this.showAllBtn = showAllBtn;
    this.showOneBtn = showOneBtn;
  }

  init() {
    this.showAllBtn.addEventListener("click", () => {
      this.showAllUsers();
    });

    this.showOneBtn.addEventListener("click", () => {
      const id = Number(this.userIdInput.value);
      this.showUserById(id);
    });

    this.showAllUsers();
  }

  showAllUsers() {
    const users = this.userService.fetchAllUsers();
    this.userView.renderUserList(users);
  }

  showUserById(id) {
    const user = this.userService.fetchUser(id);
    this.userView.renderUserDetails(user);
  }
}
