// About: Express REST API with in-memory users and CRUD endpoints.
// Run: `npm install express`, then `node implementation_rest_api_using_expressjs.js`.
// Endpoints are under http://localhost:3002/api/users.

const express = require("express");

const app = express();
const PORT = 3002;

app.use(express.json());

let users = [
  { id: 1, name: "Asha", email: "asha@example.com" },
  { id: 2, name: "Ravi", email: "ravi@example.com" },
];

// GET all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET user by id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// POST create user
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name;
  user.email = email;
  res.json(user);
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`REST API server running at http://localhost:${PORT}`);
});
