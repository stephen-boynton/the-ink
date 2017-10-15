const jwt = require("jsonwebtoken");
const {
  getAuthorByUserName,
  getAuthorById,
  createAuthor,
  validatePass
} = require("./index");

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
    const userInfo = {
      username: dbUser[0].username,
      name: dbUser[0].name,
      avatar: dbUser[0].avatar,
      id: dbUser[0].author_id
    };
    res.json({
      token: jwt.sign(userInfo, process.env.JWT_KEY),
      user: userInfo
    });
  }
};

exports.reauth_token = async (req, res, next) => {
  const token = req.body.token;
  const reauthUser = await jwt.verify(
    token,
    process.env.JWT_KEY,
    (err, user) => {
      if (err) throw err;
      return user;
    }
  );
  const returnUser = await getAuthorById(reauthUser.id);
  console.log(returnUser[0].username);
  res.json({ user: returnUser[0], token: token });
};

exports.loginRequired = function(req, res) {};
