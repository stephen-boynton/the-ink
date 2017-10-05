const express = require("express");
const router = express.Router();
const { getAllPosts } = require("../dal");

/* GET home page. */
router.get("/posts", async function(req, res, next) {
	const posts = await getAllPosts();
	console.log(posts);
	res.send(posts);
});

module.exports = router;
