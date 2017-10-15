var express = require("express");
var router = express.Router();
const {
  register,
  sign_in,
  loginRequired,
  reauth_token
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

module.exports = router;
