// About: Express + Mongoose CRUD API for Student records.
// Run: `npm install express mongoose`, start MongoDB, then `node implementation_crud_operations_using_mongodb_and_nodejs.js`.
// Use http://localhost:3003/api/students.

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3003;
const MONGO_URL = "mongodb://127.0.0.1:27017/esd_db";

app.use(express.json());

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error.message));

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

// CREATE
app.post("/api/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ ALL
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// READ ONE
app.get("/api/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
});

// UPDATE
app.put("/api/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
app.delete("/api/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
});

app.listen(PORT, () => {
  console.log(`CRUD server running at http://localhost:${PORT}`);
});
