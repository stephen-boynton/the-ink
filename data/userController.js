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
exports.sign_in = async (req, res, next) => {
  console.log(req.body);
  const credentials = req.body;
  console.log("these are cred " + credentials);
  const dbUser = await getAuthorByUserName(credentials.username);
  console.log(dbUser);
  const isValid = await validatePass(dbUser[0].pass, credentials.pass);
  console.log(isValid);
  if (isValid === true) {
    res.json({
      token: jwt.sign(
        {
          username: dbUser.username,
          name: dbUser.name,
          avatar: dbUser.avatar,
          id: dbUser.id
        },
        process.env.JWT_KEY
      )
    });
  }
};
exports.loginRequired = function(req, res) {};
