const { createAuthor } = require("./dal_create");
const { getAllPosts, getAuthorByUserName } = require("./dal_query");

module.exports = {
  createAuthor,
  getAllPosts,
  getAuthorByUserName
};
