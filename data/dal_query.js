const { Author, Comment, Tag, Post } = require("./Model");

function getAllPosts() {
  Post.query().then(posts => {
    console.log(posts);
  });
}

function getAuthorByUserName(username) {
  return new Promise((resolve, reject) => {
    Author.query()
      .where("username", "=", username)
      .then(response => {
        resolve(response);
      });
  });
}

function getAuthorById(id) {
  return new Promise((resolve, reject) => {
    Author.query()
      .where("author_id", "=", id)
      .then(response => {
        resolve(response);
      });
  });
}

function getPostsByAuthorId(id) {
  return new Promise((resolve, reject) => {
    Post.query()
      .where("author_id", "=", id)
      .then(response => resolve(response));
  });
}

module.exports = {
  getAllPosts,
  getAuthorByUserName,
  getAuthorById,
  getPostsByAuthorId
};
