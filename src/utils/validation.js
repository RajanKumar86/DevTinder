const validator = require("validator");

const validateSignUpdata = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not valid!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("email is not valid!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("please enter a strong password !");
  }
};

const validateProfileData = (req) => {
  const data = req.body;
  const allowedEditFields = ["lastName", "age", "gender", "about", "skills"];
  const isEditAllowed = Object.keys(data).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};

module.exports = { validateSignUpdata, validateProfileData };
