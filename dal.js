const sqlite3 = require("sqlite3");

const db = new sqlite3.Database(
	__dirname + "/db/blog.db",
	sqlite3.OPEN_READWRITE,
	err => {
		if (err) {
			console.log("Uhoh");
			console.error(err.message);
		} else {
			console.log("Connected to Blog Database.");
		}
	}
);

function getAllPosts() {
	return new Promise((resolve, reject) => {
		const sql = `SELECT * FROM Post`;
		db.all(sql, [], (err, row) => {
			if (err) console.log(err);
			resolve(row);
		});
	});
}

function savePost (post) {
	return new Promise((resolve, reject) => {
		const fileSQL = `INSERT INTO Post(title, body, image, author_id)
    VALUES ("${post.title}", "${post.body}", "${post.image}", 1)`;
		console.log(fileSQL);
		db.run(fileSQL, function(err) {
			if (err) {
				return console.error(err.message);
			}
			console.log(`Rows inserted ${this.changes}`);
			resolve("file added");
		});
	});
}

module.exports = { getAllPosts, savePost };
