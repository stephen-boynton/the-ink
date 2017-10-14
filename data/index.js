const { createAuthor, validatePass } = require("./dal_create");
const { getAllPosts, getAuthorByUserName } = require("./dal_query");

module.exports = {
  createAuthor,
  validatePass,
  getAllPosts,
  getAuthorByUserName
};
