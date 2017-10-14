const { createAuthor } = require("./dal_create");
const { getAllPosts } = require("./dal_query");

module.exports = {
  createAuthor,
  getAllPosts
};
