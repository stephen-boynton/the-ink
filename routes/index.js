const express = require("express");
const router = express.Router();
const { getAllPosts, savePost } = require("../dal");

/* GET home page. */
router.get("/posts", async function(req, res, next) {
	const posts = await getAllPosts();
	console.log(posts);
	res.send(posts);
});

router.post("/newpost", async (req, res, next) => {
	const newPost = savePost(req.body);
})

module.exports = router;
