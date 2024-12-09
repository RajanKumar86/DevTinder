const express = require("express");

const connectDB = require("./config/database");

const app = express();
const PORT = 5000;
const User = require("./config/model/model");

app.get("/", (req, res) => {
  res.send("hello from the server 05 !!!");
});
app.get("/signup", (req, res) => {
  res.send("this is Signup Page ");
});

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "virat",
    lastName: "kohli",
    emailId: "viratkohli@gmail.com",
    password: "iamvirat",
    age: 32,
    gender: "Male",
  };

  const user = new User(userObj);

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
