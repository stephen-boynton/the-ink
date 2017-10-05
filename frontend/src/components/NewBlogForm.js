import React, { Component } from "react";

export default class NewBlogForm extends Component {
	render() {
		return (
			<form className="blogPost">
				<h2>New Blog Post</h2>
				<hr />
				<input type="text" ref="title" placeholder="Blog Title" />
				<input type="text" ref="image" placeholder="Main Image URL" />
				<textarea ref="body" rows="8" placeholder="What are your thoughts?" />
				<input type="text" ref="tags" placeholder="select, tags, here..." />
				<button type="submit">Submit</button>
			</form>
		);
	}
}
