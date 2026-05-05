// About: Connects to a local MongoDB database using Mongoose.
// Run: `npm install mongoose`, ensure MongoDB is running, then `node implementation_mongodb_database_connectivity.js`.

const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/esd_db";

async function connectMongoDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

connectMongoDB();
