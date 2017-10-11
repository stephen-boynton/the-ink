const sqlite3 = require("sqlite3");
const Promise = require("bluebird");
const objection = require("objection");
const Model = objection.Model;
const Knex = require("knex");

const knex = Knex({
  client: "sqlite3",
  connection: {
    filename: __dirname + "/db/blog.db"
  }
});

console.log(knex.client);

Model.knex(knex);

const schemaAuthor = knex.schema.createTableIfNotExists("Author", table => {
  table.increments("author_id").primary();
  table.string("name");
  table.string("avatar");
  table.text("bio");
  table.timestamp("date_created").defaultTo(knex.fn.now());
});

const schemaPost = knex.schema.createTableIfNotExists("Post", table => {
  table.increments("post_id").primary();
  table.string("title");
  table.string("image");
  table.text("body");
  table.timestamp();
  table
    .integer("author_id")
    .references("author_id")
    .inTable("Author");
});

const schemaTag = knex.schema.createTableIfNotExists("Tag", table => {
  table.increments("tag_id").primary();
  table.string("tag");
  table
    .integer("post_id")
    .references("post_id")
    .inTable("Post");
});

const schemaComment = knex.schema.createTableIfNotExists("Comment", table => {
  table.increments("comment_id").primary();
  table.text("comment");
  table
    .integer("post_id")
    .references("post_id")
    .inTable("Post");
  table
    .integer("author_id")
    .references("author_id")
    .inTable("Author");
});

// Author model.
class Author extends Model {
  static get tableName() {
    return "Author";
  }
}

class Post extends Model {
  static get tableName() {
    return "Post";
  }
  static get relationMappings() {
    return {
      postAuthor: {
        relation: Model.HasManyRelation,
        modelClass: Author,
        join: {
          from: "Post.author_id",
          to: "Author.author_id"
        }
      }
    };
  }
}

class Tag extends Model {
  static get tableName() {
    return "Tag";
  }
  static get relationMappings() {
    return {
      tagPost: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: "Tag.post_id",
          to: "Post.post_id"
        }
      }
    };
  }
}

class Comment extends Model {
  static get tableName() {
    return "Comment";
  }

  static get relationMappings() {
    return {
      commentAuthor: {
        relation: Model.HasManyRelation,
        modelClass: Author,
        join: {
          from: "Comment.author_id",
          to: "Author.author_id"
        }
      },

      commentPost: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: "Comment.post_id",
          to: "Post.post_id"
        }
      }
    };
  }
}

schemaAuthor.then(() => {
  Author.query()
    .insert({ name: "Stephen", avatar: "Stephen", bio: "Student" })
    .then(person => {
      console.log("created author " + person);
    });
});

// movies: {
// 	relation: Model.ManyToManyRelation,
// 	modelClass: Movie,
// 	join: {
// 		from: 'Person.id',
// 		// ManyToMany relation needs the `through` object
// 		// to describe the join table.
// 		through: {
// 			// If you have a model class for the join table
// 			// you need to specify it like this:
// 			// modelClass: PersonMovie,
// 			from: 'Person_Movie.personId',
// 			to: 'Person_Movie.movieId'
// 		},
// 		to: 'Movie.id'
// 	}
// },

// children: {
// 	relation: Model.HasManyRelation,
// 	modelClass: Person,
// 	join: {
// 		from: 'Person.id',
// 		to: 'Person.parentId'
// 	}
// },

// parent: {
// 	relation: Model.BelongsToOneRelation,
// 	modelClass: Person,
// 	join: {
// 		from: 'Person.parentId',
// 		to: 'Person.id'
// 	}
// }

// module.exports = { getAllPosts, savePost };
