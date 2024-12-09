const express = require("express");

const connectDB = require("./config/database");

const app = express();
const PORT = 5000;
const User = require("./model/model");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from the server 05 !!!");
});
app.get("/signup", (req, res) => {
  res.send("this is Signup Page ");
});

app.post("/signup", async (req, res) => {

  console.log(req.body)
  const user = new User(req.body);

  try {
    await user.save();
    res.send("user added succesfully...");
  } catch (err) {
    res.status(400).send("something went wrong" + err.message);
  }
});

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
