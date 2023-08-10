const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegExp = /^[a-z0-9]+@[a-z]+\.[a-z]{2-3}$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 8,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegExp,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  password: Joi.string().min(8).max(16).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  subscription: Joi.string(),
});

const schemas = { registerSchema };

module.exports = {
  User,
  schemas,
};
