const { createAuthor, validatePass } = require("./dal_create");
const {
  getAllPosts,
  getAuthorByUserName,
  getAuthorById
} = require("./dal_query");

module.exports = {
  createAuthor,
  validatePass,
  getAllPosts,
  getAuthorByUserName,
  getAuthorById
};
