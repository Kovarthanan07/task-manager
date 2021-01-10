const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email ... ");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age cannt be less than zero ...");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value === "password" || value.length < 6) {
        throw new Error("Invalid password ... ");
      }
    },
  },
});

module.exports = User;
