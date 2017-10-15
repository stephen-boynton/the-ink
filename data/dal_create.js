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

function validatePass(dbPass, formPass) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(formPass, dbPass, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
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

createPost = async post => {
  Post.query()
    .insert({
      title: post.title,
      image: post.image,
      body: post.body,
      author_id: post.author_id
    })
    .then(post => {
      resolve(post.post_id);
    });
};

createTags = async (tagsString, postNo) => {
  if (tagsString.indexOf(",") > -1) {
    const tagsArray = tagsString.split(", ");
    tagsArray.forEach(tag => {
      Tag.query()
        .insert({
          tag: tag,
          post_id: postNo
        })
        .then(result => console.los("Added tag " + tag));
    });
  } else {
    Tag.query()
      .insert({
        tag: tagString,
        post_id: postNo
      })
      .then(result => console.log("Added tag " + tagString));
  }
};

module.exports = {
  createAuthor,
  validatePass,
  createPost,
  createTags
};
