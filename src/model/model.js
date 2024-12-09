const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["Male", "Female", "others"].includes(value)) {
          throw new Error("Gender Data is not correct! try again");
        }
      },
    },
    about: {
      type: String,
      default: "This is the from default...",
    },
    skills: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
