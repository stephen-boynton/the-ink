const jwt = require("jsonwebtoken");
const { getAuthorByUserName, createAuthor, validatePass } = require("./index");

exports.register = async (req, res, next) => {
  const isExisting = await getAuthorByUserName(req.body.username);
  if (!isExisting.length) {
    await createAuthor(req.body);
    console.log(req.body);
    next();
  } else {
    res.send(false);
  }
};
exports.sign_in = function(req, res, next) {
  const credentials = req.body;
};
exports.loginRequired = function(req, res) {};
