const express = require("express");
const router = express.Router();
const { createAuthor } = require("../data");

/* GET home page. */

// router.get("/posts", async function(req, res, next) {
//   const posts = await getAllPosts();
//   console.log(posts);
//   res.send(posts);
// });

module.exports = router;
