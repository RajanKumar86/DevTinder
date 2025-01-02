const express = require("express");
const authRouter = express.Router();
const { validateSignUpdata } = require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../model/user");

authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpdata(req);
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("user added succesfully...");
  } catch (err) {
    res.status(400).send("something went wrong !!" + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await user.valdiatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();
      res.cookie("token", token);
      res.send("Login sucessfull !! ");
    }
  } catch (err) {
    res.status(404).send("ERROR : " + err.message);
  }
});

authRouter.post("/logOut", async (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logged Out suceesfully !");
});

module.exports = authRouter;
