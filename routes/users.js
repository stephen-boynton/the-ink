const express = require("express");
const router = express.Router();
const {
  getAuthorByUserName,
  getPostsByAuthorId,
  getPostByPostId,
  getAllCommentsByPostId,
  getFrontPageContent
} = require("../data");
const {
  register,
  sign_in,
  submitPostAuth,
  reauth_token,
  submitComment
} = require("../data/userController");

router.post("/signup", register, async (req, res, next) => {
  res.send({ status: "User Created" });
});

router.post("/signin", sign_in, (req, res) => {
  res.send();
});

router.post("/reauth", reauth_token, async (req, res) => {
  res.send();
});

router.post("/newpost", submitPostAuth, (req, res) => {
  res.send();
});

router.get("/:username", async (req, res) => {
  const author = await getAuthorByUserName(req.params.username);
  const authorDetails = {
    username: author[0].username,
    name: author[0].name,
    avatar: author[0].avatar,
    bio: author[0].bio,
    id: author[0].author_id
  };
  res.send(authorDetails);
});

router.get("/posts/:userId", async (req, res) => {
  const posts = await getPostsByAuthorId(req.params.userId);
  res.send(posts);
});

router.get("/user/:postId", async (req, res) => {
  const post = await getPostByPostId(req.params.postId);
  const comments = await getAllCommentsByPostId(req.params.postId);
  const postObjects = {
    post: post[0],
    comments: comments
  };
  res.send(postObjects);
});

router.post("/blogs/comment", submitComment, async (req, res) => {
  res.send();
});

module.exports = router;
