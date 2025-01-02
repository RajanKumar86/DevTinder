const express = require("express");
const requestRouter =express.Router();

const userAuth = require("../middlewares/userAuth");

requestRouter.get("/connectionRequest", userAuth, async (req, res) => {
    try {
      const user = req.user;
  
      console.log("sending a connection request ! ");
  
      res.send(user.firstName + " is sending the connection request!! ");
    } catch (err) {
      res.status(404).send("something went wrong!!!" + err.message);
    }
  });

module.exports = requestRouter;