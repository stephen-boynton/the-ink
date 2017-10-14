const bcrypt = require("bcrypt");
const {
  schemaAuthor,
  schemaComment,
  schemaPost,
  schemaTag
} = require("./Model");

function genPass(pass) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(pass, salt, (err, hash) => {
      return hash;
    });
  });
}

function createAuthor(author) {
  const cryptPass = genPass(author.pass);
  schemaAuthor
    .insert({
      name: author.name,
      username: author.username,
      pass: cryptPass,
      avatar: author.avatar,
      bio: author.bio
    })
    .then(author => {
      console.log("Success");
    });
}

module.exports = {
  createAuthor
};
