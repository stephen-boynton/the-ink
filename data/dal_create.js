const bcrypt = require("bcrypt-nodejs");

const { Author, Post, Tag, Comment } = require("./Model");

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
    .then(author);
};

createPost = async (post, author_id) => {
  return new Promise((resolve, reject) => {
    Post.query()
      .insert({
        title: post.title,
        image: post.image,
        body: post.body,
        author_id: author_id
      })
      .then(post => {
        resolve(post);
      });
  });
};

createComment = async commentObject => {
  return new Promise((resolve, reject) => {
    Comment.query()
      .insert({
        title: commentObject.title,
        comment: commentObject.comment,
        author_id: commentObject.author_id,
        post_id: commentObject.post_id
      })
      .then(comment => {
        resolve(comment);
      });
  });
};

createTags = async (tagString, postNo) => {
  return new Promise((resolve, reject) => {
    if (tagString.indexOf(",") > -1) {
      const tagsArray = tagString.split(", ");
      tagsArray.forEach(tag => {
        Tag.query()
          .insert({
            tag: tag,
            post_id: postNo
          })
          .then(result);
      });
    } else if (tagString.length === 0) {
      return;
    } else {
      Tag.query()
        .insert({
          tag: tagString,
          post_id: postNo
        })
        .then(resolv());
    }
  });
};

module.exports = {
  createAuthor,
  validatePass,
  createPost,
  createTags,
  createComment
};
