const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/product.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/api/products", productRoute);

async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://saeedyussif663:33jIEnIwkRNv2wY1@cruddb.jzvajch.mongodb.net/CRUD_API?retryWrites=true&w=majority&appName=cruddb",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected!");
  } catch (error) {
    console.log("Failed to connect", error);
  }
}

connectToDatabase();
app.listen(8080);
