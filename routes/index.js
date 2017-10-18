const express = require("express");
const router = express.Router();
const { createAuthor, getFrontPageContent } = require("../data");

/* GET home page. */

router.get("/homeview", async (req, res) => {
  const content = await getFrontPageContent();
  res.send(content);
});

module.exports = router;
