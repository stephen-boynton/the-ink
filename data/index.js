const {
  createAuthor,
  createPost,
  createTags,
  validatePass
} = require("./dal_create");
const {
  getAllPosts,
  getAuthorByUserName,
  getAuthorById,
  getPostsByAuthorId
} = require("./dal_query");

module.exports = {
  createAuthor,
  createPost,
  createTags,
  validatePass,
  getAllPosts,
  getAuthorByUserName,
  getAuthorById,
  getPostsByAuthorId
};
