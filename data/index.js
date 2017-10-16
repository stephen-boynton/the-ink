const {
  createAuthor,
  createPost,
  createTags,
  createComment,
  validatePass
} = require("./dal_create");
const {
  getAllPosts,
  getAuthorByUserName,
  getAuthorById,
  getPostsByAuthorId,
  getPostByPostId,
  getAllCommentsByPostId
} = require("./dal_query");

module.exports = {
  createAuthor,
  createPost,
  createComment,
  createTags,
  validatePass,
  getAllPosts,
  getAuthorByUserName,
  getAuthorById,
  getPostsByAuthorId,
  getPostByPostId,
  getAllCommentsByPostId
};
