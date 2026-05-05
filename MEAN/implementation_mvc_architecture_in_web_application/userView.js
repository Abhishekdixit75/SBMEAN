// About: View renderer for user list and user detail UI.
// Run: Open index.html via a local server (ES modules required).

export default class UserView {
  constructor(outputEl) {
    this.outputEl = outputEl;
  }

  renderUserList(users) {
    const rows = users
      .map(function (user) {
        return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
      })
      .join("");

    this.outputEl.innerHTML = `
      <h2>User List</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  renderUserDetails(user) {
    if (!user) {
      this.outputEl.innerHTML = "<p>User not found.</p>";
      return;
    }

    this.outputEl.innerHTML = `
      <h2>User Details</h2>
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
  }
}
