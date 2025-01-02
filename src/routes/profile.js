const express = require("express");
const profileRouter = express.Router();

const userAuth = require("../middlewares/userAuth");
const User = require("../model/user");
const { validateProfileData } = require("../utils/validation");



profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(404).send("something went wrong!!!" + err.message);
  }
});


profileRouter.patch("/profile/edit"), userAuth, async (req, res)=>{



    try{
        if(! validateProfileData){
            throw new Error( "Invalid Edit request" )
        }

        const loggedInuser = req.user;

        


       



    }catch (err) {
    res.status(404).send("something went wrong!!!" + err.message);
  }
}




module.exports = profileRouter;
