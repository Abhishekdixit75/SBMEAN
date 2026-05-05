const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

// Middleware: logs method and URL for every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route: home
app.get("/", (req, res) => {
  res.send("Welcome to Express.js App");
});

// Route: get user
app.get("/user", (req, res) => {
  res.json({ id: 1, name: "Asha", course: "Web Development" });
});

// Route: create user
app.post("/user", (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: "User created successfully",
    data: user
  });
});

// Middleware for not found routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
