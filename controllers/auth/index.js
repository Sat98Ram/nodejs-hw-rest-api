const { register } = require("./register.js");
const { login } = require("./login.js");
const { getCurrent } = require("./getCurrent.js");
const { logout } = require("./logout.js");
const { subscription } = require("./subscription.js");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  subscription,
};
