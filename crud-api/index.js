require("dotenv").config();
const express = require("express");
const app = express();
const productRoute = require("./routes/product.routes");
const connectToDatabase = require("./lib");

const PORT = process.env.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  connectToDatabase();
});
