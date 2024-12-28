const jwt = require("jsonwebtoken");
const User = require("../model/user");

const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    if(!token){
        throw new Error("Invalid Token ! please login Again !!!" )
      }

    const decodedObj = await jwt.verify(token, "DevTinder$07");

    const { _id } = decodedObj;

    const user = await User.findById({ _id });

    if (!user) {
      throw new Error("user not found!!");
    }

    req.user = user;
    next();

    
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = userAuth;
