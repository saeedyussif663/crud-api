const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.uri);
    console.log("Connected!");
  } catch (error) {
    console.log("Failed to connect", error);
  }
}

module.exports = connectToDatabase;
