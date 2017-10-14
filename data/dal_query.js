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

module.exports = {
  getAllPosts,
  getAuthorByUserName
};
