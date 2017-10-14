const { Author, Comment, Tag, Post } = require("./Model");

function getAllPosts() {
  Post.query().then(posts => {
    console.log(posts);
  });
}

module.exports = {
  getAllPosts
};
