// Registration Form Logic
const regForm = document.getElementById("registrationForm");
if (regForm) {
    regForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const userData = { name, email };

        // AJAX POST method using Fetch API
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => {
            if (response.ok) {
                // Get existing data from local storage
                let users = JSON.parse(localStorage.getItem("users")) || [];
                // Push new data to array
                users.push(userData);
                // Save back to local storage
                localStorage.setItem("users", JSON.stringify(users));

                alert("Data saved successfully!");
            }
        })
        .catch((error) => console.error("Error:", error));
    });
}

// List Page Logic
const tableBody = document.getElementById("userTableBody");
if (tableBody) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach((user) => {
        const row = `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
        tableBody.innerHTML += row;
    });
}
