const { getAll } = require("./getAll.js");
const { getContactById } = require("./getContactById.js");
const { addContact } = require("./addContact.js");
const { updateById } = require("./updateById.js");
const { updateFavorite } = require("./updateFavorite.js");
const { deleteById } = require("./deleteById.js");

module.exports = {
  getAll,
  getContactById,
  addContact,
  updateById,
  updateFavorite,
  deleteById,
};
