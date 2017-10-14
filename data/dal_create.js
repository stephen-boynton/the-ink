const bcrypt = require("bcrypt");

const {
  schemaAuthor,
  Author,
  schemaComment,
  schemaPost,
  schemaTag
} = require("./Model");

function genPass(pass) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(pass, salt, (err, hash) => {
        resolve(hash);
      });
    });
  });
}

createAuthor = async author => {
  const cryptPass = await genPass(author.pass);
  Author.query()
    .insert({
      name: author.name,
      username: author.username,
      pass: cryptPass,
      avatar:
        author.avatar ||
        "https://pixabay.com/get/e032b20b2ef41c22d2524518a33219c8b66ae3d019b9114192f1c87d/blank-profile-picture-973460_1280.png",
      bio: author.bio
    })
    .then(author => {
      console.log("Success");
    });
};

module.exports = {
  createAuthor
};
