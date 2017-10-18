const { Author, Comment, Tag, Post } = require("./Model");

function getAllPosts() {
  Post.query().then(posts);
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

function getPostByPostId(id) {
  return new Promise((resolve, reject) => {
    Post.query()
      .where("post_id", "=", id)
      .then(response => {
        resolve(response);
      });
  });
}

function getAllCommentsByPostId(postId) {
  return new Promise((resolve, reject) => {
    Comment.query()
      .select(
        "Comment.*",
        "Author.author_id",
        "Author.username",
        "Author.avatar"
      )
      .join("Author", "Author.author_id", "Comment.author_id")
      .where("Comment.post_id", "=", postId)
      .then(response => {
        resolve(response);
      });
  });
}

function getFeaturedArticle() {
  return new Promise((resolve, reject) => {
    Post.query()
      .select("Post.*", "Author.name", "Author.username")
      .where("featured", "=", 1)
      .join("Author", "Author.author_id", "Post.author_id")
      .then(featured => {
        resolve(featured);
      });
  });
}

function getFeaturedComments() {
  return new Promise((resolve, reject) => {
    Comment.query()
      .select("Comment.*", "Author.username", "Author.avatar")
      .where("featured", "=", "1")
      .join("Author", "Author.author_id", "Comment.author_id")
      .then(featured => {
        resolve(featured);
      });
  });
}
function getLastArticle() {
  return new Promise((resolve, reject) => {
    Post.query()
      .orderBy("post_id", "desc")
      .limit(1)
      .then(latest => {
        resolve(latest);
      });
  });
}

function getLatestArticles() {
  return new Promise((resolve, reject) => {
    Post.query()
      .orderBy("post_id", "desc")
      .limit(9)
      .then(latest => {
        latest.shift();
        resolve(latest);
      });
  });
}

async function getFrontPageContent() {
  const recent = await getLatestArticles();
  const last = await getLatestArticles();
  const featuredCom = await getFeaturedComments();
  const featuredArt = await getFeaturedArticle();
  return {
    last,
    recent,
    featuredCom,
    featuredArt
  };
}

module.exports = {
  getAllPosts,
  getAuthorByUserName,
  getAuthorById,
  getPostsByAuthorId,
  getPostByPostId,
  getAllCommentsByPostId,
  getFrontPageContent
};
