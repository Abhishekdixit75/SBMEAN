// About: Minimal Express app for AWS Elastic Beanstalk deployment with /health.
// Run: `npm install`, then `npm start` or `node server.js`.
// Open http://localhost:8080.

const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("AWS Deployment Success: Web app is running.");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
