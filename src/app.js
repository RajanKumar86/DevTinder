const express = require("express");

const connectDB = require("./config/database");

const app = express();
const PORT = 5000;

connectDB()
  .then(() => {
    console.log("Database is connected...");
    app.listen(PORT, () => {
      console.log("server is started at the port", PORT);
    });
  })
  .catch((err) => {
    console.log("error! Database is not connected...");
  });
